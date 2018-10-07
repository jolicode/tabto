import babel from 'rollup-plugin-babel'

module.exports = {
  input: 'index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs'
    }, {
      file: 'dist/browser.js',
      format: 'umd',
      name: 'tabto'
    }, {
      file: 'dist/index.es.js',
      format: 'esm'
    }
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
}
