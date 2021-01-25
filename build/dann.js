const isBrowser = (typeof process !== 'object');
let fs;
let w;

//CDN dependencies:
function addCDNdependencies() {
    let element = document.createElement('script');
    element.setAttribute('type','text/javascript');
    element.setAttribute('src','https://cdn.jsdelivr.net/npm/mathjs@8.1.0/lib/browser/math.min.js');
    document.head.insertBefore(element, document.head.children[0]);
}

if(isBrowser) {
    addCDNdependencies();
} else {
    fs = require('fs');
    require('mathjs');
    w = require('@fast-csv/format');
}

//Shortening Mathjs functions:
const random = (a,b) => Math.random(1)*(b-a)+a;
const exp = (x) => Math.exp(x);
const abs = (x) => Math.abs(x);
const log = (x) => Math.log(x);
const logn = (x,n) => log(x)/log(n);
const pow = (x,e) => Math.pow(x,e);
const sin = (x) => Math.sin(x);
const cos = (x) => Math.cos(x);
const tan = (x) => Math.tan(x);
const round = (x) => Math.round(x);
const sqrt = (x) => Math.sqrt(x);

//Other math functions:
const cosh = (x) => (exp(x)+exp(-x))/2;
const sech = (x) => 1/cosh(x);

//Activation functions:
function sigmoid(x) {
    return 1/(1+exp(-x));
}
function sigmoid_d(x) {
    let x1 = sigmoid(x);
    return x1 * (1 - x1);
}
function leakySigmoid(x) {
    return 1/(1+exp(-x))+(x/100);
}
function leakySigmoid_d(x) {
    let x1 = leakySigmoid(x);
    return x1 * (1 - x1);
}
function siLU(x) {
    return x/(1+exp(-x));
}
function siLU_d(x) {
    let top = (1 + exp(-x))+(x*exp(-x));
    let down = pow(1 + exp(-x), 2);
    return top/down;
}
function tanH(x) {
    let top = exp(x) - exp(-x);
    let down = exp(x)+ exp(-x);
    return (top/down);
}
function tanH_d(x) {
    return 1 - pow(tanH(x),2);
}
function leakyReLUCapped(x) {
    if (x >= 0 && x <= 6) {
        return x;
    } else if (x < 0) {
        return 0.1*x;
    } else {
        return 6;
    }
}
function leakyReLUCapped_d(x) {
    if (x >= 0 && x <= 6) {
        return 1;
    } else if (x < 0) {
        return 0.1;
    } else {
        return 0;
    }
}
function leakyReLU(x) {
    if (x >= 0) {
        return 1*x;
    } else {
        return 0.01*x;
    }
}
function leakyReLU_d(x) {
    if (x >= 0) {
        return 1;
    } else {
        return 0.01;
    }
}
function reLU(x) {
    if (x >= 0) {
        return 1*x;
    } else {
        return 0;
    }
}
function reLU_d(x) {
    if (x >= 0) {
        return 1;
    } else {
        return 0;
    }
}

// loss functions:
function mae(predictions,target) {
    let sum = 0;
    let ans = 0;
    let n = target.length;
    for (let i = 0; i < n; i++) {
        let y = target[i]
        let yHat = predictions[i];
        sum += abs(y - yHat);
    }
    ans = sum/n;
    return ans;
}
function bce(predictions,target) {
    let sum = 0;
    let ans = 0;
    let n = target.length;
    for (let i = 0; i < n; i++) {
        let y = target[i]
        let yHat = predictions[i];
        sum+= y*log(yHat)+(1-y)*log(1-yHat);
    }
    ans = -sum/n;
    return ans;
}
function lcl(predictions,target) {
    let sum = 0;
    let ans = 0;
    let l = target.length;
    for (let i = 0; i < l; i++) {
        let y = target[i]
        let yHat = predictions[i];
        sum += log(cosh(yHat - y));
    }
    ans = sum/l;
    return ans;
}
function mbe(predictions,target) {
    let sum = 0;
    let ans = 0;
    let l = target.length;
    for (let i = 0; i < l; i++) {
        let y = target[i]
        let yHat = predictions[i];
        sum += (y - yHat);
    }
    ans = sum/this.o;
    return ans;
}
function rmse(predictions,target) {
    let sum = 0;
    let ans = 0;
    let n = target.length;
    for (let i = 0; i < n; i++) {
        let y = target[i]
        let yHat = predictions[i];
        sum += pow(y - yHat,2);
    }
    ans = sqrt(sum/n);
    return ans;
}
function mce(predictions,target) {
    let sum = 0;
    let ans = 0;
    let n = target.length;
    for (let i = 0; i < n; i++) {
        let y = target[i]
        let yHat = predictions[i];
        sum += pow(abs(y - yHat),3);
    }
    ans = sum/n;
    return ans;
}
function mse(predictions,target) {
    let sum = 0;
    let ans = 0;
    let n = target.length;
    for (let i = 0; i < n; i++) {
        let y = target[i]
        let yHat = predictions[i];
        sum += pow(y - yHat,2);
    }
    ans = sum/n;
    return ans;
}

// Pooling functions:
function max(arr) {
    let record = 0;
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        if (arr[i] > record) {
            record = arr[i];
        }
    }
    return record;
}
function min(arr) {
    let record = Infinity;
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        if (arr[i] < record) {
            record = arr[i];
        }
    }
    return record;
}
function avg(arr) {
    let sum = 0;
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        sum += arr[i];
    }
    return sum/len;
}

class Matrix {
    constructor(rows,cols) {
        this.rows = rows;
        this.cols = cols;
        this.matrix = Matrix.make(rows,cols);
    }
    static toArray(m) {
        let ans = [];
        if (m.cols == 1) {
            for (let i = 0; i < m.rows; i++) {
                ans[i] = m.matrix[i][0];
            }
        }
        return ans;
    }
    static fromArray(arr) {
        let m = new Matrix(arr.length,1);
        for (let i = 0; i < arr.length; i++) {
            m.matrix[i][0] = arr[i];
        }
        return m;
    }
    static transpose(m) {
        let result = new Matrix(m.cols,m.rows);
        for (let i = 0; i < m.rows; i++) {
            for(let j = 0; j < m.cols; j++) {
                result.matrix[j][i] = m.matrix[i][j];
            }
        }
        return result;
    }
    static map(m,f) {
        for (let i = 0; i < m.rows; i++) {
            for(let j = 0; j < m.cols; j++) {
                let v = m.matrix[i][j];
                m.matrix[i][j] = f(v);
            }
        }
        return m;
    }
    static addition(m1,m2) {
        let a = m1;
        let b = m2;
        let ans = new Matrix(a.rows, a.cols);
        if (a.rows !== b.rows || a.cols !== b.cols) {
            return;
        } else {
            for (let i = 0; i < ans.rows; i++) {
                for(let j = 0; j < ans.cols; j++) {
                    ans.matrix[i][j] = a.matrix[i][j] - b.matrix[i][j];
                }
            }
        }
        return ans;
    }
    static subtract(m1,m2) {
        let a = m1;
        let b = m2;
        let ans = new Matrix(a.rows, a.cols);
        if (a instanceof Matrix && b instanceof Matrix) {

                for (let i = 0; i < ans.rows; i++) {

                    for(let j = 0; j < ans.cols; j++) {

                        ans.matrix[i][j] = a.matrix[i][j] - b.matrix[i][j];
                    }
                }
        }
        return ans;
    }
    static multiply(m1,m2, options) {
        let mode = 'cpu';
        if (options !== undefined) {
            if (options.mode) {
                mode = options.mode;
            }
        }
        if (mode == 'cpu') {
            let a = m1;
            let b = m2;
            let ans = new Matrix(a.rows, b.cols);
            if (m1 instanceof Matrix && m2 instanceof Matrix) {
                if (a.cols !== b.rows) {
                    console.log(a,b)
                    console.error("not compatible");
                    console.trace();
                    return undefined;
                } else {
                    for (let i = 0; i < ans.rows; i++) {
                        for (let j = 0; j < ans.cols; j++) {
                            let sum = 0;
                            for (let k = 0; k < a.cols; k++) {
                              sum += a.matrix[i][k] * b.matrix[k][j];
                            }
                            ans.matrix[i][j] = sum;
                        }
                    }
                }
                return ans;
            }
        } else if (mode == 'gpu') {
            console.log('gpu coming soon');
            mode = 'cpu';
            return Matrix.multiply(m1,m2)
        } else {
            console.error('Dann Error: mode specified is not valid');
            console.trace();
            return;
        }

    }
    static make(rows,cols) {
        let m = [];
        for (let i = 0; i < rows; i++) {
            m[i] = [];
            for (let j = 0; j < cols; j++) {
                m[i][j] = 0;
            }
        }
        return m;
    }
    insert(value,x,y) {
        if (typeof value !== 'number') {
            console.error('Dann error: first "value" argument is not a number');
            console.trace();
            return;
        }
        if (typeof x !== 'number') {
            console.error('Dann error: second "x" argument is not a number');
            console.trace();
            return;
        }
        if (typeof y !== 'number') {
            console.error('Dann error: third "y" argument is not a number');
            console.trace();
            return;
        }
        if ((x < this.cols) && (y < this.rows)) {
            this.matrix[y][x] = value;
            return;
        } else {
            console.error('Dann error: x,y arguments exceed the matrix dimensions.');
            console.trace();
        }
    }
    addRandom(magnitude,prob) {
        for (let i = 0; i < this.rows; i++) {
            for(let j = 0; j < this.cols; j++) {
                let w = this.matrix[i][j];
                let ran = random(0,1);
                if (ran < prob) {
                    this.matrix[i][j] += w*random(-magnitude,magnitude);
                }
            }
        }
    }
    addPrecent(magnitude) {
        for (let i = 0; i < this.rows; i++) {
            for(let j = 0; j < this.cols; j++) {
                let w = this.matrix[i][j];
                this.matrix[i][j] += w*magnitude;
            }
        }
    }
    set(matrix) {
        if (typeof matrix.length == 'number' && typeof matrix[0].length == 'number' && typeof matrix == 'object') {
            this.matrix = matrix;
            this.rows = matrix.length;
            this.cols = matrix[0].length;
        } else {
            console.error('Dann error: the argument of set(); must be an array within an array. Here is an example: [[1,0],[0,1]]');
            console.trace();
            return;
        }
    }
    add(n) {
        if (n instanceof Matrix) {
            if (this.rows !== n.rows || this.cols !== n.cols) {
                return;
            } else {
                for (let i = 0; i < this.rows; i++) {
                    for(let j = 0; j < this.cols; j++) {
                        this.matrix[i][j] += n.matrix[i][j];
                    }
                }
            }

        } else {
            for (let i = 0; i < this.rows; i++) {
                for(let j = 0; j < this.cols; j++) {
                    this.matrix[i][j] += n;
                }
            }
        }
    }
    sub(n) {
        for (let i = 0; i < this.rows; i++) {
            for(let j = 0; j < this.cols; j++) {
                this.matrix[i][j] -= n;
            }
        }
    }
    mult(n) {
        if (n instanceof Matrix) {
            if (this.rows !== n.rows || this.cols !== n.cols) {
                console.log("rows of A must match rows of B")
                return;
            } else {
                for (let i = 0; i < this.rows; i++) {
                    for(let j = 0; j < this.cols; j++) {
                        this.matrix[i][j] *= n.matrix[i][j];
                    }
                }
            }
        } else {
            for (let i = 0; i < this.rows; i++) {
                for(let j = 0; j < this.cols; j++) {
                    this.matrix[i][j] *= n;
                }
            }
        }
    }
    log(options) {
        let dec = 1000;
        let table = false;
        if (options !== undefined) {
            if (options.decimals) {
                dec = pow(10,options.decimals);
            }
            if (options.table) {
                table = options.table;
            }
        }
        let m = new Matrix(this.rows,this.cols);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                let v = this.matrix[i][j];
                m.insert(round(v*dec)/dec,j,i);
            }
        }
        if (table) {
            console.table(m.matrix);
        } else {
            console.log(m);
        }
    }
    initiate(value) {
        let v = 0;
        if (value !== undefined) {
            if (typeof value == 'number') {
                v = value;
            } else {
                console.error('Dann error: the value entered as an argument is not a number');
                console.trace();
                return;
            }
        }
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                this.matrix[i][j] = v;
            }
        }
    }
    map(f) {
        for (let i = 0; i < this.rows; i++) {
            for(let j = 0; j < this.cols; j++) {
                let v = this.matrix[i][j];
                this.matrix[i][j] = f(v);
            }
        }
    }
    randomize(min,max) {
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                this.matrix[i][j] = random(min,max);
            }
        }
    }
}

class Layer {
    constructor(type,arg1,arg2,arg3,arg4,arg5) {
        this.type = type;
        this.subtype = Layer.getSubtype(type);
        if (this.type == 'hidden' || this.type == 'output') {
            this.size = arg1;
            let obj = Layer.stringTofunc(arg2);
            this.setFunc(obj);
            this.layer = new Matrix(this.size,1);
        } else if (this.type == 'input') {
            this.size = arg1;
            this.layer = new Matrix(this.size,1);
        } else if (this.subtype == 'pool') {
            this.stride = arg3;
            this.sampleSize = arg2;
            this.inputSize = arg1;
            if (arg4 !== undefined && arg5 !== undefined) {
                this.sizeX = arg4;
                this.sizeY = arg5;
            } else {
                this.sizeX = Math.sqrt(this.inputSize);
                this.sizeY = this.sizeX;
                if (this.sizeX !== Math.floor(this.sizeX)) {
                    console.error("Dann Error: the array can not be set in a square matrix");
                    console.trace();
                    return;
                }
            }
            this.size = Layer.getPoolOutputLength(arg1,arg2,arg3,this.sizeX,this.sizeY);
            let divx = this.inputSize/this.sizeX;
            let divy = this.inputSize/this.sizeY;
            if (divx !== Math.floor(divx) && divy !== Math.floor(divy)) {
                console.error("Dann Error: the width & height value specified to arrange the inputted array as a matrix are not valid. (The array length must be divisible by the width & height values.)");
                console.trace();
                return;
            }
            if (this.size !== Math.floor(this.size)) {
                console.error("Dann Error: the Width must be divisible by the stride (jumps size). Width is the root of the array's length.");
                console.trace();
                return;
            }
            this.input = new Matrix(this.inputSize,1);
            this.layer = new Matrix(this.size,1);
            // picking the pooling function:
            let prefix = Layer.getPrefix(this.type,4);
            this.pickFunc = poolfuncs[prefix];
            this.downsample = function (data,f,s) {
                this.input = Matrix.fromArray(data);
                let samples = Layer.selectPools(data,f,s,this.sizeX,this.sizeY);
                let output = [];
                for (let i = 0; i < samples.length; i++) {
                    output[i] = this.pickFunc(samples[i]);
                }
                this.layer = Matrix.fromArray(output);
                return output;
            }
            this.feed = function (data, options) {
                let showLog = false;
                let table = false;
                let f = this.sampleSize;
                let s = this.stride;
                if (options !== undefined) {
                    if (options.log) {
                        showLog = options.log;
                    }
                    if (options.table) {
                        table = options.table;
                    }
                }
                if (data.length !== this.inputSize) {
                    console.error('Dann Error: The data you are trying to feed to this '+this.type+' layer is not the same length as the number of input this layer has.');
                    console.trace();
                    return;
                } else {
                    let downsampled = this.downsample(data,f,s);
                    if (showLog) {
                        if (table) {
                            console.table(downsampled);
                        } else {
                            console.log(downsampled);
                        }
                    }
                    return downsampled;
                }
            }
        } else {
            if (typeof this.type == 'string') {
                console.error("Dann Error: The Layer type '"+this.type+"' is not valid.");
                console.trace();
            } else {
                console.error("Dann Error: You need to specify a valid type of Layer");
                console.trace();
            }
        }
    }
    static stringTofunc(str) {
        let act = str;
        let der = act + '_d';
        let func;
        let func_d;
        if (isBrowser) {
            func = window[act];
            func_d = window[der];
        } else {
            func = activations[act];
            func_d = activations[der];
        }
        if (func !== undefined) {
            if (func_d !== undefined) {
                return {name:act, name_d:der,func:func,func_d:func_d};
            } else {
                console.error("Dann Error: You need to create the derivative of your custom function. The activation function specified '"+str+"' does not have a derivative assigned. The activation function was set to the default 'sigmoid'.");
                console.trace();
                return;
            }
        } else {
            console.error("Dann Error: the activation function '"+str+"' is not a valid activation function. The activation function was set to the default 'sigmoid'.");
            console.trace();
        }
    }
    static getPrefix(str,x) {
        let len = str.length;
        let prefix = str.slice(0,len-4);
        return prefix;
    }
    static getSubtype(str) {
        let len = str.length;
        let subtype = str.slice(len-4,len);
        if (subtype == 'pool') {
            return subtype;
        } else {
            return str;
        }
    }
    static getSqIndex(w,i,j) {
        return (w*j)+i;
    }
    static selectPools(arr,f,s,w,h) {
        let len = arr.length
        if (w !== Math.floor(w)) {
            return;
        } else if (w/s !== Math.floor(w/s)) {
            return;
        }
        let samples = [];
        for (let y = 0; y+f <= h; y+=s) {
            for (let x = 0; x+f <= w; x+=s) {
                let sample = [];
                for (let j = 0; j < f; j++){
                    for (let i = 0; i < f; i++) {
                        sample.push(arr[Layer.getSqIndex(w,i+x,j+y)]);
                    }
                }
                samples.push(sample);
            }
        }
        return samples;
    }
    static getPoolOutputLength(len,f,s,w,h) {
        return ((w-f)/s+1)*((h-f)/s+1);
    }
    setAct(act) {
        let obj = Layer.stringTofunc(act);
        this.setFunc(obj);
    }
    setFunc(obj) {
        if (obj !== undefined) {
            this.actname = obj.name;
            this.actname_d = obj.name_d;
            this.actfunc = obj.func;
            this.actfunc_d = obj.func_d;
        } else {
            return;
        }
    }
    log() {
        console.log(this);
    }
}

class Dann {
    constructor(i=1,o=1) {

        this.i = i;
        this.inputs = new Layer('input',i);

        this.o = o;
        this.outputs = new Layer('output',o,'sigmoid');

        this.Layers = [this.inputs,this.outputs];
        this.weights = [];
        this.biases = [];
        this.errors = [];
        this.gradients = [];

        this.outs = [];
        this.loss = 0;
        this.losses = [];
        this.lr = 0.001;
        this.arch = [i,o];

        this.epoch = 0;
        this.recordLoss = false;

        this.lossfunc = mse;
        this.lossfunc_s = this.lossfunc.name;

    }
    setLossFunction(str) {
        let func = lossfuncs[str];
        if (func == undefined) {
            if (typeof str === 'string') {
                console.error("Dann Error: '"+str+"' is not a valid loss function, as a result, the model's loss function is set to 'mse' by default.");
                console.trace();
                return;
            } else {
                console.error("Dann Error: Did not detect string value, as a result, the loss function is set to 'mse' by default.");
                console.trace();
                return;
            }
            str = 'mse';
        }
        this.lossfunc_s = str
        this.lossfunc = func;
    }
    outputActivation(act) {
        if (activations[act] == undefined && !isBrowser) {
            if (typeof act === 'string') {
                console.error("Dann Error: '" +act+ "' is not a valid activation function, as a result, the activation function is set to 'sigmoid' by default.");
                console.trace();
                return;
            } else {
                console.error("Dann Error: Did not detect a string value, as a result, the activation function is set to 'sigmoid' by default.");
                console.trace();
                return;
            }
            act = 'sigmoid';
        }
        this.Layers[this.Layers.length-1].setAct(act);

    }
    makeWeights(arg1,arg2) {
        let min = -1;
        let max = 1;
        if (arg1 !== undefined && arg2 !== undefined) {
            min = arg1;
            max = arg2;
        }
        for (let i = 0; i < this.Layers.length-1;i++) {

            let previousLayerObj = this.Layers[i];
            let layerObj = this.Layers[i+1];

            let weights = new Matrix(layerObj.layer.rows,previousLayerObj.layer.rows);
            let biases = new Matrix(layerObj.layer.rows,1);

            weights.randomize(min,max);
            biases.randomize(1,-1);
            this.weights[i] = weights;
            this.biases[i] = biases;

            this.errors[i] = new Matrix(layerObj.layer.rows,1);
            this.gradients[i] = new Matrix(layerObj.layer.rows,1);

            if (layerObj.actfunc == undefined) {
                let obj = Layer.stringTofunc('sigmoid');
                layerObj.setFunc(obj);
            }
        }
        for (let i = 0; i<this.Layers.length;i++) {
            let layerObj = this.Layers[i];
            this.arch[i] = layerObj.layer.rows;
        }
    }
    addHiddenLayer(size, act) {
        if (activations[act] == undefined) {
            if (typeof act === 'string') {
                console.error("Dann Error: '" +act+ "' is not a valid activation function, as a result, the activation function is set to 'sigmoid' by default.");
                console.trace();
                return;
            } else {
                console.error("Dann Error: Did not detect a string value, as a result, the activation function is set to 'sigmoid' by default.");
                console.trace();
                return;
            }
            act = 'sigmoid';
        }
        let layer = new Layer('hidden',size,act);
        this.Layers.splice(this.Layers.length-1,0,layer);
    }
    feedForward(inputs, options) {

        //optional parameter values:
        let showLog = false;
        let mode = 'cpu';
        let table = false;

        //optional parameters:
        if (options !== undefined) {
            if (options.log !== undefined) {
                showLog = options.log;
            } else {
                showLog = false;
            }
            if (options.table !== undefined) {
                table = options.table;
            }
            if (options.mode !== undefined) {
                mode = options.mode;
                if (mode == 'gpu') {
                    console.warn('Gpu support in the works.')
                    mode = 'cpu';
                }
            } else {
                mode = 'cpu';
            }
        }

        if (inputs.length == this.i) {
            this.Layers[0].layer = Matrix.fromArray(inputs);
        } else {
            for (let i = 0; i < this.o; i++) {
                this.outs[i] = 0;
            }
            console.error('Dann Error: The input array length does not match the number of inputs the dannjs model has.');
            console.trace();
            return this.outs;
        }
        if (this.weights.length === 0) {
            console.error('Dann Error: The weights were not initiated. Please use the Dann.makeWeights(); function after the initialization of the layers.');
            this.makeWeights();
        }

        for(let i = 0; i < this.weights.length;i++) {
            let pLayer = this.Layers[i];

            let layerObj = this.Layers[i+1];

            layerObj.layer = Matrix.multiply(this.weights[i],pLayer.layer);
            layerObj.layer.add(this.biases[i]);
            layerObj.layer.map(layerObj.actfunc);
        }

        this.outs = Matrix.toArray(this.Layers[this.Layers.length-1].layer);

        if (showLog == true) {
            if (table == true) {
                console.log('Prediction: ');
                console.table(this.outs);
            } else {
                console.log('Prediction: ',this.outs);
            }
        }
        return this.outs;
    }
    backpropagate(inputs, t, options) {

        //optional parameter values:
        let showLog = false;
        let mode = 'cpu';
        let recordLoss = false;
        let table = false;

        //optional parameters:
        if (options !== undefined) {
            if (options.log !== undefined) {
                showLog = options.log;
            } else {
                showLog = false;
            }
            if (options.table !== undefined) {
                table = options.table;
            }
            if (options.mode !== undefined) {
                mode = options.mode;
                if (mode == 'gpu') {
                    console.log('gpu version coming soon');
                }
            } else {
                mode = 'cpu';
            }
            if (options.saveLoss !== undefined) {
                recordLoss = options.saveLoss;
            } else {
                recordLoss = true;
            }
        }

        let targets = new Matrix(0,0);
        if (t.length == this.o) {
            targets = Matrix.fromArray(t);
        } else {
            console.error('Dann Error: The target array length does not match the number of ouputs the dannjs model has.');
            console.trace();
            return;
        }
        if (typeof this.lr !== 'number') {
            console.error('Dann Error: The learning rate specified (Dann.lr property) is not a number.');
            console.trace();
            return;
        }

        this.outs = this.feedForward(inputs, {log:false,mode:mode});
        this.errors[this.errors.length-1] = Matrix.subtract(targets, this.Layers[this.Layers.length-1].layer);
        this.gradients[this.gradients.length-1] = Matrix.map(this.Layers[this.Layers.length-1].layer,this.Layers[this.Layers.length-1].actfunc_d);
        this.gradients[this.gradients.length-1].mult(this.errors[this.errors.length-1]);
        this.gradients[this.gradients.length-1].mult(this.lr);

        for (let i = this.weights.length-1; i > 0;i--) {

            let h_t = Matrix.transpose(this.Layers[i].layer);
            let weights_deltas = Matrix.multiply(this.gradients[i],h_t);

            this.weights[i].add(weights_deltas);
            this.biases[i].add(this.gradients[i]);

            let weights_t = Matrix.transpose(this.weights[i]);
            this.errors[i-1] = Matrix.multiply(weights_t,this.errors[i]);
            this.gradients[i-1] = Matrix.map(this.Layers[i].layer, this.Layers[i].actfunc_d);
            this.gradients[i-1].mult(this.errors[i-1]);
            this.gradients[i-1].mult(this.lr);
        }

        let i_t = Matrix.transpose(this.Layers[0].layer);
        let weights_deltas = Matrix.multiply(this.gradients[0], i_t);

        this.weights[0].add(weights_deltas);
        this.biases[0].add(this.gradients[0]);

        this.loss = this.lossfunc(this.outs,t);
        if (recordLoss == true) {
            this.losses.push(this.loss);
        }
        if (showLog == true) {
            console.log('Prediction: ');
            if (table) {
                console.table(this.outs);
            } else {
                console.log(this.outs);
            }
            console.log('target: ');
            if (table) {
                console.table(t);
            } else {
                console.log(t);
            }
            console.log('Loss: ',this.loss);
        }
    }
    mutateRandom(randomFactor,probability) {

        if (typeof randomFactor !== 'number') {
            console.error('Dann Error: Dann.mutateRandom(); range argument must be a number.');
            console.trace();
            return;
        }
        if (probability !== undefined) {
            if (typeof probability !== 'number') {
                console.error('Dann Error: Dann.mutateRandom(); probability argument must be a number.');
                console.trace();
                return;
            }
        } else {
            probability = 1;
        }

        for (let i = 0; i < this.Layers.length;i++) {
            this.Layers[i].layer.addRandom(randomFactor,probability);
        }
    }
    mutateAdd(randomFactor) {
        if (typeof randomFactor !== 'number') {

            console.error('Dann Error: Dann.mutateAdd(); percent argument must be a number.');
            console.trace();
            return;
        }
        for (let i = 0; i < this.Layers.length;i++) {
            this.Layers[i].layer.addPrecent(randomFactor);
        }
    }
    // applyToModel(dataOBJ) {
    //
    // }
    save(name, options) {
        let path;
        let overwritten = false;
        let report = false;
        let result = 0;
        let rstr = 'none';
        //options
        if (options !== undefined) {
            if (options.report !== undefined) {
                report = options.report;
            }
            if (options.test !== undefined) {
                if (typeof options.test == 'function') {
                    let testfunc = options.test;
                    result = testfunc()*100;
                    rstr = result+"%"
                } else {
                    console.error("Dann Error: the test option can only be a function.");
                    console.trace();
                }
            }
        }
        //weights
        let wdata = [];
        for (let i = 0; i < this.weights.length;i++) {
            wdata[i] =  JSON.stringify(this.weights[i].matrix);
        }
        let w_str = JSON.stringify(wdata);
        //layers
        let ldata = [];
        for (let i = 0; i < this.Layers.length;i++) {
            ldata[i] =  JSON.stringify(this.Layers[i]);
        }
        let l_str = JSON.stringify(ldata);
        //biases
        let bdata = [];
        for (let i = 0; i < this.biases.length;i++) {
            bdata[i] =  JSON.stringify(this.biases[i].matrix);
        }
        let b_str = JSON.stringify(bdata);
        //errors
        let edata = [];
        for (let i = 0; i < this.errors.length;i++) {
            edata[i] =  JSON.stringify(this.errors[i].matrix);
        }
        let e_str = JSON.stringify(edata);
        //gradients
        let gdata = [];
        for (let i = 0; i < this.gradients.length;i++) {
            gdata[i] =  JSON.stringify(this.gradients[i].matrix);
        }
        let g_str = JSON.stringify(gdata);
        let dataOBJ = {wstr: w_str,lstr:l_str,bstr:b_str,estr:e_str,gstr:g_str,arch:this.arch,lrate:this.lr,lf:this.lossfunc_s,loss:this.loss,e:this.epoch};

        if (isBrowser) {
            downloadSTR(dataOBJ,name);
        } else {
            path = './savedDanns/'+name+'/dannData.json';
            if (fs.existsSync(path)) {
                overwritten = true;
            }
            if (!fs.existsSync('./savedDanns')){
                fs.mkdirSync('./savedDanns');
            }
            if (!fs.existsSync('./savedDanns/'+name)){
                fs.mkdirSync('./savedDanns/'+name);
            }
            if (report == true) {
                let acts = [];
                for (let i = 1; i < this.arch.length;i++) {
                    acts[i-1] = this.Layers[i].actname;
                }
                let csvFile = [];
                csvFile.push(['Dann','train report']);
                csvFile.push(['Arch: ', this.arch]);
                csvFile.push(['Acts: ', acts]);
                csvFile.push(['Lr: ', this.lr]);
                csvFile.push(['Epoch:',this.epoch]);

                if (typeof options.test == 'function') {
                    csvFile.push(['Accuracy:',rstr]);
                }
                csvFile.push(['Index','AvgLoss']);
                for (let i = 0; i < this.losses.length; i++) {
                    csvFile.push([i+1,this.losses[i]]);
                }

                w.writeToPath('./savedDanns/'+name+'/report.csv', csvFile)
                .on('error', err => console.error(err))
                .on('finish', () => console.log('saved training report at '+'./savedDanns/'+name+'/report.csv'));

            }

            fs.writeFileSync(path, JSON.stringify(dataOBJ));
            if (overwritten == true) {
                console.log('\x1b[32m',"");
                this.log();
                console.log("Succesfully overwritten the Dann Model at ./savedDanns/"+name+"/dannData.json ");
                console.log("\x1b[0m","");
            } else {
                console.log("\x1b[32m","");
                this.log();
                console.log("Succesfully saved the Dann Model at ./savedDanns/"+name+"/dannData.json ");
                console.log("\x1b[0m","");
            }
        }

    }
    applyToModel(dataOBJ) {
        this.i = dataOBJ.arch[0];
        this.inputs = new Matrix(this.i, 1);
        this.o = dataOBJ.arch[dataOBJ.arch.length-1];
        this.outputs = new Matrix(this.o,1);

        let slayers = JSON.parse(dataOBJ.lstr);
        for (let i = 0; i < slayers.length; i++) {
            let data = JSON.parse(slayers[i]);
            let layerObj = new Layer(data.type,data.size,data.actname);
            this.Layers[i] = layerObj;
        }
        this.makeWeights();
        let sweights = JSON.parse(dataOBJ.wstr);
        for (let i = 0; i < sweights.length; i++) {
            this.weights[i].set(JSON.parse(sweights[i]));
        }
        let sbiases = JSON.parse(dataOBJ.bstr);
        for (let i = 0; i < sbiases.length; i++) {
            this.biases[i].set(JSON.parse(sbiases[i]));
        }
        let serrors = JSON.parse(dataOBJ.estr);
        for (let i = 0; i < serrors.length; i++) {
            this.errors[i].set(JSON.parse(serrors[i]));
        }
        let sgradients = JSON.parse(dataOBJ.gstr);
        for (let i = 0; i < sgradients.length; i++) {
            this.gradients[i].set(JSON.parse(sgradients[i]));
        }

        this.lossfunc_s = dataOBJ.lf;
        if (isBrowser) {
            this.lossfunc = window[dataOBJ.lf];
        } else {
            this.lossfunc = lossfuncs[dataOBJ.lf];
        }

        this.outs = Matrix.toArray(this.Layers[this.Layers.length-1]);
        this.loss = dataOBJ.loss;
        this.losses = [];
        this.lr = dataOBJ.lrate;
        this.arch = dataOBJ.arch;
        this.epoch = dataOBJ.e;

        if (isBrowser) {
            console.log("");
            //console.log("Succesfully loaded the Dann Model");
        } else {
            console.log('\x1b[32m',"");
            //console.log("Succesfully loaded the Dann Model");
            console.log("\x1b[0m","");
        }
        return this;
    }
    static createModelFromJSON(model,dataOBJ) {
        let nn = new Dann(0,0);
        nn.applyToModel(JSON.stringify(dataOBJ));
        return Object.assign(nn,model);;
    }
    static load(name) {
        if (isBrowser) {
            nn.load(name, function () {
                return this;
            });
        } else {
            nn.load(name, function () {
                return this;
            });
        }
    }
    load(name, callback) {
        if (isBrowser) {
            upload(name,callback);

        } else {
            let path = './savedDanns/'+name+'/dannData.json';
            if (fs.existsSync(path)) {
                let text = fs.readFileSync(path, 'utf8');
                let xdata =  JSON.parse(text);

                let newNN = xdata;
                this.applyToModel(newNN);
                if (callback !== undefined) {
                    callback(false);
                }

            } else {

                if (callback !== undefined) {
                    callback(true);
                } else {
                    console.error('Dann Error: file not found');
                    console.trace();
                }

            }
        }
    }
    log(options) {

        //Optional parameters values:
        let showWeights = false;
        let showGradients = false;
        let showErrors = false;
        let showBiases = false;
        let showBaseSettings = false;
        let showOther = false;
        let showDetailedLayers = false;
        let table = false;
        let decimals = 1000;

        //Optional parameters:
        if (options !== undefined) {
            if (options.weights) {
                showWeights = options.weights;
            }
            if (options.gradients) {
                showGradients = options.gradients;
            }
            if (options.errors) {
                showErrors = options.errors;
            }
            if (options.biases) {
                showBiases = options.biases;
            }
            if (options.struct) {
                showBaseSettings = options.struct;
            }
            if (options.misc) {
                showOther = options.misc;
            }
            if (options.table) {
                table = options.table;
            }
            if (options.layers) {
                showDetailedLayers = options.layers;
                showBaseSettings = options.layers;
            }
            if (options.details) {
                let v = options.details;
                showGradients = v;
                showWeights = v;
                showErrors = v;
                showBiases = v;
                showBaseSettings = v;
                showOther = v;
                showDetailedLayers = v;
            }
            if (options.decimals) {
                if (options.decimals > 21) {
                    console.error('Dann Error: Maximum number of decimals is 21.');
                    console.trace();
                    options.decimals = 21;
                }
                decimals = pow(10,options.decimals);
            }
        } else {
            showBaseSettings = true;
            showOther = true;
        }
        if (this.weights.length === 0) {
            // make weights if they weren't made allready.
            this.makeWeights();
        }
        if (options == undefined || (options !== undefined && options.details == true)) {
            console.log("Dann NeuralNetwork:");
        }
        if (showBaseSettings) {
            console.log(" ");
            console.log("  Layers:")
            for (let i = 0; i < this.Layers.length;i++) {
                let layerObj = this.Layers[i];
                let str = layerObj.type+" Layer: ";
                let afunc = "";
                if (i == 0) {
                    str = "Input Layer:   ";
                    afunc = "       ";
                } else if (i == layerObj.length-1) {
                    str = "Output Layer:  ";
                    afunc = "  ("+layerObj.actname+")";
                } else {


                    afunc = "  ("+layerObj.actname+")";
                }
                console.log("    " + str + layerObj.size + afunc);
                if (showDetailedLayers) {
                    console.log(this.Layers[i]);
                }
            }
        }
        if (showErrors) {
            console.log(" ");
            console.log("  Errors:");
            for (let i = 0; i < this.errors.length; i++) {
                let e = Matrix.toArray(this.errors[i]);
                let er = [];
                for (let j = 0 ; j < e.length; j++) {
                    er[j] = round(e[j]*decimals)/decimals;
                }
                console.log(er);

            }
        }
        if (showGradients) {
            console.log(" ");
            console.log("  Gradients:");
            for (let i = 0; i < this.gradients.length; i++) {
                let g = Matrix.toArray(this.gradients[i]);
                let gr = [];
                for (let j = 0 ; j < g.length; j++) {
                    gr[j] = round(g[j]*decimals)/decimals;
                }
                console.log(gr);
            }
        }
        if (showWeights) {
            console.log(" ");
            console.log("  Weights:");
            for (let i = 0; i < this.weights.length; i++) {
                let w = this.weights[i];
                w.log({decimals:options.decimals,table:table});
            }
        }
        if (showBiases) {
            console.log(" ");
            console.log("  Biases:");
            for (let i = 0; i < this.biases.length; i++) {
                let b = Matrix.toArray(this.biases[i]);
                let br = [];
                for (let j = 0 ; j < b.length; j++) {
                    br[j] = round(b[j]*decimals)/decimals;
                }
                console.log(br);
            }
        }
        if (showOther) {
            console.log(" ");
            console.log("  Other Values: ");
            console.log(" ");
            console.log("    Learning rate: " + this.lr);
            console.log("    Loss Function: " + this.lossfunc.name);
            console.log("    Current Epoch: " + this.epoch);
            console.log("    Latest Loss: " + this.loss);
        }
        console.log(' ')
        return;
    }
}

// Browser Download function:
function downloadSTR(obj, exportName) {
  let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));
  let downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute("href",     dataStr);
  downloadAnchorNode.setAttribute("download", exportName + ".json");
  document.body.appendChild(downloadAnchorNode); // required for firefox
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}
// create the html element to upload the dannData.json
function upload(modelname,callback) {
    let funcstr = '';
    if (callback !== undefined) {
        funcstr = ','+callback.toString();
    }

    let downloadAnchorNode = document.createElement('input');
    downloadAnchorNode.setAttribute("type", "file");
    downloadAnchorNode.setAttribute("id", "upload");
    downloadAnchorNode.setAttribute("onChange", "clickedUpload("+modelname+funcstr+")");
    document.body.appendChild(downloadAnchorNode);


}
// function called when the html element is clicked
function clickedUpload(nn,callback) {

    let callfunc = eval(callback);
    let element = document.getElementById('upload');
    let file = element.files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    let newNN;
    reader.onload = function() {
        let xdata =  JSON.parse(reader.result);
        newNN = xdata;
        nn.applyToModel(newNN);
        if (callfunc !== undefined) {
            callfunc(false);
        }
    };
    reader.onerror = function() {
        if (callfunc !== undefined) {
            callfunc(true);
        } else {
            console.log(reader.error);
        }
    };
    element.remove();
}

// Exporting Functions:
let activations = {
    leakySigmoid: leakySigmoid,
    leakySigmoid_d: leakySigmoid_d,
    sigmoid: sigmoid,
    sigmoid_d: sigmoid_d,
    tanH: tanH,
    tanH_d: tanH_d,
    siLU: siLU,
    siLU_d: siLU_d,
    reLU: reLU,
    reLU_d: reLU_d,
    leakyReLU: leakyReLU,
    leakyReLU_d: leakyReLU_d,
    leakyReLUCapped: leakyReLUCapped,
    leakyReLUCapped_d: leakyReLUCapped_d
}
let lossfuncs = {
    mae: mae,
    bce: bce,
    lcl: lcl,
    mbe: mbe,
    mce: mce,
    mse: mse,
    rmse: rmse
}
let poolfuncs = {
    max: max,
    min: min,
    avg: avg
}
//Node Module Exports:
if (!isBrowser) {
    module.exports = {
        dann: Dann,
        layer: Layer,
        matrix: Matrix,
        activations: activations,
        lossfuncs: lossfuncs,
        poolfuncs: poolfuncs
    }
}
