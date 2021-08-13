const signature = require('./assets/sig');
module.exports = function(grunt) {
  grunt.registerMultiTask('sig', ' display signature', () => {
    grunt.log.writeln(signature)
  })
}