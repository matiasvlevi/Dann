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
            this.poolfunc = poolfuncs[prefix];
            this.downsample = function (data,f,s) {
                this.input = Matrix.fromArray(data);
                let samples = Layer.selectPools(data,f,s,this.sizeX,this.sizeY);
                let output = [];
                for (let i = 0; i < samples.length; i++) {
                    output[i] = this.poolfunc(samples[i]);
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
