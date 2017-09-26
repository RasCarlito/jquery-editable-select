import buble from 'rollup-plugin-buble'
import uglify from 'rollup-plugin-uglify'

const env = process.env.NODE_ENV || 'development'

const filename = `jquery-editable-select`

const dest = {
  development: `dist/${filename}.js`,
  production: `dist/${filename}.min.js`
}

const plugins = [
  buble()
]

const rollupConfig = {
  input: 'src/jquery-editable-select.js',
  plugins,
  output: [
    { file: dest[env], format: 'umd', name: 'EditableSelect' }
  ]
}

if (env === 'production') {
  plugins.push(
    uglify()
  )
}

export default rollupConfig
