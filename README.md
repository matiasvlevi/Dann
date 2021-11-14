
<p align="center">
  <a href="https://dannjs.org/">
    <img src="https://dannjs.org/transparentlogo.png" alt="Dannjs" height="150" />
  </a>
</p>

<p align="center">
    <a href="https://www.npmjs.com/package/dannjs" target="_blank"><img src="https://img.shields.io/npm/v/dannjs?style=flat&color=f69e7b&labelColor=383e56&label=version" alt="versionNpmStat"/></a> <a href="https://github.com/matiasvlevi/Dann" target="_blank"><img src="https://img.shields.io/github/repo-size/matiasvlevi/Dann?style=flat&label=size&color=f69e7b&labelColor=383e56" alt="repoSize"/></a> <a href="https://www.npmjs.com/package/dannjs" target="_blank"><img src="https://img.shields.io/npm/dy/dannjs?style=flat&color=f69e7b&labelColor=383e56&label=npm" alt="downloadNpmStat"/></a> <a href="https://www.npmjs.com/package/dannjs" target="_blank"><img src="https://img.shields.io/jsdelivr/gh/hy/matiasvlevi/dann?label=cdn&style=flat&color=f69e7b&labelColor=383e56" alt="downloadNpmStat"/></a> <a href="https://raw.githubusercontent.com/matiasvlevi/Dann/master/LICENSE" target="_blank"><img alt="GitHub" src="https://img.shields.io/github/license/matiasvlevi/dann?color=f69e7b&labelColor=383e56" alt="Liscence"></a>
</p>
<h4 align="center">Deep Neural Network Library for Javascript</h4>
<p align="center">
    Train a neural network with your data & save its trained state!


  
</p>

<p align="center">
  <a href="#Demo">Demo</a> •
  <a href="#Installation">Installation</a> •
  <a href="#Getting-started">Getting started</a> •
  <a href="https://dannjs.org/docs/classes/Dann">Documentation</a> •
  <a href="https://github.com/matiasvlevi/Dann/blob/master/CONTRIBUTING.md">Contribute</a> •
  <a href="https://discord.gg/yeAqHsGdtU">Discord</a> •
  <a href="#license">License</a>
</p>
<br/>


## Installation
### CDN :
```html
<script src="https://cdn.jsdelivr.net/gh/matiasvlevi/dann@v2.4.0/build/dann.min.js"></script>
```
### Node :
```
npm i dannjs
```
[dannjs on npmjs.com](https://www.npmjs.com/package/dannjs)
<br/><br/>

## Getting started


### Require package

Object types from the library can be imported like this
```js
const Dannjs = require('dannjs');
const Dann = Dannjs.dann;
 ```

<br/>

### Basic model construction
Setting up a small (4,6,6,2) neural network.
```js
const nn = new Dann(4, 2);
nn.addHiddenLayer(6, 'leakyReLU');
nn.addHiddenLayer(6, 'leakyReLU');
nn.outputActivation('tanH');
nn.makeWeights();
nn.lr = 0.0001;
nn.log({details:true});
```
<br/>


### Train by backpropagation
Training with a dataset.
```js
//XOR 2 inputs, 1 output
const dataset = [
    {
        input: [0, 0],
        output: [0]
    },
    {
        input: [1, 0],
        output: [1]
    },
    {
        input: [0, 1],
        output: [1]
    },
    {
        input: [1, 1],
        output: [0]
    }
];

//train 1 epoch
for (data of dataset) {
    nn.backpropagate(data.input, data.output);
    console.log(nn.loss);
}
```

<br/>

### Train by mutation
For neuroevolution simulations. Works best with small models & large population size.
```js
const populationSize = 1000;
let newGeneration = [];

for (let i = 0; i < populationSize; i++) {

    // parentNN would be the best nn from past generation.
    const childNN = parentNN;
    childNN.mutateRandom(0.01, 0.65);

    newGeneration.push(childNN);
}
```

<br/>

### Standalone function
Convert a Neural Network to a JS function that can output predictions without the library.
```js
let strfunc = nn.toFunction();
console.log(strfunc);
```

<br/>

### Save JSON
```js
let json = nn.toJSON();
console.log(json);
```

<br/>

<br/>

### Demo:
[AI predicts San-francisco Housing prices.](https://dannjs.org/livedemo.html) <br/>
more examples & demos [here](https://dannjs.org/#exm)
<br/>


### Online editor:

[https://dannjs.org/sandbox](https://dannjs.org/sandbox)

<br/>

### Socials

<div>
<a href="https://twitter.com/DannjsAi" target="_blank">
<img src=https://raw.githubusercontent.com/matiasvlevi/SocialMediaIcons/main/twitter.svg alt=twitter width=40px />
</a>
<a href="https://patreon.com/dannjs" target="_blank">
<img src=https://raw.githubusercontent.com/matiasvlevi/SocialMediaIcons/main/patreon.svg alt=twitter width=40px />
</a>
<a href="https://instagram.com/dannj.s" target="_blank">
<img src=https://raw.githubusercontent.com/matiasvlevi/SocialMediaIcons/main/instagram.svg alt=twitter width=40px />
</a>
</div>

<br/>

### Graph Dann models with this library

[Dann-p5](https://github.com/matiasvlevi/Dann-p5)

<br/>


### Stickers
[Get Dannjs stickers!](https://www.redbubble.com/people/Dannjs/shop)


<br/><br/>
 

## Contributors

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
    <td align="center"><a href="https://github.com/viabhinav"><img src="https://avatars.githubusercontent.com/u/48197061?v=4?s=100" width="100px;" alt=""/><br /><sub><b>viabhinav</b></sub></a><br /><a href="#tutorial-viabhinav" title="Tutorials">✅</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

<br/>

Any contributions are welcome! See [CONTRIBUTING.md](https://github.com/matiasvlevi/Dann/blob/master/CONTRIBUTING.md).

<br/><br/><br/><br/><br/>

## License

MIT


