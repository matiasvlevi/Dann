[Back to Matrix](https://github.com/matiasvlevi/Dann/wiki/Matrix-Object)

# Matirx.transpose( matrix );
###### Static

This static function transposes a matrix.


- #### matrix <br/>
    The matrix to be transposed

<br/>

### Example

```js
const m1 = new Matrix(2,4);

m1.log({table:true});
const m2 = Matrix.transpose(m1);

m2.log({table:true});
```
