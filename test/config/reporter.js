'use strict';

const symbol = require('log-symbols');
const Mocha = require('mocha');
const {
  EVENT_RUN_BEGIN,
  EVENT_RUN_END,
  EVENT_TEST_FAIL,
  EVENT_TEST_PASS,
  EVENT_SUITE_BEGIN,
  EVENT_SUITE_END,
} = Mocha.Runner.constants;

function msdisplay(test) {
  let time = test.duration;
  let duration = '';
  if (time >= test._slow / 4 && time < test._slow) {
    duration = '\x1b[0m' + '\x1b[33m' + '  (' + time + 'ms)';
  } else if (time >= test._slow) {
    duration = '\x1b[0m' + '\x1b[31m' + '  (' + time + 'ms)';
  } else {
    duration = '\x1b[2m' + '\x1b[37m' + '  (' + time + 'ms)';
  }
  return duration;
}

// this reporter outputs test results, indenting two spaces per suite
class MyReporter {
  constructor(runner) {
    this._indents = 0;
    const stats = runner.stats;

    runner
      .once(EVENT_RUN_BEGIN, () => {
        console.log('Starting Mocha Unit Tests');
      })
      .on(EVENT_SUITE_BEGIN, (suite) => {
        if (suite.title.length > 0) {
          console.log('');
        }
        console.log(`${this.indent()}` + '\x1b[4m' + suite.title + '\x1b[0m');

        this.increaseIndent();
      })
      .on(EVENT_SUITE_END, () => {
        this.decreaseIndent();
      })
      .on(EVENT_TEST_PASS, (test) => {
        console.log(
          `${this.indent()}` +
            '\x1b[37m' +
            '[' +
            '\x1b[32m' +
            symbol.success +
            '\x1b[37m' +
            ']' +
            '\x1b[2m' +
            ` ${test.title}` +
            msdisplay(test) +
            '\x1b[0m'
        );
      })
      .on(EVENT_TEST_FAIL, (test, err) => {
        console.log(
          `${this.indent()}` +
            '\x1b[37m' +
            '[' +
            '\x1b[31m' +
            symbol.error +
            '\x1b[37m' +
            ']' +
            '\x1b[2m' +
            ` ${test.title}` +
            '\x1b[0m'
        );
        console.log(
          '\x1b[37m' +
            `${this.indent()}` +
            '\x1b[31m' +
            ` ^ Error: ${err.message}` +
            '\x1b[0m'
        );
      })
      .once(EVENT_RUN_END, () => {
        let color = '\x1b[37m';
        if (stats.failures === 0) {
          color = '\x1b[32m';
        }
        console.log('');
        console.log(
          ` Test result: ` +
            color +
            ` ${stats.passes}/${stats.passes + stats.failures}` +
            '\x1b[0m' +
            ` tests passed`
        );
        console.log('\x1b[0m');
      });
  }

  indent() {
    return Array(this._indents).join(' ');
  }

  increaseIndent() {
    this._indents++;
  }

  decreaseIndent() {
    this._indents--;
  }
}

module.exports = MyReporter;
