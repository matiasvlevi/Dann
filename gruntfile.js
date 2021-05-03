require('@babel/register');
const reporter = require('./test/config/reporter.js');
// src files concat config
const files = require('./src/concatConfig.js');
// unit test files concat config
const unitfiles = require('./test/unit/concatConfig.js');

module.exports = (grunt) => {
  let config = {
    pkg: grunt.file.readJSON('package.json'),
    mochaTest: {
      test: {
        options: {
          reporter: reporter,
          require: '@babel/register',
          ui: 'tdd',
          parallel: false,
          slow: 100,
          timeout: 5000,
        },
        src: ['test/unit.js'],
      },
    },
    eslint: {
      options: {
        format: 'unix',
      },
      fix: {
        options: {
          rules: {
            'no-undef': 0,
            'no-unused-vars': 0,
          },
          fix: true,
        },
      },
      source: {
        options: {
          parserOptions: {
            ecmaVersion: 5,
          },
        },
        src: ['src/**/**/*.js', 'test/**/**/**/**/*.js', 'gruntfile.js'],
      },
    },
    concat: {
      build: {
        src: files,
        dest: 'build/dann.js',
      },
      unit: {
        src: unitfiles,
        dest: 'test/unit.js',
      },
    },
    terser: {
      src: {
        files: [
          {
            src: 'build/dann.js',
            dest: 'build/dann.min.js',
          },
        ],
      },
    },
    clean: {
      markdown: {
        src: [
          'docs/documentation/markdown/',
          'docs/yuidoc-dannjs-theme/partials/readme.handlebars',
        ],
      },
      documentation: {
        src: ['docs/documentation/'],
      },
      unused: {
        src: [
          'docs/documentation/elements',
          'docs/documentation/files',
          'docs/documentation/modules',
          'docs/documentation/assets/img',
          'docs/documentation/assets/css/external-small.png',
          'docs/documentation/assets/css/logo.png',
        ],
      },
    },
    yuidoc: {
      compile: {
        name: 'Dannjs',
        description: '<%= pkg.description %>',
        version: '<%= pkg.version %>',
        url: '<%= pkg.homepage %>',
        options: {
          syntaxtype: 'js',
          paths: ['src/'],
          themedir: 'docs/yuidoc-dannjs-theme/',
          helpers: [],
          outdir: 'docs/documentation/',
        },
      },
    },
    marked: {
      convert: {
        path: 'README.md',
        outdir: 'docs/documentation/markdown/README.html',
      },
    },
    rename: {
      main: {
        files: [
          {
            src: ['docs/documentation/markdown/README.html'],
            dest: 'docs/yuidoc-dannjs-theme/partials/readme.handlebars',
          },
        ],
      },
    },
    formatExamples: {
      samples: {
        path: 'docs/documentation/data.json',
        outdir: 'docs/documentation/data.json',
      },
    },
    replace: {
      index: {
        src: ['docs/documentation/*.html'],
        overwrite: true,
        replacements: [
          {
            from: /\.\.\/index\.html/gm,
            to: '/',
          },
          {
            from: /<code>/g,
            to: '<code class="rmcode">',
          },
        ],
      },
    },
  };

  config.eslint.fix.src = Object.keys(config.eslint)
    .map((s) => config.eslint[s].src)
    .reduce((a, b) => a.concat(b), [])
    .filter((a) => a);

  grunt.initConfig(config);
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-terser');
  grunt.loadNpmTasks('grunt-terser');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-yuidoc');
  grunt.loadNpmTasks('grunt-contrib-rename');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadTasks('tasks');

  grunt.registerTask('readmeCompile', ['clean:markdown', 'marked']);
  grunt.registerTask('lint-no-fix', ['eslint:source']);
  grunt.registerTask('lint-fix', ['eslint:fix']);
  grunt.registerTask('build', ['lint-no-fix', 'concat:build', 'terser']);
  grunt.registerTask('build-fix', ['lint-fix', 'concat:build', 'terser']);
  grunt.registerTask('build-unit', ['concat:unit', 'lint-fix']);
  grunt.registerTask('doc-compile', [
    'clean:documentation',
    'readmeCompile',
    'yuidoc:compile',
    'formatExamples',
    'clean:unused',
    'replace:index',
  ]);
  grunt.registerTask('test', ['build-unit', 'mochaTest:test']);
  grunt.registerTask('prod', ['build-fix', 'doc-compile', 'test']);
};
