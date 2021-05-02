/**
 * (Browser)
 * saves a json file containing information about the network and its current state. When the function is called, a local file dialogue is opened by the browser.
 * @method save
 * @for Dann
 * @deprecated Use toJSON
 * @param {String} name The name of the json file.
 */
/**
 * (Nodejs)
 * saves a json file containing information about the network and its current state in ./savedDanns/name/dannData.json.
 * @method save
 * @for Dann
 * @deprecated Use toJSON
 * @param {String} name The name of the json file.
 * @param {Object} [options] An object containing options on the save process.
 */
Dann.prototype.save = function save(name, options) {
  let path;
  let overwritten = false;
  let report = false;
  let result = 0;
  let rstr = 'none';
  //options
  if (options !== undefined) {
    if (options.report !== undefined) {
      report = options.report;
    }
    if (options.test !== undefined) {
      if (typeof options.test === 'function') {
        let testfunc = options.test;
        result = testfunc() * 100;
        rstr = result + '%';
      } else {
        console.error('Dann Error: the test option can only be a function.');
        console.trace();
      }
    }
  }
  let dataOBJ = this.dataObject();

  if (isBrowser) {
    downloadSTR(dataOBJ, name);
  } else {
    path = './savedDanns/' + name + '/dannData.json';
    if (fs.existsSync(path)) {
      overwritten = true;
    }
    if (!fs.existsSync('./savedDanns')) {
      fs.mkdirSync('./savedDanns');
    }
    if (!fs.existsSync('./savedDanns/' + name)) {
      fs.mkdirSync('./savedDanns/' + name);
    }
    if (report === true) {
      let acts = [];
      for (let i = 1; i < this.arch.length; i++) {
        acts[i - 1] = this.Layers[i].actname;
      }
      let csvFile = [];
      csvFile.push(['Dann', 'train report']);
      csvFile.push(['Arch: ', this.arch]);
      csvFile.push(['Acts: ', acts]);
      csvFile.push(['Lr: ', this.lr]);
      csvFile.push(['Epoch:', this.epoch]);

      if (typeof options.test === 'function') {
        csvFile.push(['Accuracy:', rstr]);
      }
      csvFile.push(['Index', 'AvgLoss']);
      for (let i = 0; i < this.losses.length; i++) {
        csvFile.push([i + 1, this.losses[i]]);
      }

      w.writeToPath('./savedDanns/' + name + '/report.csv', csvFile)
        .on('error', (err) => console.error(err))
        .on('finish', () =>
          console.log(
            'saved training report at ' + './savedDanns/' + name + '/report.csv'
          )
        );
    }

    fs.writeFileSync(path, JSON.stringify(dataOBJ));
    if (overwritten === true) {
      console.log('\x1b[32m', '');
      this.log();
      console.log(
        'Succesfully overwritten the Dann Model at ./savedDanns/' +
          name +
          '/dannData.json '
      );
      console.log('\x1b[0m', '');
    } else {
      console.log('\x1b[32m', '');
      this.log();
      console.log(
        'Succesfully saved the Dann Model at ./savedDanns/' +
          name +
          '/dannData.json '
      );
      console.log('\x1b[0m', '');
    }
  }
};
