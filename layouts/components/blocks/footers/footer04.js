import m from "mithril";

export default {
  view: function(vnode) {
    const attrs = vnode.attrs;

    return m(
      "footer.fdb-block footer-small",
      m(
        ".container",
        m(".row text-center align-items-center", [
          m(
            ".col-12 col-sm-6 col-md-4 text-sm-left",
            m("img", {
              alt: "image",
              src: `${attrs.images}/logo.png`,
              height: "40"
            })
          ),

          m(
            ".col-12 col-sm-6 col-md-4 mt-4 mt-sm-0 text-center text-sm-right text-md-center",
            "© 2013-2018 Froala"
          ),

          m(".col-12 col-md-4 mt-4 mt-md-0 text-center text-md-right", [
            m(
              "a",
              { href: attrs.site.href, class: "mx-2" },
              m("i.fab fa-twitter", { "aria-hidden": "true" })
            ),
            m(
              "a",
              { href: attrs.site.href, class: "mx-2" },
              m("i.fab fa-facebook", { "aria-hidden": "true" })
            ),
            m(
              "a",
              { href: attrs.site.href, class: "mx-2" },
              m("i.fab fa-instagram", { "aria-hidden": "true" })
            ),
            m(
              "a",
              { href: attrs.site.href, class: "mx-2" },
              m("i.fab fa-pinterest", { "aria-hidden": "true" })
            ),
            m(
              "a",
              { href: attrs.site.href, class: "mx-2" },
              m("i.fab fa-google", { "aria-hidden": "true" })
            )
          ])
        ])
      )
    );
  }
};
