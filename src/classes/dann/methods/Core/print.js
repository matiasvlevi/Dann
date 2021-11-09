Dann.print = function print(v, option = false) {
  if (option) {
    console.table(v);
  } else {
    console.log(v);
  }
};
