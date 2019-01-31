import m from "mithril";

export default {
  view: function(vnode) {
    const attrs = vnode.attrs;

    return m(
      "header",
      m(
        ".container",
        m("nav.navbar navbar-expand-md no-gutters", [
          m(
            "button.navbar-toggler",
            {
              type: "button",
              "data-toggle": "collapse",
              "data-target": "#navbarNav2",
              "aria-controls": "navbarNav2",
              "aria-expanded": "false",
              "aria-label": "Toggle navigation"
            },
            m("span.navbar-toggler-icon")
          ),

          m(
            ".col-4 col-md-2 text-right text-md-center order-lg-6",
            m(
              "a",
              { href: attrs.site.href },
              m("img", {
                src: `${attrs.paths.images}/logo.png`,
                height: "30",
                alt: "image"
              })
            )
          ),

          m(
            "#navbarNav2.collapse navbar-collapse col-12 col-md-5 order-lg-1",
            m("ul.navbar-nav col-5", [
              m(
                "li.nav-item active",
                m("a.nav-link", { href: attrs.site.href }, [
                  "Home",
                  m("span.sr-only", " (current)")
                ])
              ),

              m(
                "li.nav-item",
                m("a.nav-link", { href: attrs.site.href }, "Features")
              ),

              m(
                "li.nav-item",
                m("a.nav-link", { href: attrs.site.href }, "Pricing")
              ),

              m(
                "li.nav-item",
                m("a.nav-link", { href: attrs.site.href }, "Team")
              )
            ])
          ),

          m(
            "ul.navbar-nav justify-content-end col-sm-5 order-lg-12 d-none d-md-flex",
            [
              m(
                "li.nav-item",
                m(
                  "a.nav-link",
                  { href: attrs.site.href },
                  m("i.fab fa-twitter")
                )
              ),

              m(
                "li.nav-item",
                m("a.nav-link", { href: attrs.site.href }, m("i.fab fa-github"))
              ),

              m(
                "li.nav-item",
                m("a.nav-link", { href: attrs.site.href }, m("i.fab fa-slack"))
              )
            ]
          )
        ])
      )
    );
  }
};
