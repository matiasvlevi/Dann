# Contributing to Dannjs
Welcome contributors! Here is the recommended contribution guide for Dannjs. <br/>
[see the project README](https://github.com/matiasvlevi/Dann/blob/master/README.md)
<br/><br/><br/>

## Setup


#### Step 1
Create a Dannjs fork & clone the repository on your local computer.

<br/>

#### Step 2
Install grunt as a global module. Grunt will be used to concatonate and minify the source files later on.

```
npm i grunt -g
```

<br/>

#### Step 3

You then need to launch the `devsetup.bat` file, this will create all the files to test your version of the Dannjs library. You wont need to delete them since they are referenced in the `.gitignore` file.

Use these newly created files to test your code in both nodejs and browser environements.

* `test.bat` to execute the `tests/nodeTest.js`.
* `test.htm` to execute the `tests/browserTest.js`.

Use `build.bat` as a shortcut to compile (run the grunt tasks).

<br/><br/>

## Modify

#### Step 1

The source files are located in `/src`. These are the files you can modify. Be sure to test your code with the `test.bat` and `test.htm` files.

If you want to add a new `.js` file to the `/src` directory, be sure to include it into the `gruntfile.js` to compile it with other `.js` files.

Add some comments to your code explaining what it does.

<br/>

#### Step 2

Use `build.bat` before commiting to compile your source files referenced in `gruntfile.js` into `/build/dann.js` and `/build/dann.min.js`.

<br/>

#### Step 3

Create a pull request on github. Wait for it to be reviewed.

Thank you for contributing!
<br/><br/><br/>


## Questions

Questions regarding contributions? Check out the [Contribution discussion](https://github.com/matiasvlevi/Dann/discussions/7).
