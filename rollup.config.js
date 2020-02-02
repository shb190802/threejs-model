import babel from 'rollup-plugin-babel'

module.exports = {
  input: 'src/index.js',
  output: [{
    file: './dist/threejs-model.js',
    format: 'umd',
    name: 'MODEL'
  },{
    file: './dist/threejs-model-es.js',
    format: 'es'
  }],
  plugins: [babel({
    exclude: '**/node_modules/**'
  })]
}