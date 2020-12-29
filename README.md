Dannjs
======
<a href="https://www.npmjs.com/package/dannjs" target="_blank"><img src="https://img.shields.io/npm/v/dannjs?style=flat&color=red" alt="versionNpmStat"/></a>
<a href="https://github.com/matiasvlevi/dann/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/matiasvlevi/dann?label=Stars&color=red"></a>
<a href="https://www.npmjs.com/package/dannjs" target="_blank"><img src="https://img.shields.io/npm/dt/dannjs?style=flat&color=red" alt="downloadNpmStat"/></a> <a target="_blank" href="https://www.npmjs.com/package/dannjs" target="_blank"><img src="https://img.shields.io/github/last-commit/matiasvlevi/Dann?color=red&style=flat" alt="lastcommitNpmStat"/></a>


## What it does:
Dannjs allows for the creation of Neural Network JS objects for Web Applications & Nodejs. Train a neural network in multiple ways, you can either use mutations (Neuroevolution tasks) or backpropagation. You can then save & load weights.
#### Website:
https://dannjs.org/
#### Live Demo:
https://dannjs.org/livedemo.html


## Installation
### CDN :
```html
<script src="https://cdn.jsdelivr.net/gh/matiasvlevi/dann@master/dann.min.js"></script>
```
### Node :
```
npm i dannjs
```


# Getting started
Setting up an XOR neural network & console.logging information about the model. 
<br/>
### CDN :
with p5js (will probably change soon)
```js
let nn;

function setup() {
	nn = new Dann(2,1);
	nn.addHiddenLayer(4,'sigmoid');
	nn.makeWeights();
	nn.log({details:true});
}
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
Other object types from the library can be imported like this: 
```js
const dn = require('dannjs');
const Dann = dn.dann;
const Layer = dn.layer;
const Matrix = dn.matrix;
 ```
The default saved lists of functions can also be imported.
```js
const dn = require('dannjs');
let lossfuncs = dn.lossfuncs;
let activations = dn.activations;
 ```

## Documentation
https://dannjs.org/#docs
<br/><br/><br/>



#### Python version
https://github.com/matiasvlevi/Dannpy
<br/><br/><br/>

### Become a Patreon:
<span class="badge-patreon">
<a href="https://www.patreon.com/dannjs" title="Donate to this project using Patreon"><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fres-3.cloudinary.com%2Fcrunchbase-production%2Fimage%2Fupload%2Fc_lpad%2Ch_256%2Cw_256%2Cf_auto%2Cq_auto%3Aeco%2Fv1498102829%2Foul9xkady63xqqn3iw7c.png&f=1&nofb=1" alt="Patreon donate button" height="8%" width="8%"/></a>
</span>

---
<a href="https://github.com/matiasvlevi/Dann" target="_blank"><img src="https://img.shields.io/github/repo-size/matiasvlevi/Dann?style=flat" alt="versionNpmStat"/></a>
<a href="https://raw.githubusercontent.com/matiasvlevi/Dann/master/LICENSE" target="_blank"><img alt="GitHub" src="https://img.shields.io/github/license/matiasvlevi/dann?color=blue"></a>
<a href="https://raw.githubusercontent.com/matiasvlevi/Dann/master/dann.js" target="_blank"><img src="https://img.shields.io/tokei/lines/github/matiasvlevi/dann" alt="versionNpmStat"/></a>
<a href="https://github.com/matiasvlevi/Dann" target="_blank"><img src="https://img.shields.io/github/languages/top/matiasvlevi/Dann?style=flat" alt="versionNpmStat"/></a>

---
