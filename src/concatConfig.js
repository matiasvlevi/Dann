// Source file concat configuration
module.exports = {
  build: [
    // Import dependencies
    'src/io/head.js',
    // Core
    'src/core/**/*.js',
    // Matrix
    'src/classes/matrix/constructor.js',
    'src/classes/matrix/methods/*.js',
    // Layer
    'src/classes/layer/constructor.js',
    'src/classes/layer/methods/*.js',
    // Dann
    'src/classes/dann/constructor.js',
    'src/classes/dann/methods/*.js',
    // Rann
    'src/classes/rann/constructor.js',
    'src/classes/rann/methods/*.js',
    // Export
    'src/io/exports.js',
  ],
  onlyDann: [
    // Import dependencies
    'src/io/head.js',
    // Core
    'src/core/**/*.js',
    // Matrix
    'src/classes/matrix/constructor.js',
    'src/classes/matrix/methods/*.js',
    // Layer
    'src/classes/layer/constructor.js',
    'src/classes/layer/methods/*.js',
    // Dann
    'src/classes/dann/constructor.js',
    'src/classes/dann/methods/*.js',
    // Export
    'src/io/exports.js',
  ],
  onlyRann: [
    // Import dependencies
    'src/io/head.js',
    // Core
    'src/core/**/*.js',
    // Matrix
    'src/classes/matrix/constructor.js',
    'src/classes/matrix/methods/*.js',
    // Layer
    'src/classes/layer/constructor.js',
    'src/classes/layer/methods/*.js',
    // Rann
    'src/classes/rann/constructor.js',
    'src/classes/rann/methods/*.js',
    // Export
    'src/io/exports.js',
  ],
};
