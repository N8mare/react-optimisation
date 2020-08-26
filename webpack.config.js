const webpack = require('webpack');

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {
  return {
    mode,
    entry: './src/app.js',
    output: {
      filename: 'bundle.js',
      chunkFilename: '[name].lazy-chunk.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            {
              loader: 'babel-loader'
            }
          ]
        }
      ]
    }
  };
};
