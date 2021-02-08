//const withCSS = require("@zeit/next-css");
//const withFonts = require("next-fonts");

/* const withTM = require("next-transpile-modules")(["react-dvd-screensaver"]);
const withPlugins = require("next-compose-plugins"); */

/* const nextConfig = {
  target: "serverless",
  webpack: function (config) {
    /// below is not required for the problem described. Just for reference.(es6)
    config.module.rules.push({ test: /\.yml$/, use: "raw-loader" });
    return config;
  },
}; */

//module.exports = withCSS(withFonts({ crossOrigin: "anonymous" }));
//module.exports = withPlugins([withTM, withFonts, withCSS], nextConfig);
module.exports = {
  crossOrigin: "anonymous",
};
