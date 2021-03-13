[Back to Matrix](https://github.com/matiasvlevi/Dann/wiki/Matrix-Object)

# initiate( value );
This function resets the matrix, all values are set to the same value.

- #### value (optional)<br/>
    The value to be set through out the matrix. Is set to  0 by default
<br/><br/><br/><br/>


### Example
```js
const m1 = new Matrix(4,4);

m1.initiate(2);

m1.log();
```

output:

```js
Matrix {
    rows: 4,
    cols: 4,
    matrix: [ 
        [ 2, 2, 2, 2 ],
        [ 2, 2, 2, 2 ],
        [ 2, 2, 2, 2 ],
        [ 2, 2, 2, 2 ] 
    ]
}
```