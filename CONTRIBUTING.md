# Contributing to Dannjs
Welcome contributors! Here is the recommended contribution guide for Dannjs. <br/>
For more info [see the project README](https://github.com/matiasvlevi/Dann/blob/master/README.md)
<br/>
## What to contribute?

Testing the library and reporting feedback on what you think about is already enough.
Adding issues on GitHub suggesting changes/addons are more than welcome.

If you want to actually make the changes source yourself, nothing is stopping you, just follow the steps below! Changes you make might be added to the `master` branch.

<br/>


## Setup


#### Step 1
Create a Dannjs fork & clone the repository on your local computer.

<br/>

#### Step 2
Install grunt as a global module. Grunt will be used to concatenate and minify the source files later on.

```
npm i grunt -g
```

<br/>

#### Step 3

Launch the `devsetup.bat` file to create the testing files & build shortcut. You wont need to delete them since they are referenced in the `.gitignore` file.

Use these newly created files to test your implementations in both nodejs and browser environments.

* run `tests/run/node.bat` to execute the `tests/nodetest.js` file.
* run `tests/run/browser.html` to execute the `tests/browsertest.js` file.

Use `build.bat` as a shortcut to compile (run the grunt tasks).

<br/><br/>

## Modify Source Files

#### Step 1

* The source files are located in `/src`. These are the files you can modify. Be sure to test your code with the provided test files.


* Add some simple comments to your code explaining what it does.


* If you want to add a new `.js` file to the `/src` directory, be sure to include it into the `gruntfile.js` to compile it in the distribution version.
You can do the following like so:
```js
// in `gruntfile.js`
module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            dist: {
                //Add your files in the `src` array (order matters):
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
                    'src/datasets/XOR.js',
                    'src/datasets/binaryData.js',
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
```

<br/>

#### Step 2

* Use `build.bat` before committing to compile your source files referenced in `gruntfile.js` into `/build/dann.js` and `/build/dann.min.js`.

<br/>

#### Step 3

* Create a pull request on GitHub. Wait for it to be reviewed!

Thank you for contributing!
<br/><br/><br/><br/><br/><br/><br/>


## Questions

Questions regarding contributions? Check out the [Contribution discussion](https://github.com/matiasvlevi/Dann/discussions/7) or Join the  [discord sever](https://discord.gg/8T9psRZrpr).


<br/>
