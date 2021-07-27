<div align="center">
  <a href="https://dannjs.org/">
    <img src="https://dannjs.org/transparentlogo.png" alt="Dannjs" height="150" />
  </a>
  <h4>RNN development Branch</h4>
  <a href="https://github.com/matiasvlevi/Dann">Back to master branch</a>
</div>


<br/>

#### CDN
Whole library
```js
<script src="https://cdn.jsdelivr.net/gh/matiasvlevi/dann@RNN/build/lib.js"></script>
```
Only dann
```js
<script src="https://cdn.jsdelivr.net/gh/matiasvlevi/dann@RNN/build/dann.js"></script>
```
Only rann
```js
<script src="https://cdn.jsdelivr.net/gh/matiasvlevi/dann@RNN/build/rann.js"></script>
```

<br/>

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
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://www.linkedin.com/in/matias-vazquez-levi-846a991a6/"><img src="https://avatars.githubusercontent.com/u/50473168?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Matias Vazquez-Levi</b></sub></a><br /><a href="https://github.com/matiasvlevi/Dann/commits?author=matiasvlevi" title="Code">💻</a> <a href="https://github.com/matiasvlevi/Dann/commits?author=matiasvlevi" title="Documentation">📖</a> <a href="https://github.com/matiasvlevi/Dann/commits?author=matiasvlevi" title="Tests">⚠️</a> <a href="#tutorial-matiasvlevi" title="Tutorials">✅</a></td>
    <td align="center"><a href="https://github.com/FrancescoXX"><img src="https://avatars.githubusercontent.com/u/18360871?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Francesco Ciulla</b></sub></a><br /><a href="#talk-FrancescoXX" title="Talks">📢</a></td>
    <td align="center"><a href="https://github.com/Labnann"><img src="https://avatars.githubusercontent.com/u/55809005?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Labnan</b></sub></a><br /><a href="https://github.com/matiasvlevi/Dann/issues?q=author%3ALabnann" title="Bug reports">🐛</a> <a href="https://github.com/matiasvlevi/Dann/commits?author=Labnann" title="Code">💻</a> <a href="https://github.com/matiasvlevi/Dann/commits?author=Labnann" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/SharkAce"><img src="https://avatars.githubusercontent.com/u/85720638?v=4?s=100" width="100px;" alt=""/><br /><sub><b>sharkAce</b></sub></a><br /><a href="https://github.com/matiasvlevi/Dann/commits?author=SharkAce" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/shirsho1106"><img src="https://avatars.githubusercontent.com/u/60136067?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Hasnain Iqbal</b></sub></a><br /><a href="https://github.com/matiasvlevi/Dann/commits?author=shirsho1106" title="Code">💻</a> <a href="https://github.com/matiasvlevi/Dann/commits?author=shirsho1106" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/ramos-papadopoulos"><img src="https://avatars.githubusercontent.com/u/82990932?v=4?s=100" width="100px;" alt=""/><br /><sub><b>EL Ramos</b></sub></a><br /><a href="https://github.com/matiasvlevi/Dann/issues?q=author%3Aramos-papadopoulos" title="Bug reports">🐛</a> <a href="https://github.com/matiasvlevi/Dann/commits?author=ramos-papadopoulos" title="Tests">⚠️</a> <a href="https://github.com/matiasvlevi/Dann/commits?author=ramos-papadopoulos" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<br/><br/>

Any contributions are welcome! See [CONTRIBUTING.md](https://github.com/matiasvlevi/Dann/blob/master/CONTRIBUTING.md).

