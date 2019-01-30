import m from "mithril";

export default {
  view: function(vnode) {
    const attrs = vnode.attrs;

    return m(
      "footer.fdb-block footer-small bg-dark",
      m(
        ".container",
        m(".row align-items-center", [
          m(
            ".col-12 col-md-8",
            m("ul.nav justify-content-center justify-content-md-start", [
              m(
                "li.nav-item",
                m("a.nav-link active", { href: attrs.site.href }, "Home")
              ),

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
            ])
          ),

          m(
            ".col-12 col-md-4 mt-4 mt-md-0 text-center text-md-right",
            "© 2018 Froala. All Rights Reserved"
          )
        ])
      )
    );
  }
};
