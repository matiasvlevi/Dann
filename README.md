<div align="center">
  <a href="https://dannjs.org/">
    <img src="https://dannjs.org/transparentlogo.png" alt="Dannjs" height="150" />
  </a>
  <h4>RNN development Branch</h4>
  <a href="https://github.com/matiasvlevi/Dann">Back to master branch</a>
</div>


<br/>

#### CDN
```js
<script src="https://cdn.jsdelivr.net/gh/matiasvlevi/dann@RNN/build/dann.js"></script>
```

#### Nodejs
```js
const Dannjs = require('dannjs');
const Rann = Dannjs.rann;
```

## Examples 

Feed sequence data
```js
let rnn = new Rann(2, 20, 2);
rnn.feed([
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8]
]);

```
Train sequence data
```js
rnn.train([
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
  [9, 10]  
])
rnn.feed([
  [5,6],
  [7,8]
]);
// Outputs close to [9, 10] if well trained 
// (Call train more than once)
```


<br/><br/><br/>
  
## License

MIT


<br/><br/><br/>
<br/>

Any contributions are welcome! See [CONTRIBUTING.md](https://github.com/matiasvlevi/Dann/blob/master/CONTRIBUTING.md).
