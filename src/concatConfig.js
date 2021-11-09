// Source file concat configuration
module.exports = [
  // Head
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
  'src/classes/dann/methods/Core/*.js',
  'src/classes/dann/methods/Create/*.js',
  'src/classes/dann/methods/Interact/*.js',
  'src/classes/dann/methods/Train/*.js',
  'src/classes/dann/methods/Share/*.js',

  // Add
  'src/classes/add/constructor.js',
  'src/classes/add/methods/*.js',

  // Export
  'src/io/exports.js',
];
