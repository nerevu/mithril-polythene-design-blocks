import m from "mithril";

export default {
  view: function(vnode) {
    const attrs = vnode.attrs;

    return m(
      "footer.fdb-block footer-small",
      m(
        ".container",
        m(
          ".row text-center",
          m(".col", m("p", "© 2018 Froala. All Rights Reserved"))
        )
      )
    );
  }
};
