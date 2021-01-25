module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            dist: {
                src: [
                    'src/imports/imports.js',
                    'src/dom/dom.js',
                    'src/functions/mathfuncs.js',
                    'src/functions/activations.js',
                    'src/functions/lossfuncs.js',
                    'src/functions/poolfuncs.js',
                    'src/prototypes/matrix.js',
                    'src/prototypes/layer.js',
                    'src/prototypes/dann.js',
                    'src/exports/exports.js'
                ],
                dest: 'build/dann.js'
            },
        },
        terser: {
            src: {
                files: [{
                    src: 'build/dann.js',
                    dest: 'build/dann.min.js'
                }]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-terser');
}
