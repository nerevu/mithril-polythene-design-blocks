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
          m(".col-12 col-md-6 text-center", [
            m("h1", "Call to Action"),
            m("p.lead", attrs.lorem.sentences[5]),
            m(
              "p.mt-5 mt-sm-4",
              m("a.btn btn-secondary", { href: attrs.site.href }, "Download")
            )
          ])
        )
      )
    );
  }
};
