<p align="center">
  <a href="https://dannjs.org/">
    <img src="https://dannjs.org/transparentlogo.png" alt="Dannjs" height="150" />
  </a>
</p>

<h4 align="center">RNN development Branch</h4>

[Back to master branch](https://github.com/matiasvlevi/Dann)

<br/>

## Examples 
Feed sequence data
```js
let rnn = new Rann(8, 20, 2);
rnn.feed([
  [1,2],
  [3,4],
  [5,6],
  [7,8]
]);
// [X, X] Output is random since rnn is not trained
```
Train sequence data
```js
// Not implemented yet
```


<br/><br/><br/>
  
## License

MIT


<br/><br/><br/>
<br/>

Any contributions are welcome! See [CONTRIBUTING.md](https://github.com/matiasvlevi/Dann/blob/master/CONTRIBUTING.md).
