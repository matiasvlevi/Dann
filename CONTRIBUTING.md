# Contributing to Dannjs
Welcome contributors! Here is the recommended contribution guide for Dannjs. <br/>
For more info [see the project's README](https://github.com/matiasvlevi/Dann/blob/master/README.md)
<br/>
## What to contribute?

Testing the library and reporting feedback on what you think about is already enough.
Adding issues on GitHub suggesting changes/addons are more than welcome.

If you want to actually make the changes source yourself, nothing is stopping you, just follow the steps below! Changes you make might be added to the `master` branch.

<br/>


## Setup

Create a Dannjs fork & clone the repository on your machine.

```
git clone https://github.com/matiasvlevi/Dann.git
```

Install dev dependencies with :
```
npm ci
```

<br/>

## Organization

* Source code is located in `/src`
* Manual Tests are located in `/test/manual-tests`
* Unit Tests are located in `/test/unit`
* Built files are located in `/build`
* Built documentation is located in `/docs/documentation`
* Custom grunt tasks are located in `/tasks`

<br/>

## Changing source

If the file you added is located in a new directory in `/src` check if it is referenced in `/src/concatConfig.js`. <br/>
Be sure to include [inline documentation](#documentation) and [unit tests](#unit-tests) for each feature addition.


Build the source files with : 
```
npm run build
```


<br/>

In the case of lint errors, you can fix them with :
```
npm run lint:fix
```
or
```
npm run build:fix
```

<br/>

## Documentation

#### Inline docs

Here is an example of how the inline documentation should be written :

```js
/**
 * Describe the method
 * this text can extend on multiple lines...
 * @method yourFunc
 * @param {Number} a describe the argument
 * @param {Number} [b] square brackets make this argument optional
 * @example
 * <code>
 * example here
 * </code>
 */
function yourFunc(a, b) {
    //code
}
```
Inline documentation is made possible with the help of yuidoc, see [their documentation](https://yui.github.io/yuidoc/syntax/index.html) for more examples.


#### Compile

Build the inline documentation with :
```
npm run doc
```

Once built, you can open `docs/documentation/index.html` to access the new documentation.

<br/>



## Unit Tests

Run the unit tests with this command :
```
npm run test
```

#### Adding Unit Tests

You should probably add unit tests if you are planning on adding a new feature.
We use mocha & chai for unit tests. Add a unit test in `test/unit/` with a similar path as your added files in `/src`.

Be sure your new unit test is included in `/test/unit/concatConfig.js`

Here is the basic example of a unit test :
```js
suite('My series of tests',function(){
    let x, y;
    setup(function(){
        // setup code
    });
    test('X Should equal Y ',function(){
        assert.equal(x, y);
    });
    test('other test name',function(){
        // other test
    });
    test('other test name 2',function(){
        // other test 2
    });    
});
```
No need to include anything, dannjs & chai methods are taken care of when running `npm run test`.

See [chai documentation](https://www.chaijs.com/) for more information on these methods.

<br/>

## Manual Tests

Manual tests are executed by the user manually.
You can use the manual tests located in `test/manual-tests/` both for the browser & node. Feel free to create & add new ones.

These files provide a template for writing a manual example :

* `test/manual-tests/node/empty-example`
* `test/manual-tests/browser/empty-example`

<br/>

## Pull request

before making a pull request, run this command :
```
npm run final
``` 
This will run all builds and tests while ensuring there are no lint errors. 


<br/>
<br/>
<br/>
<br/>
<br/>

## Questions

Questions regarding contributions? Check out the [Contribution discussion](https://github.com/matiasvlevi/Dann/discussions/7) or Join the  [discord sever](https://discord.gg/8T9psRZrpr).


<br/>
