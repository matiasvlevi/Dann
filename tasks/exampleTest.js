const symbol = require('log-symbols');
const { Dann, Matrix, Layer } = require('../build/dann.min.js');


module.exports = function(grunt) {
  grunt.registerMultiTask('sampleTest', 'Testing inline example samples',
    function() {
      let file = grunt.file.read(this.data.path);
      let data = JSON.parse(file);
      let items = data.classitems;
      let olddannlog = Dann.prototype.log;
      Dann.prototype.log = function() {
        return;
      }
      let oldmatrixlog = Matrix.prototype.log;
      Matrix.prototype.log = function() {
        return;
      }
      let oldlayerlog = Layer.prototype.log;
      Layer.prototype.log = function() {
        return;
      }
      let oldconsolelog = console.log;
      console.log = function() {
        return;
      }
      grunt.log.writeln('');
      grunt.log.writeln('Running inline example samples');
      grunt.log.writeln('');
      let successcount = 0;
      let failurecount = 0;
      for (let i = 0; i < items.length; i++) {
        if (items[i].example !== undefined) {
          for (let j = 0; j < items[i].example.length; j++) {


            if (items[i].example.length > 1) {
              index = j + 1;
            } else {
              index = '';
            }
            let code = items[i].example[j].split('<code>')[1].split('</code>')[0];
            let title = '  ' + items[i].name + ' example ' + index + '    ' + items[i].file;

            try {
              eval(code);
              grunt.log.writeln(
                '    ' +
                '\x1b[37m' +
                '[' +
                '\x1b[32m' +
                symbol.success +
                '\x1b[37m' +
                ']' +
                '\x1b[2m' +
                title +
                '\x1b[0m'
              );
              successcount++;
            } catch (err) {
              grunt.log.writeln(
                '    ' +
                '\x1b[37m' +
                '[' +
                '\x1b[31m' +
                symbol.error +
                '\x1b[37m' +
                ']' +
                '\x1b[2m' +
                title +
                '\x1b[0m'
              );
              grunt.log.writeln(
                '\x1b[37m' +
                '    ' +
                '\x1b[31m' +
                ` ^ ${err}` +
                '\x1b[0m'
              );
              grunt.log.writeln('    ' + items[i].description);
              failurecount++;
            }
          }
        }
      }
      let color = '\x1b[37m';
      if (failurecount === 0) {
        color = '\x1b[32m';
      }
      grunt.log.writeln('');
      grunt.log.writeln(
        ` Test result: ` +
        color +
        ` ${successcount}/${successcount + failurecount}` +
        '\x1b[0m' +
        ` tests passed`
      );
      Dann.prototype.log = olddannlog;
      Matrix.prototype.log = oldmatrixlog;
      Layer.prototype.log = oldlayerlog;
      console.log = oldconsolelog;
    });
};