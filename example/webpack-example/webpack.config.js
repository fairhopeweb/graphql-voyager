const path = require('node:path');

module.exports = {
  devServer: {
    https: true,
    port: 9090,
    static: {
      directory: __dirname,
    },
    liveReload: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  entry: ['./index.tsx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: { compilerOptions: { noEmit: false } },
        },
        exclude: /node_modules/,
      },
    ],
  },
};
