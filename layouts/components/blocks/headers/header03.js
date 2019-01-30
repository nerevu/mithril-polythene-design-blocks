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
            "button.navbar-toggler",
            {
              type: "button",
              "data-toggle": "collapse",
              "data-target": "#navbarNav0",
              "aria-controls": "navbarNav0",
              "aria-expanded": "false",
              "aria-label": "Toggle navigation"
            },
            m("span.navbar-toggler-icon")
          ),

          m(
            "#navbarNav0.collapse navbar-collapse",
            m("ul.navbar-nav mr-auto ml-auto", [
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
          )
        ])
      )
    );
  }
};
