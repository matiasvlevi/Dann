[Back to Dann](https://github.com/matiasvlevi/Dann/wiki/Dann-Object)

# load( name , callback );


### Node 
Load a previously saved json file from ./savedDanns/. If the network's architechture is not the same, it is going to overwrite the Dann object.

- #### name<br/>
    The name of the saved directory that holds the dann model.

- #### callback<br/>
    A function to be called when the model finished loading.

<br/><br/><br/>

### Example
```js
const nn = new Dann();
nn.load('savedname',function(err) {
    if (err) {
        console.log('Error loading the Dann model');
    } else {
        console.log('Successfully loaded the Dann model');
        nn.log();
    }
});
```

<br/>
