import m from "mithril";

export default {
  view: function(vnode) {
    const attrs = vnode.attrs;

    return m(
      "section.fdb-block",
      m(".container", [
        m(".row text-center justify-content-sm-center no-gutters", [
          m(".col-12 col-sm-8 col-md-3 m-auto", [
            m("h3", m("strong", "Feature 1")),
            m("p", attrs.lorem.sentences[0])
          ]),

          m(".col-12 col-sm-8 col-md-3 m-auto pt-3 pt-md-0", [
            m("h3", m("strong", "Feature 2")),
            m("p", attrs.lorem.sentences[1])
          ]),

          m(".col-12 col-sm-8 col-md-3 m-auto pt-3 pt-md-0", [
            m("h3", m("strong", "Feature 3")),
            m("p", attrs.lorem.sentences[2])
          ])
        ]),

        m(".row text-center justify-content-md-center pt-3 pt-md-5", [
          m(".col-12 col-sm-8 col-md-3 m-auto", [
            m("h3", m("strong", "Feature 4")),
            m("p", attrs.lorem.sentences[3])
          ]),

          m(".col-12 col-sm-8 col-md-3 m-auto pt-3 pt-md-0", [
            m("h3", m("strong", "Feature 5")),
            m("p", attrs.lorem.sentences[4])
          ]),

          m(".col-12 col-sm-8 col-md-3 m-auto pt-3 pt-md-0", [
            m("h3", m("strong", "Feature 6")),
            m("p", attrs.lorem.sentences[5])
          ])
        ])
      ])
    );
  }
};
