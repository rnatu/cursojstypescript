// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  //usar o mode development enquanto esta desenvolvendo
  mode: 'development',
  entry: './src/A0019-exercicio/A0019-exercicio.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: 'tsconfig.frontend.json',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'frontend', 'assets', 'js'), //configurar tambem no tsconfig.json na chave outDir para './dist/assets/js'
  },
  //para mapear o arquivo JS para TS, para debugar e ver a linha do arquivo TS com erro
  devtool: 'source-map',
};
