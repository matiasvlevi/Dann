Matrix.addGrid = function addGrid(m1, m2) {
  let a = m1.matrix;
  let b = m2.matrix;
  let ans = [];
  for (let i = 0; i < a[0].length; i++) {
    ans[i] = [];
    for (let j = 0; j < a[0].length; j++) {
      ans[i].push(a[0][i] + b[j][0]);
    }
  }
  return new Matrix().set(ans);
};
