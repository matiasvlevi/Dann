[Back to Dann](https://github.com/matiasvlevi/Dann/wiki/Dann-Object)

# mutateAdd( percent );
This function mutates the weights by taking a percentage of the weight & adding it to the weight. This is for Neuroevolution tasks.

- #### percent <br/>
    Percentage to add to each weight. In between 0 and 1.

<br/>

### Example 

```js
const nn = new Dann(4,2);
nn.makeWeights();

nn.log({weights:true,table:true})

// weights add 5% of themselves.
nn.mutateAdd(0.05);

nn.log({weights:true,table:true})
```