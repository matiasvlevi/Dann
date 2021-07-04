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

Matrix.addColumn = function addColumn(m1, m2) {
  let a;
  let b;
  if (m1.cols === 1) {
    a = m1;
    b = m2;
  } else if (m2.cols === 1) {
    a = m2;
    b = m1;
  }
  let ans = new Matrix(b.rows, b.cols);
  for (let i = 0; i < b.rows; i++) {
    for (let j = 0; j < b.cols; j++) {
      ans.matrix[i][j] = b.matrix[i][j] + a.matrix[i][0];
    }
  }
  return ans;
};
