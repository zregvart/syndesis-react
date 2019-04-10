module.exports = function({ env, paths }) {
  return {
    webpack: {
      configure: (webpackConfig, { env, paths }) => {
        webpackConfig.module.rules[2].oneOf = webpackConfig.module.rules[2].oneOf.map(
          r => {
            if (r.loader && r.loader.indexOf('babel-loader') >= 0) {
              r.options.sourceMaps = true;
            }
            return r;
          }
        );
        return webpackConfig;
      },
    },
  };
};
