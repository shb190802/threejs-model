import babel from 'rollup-plugin-babel'

module.exports = {
  input: 'src/index.js',
  output: [{
    file: './dist/threejs-model.js',
    format: 'umd',
    name: 'MODEL'
  },{
    file: './dist/threejs-model-esm.js',
    format: 'esm'
  }],
  plugins: [babel({
    exclude: '**/node_modules/**'
  })]
}