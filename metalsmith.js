const Metalsmith = require("metalsmith");
const mithril = require("metalsmith-mithril");
const beautify = require("metalsmith-beautify");
const rollup = require("metalsmith-rollup");

const config = require("./config");

const __PROD__ = process.env.NODE_ENV === "production";

module.exports = new Metalsmith(config.paths.projectRoot)
  .clean(__PROD__)
  .source(config.paths.source)
  .destination(config.paths.metalDest)
  .metadata(config)
  .use(
    rollup({
      input: "layouts/index.js",
      output: {
        file: "index.m.js",
        format: "cjs"
      },
      external: ["mithril", "polythene-mithril"]
    })
  )
  .use(mithril.layouts({ virtual: true }))
  .use(beautify({ css: false, js: false }));
