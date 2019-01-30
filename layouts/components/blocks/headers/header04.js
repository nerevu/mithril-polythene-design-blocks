import m from "mithril";

export default {
  view: function(vnode) {
    const attrs = vnode.attrs;

    return m(
      "header",
      m(
        ".container",
        m("nav.navbar navbar-expand-md", [
          m(
            "a.navbar-brand",
            { href: attrs.site.href },
            m("img", {
              src: `${attrs.images}/logo.png`,
              height: "30",
              alt: "image"
            })
          ),

          m(
            "button.navbar-toggler",
            {
              type: "button",
              "data-toggle": "collapse",
              "data-target": "#navbarNav1",
              "aria-controls": "navbarNav1",
              "aria-expanded": "false",
              "aria-label": "Toggle navigation"
            },
            m("span.navbar-toggler-icon")
          ),

          m("#navbarNav1.collapse navbar-collapse", [
            m("ul.navbar-nav mr-auto", [
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
            ]),

            m("ul.navbar-nav justify-content-end d-none d-lg-flex ml-md-auto", [
              m(
                "li.nav-item",
                m("a.nav-link", { href: attrs.site.href }, m("i.fab fa-slack"))
              ),

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
              )
            ]),

            m(
              "a.btn btn-outline-primary ml-md-3",
              { href: attrs.site.href },
              "Button"
            )
          ])
        ])
      )
    );
  }
};
