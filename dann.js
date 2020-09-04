class DANNeuralNetwork {
    constructor(i,o) {

        this.i = i;
        this.inputs = new Matrix(i,1);

        this.o = o;
        this.outputs = new Matrix(o,1);

        this.aFunc = [];
        this.aFunc_d = [];

        this.Layers = [this.inputs,this.outputs];
        this.weights = [];
        this.biases = [];
        this.errors = [];
        this.gradients = [];

        this.outs = [];
        this.loss = 0;
        this.lr = 0.001;




    }
//Functions
    feedFoward(inputs) {

        this.Layers[0] = Matrix.fromArray(inputs);
        //console.log(this.Layers[0])
        for(let i = 0; i < this.weights.length;i++) {
            this.Layers[i+1] = Matrix.multiply(this.weights[i],this.Layers[i]);
            this.Layers[i+1].add(this.biases[i]);
            this.Layers[i+1].map(this.aFunc[i]);
            //console.log(this.Layers[i+1])
        }
        for (let i = 0; i < this.o; i++) {
            this.outs[i] = round((Matrix.toArray(this.Layers[this.Layers.length-1])[i])*1000)/1000;

       }
        return this.outs;

    }
    backpropagate(inputs, t) {
        let targets = Matrix.fromArray(t);

        let appLr = this.lr;

        this.outs = this.feedFoward(inputs);

        this.errors[this.errors.length-1] = Matrix.subtract(targets, this.Layers[this.Layers.length-1]);

        this.gradients[this.gradients.length-1] = Matrix.map(this.Layers[this.Layers.length-1],this.aFunc_d[this.aFunc_d.length-1]);
        this.gradients[this.gradients.length-1].mult(this.errors[this.errors.length-1]);
        this.gradients[this.gradients.length-1].mult(appLr);

        //

        for (let i = this.weights.length-1; i > 0;i--) {
            let h_t = Matrix.transpose(this.Layers[i]);
            //console.log(this.gradients);
            let weights_deltas = Matrix.multiply(this.gradients[i],h_t);

            this.weights[i].add(weights_deltas);
            this.biases[i].add(this.gradients[i]);

            let weights_t = Matrix.transpose(this.weights[i]);
            this.errors[i-1] = Matrix.multiply(weights_t,this.errors[i]);

            this.gradients[i-1] = Matrix.map(this.Layers[i], this.aFunc_d[i-1]);
            this.gradients[i-1].mult(this.errors[i-1]);
            this.gradients[i-1].mult(appLr);
        }


        let i_t = Matrix.transpose(this.Layers[0]);
        let weights_deltas = Matrix.multiply(this.gradients[0], i_t);

        this.weights[0].add(weights_deltas);
        this.biases[0].add(this.gradients[0]);


        this.loss = this.calcMeanLossError(this.outs,t);

    }
    activationsFunctions(layer,function_,function_d) {
        this.aFunc[layer] = function_;
        this.aFunc_d[layer] = function_d;
    }
    makeWeights() {

        //this functions should be called after the initialisation of the hidden layers.
        for (let i = 0; i < this.Layers.length-1;i++) {


            let weights = new Matrix(this.Layers[i+1].rows,this.Layers[i].rows);
            let biases = new Matrix(this.Layers[i+1].rows,1);

            weights.randomize();
            biases.randomize();
            this.weights[i] = weights;
            this.biases[i] = biases;

            this.errors[i] = new Matrix(this.Layers[i+1].rows,1);
            this.gradients[i] = new Matrix(this.Layers[i+1].rows,1);

            this.aFunc[i] = sigmoid;
            this.aFunc_d[i] = sigmoid_d;


        }

        //console.log(this.weights);
    }
    addHiddenLayer(size) {
        let layer = new Matrix(size,1);
        this.Layers.splice(this.Layers.length-1,0,layer);
    }
    calcMeanLossError(arr,target) {
        let sum = 0;
        let ans = 0;
        for (let i = 0; i < this.o; i++) {

            sum += pow(arr[i] - target[i],2);
        }

        ans = sum/this.o;

        return ans;
    }
    log() {

        for (let i = 0; i < this.Layers.length;i++) {
            let str = "Hidden Layer: ";
            if (i == 0) {
                str = "Input Layer: ";
            } else if (i == this.Layers.length-1) {
                str = "Output Layer: ";
            }
            console.log(str + Matrix.toArray(this.Layers[i]));
        }

    }
}

class Matrix {
    constructor(rows,cols) {

        this.rows = rows;
        this.cols = cols;
        this.matrix = [];

        for (let i = 0; i < this.rows; i++) {
            this.matrix[i] = [];
            for (let j = 0; j < this.cols; j++) {
                this.matrix[i][j] = 0;
            }

        }
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
            console.log('Columns and Rows of A must match Columns and Rows of B.');
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
    static multiply(m1,m2) {

        let a = m1;
        let b = m2;

        let ans = new Matrix(a.rows, b.cols);
        if (m1 instanceof Matrix && m2 instanceof Matrix) {
            if (a.cols !== b.rows) {
                console.log("not compatible");
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



    }
    add(n) {

        if (n instanceof Matrix) {
            if (this.rows !== n.rows || this.cols !== n.cols) {
    //            console.log('Columns and Rows of A must match Columns and Rows of B.');
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
                console.log('Columns and Rows of A must match Columns and Rows of B.');
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

    initiate() {
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                this.matrix[i][j] = 1;
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
    randomize() {
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                this.matrix[i][j] = random(-1,1);
            }
        }
    }
}
