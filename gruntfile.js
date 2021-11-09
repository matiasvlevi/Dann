require('@babel/register');
const reporter = require('./test/config/reporter.js');
// src files concat config
const files = require('./src/concatConfig.js');
// unit test files concat config
const unitfiles = require('./test/unit/concatConfig.js');
const theme = 'yuidoc-dannjs-theme';
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
    sig: {
      message: 'Author signature',
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
          'docs/' + theme + '/partials/readme.handlebars',
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
          themedir: 'docs/' + theme + '/',
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
            dest: 'docs/' + theme + '/partials/readme.handlebars',
          },
        ],
      },
    },
    sampleTest: {
      samples: {
        path: 'docs/documentation/data.json',
        outdir: 'docs/documentation/data.json',
      },
    },
    formatExamples: {
      samples: {
        path: 'docs/documentation/data.json',
        outdir: 'docs/documentation/data.json',
      },
    },
    replace: {
      addClass: {
        src: [
          'docs/documentation/index.html',
          'docs/documentation/classes/*.html',
        ],
        overwrite: true,
        replacements: [
          {
            from: /<li><a class="type" href="\.*\/classes\/Add\.html">Add<\/a><\/li>/gm,
            to: '',
          },
        ],
      },
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
      constant: {
        src: ['src/io/head.js'],
        overwrite: true,
        replacements: [
          {
            from: /VERSION = '.*'/gm,
            to: "VERSION = 'v<%= grunt.option('ver') %>'",
          },
        ],
      },
      version: {
        src: ['package.json'],
        overwrite: true,
        replacements: [
          {
            from: /"_id": "dannjs@.*"/gm,
            to: '"_id": "dannjs@<%= grunt.option("ver") %>"',
          },
          {
            from: /"version": ".*"/gm,
            to: '"version": "<%= grunt.option("ver") %>"',
          },
        ],
      },
      testversion: {
        src: ['test/manual-tests/browser/*/*.html'],
        overwrite: true,
        replacements: [
          {
            from: /<span class="project-version">.*<\/span>/gm,
            to: '<span class="project-version"><%= grunt.option("ver")%></span>',
          },
        ],
      },
      readmeversion: {
        src: ['README.md'],
        overwrite: true,
        replacements: [
          {
            from: /dann@v.*\/build/gm,
            to: 'dann@v<%= grunt.option("ver") %>/build',
          },
        ],
      },
      hljsdocs: {
        src: ['docs/documentation/classes/*.html'],
        overwrite: true,
        replacements: [
          {
            from: /\.\.\/highlight\/hljs\.min\.js/gm,
            to: '../../highlight/hljs.min.js',
          },
        ],
      },
      hljsdocsIndex: {
        src: ['docs/documentation/index.html'],
        overwrite: true,
        replacements: [
          {
            from: /\.\.\/assets\//gm,
            to: './assets/',
          },
          {
            from: /\.\.\/index\.html/gm,
            to: '/',
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
    //'replace:index',
    'replace:addClass',
    'replace:hljsdocsIndex',
    //'replace:hljsdocs',
  ]);
  grunt.registerTask('tag', [
    'replace:version',
    'replace:testversion',
    'replace:readmeversion',
    'replace:constant',
    'build-fix',
  ]);
  grunt.registerTask('test', [
    'doc-compile',
    'build-unit',
    'sampleTest:samples',
    'mochaTest:test',
  ]);
  grunt.registerTask('prod', ['build-fix', 'doc-compile', 'test']);
};
