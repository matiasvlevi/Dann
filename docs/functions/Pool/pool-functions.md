<br/>

Pooling functions take a list of values, and outputs one numeric value. The value `k` represents the list of values and `n` represents the length of this list.

These functions below are provided by default, see [how to add more](https://github.com/matiasvlevi/Dann/wiki/Adding-custom-pool-functions)

<br/>

### avgpool
Averages values in the list.<br/>
Definition:

<img src="https://latex.codecogs.com/svg.latex?\%20{\color{white} P(k) = \frac{1}{n}\sum_{i=0}^{n} k_i" />

<br/>

### maxpool
Takes the largest value in the list.<br/>
Definition:

<img src="https://latex.codecogs.com/svg.latex?\%20{\color{white} P(k) = max(k)}" />

<br/>

### minpool
Takes the smallest value in the list.<br/>
Definition:

<img src="https://latex.codecogs.com/svg.latex?\%20{\color{white} P(k) = min(k)}" />

<br/><br/>