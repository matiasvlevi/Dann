### load( varname , domID ,callback );


##### Web Browser
When this function is called, an input tag requesting a file appears on screen. When clicked, it opens a local file dialogue. Once the appropriate file is selected the dann data automatically uploads. The filename argument is not required for this version since the browser dialog takes care of it.

* varname <br/>
The name of the variable that holds the dann model.

* domID <br/>
The ID of the HTML element in which to place the `<input>` element. If left undefined, the `<input>` element is appended to the `<body>`.

* callback<br/>
A function to be called when the model finished loading.

ex:
```js
const nn = new Dann();
//opens a DOM file selector
nn.load('nn',undefined,function(err) {
    if (err) {
        console.log('Error loading the Dann model');
    } else {
        console.log('Successfully loaded the Dann model');
        nn.log();
    }
});
```
