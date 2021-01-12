

Dannjs
======
<a href="https://www.npmjs.com/package/dannjs" target="_blank"><img src="https://img.shields.io/npm/v/dannjs?style=flat&color=red" alt="versionNpmStat"/></a>
<a href="https://github.com/matiasvlevi/dann/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/matiasvlevi/dann?label=Stars&color=red"></a>
<a href="https://www.npmjs.com/package/dannjs" target="_blank"><img src="https://img.shields.io/npm/dt/dannjs?style=flat&color=red" alt="downloadNpmStat"/></a> <a target="_blank" href="https://www.npmjs.com/package/dannjs" target="_blank"><img src="https://img.shields.io/github/last-commit/matiasvlevi/Dann?color=red&style=flat" alt="lastcommitNpmStat"/></a>


## What it does:
Dannjs allows for the creation of Neural Network objects for Web Applications & Nodejs. You can train a neural network according to some data. You can then save & load weights.
#### Website:
https://dannjs.org
#### Live Demo:
[https://dannjs.org/demo](https://dannjs.org/livedemo.html) <br/>
more examples & demos [here](https://dannjs.org/#exm)

<br/>

## Installation
### CDN :
```html
<script src="https://cdn.jsdelivr.net/gh/matiasvlevi/dann@master/dann.min.js"></script>
```
### Node :
```
npm i dannjs
```
[dannjs on npmjs.com](https://www.npmjs.com/package/dannjs)
<br/><br/>

## Getting started
Setting up an XOR neural network & console.logging information about the model.
<br/>

### CDN :
```js
const nn = new Dann(2,1);
nn.addHiddenLayer(4,'sigmoid');
nn.makeWeights();
nn.log({details:true});

 ```

### Node :
```js
const dn = require('dannjs');
const Dann = dn.dann;

let nn = new Dann(2,1);
nn.addHiddenLayer(4,'sigmoid');
nn.makeWeights();
nn.log({details:true});
 ```
### Other Imports 
 
 Object types from the library can be imported like this
```js
const dn = require('dannjs');
const Dann = dn.dann;
const Layer = dn.layer;
const Matrix = dn.matrix;
 ```
The default loss & activation function objects can be imported this way
```js
const dn = require('dannjs');
let lossfuncs = dn.lossfuncs;
let activations = dn.activations;
let poolFuncs = dn.poolFuncs;
 ```
<br/>

## Documentation
https://dannjs.org/#docs
<br/>

## Wiki
https://github.com/matiasvlevi/Dann/wiki

<br/><br/>

### Become a Patreon:
<span class="badge-patreon">
<a href="https://www.patreon.com/dannjs" title="Donate to this project using Patreon"><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fres-3.cloudinary.com%2Fcrunchbase-production%2Fimage%2Fupload%2Fc_lpad%2Ch_256%2Cw_256%2Cf_auto%2Cq_auto%3Aeco%2Fv1498102829%2Foul9xkady63xqqn3iw7c.png&f=1&nofb=1" alt="Patreon donate button" height="8%" width="8%"/></a>
</span>

---
<a href="https://github.com/matiasvlevi/Dann" target="_blank"><img src="https://img.shields.io/github/repo-size/matiasvlevi/Dann?style=flat" alt="repoSize"/></a>
<a href="https://raw.githubusercontent.com/matiasvlevi/Dann/master/LICENSE" target="_blank"><img alt="GitHub" src="https://img.shields.io/github/license/matiasvlevi/dann?color=blue" alt="Liscence"></a>
<a href="https://raw.githubusercontent.com/matiasvlevi/Dann/master/dann.js" target="_blank"><img src="https://img.shields.io/tokei/lines/github/matiasvlevi/dann" alt="totalLines"/></a>
<a href="https://github.com/matiasvlevi/Dann" target="_blank"><img src="https://img.shields.io/github/languages/top/matiasvlevi/Dann?style=flat" alt="languages"/></a>

---
