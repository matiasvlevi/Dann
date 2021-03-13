[Back to Dann](https://github.com/matiasvlevi/Dann/wiki/Dann-Object)

Loss functions written below are provided as default by dannjs, see [how to add more](https://github.com/matiasvlevi/Dann/wiki/Adding-custom-loss-functions)

These functions are represented below with `yhat` being the dannjs model predictions and `y` being the target values. The value `n` represents the length of the model's output array.

<br/>

### bce
Binary Cross Entropy Loss. This function is common in machine learning especially for classification tasks. This loss function is made for binary target outputs, it will not work properly if you set a target value as something other than `0` or `1`.

Definition:
<br/>
<p align="center">
    <img src="https://latex.codecogs.com/svg.latex?\%20{\color{white} H(y,\hat{y}) =-\frac{1}{n}\sum\limits_{i=0}^n \left ( y_i\log(\hat{y_i})+(1-y_i)\log(1-\hat{y_i }) \right)}" />
</p>

<br/><br/>

### mse
Mean Squared Error, this is one of the most commonly used loss functions in deep learning. This function determines a loss value by averaging the square of the difference between the predicted and desired output. It is also the default value for a Dannjs model.

Definition:
<br/>
<p align="center">
    <img src="https://latex.codecogs.com/svg.latex?\%20{\color{white} H(y,\hat{y}) =\frac{1}{n}\sum\limits_{i=0}^n \left ( y_i- \hat{y_i } \right )^2}" />
</p>

<br/><br/>

### mce
Mean Cubed Error, this is an experimental function. Cubing a number can output a negative value, this explains the `|x|`.

Definition:
<br/>
<p align="center">
    <img src="https://latex.codecogs.com/svg.latex?\%20{\color{white} H(y,\hat{y}) =\frac{1}{n}\sum\limits_{i=0}^n \left  |y_i- \hat{y_i } \right|^3}" />
</p>

<br/><br/>

### rmse
Root Mean Squared Error, this function is the root of an mse output.

Definition:
<br/>
<p align="center">
    <img src="https://latex.codecogs.com/svg.latex?\%20{\color{white} H(y,\hat{y}) =\sqrt{MSE(y,\hat{y})}" />
</p>

<br/><br/>

### mae
Mean Absolute Error, this function determines the loss value by averaging the absolute difference between predicted and desired output.

Definition:
<br/>
<p align="center">
    <img src="https://latex.codecogs.com/svg.latex?\%20{\color{white} H(y,\hat{y}) =\frac{1}{n}\sum\limits_{i=0}^n \left | y_i- \hat{y_i } \right |}" />
</p>

<br/><br/>

<br/><br/>

### mbe
Mean Bias Error, this function determines a loss value by averaging the raw difference between the predicted and desired output. The output of this function can be negative, which makes this function less preferable than others.

Definition:
<br/>
<p align="center">
<img src="https://latex.codecogs.com/svg.latex?\%20{\color{white} H(y,\hat{y}) =\frac{1}{n}\sum\limits_{i=0}^n \left ( y_i- \hat{y_i } \right )}" />

</p>

<br/><br/>

### lcl
Log Cosh Loss, this function determines a loss value by averaging the  of the difference between the predicted and desired output.

Definition:
<br/>
<p align="center">
    <img src="https://latex.codecogs.com/svg.latex?\%20\color{white}H(y,\hat{y})%20=\frac{1}{n}\sum\limits_{i=0}^n%20\log{(\cosh{\left%20(%20y_i-%20\hat{y_i%20}%20\right%20)})}" />
</p>


<br/><br/>

### mael
Mean absolute exponential loss, this activaiton function is similar to `mae` but it offers a faster descent when approximately `x = [-30.085,30.085] `.

Definition:
<br/>
<p align="center">
    <img align="center" src="https://latex.codecogs.com/svg.latex?\%20\color{white}g(x)%20=%20\frac{-x%20(e^{-x}%20-1)}{e^{-x}+1}" />
    <br/><br/>
    <img src="https://latex.codecogs.com/svg.latex?\%20\color{white}H(y,\hat{y})%20=\frac{1}{n}%20\sum_{i=0}^{n}%20g(y_i%20-%20\hat{y_i})" />
</p>

<br/><br/>

# Graph

Here is the graphed loss functions. The value `x` is the difference between `y`  and `yhat`

<img src="https://dannjs.org/images/lossgraph.png" />

<br/><br/>
