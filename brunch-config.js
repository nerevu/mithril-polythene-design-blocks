const paths = require("./config").paths;
const metalsmith = require("./metalsmith");

exports.config = {
  // See http://brunch.io/docs/config for docs.
  plugins: {
    eslint: {
      pattern: new RegExp(`^${paths.source}\\\/.*\\.js$`),
      warnOnly: false
    },
    stylelint: {
      pattern: new RegExp(`^${paths.metalDest}\\\/.*\\.css$`),
      warnOnly: false
    },
    before: {
      pattern: new RegExp(`^(${paths.source}|layouts)`),
      func: metalsmith.build.bind(metalsmith)
    },
    cleancss: {
      keepSpecialComments: 0,
      removeEmpty: true
    },
    uglify: {
      mangle: true,
      ignored: /tmp/
    },
    copycat:{
      webfonts: ["node_modules/@fortawesome/fontawesome-free/webfonts"]
    },
    browserSync: { open: false }
  },
  paths: {
    watched: [paths.source, paths.metalDest, "layouts"],
    public: paths.brunchDest
  },
  conventions: {
    assets: new RegExp(`${paths.metalDest}\\\/assets\\\/`)
  },
  npm: {
    styles: {
      "bootstrap": ["dist/css/bootstrap.css"],
      "@fortawesome": ["fontawesome-free/css/all.css"]
    }
  },
  files: {
    javascripts: {
      joinTo: {
        [`${paths.js}/app.js`]: `${paths.metalDest}/**/*.js`,
        [`${paths.js}/vendor.js`]: /^node_modules/,
        [`${paths.js}/tmp`]: [`${paths.source}/**/*.js`, "layouts/**/*.js"]
      }
    },
    stylesheets: {
      joinTo: {
        [`${paths.css}/app.css`]: `${paths.metalDest}/styles/app.css`,
        [`${paths.css}/custom.css`]: `${paths.metalDest}/styles/custom.css`,
        [`${paths.css}/vendor.css`]: /^node_modules/,
        [`${paths.css}/tmp`]: [`${paths.source}/**/*.css`]
      }
    }
  },
  sourceMaps: "absoluteUrl"
};
