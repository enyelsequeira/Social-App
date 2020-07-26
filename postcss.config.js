// postcss.config.js
/* eslint-disable import/no-extraneous-dependencies */

// connect plugins to the file
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
  // connect plugins to PostCSS
  plugins: [
    // connect autoprefixer
    autoprefixer,
    // pass an object with options upon connecting cssnano:
    cssnano({ preset: 'default' }), // set default minification settings
  ],
};
