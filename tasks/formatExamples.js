module.exports = function (grunt) {
  // Remove first line break
  function formatSample(str) {
    let components = str.split('\n');
    let fal = [components.shift(), components.join('\n')].join();
    return fal.slice(1, fal.length);
  };

  // Format code example samples for docs task
  grunt.registerMultiTask('formatExamples','Removing first line break in code examples',
  function () {
    let docdata = JSON.parse(grunt.file.read(this.data.path));
    for (let _class in docdata.classes) {
      let element = docdata.classes[_class];
      if (element.example !== undefined) {
        for (let j = 0; j < element.example.length; j++) {
          let str = element.example[j];
          element.example[j] = formatSample(str);
          grunt.log.writeln('formatted class example: ' + element.name);
        }
      }
    }
    for (let i = 0; i < docdata.classitems.length; i++) {
      if (docdata.classitems[i].example !== undefined) {
        for (let j = 0; j < docdata.classitems[i].example.length; j++) {
          let str = docdata.classitems[i].example[j];
          docdata.classitems[i].example[j] = formatSample(str);
          grunt.log.writeln(
            'formatted method example: ' + docdata.classitems[i].name
          );
        }
      }
    }
    grunt.file.write(this.data.outdir, JSON.stringify(docdata));
  });
};
