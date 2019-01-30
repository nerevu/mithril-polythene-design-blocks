import m from "mithril";

export default {
  view: function(vnode) {
    const attrs = vnode.attrs;

    return m(
      "header",
      m(
        ".container text-center",
        m(
          "nav.navbar",
          m(
            "a.ml-auto mr-auto",
            { href: attrs.site.href },
            m("img", {
              src: `${attrs.images}/logo.png`,
              height: "30",
              alt: "image"
            })
          )
        )
      )
    );
  }
};
