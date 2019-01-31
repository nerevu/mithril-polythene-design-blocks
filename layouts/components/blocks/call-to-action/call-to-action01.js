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
          m(".col-12 col-md-8 text-center", [
            m("p.lead", attrs.lorem.sentences[3]),

            m(
              "p.mt-5 mt-sm-4",
              m("a.btn btn-primary", { href: attrs.site.href }, "Download")
            )
          ])
        )
      )
    );
  }
};
