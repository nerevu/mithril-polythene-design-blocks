import m from "mithril";

export default {
  view: function(vnode) {
    const attrs = vnode.attrs;

    return m(
      "section.fdb-block",
      m(
        ".container",
        m(
          ".row justify-content-center",
          m(".col-12 col-sm-8 col-md-6 col-lg-6 text-center", [
            m("h2", m("strong", attrs.lorem.sentences[6])),
            m(
              "p.mt-5 mt-sm-4",
              m(
                "a.btn btn-outline-primary",
                { href: attrs.site.href },
                "Download"
              )
            )
          ])
        )
      )
    );
  }
};
