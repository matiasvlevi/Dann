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
        let roundData = false;
        let dec = 1000;
        //optional parameters:
        if (options !== undefined) {
            if (options.log !== undefined) {
                showLog = options.log;
            } else {
                showLog = false;
            }
            if (options.decimals !== undefined) {
                if (options.decimals > 21) {
                    console.error('Dann Error: Maximum number of decimals is 21.');
                    console.trace();
                    options.decimals = 21;
                }
                dec = pow(10,options.decimals);
                roundData = true;
            }
            if (options.table !== undefined) {
                table = options.table;

            }
            if (options.mode !== undefined) {
                mode = options.mode;
                if (mode == 'gpu') {
                    console.warn('Gpu support in the works.');

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
            console.warn('Dann Error: The weights were not initiated. Please use the Dann.makeWeights(); function after the initialization of the layers.');
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
        let out = this.outs;
        if (showLog == true) {

            if (roundData == true) {
                out = out.map((x) => (round(x*dec)/dec));
            }
            if (table == true) {
                console.log('Prediction: ');
                console.table(out);
            } else {
                console.log('Prediction: ',out);
            }
        }
        return out;
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
