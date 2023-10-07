module.exports = {
  presets: [
    "@babel/preset-env",
    ["@babel/preset-react", {"runtime": "automatic"}]
  ],
  plugins: [
    "@babel/plugin-transform-react-jsx",
    "@babel/plugin-transform-runtime",
    "@babel/plugin-transform-async-to-generator",
    "@babel/transform-arrow-functions",
    "@babel/proposal-object-rest-spread",
    "@babel/proposal-class-properties"
  ],
};
