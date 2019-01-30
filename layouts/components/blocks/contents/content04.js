import m from "mithril";

export default {
  view: function(vnode) {
    const attrs = vnode.attrs;

    return m(
      "section.fdb-block",
      m(
        ".container",
        m(
          ".row",
          m(
            ".col col-sm-10 col-md-8 text-left",
            m("p.lead", attrs.lorem.sentences.slice(2, 5))
          )
        )
      )
    );
  }
};
