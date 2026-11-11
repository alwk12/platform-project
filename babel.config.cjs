// Jest uses Babel to understand JSX and modern import/export syntax in our tests
module.exports = {
  presets: [
    "@babel/preset-env",
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};
