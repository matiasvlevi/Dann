// Dann.js Neural Network Engine
// Free to use library
//
// By: Matias Vazquez-Levi
// https://github.com/matiasvlevi

// Dann:
class Dann {
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
    feedForward(inputs) {

        this.Layers[0] = Matrix.fromArray(inputs);

        for(let i = 0; i < this.weights.length;i++) {
            this.Layers[i+1] = Matrix.multiply(this.weights[i],this.Layers[i]);
            this.Layers[i+1].add(this.biases[i]);
            this.Layers[i+1].map(this.aFunc[i]);
        }
        for (let i = 0; i < this.o; i++) {
            this.outs[i] = round((Matrix.toArray(this.Layers[this.Layers.length-1])[i])*1000)/1000;

       }
        return this.outs;

    }
    backpropagate(inputs, t) {
        let targets = Matrix.fromArray(t);

        let appLr = this.lr;

        this.outs = this.feedForward(inputs);

        this.errors[this.errors.length-1] = Matrix.subtract(targets, this.Layers[this.Layers.length-1]);

        this.gradients[this.gradients.length-1] = Matrix.map(this.Layers[this.Layers.length-1],this.aFunc_d[this.aFunc_d.length-1]);
        this.gradients[this.gradients.length-1].mult(this.errors[this.errors.length-1]);
        this.gradients[this.gradients.length-1].mult(appLr);

        for (let i = this.weights.length-1; i > 0;i--) {
            let h_t = Matrix.transpose(this.Layers[i]);

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
    activation(layer,act) {

        let nor = (act.name);
        let der = (act.name + "_d");
        this.aFunc[layer] = window[nor];
        this.aFunc_d[layer] = window[der];
    }
    setActivations(act) {
        for (let i = 0; i < this.Layers.length-1; i++) {
            this.aFunc[i] = window[act.name];
            this.aFunc_d[i] = window[act.name +"_d"];
        }
    }
    makeWeights() {
        //this function should be called after the initialisation of the hidden layers.
        for (let i = 0; i < this.Layers.length-1;i++) {


            let weights = new Matrix(this.Layers[i+1].rows,this.Layers[i].rows);
            let biases = new Matrix(this.Layers[i+1].rows,1);

            weights.randomize();
            biases.randomize();
            this.weights[i] = weights;
            this.biases[i] = biases;

            this.errors[i] = new Matrix(this.Layers[i+1].rows,1);
            this.gradients[i] = new Matrix(this.Layers[i+1].rows,1);
            if (this.aFunc[i] == undefined) {
                this.aFunc[i] = window["sigmoid"];
                this.aFunc_d[i] = window["sigmoid_d"];
            }


        }
    }
    addHiddenLayer(size, act) {
        let layer = new Matrix(size,1);
        let index = this.Layers.length-2;
        this.Layers.splice(this.Layers.length-1,0,layer);
        if (act !== undefined) {

            let nor = (act.name);
            let der = (act.name + "_d");
            this.aFunc[index] = window[nor];
            this.aFunc_d[index] = window[der];
        }
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
        console.log("Dann NeuralNetwork:")
        console.log(" ");
        console.log("  Layers:")
        for (let i = 0; i < this.Layers.length;i++) {
            let str = "Hidden Layer: ";
            let afunc = "";
            if (i == 0) {
                str = " Input Layer: ";
                afunc = "       ";
            } else if (i == this.Layers.length-1) {
                str = "Output Layer: ";
                afunc = "  ("+this.aFunc[i-1].name+")";
            } else {
                afunc = "  ("+this.aFunc[i-1].name+")";
            }
            console.log("    " + str + Matrix.toArray(this.Layers[i]).length + afunc);
        }
        console.log(" ");
        console.log("  Other Values: ");
        console.log("    Learning rate: " + this.lr);
        console.log("    Latest loss: " + this.loss);

    }
}
// Matrix Math:
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
//Plot any Dann neural Network:
class NetPlot {
  constructor(x,y,w,h,nn) {
    this.pos = createVector(x,y);
    this.w = w;
    this.h = h;
    this.nn = nn;
    this.spacingY = h/(this.nn.i-1);
    this.layerSpacing = w/(this.nn.Layers.length-1);
    console.log(this.layerSpacing)
    this.bufferY = this.spacingY/2;
  }
  renderWeights() {
    stroke(100);
    for (let i = 0; i < this.nn.Layers.length; i++) {

      let layer = Matrix.toArray(this.nn.Layers[i]);

      this.spacingY = (this.h/(layer.length));
      this.bufferY = this.spacingY/2

      if (i !== this.nn.Layers.length-1) {

        let nextLayer = Matrix.toArray(this.nn.Layers[i+1]);
        let sY = (this.h/(nextLayer.length));
        let bY = sY/2;

        for (let j = 0; j < nextLayer.length; j++) {

          let x = this.pos.x+((i+1)*this.layerSpacing);
          let y = this.pos.y+bY+((j)*sY);
          let x2 = 0;
          let y2 = 0

          for (let k = 0; k < layer.length; k++) {

            let weights = (this.nn.weights[i]).matrix;
            x2 = this.pos.x+((i)*this.layerSpacing);
            y2 = this.pos.y+this.bufferY+((k)*this.spacingY);
            stroke(weightToColor(weights[j][k]));
            strokeWeight(map(int(weights[j][k]*1000)/1000,0,1,1,2));
            line(x,y,x2,y2);

          }

        }
      }


    }
  }
  renderLayers() {
    fill(255);
    stroke(0);
    strokeWeight(1)
    for (let i = 0; i < this.nn.Layers.length; i++) {

      let layer = Matrix.toArray(this.nn.Layers[i]);
      this.spacingY = (this.h/(layer.length));
      this.bufferY = this.spacingY/2;
      for (let j = 0; j < layer.length; j++) {

        let x = this.pos.x+((i)*this.layerSpacing);
        let y = this.pos.y+this.bufferY+((j)*this.spacingY);

        ellipse(x,y,8,8);

      }
    }
  }
  render() {
    noFill();
    stroke(0);
    rect(this.pos.x,this.pos.y,this.w,this.h);
    if (dragged&&mouseX >= this.pos.x && mouseX<=this.pos.x+this.w&&mouseY >= this.pos.y&&mouseY<=this.pos.y+this.h) {
        this.pos.x = mouseX-(this.w/2);
        this.pos.y = mouseY-(this.h/2);
    }
    this.renderWeights();
    this.renderLayers();

  }
}
// Graph (graph any values over time):
class Graph {
    constructor(x,y,w,h) {
        this.pos = createVector(x,y);
        this.w = w;
        this.h = h;
        this.s = 1;
        this.min = 0;
        this.max = 1;
        this.lines = [];
        this.color = [];
        this.dragged = false;
    }
    addValue(x,color) {
        this.color.push(color)
        this.lines.push(x);
    }
    update() {
        noFill();
        rect(this.pos.x,this.pos.y,this.w,this.h);
        if (drag == undefined) {
          let dragged = false;
        }
        if (dragged&&mouseX >= this.pos.x && mouseX<=this.pos.x+this.w&&mouseY >= this.pos.y&&mouseY<=this.pos.y+this.h) {
          this.pos.x = mouseX-(this.w/2);
          this.pos.y = mouseY-(this.h/2);
        }
        for (let a = 0; a < this.lines.length; a++) {
            stroke(this.color[a]);
            beginShape();
            if (this.lines[a].length/int(this.s) >= this.w*int(this.s)) {
                this.s*=2;
            }

            for (let i = 0; i < int(this.lines[a].length/int(this.s)); i+=int(this.s)) {
                vertex((i/int(this.s))+this.pos.x, (map(this.lines[a][i*int(this.s)],this.min,this.max,this.pos.y,this.pos.y+this.h)));
            }
            endShape();
        }
        noStroke();
    }

}

//Activations:
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

    return 0.5*(top/down)+0.5;
}
function tanH_d(x) {

    return 1 - pow(tanH(x),2);
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
function cosh(x) {
    return (exp(x)+exp(-x)/2);
}
function sech(x) {
    return 1/cosh(x);
}
function tanH(x) {

    let top = exp(x) - exp(-x);
    let down = exp(x)+ exp(-x);

    return (top/down);
}

function sigmoidal_1(x) {
    let u = 2;
    if (x <= 0) {
        return (tanH(x)/(1+exp(-x/u)))+x/10;
    } else if (x > 0) {
        return (tanH(x)/(1+exp(-x/u)));
    }

}
function sigmoidal_1_d(x) {
    let u = 2;

    if (x <= 0) {
        let right = (pow(sech(x),2)*(1+exp(-x/2)));
        let top = right + 1/2*exp(-x/2)*tanH(x);
        let down = pow(1+exp(-x/2),2);
        return (top/down)+1/10;
    } else if (x > 0) {
        let top = pow(sech(x),2)*(1+exp(-x/2))-(-1/2*exp(-x/2))*tanH(x);
        let down = pow((1+exp(-x/2)),2);
        return top/down;
    }
}
//Architecture Templates:
function cnn(i,h,o,nn) {
    nn = DANNeuralNetwork(i,o);
    nn.addHiddenLayer(h);
    nn.makeWeights();
    nn.lr = 0.01;
    return nn;
}
function dnn(i,h,h2,o,nn) {
    nn = DANNeuralNetwork(i,o);
    nn.addHiddenLayer(h);
    nn.addHiddenLayer(h2);
    nn.makeWeights();
    nn.lr = 0.01;
    return nn;
}
