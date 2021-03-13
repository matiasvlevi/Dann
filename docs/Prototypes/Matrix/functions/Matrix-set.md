[Back to Matrix](https://github.com/matiasvlevi/Dann/wiki/Matrix-Object)

# set( matrix );
This function sets the matrix of a matrix object.


- #### matrix <br/>
    A matrix formatted as an array containing arrays. The initial dimensions don't need to be the same as the new matrix dimensions.

<br/><br/><br/>

### Example

```js

let m1 = new Matrix(3,3);

m1.log({table:true});
// outputs: 3x3 matrix

let matrix = [
    [1,0],
    [0,1]
];

m1.set(matrix);

m1.log({table:true});
// outputs: 2x2 matrix
```

<br/>
