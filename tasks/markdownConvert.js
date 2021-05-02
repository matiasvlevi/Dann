const marked = require('marked');
module.exports = function (grunt) {
  // convert .md to .html and rename to a .handlebars partial
  grunt.registerMultiTask('marked', 'Convert README to html', function () {
    let readMe = grunt.file.read(this.data.path);
    marked.defaults.langPrefix = 'rmcode ';
    let markdownReadMe = marked(readMe, marked.defaults);
    grunt.file.write(this.data.outdir, markdownReadMe);
    grunt.log.writeln(
      'Converted markdown file ' +
        this.data.path +
        ' to html at ' +
        this.data.outdir
    );
    grunt.task.run('rename:main');
  });
};
