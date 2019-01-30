import m from "mithril";

export default {
  view: function(vnode) {
    const attrs = vnode.attrs;

    return [
      m("meta", {
        charset: "utf8"
      }),
      m("meta", {
        "http-equiv": "content-type",
        content: "text/html; charset=utf-8"
      }),
      m("meta", {
        "http-equiv": "X-UA-Compatible",
        content: "IE=edge, chrome=1"
      }),
      m("meta", {
        "http-equiv": "cleartype",
        content: "on"
      }),
      m("meta", {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no"
      }),
      m("meta", {
        name: "format-detection",
        content: "telephone=no"
      }),
      m("meta", {
        name: "mobile-web-app-capable",
        content: "yes"
      }),
      m("meta", {
        name: "apple-mobile-web-app-capable",
        content: "yes"
      }),
      m("meta", {
        name: "theme-color",
        content: "#000000"
      })
    ];
  }
};
