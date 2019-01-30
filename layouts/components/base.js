import m from "mithril";
import SiteMeta from "./site-meta";

export default {
  view: function(vnode) {
    const attrs = vnode.attrs;

    return [
      m("!doctype[html]"),
      m("html", [
        m("head", [
          m(SiteMeta, attrs),
          m("title", attrs.title),
          m("link", {
            rel: "shortcut icon",
            href: "/favicon.ico"
          }),
          // manifest.json provides metadata used when your web app is added to
          // the homescreen on Android. See
          // https://developers.google.com/web/fundamentals/web-app-manifest/
          m("link", {
            rel: "manifest",
            href: "/manifest.json"
          }),
          m("link", {
            rel: "stylesheet",
            type: "text/css",
            href: `/${attrs.css}/app.css`
          }),
          m("link", {
            rel: "stylesheet",
            type: "text/css",
            href: `/${attrs.css}/vendor.css`
          })
        ]),
        m("body", [
          m("script", "You must enable JavaScript to run this app."),
          m("#container.content", attrs.content),
          m("script", { src: `/${attrs.js}/app.js` }),
          m("script", { src: `/${attrs.js}/vendor.js` })
        ])
      ])
    ];
  }
};
