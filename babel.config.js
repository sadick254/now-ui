module.exports = {
  presets: [['@babel/preset-env'], 'minify'],
  plugins: [['@babel/plugin-transform-react-jsx', {pragma: 'h'}]],
};
