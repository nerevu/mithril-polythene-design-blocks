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
            ".col-12 col-md-8",
            m(
              "ul.nav justify-content-center justify-content-md-start align-items-center",
              [
                m(
                  "li.nav-item",
                  m(
                    "a.nav-link active",
                    { href: attrs.site.href },
                    m("img", {
                      alt: "image",
                      src: `${attrs.images}/logo.png`,
                      height: "40"
                    })
                  )
                ),

                m("li.w-100 d-block d-sm-none"),
                m(
                  "li.nav-item",
                  m("a.nav-link", { href: attrs.site.href }, "Features")
                ),

                m(
                  "li.nav-item",
                  m("a.nav-link", { href: attrs.site.href }, "Terms")
                ),

                m(
                  "li.nav-item",
                  m("a.nav-link", { href: attrs.site.href }, "About")
                )
              ]
            )
          ),

          m(".col-12 col-md-4 mt-4 mt-md-0 text-md-right", "© 2013-2018 Froala")
        ])
      )
    );
  }
};
