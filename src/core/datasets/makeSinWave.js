/*
 * Undisplayed documentation
 * Creates sin wave dataset for a Rann model.
 * @param {Number} seq The length of a sequance.
 * @param {Number} nbseq The number of sequances.
 * @param {Number} res Time jump for each value
 * @return {Array} An array of sequances
 */

function makeSinWave(seq, nbseq, res) {
  let values = [];
  //making a sequance
  for (let i = 0; i < seq * nbseq * res; i += res) {
    values.push(Math.sin(i));
  }
  if (values.length === seq * nbseq + 1) {
    values.splice(values.length - 1, 1);
  }
  let list = [];
  for (let i = 0; i < nbseq; i++) {
    list.push(values.slice(i * seq, i * seq + seq));
  }
  return list;
}
