[Back to Dann](https://github.com/matiasvlevi/Dann/wiki/Dann-Object)
<br/>

Activation functions written below are provided as default, see [how to add more](https://github.com/matiasvlevi/Dann/wiki/Adding-custom-activation-functions)
<br/><br/>

### sigmoid
Sigmoid is the default activation function. This function outputs a value in the range [0,1].


Definition:

<img src="https://latex.codecogs.com/svg.latex?\%20{\color{white}\sigma (x)=\frac{1}{1+e^{-x}}}" />

<br/><br/>

### reLU
reLU activation function. This activation function is easy to compute since it does not require heavy calculations. This function outputs values in a range [0,infinity].


Definition:

<img src="https://latex.codecogs.com/svg.latex?\%20{\color{white} R(x) = \begin{Bmatrix} x ,& x > 0 \\ 0 ,& x\leq 0 \end{Bmatrix}}" />

<br/><br/>

### leakyReLU
Similar to reLU, this activation function is easy to compute. It also allows the output to be negative which solves the "dying reLU neuron" problem. This function outputs values in a range [-infinity,infinity].


Definition:

<img src="https://latex.codecogs.com/svg.latex?\%20{\color{white} R(x) = \begin{Bmatrix} x ,& x > 0 \\ 0.01x ,& x\leq 0 \end{Bmatrix}}" />

<br/><br/>

### tanH
This activation function shares a lot of similarities with sigmoid. Unlike sigmoid,  outputs a value in the range [-1,1].


Definition:

<img src="https://latex.codecogs.com/svg.latex?\%20{\color{white} \tanh(x)=\frac{\left(e^{x}-e^{-x}\right)}{\left(e^{x}+e^{-x}\right)}}" />

<br/><br/>

### siLU
This activation function is a sigmoid's output multiplied by . SiLU shares a lot of similarities with leakyReLU, exept the function does not output negative for the entirety of the negative domain. 

Definition:

<img src="https://latex.codecogs.com/svg.latex?\%20{\color{white} S(x)= x\sigma(x) = \frac{x}{1+e^{-x}}}" />

<br/><br/>

### leakySigmoid
This is an experimental function, it is very simiar to arctan(x). Unlike , this function outputs a value in the range [~ 0,~ 1].

Definition:

<img src="https://latex.codecogs.com/svg.latex?\%20{\color{white}\varsigma(x)=\frac{100+x\left(e^{-x}+1\right)}{100\left(e^{-x}+1\right)}}" />

<br/><br/>
