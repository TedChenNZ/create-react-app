var autoprefixer = require('autoprefixer');

module.exports = {
  BABEL_STAGE_0: {
    toArray: 'presets',
    getDev: function() {
      return require.resolve('babel-preset-stage-0');
    },
  },
  DECORATORS: {
    toArray: 'babelPlugins',
    getDev: function() {
      return require.resolve('babel-plugin-transform-decorators-legacy');
    },
  },
  SASS: {
    toArray: 'loaders',
    fileRegex: /\.(scss|sass)/,
    getDev: function() {
      return {
        test: /(\.scss|\.sass)$/,
        use: ['sass-loader'],
      };
    },
    getProd: function() {
      return {
        test: /(\.scss|\.sass)$/,
        use: ['sass-loader'],
      };
    },
  },
  // LESS: {
  //   toArray: 'loaders',
  //   fileRegex: /\.less$/,
  //   getDev: function() {
  //     return {
  //       test: /\.less$/,
  //       loader: 'style!css!postcss!less',
  //     };
  //   },
  //   getProd: function() {
  //     return {
  //       test: /\.less/,
  //       loader: ExtractTextPlugin.extract('style', 'css!postcss!less'),
  //     };
  //   },
  // },
  // STYLUS: {
  //   toArray: 'loaders',
  //   fileRegex: /\.styl$/,
  //   getDev: function() {
  //     return {
  //       test: /\.styl/,
  //       loader: 'style!css!postcss!stylus',
  //     };
  //   },
  //   getProd: function() {
  //     return {
  //       test: /\.styl/,
  //       loader: ExtractTextPlugin.extract('style', 'css!postcss!stylus'),
  //     };
  //   },
  // },
  CSS_MODULES: {
    config: {
      dev: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: {
            module: true,
            camelCase: true,
            importLoaders: 1,
            localIdentName: '[name]__[local]___[hash:base64:5]',
            sourceMap: true,
          },
        },
        {
          loader: require.resolve('postcss-loader'),
          options: {
            // Necessary for external CSS imports to work
            // https://github.com/facebookincubator/create-react-app/issues/2677
            ident: 'postcss',
            plugins: () => [
              require('postcss-flexbugs-fixes'),
              autoprefixer({
                browsers: [
                  '>1%',
                  'last 4 versions',
                  'Firefox ESR',
                  'not ie < 9', // React doesn't support IE8 anyway
                ],
                flexbox: 'no-2009',
              }),
            ],
          },
        },
      ],
      prod: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: {
            module: true,
            camelCase: true,
            importLoaders: 1,
            localIdentName: '[name]__[local]___[hash:base64:5]',
          },
        },
        {
          loader: require.resolve('postcss-loader'),
          options: {
            // Necessary for external CSS imports to work
            // https://github.com/facebookincubator/create-react-app/issues/2677
            ident: 'postcss',
            plugins: () => [
              require('postcss-flexbugs-fixes'),
              autoprefixer({
                browsers: [
                  '>1%',
                  'last 4 versions',
                  'Firefox ESR',
                  'not ie < 9', // React doesn't support IE8 anyway
                ],
                flexbox: 'no-2009',
              }),
            ],
          },
        },
      ],
    },
  },
};
