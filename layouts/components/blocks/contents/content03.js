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
          m(".col col-md-8 text-center", [
            m("h1", "Froala Design Blocks"),
            m("p.lead", attrs.lorem.sentences[4])
          ])
        )
      )
    );
  }
};
