import scss from 'rollup-plugin-scss';
import babel from 'rollup-plugin-babel';

export default {
  external: ['lodash'],
  input: 'src/Navi.js',
  output: {
    file: __dirname + '/dist/Navi.js'
  },
  plugins: [
    scss({
      output: 'Navi.css'
    }),
    babel({
      exclude: 'node_modules/**'
    }) // will output compiled styles to bundle.css
  ]
};
