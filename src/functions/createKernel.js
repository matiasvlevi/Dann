
function dotProductKernel(outx,outy,gpu) {

    // Creating GPU.js kernel.
    const kernel = gpu.createKernel(function(a, b) {
        let sum = 0;
        for (let i = 0; i < outy; i++) {
            sum += a[this.thread.y][i] * b[i][this.thread.x];
        }
        return sum;
    }).setOutput([outy, outx]);

    //Changing the stringified kernel loop length parameter.
    let skernel = kernel.source.split("outy");
    func = skernel[0] + outy + skernel[1];
    kernel.source = func;

    //Creating a function accepting a Matrix Object instance.
    function dotProd(a,b) {
        if (a.cols !== b.rows) {
            console.error("Dann error: Can't perform gpu dot product because of invalid matrix dimensions.");
            console.trace();
            return undefined;
        } else {
            const m = new Matrix(a.rows,b.cols,{make:false});
            m.set(kernel(a.matrix,b.matrix));
            //Convert float32Arrays to Arrays.
            m.from32()
            return m;
        }

    }

    return dotProd;
}
