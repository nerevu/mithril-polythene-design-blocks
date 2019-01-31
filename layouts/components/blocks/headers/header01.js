import m from "mithril";

export default {
  view: function(vnode) {
    const attrs = vnode.attrs;

    return m(
      "header",
      m(
        ".container",
        m(
          "nav.navbar",
          m(
            "a",
            { href: attrs.site.href },
            m("img", {
              src: `${attrs.paths.images}/logo.png`,
              height: "30",
              alt: "image"
            })
          )
        )
      )
    );
  }
};
