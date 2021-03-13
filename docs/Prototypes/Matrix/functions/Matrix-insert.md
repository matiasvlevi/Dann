[Back to Matrix](https://github.com/matiasvlevi/Dann/wiki/Matrix-Object)

# insert( value , row , column );
This function sets a specific value in the matrix.


- #### value <br/>
    The value to be inserted into the specified coordinates in the matrix

- #### column <br/>
    Column index

- #### row <br/>
    Row index

<br/>

### Example

```js
const m1 = new Matrix(3,4);

m1.log({table:true});

const value = 0.5;
m1.insert(value,2,3);

m1.log({table:true});
```
