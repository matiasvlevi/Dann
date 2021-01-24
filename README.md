<p align="center">
  <a href="https://dannjs.org/">
    <img src="https://dannjs.org/transparentlogo.png" alt="Dannjs" height="150" />
  </a>
</p>

<p align="center">
    <a href="https://www.npmjs.com/package/dannjs" target="_blank"><img src="https://img.shields.io/npm/v/dannjs?style=flat&color=f69e7b&labelColor=383e56" alt="versionNpmStat"/></a> <a href="https://github.com/matiasvlevi/Dann" target="_blank"><img src="https://img.shields.io/github/repo-size/matiasvlevi/Dann?style=flat&label=size&color=f69e7b&labelColor=383e56" alt="repoSize"/></a> <a href="https://www.npmjs.com/package/dannjs" target="_blank"><img src="https://img.shields.io/npm/dt/dannjs?style=flat&color=f69e7b&labelColor=383e56" alt="downloadNpmStat"/></a> <a href="https://raw.githubusercontent.com/matiasvlevi/Dann/master/LICENSE" target="_blank"><img alt="GitHub" src="https://img.shields.io/github/license/matiasvlevi/dann?color=f69e7b&labelColor=383e56" alt="Liscence"></a>
</p>
<h4 align="center">Easy way to create neural networks in Javascript</h4>
<p align="center">
    Create, Train,

</p>

<p align="center">
  <a href="#Demo">Demo</a> •
  <a href="#Installation">Installation</a> •
  <a href="#Getting-started">Getting started</a> •
  <a href="https://github.com/matiasvlevi/Dann/wiki">Docs</a> •
  <a href="#license">License</a>
</p>
<br/>


## Installation
### CDN :
```html
<script src="https://cdn.jsdelivr.net/gh/matiasvlevi/dann@v2.2.2/build/dann.min.js"></script>
```
### Node :
```
npm i dannjs
```
[dannjs on npmjs.com](https://www.npmjs.com/package/dannjs)
<br/><br/>

## Getting started


### Node Imports

 Object types from the library can be imported like this
```js
const dn = require('dannjs');
const Dann = dn.dann;
const Layer = dn.layer;
const Matrix = dn.matrix;
 ```
The objects containing functions can be imported this way
```js
const dn = require('dannjs');
const lossfuncs = dn.lossfuncs;
const activations = dn.activations;
const poolfuncs = dn.poolfuncs;
 ```

<br/>

### Basic model construction
Setting up a small (4,6,6,2) neural network.
```js
const dn = require('dannjs');
const Dann = dn.dann;

let nn = new Dann(4,2);
nn.addHiddenLayer(6,'leakyReLU');
nn.addHiddenLayer(6,'leakyReLU');
nn.outputActivation('tanH');
nn.makeWeights();
nn.lr = 0.0001;
nn.log({details:true});
```
<br/>


### Train by backpropagation
Training with a dataset.
```js
//some example data... 4 inputs, 2 outputs
const dataset = [
    {
        input: [0,1,0,0],
        output: [0,1]
    },
    {
        input: [0,0,0,1],
        output: [0,1]
    },
    {
        input: [0,1,0,1],
        output: [1,0]
    },
    {
        input: [0,1,1,0],
        output: [1,1]
    },
    // ... more data
];

//train 1 epoch
for (data of dataset) {
    nn.backpropagate(data.input,data.output);
    console.log(nn.loss);
}

```

<br/>

### Train by mutation
For neuroevolution simulations. Works best with small models & large population size.
```js
const population = 1000;
let newGeneration = [];

for (let i = 0; i < population; i++) {

    // parentNN would be the best nn from past generation.
    const childNN = parentNN;
    childNN.mutateRandom(0.01,0.65);

    newGeneration.push(childNN);
}

```

<br/>

<br/>

### Documentation
https://dannjs.org#docs

### Demo:
[AI predicts San-francisco Housing prices.](https://dannjs.org/livedemo.html) <br/>
more examples & demos [here](https://dannjs.org/#exm)
<br/>

#### Contact
matias@dannjs.org


#### Socials

</span>
<a href="https://twitter.com/DannjsAi" target="_blanck"><img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/DannjsAi?label=Twitter&style=social"></a>
<span class="badge-patreon">
<a href="https://www.patreon.com/dannjs" title="Donate to this project using Patreon"><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fres-3.cloudinary.com%2Fcrunchbase-production%2Fimage%2Fupload%2Fc_lpad%2Ch_256%2Cw_256%2Cf_auto%2Cq_auto%3Aeco%2Fv1498102829%2Foul9xkady63xqqn3iw7c.png&f=1&nofb=1" alt="Patreon donate button" height="2.5%" width="2.5%"/></a>

<br/>
<br/>
<br/>
<br/>

## License

MIT


---
