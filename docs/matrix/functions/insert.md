### insert( value , row , col );
This function sets a specific value in the matrix.


- #### value <br/>
The value to be inserted into the specified coordinates in the matrix

- #### row <br/>
Column index

- #### col <br/>
Row index

<br/>

example:

```js
const m1 = new Matrix(3,4);

m1.log({table:true});

const value = 0.5;
m1.insert(value,2,3);

m1.log({table:true});
```
