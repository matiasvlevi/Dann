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
                let v = this.matrix[j][i];
                m.insert(round(v*dec)/dec,i,j);
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
