import m from "mithril";

export default {
  view: function(vnode) {
    const attrs = vnode.attrs;

    return m(
      "section.fdb-block",
      m(".container", [
        m(".row", m(".col-12 text-center", m("h1", "Features"))),

        m(".row text-left justify-content-center pt-5", [
          m(".col-12 col-md-6 col-lg-5 m-auto", [
            m("h3", m("strong", "Feature One")),
            m("p.lead", attrs.lorem.sentences[6])
          ]),

          m(".col-12 col-md-6 col-lg-5 m-auto pt-3 pt-md-0", [
            m("h3", m("strong", "Feature Two")),
            m("p.lead", attrs.lorem.sentences[0])
          ])
        ]),

        m(".row text-left justify-content-center pt-lg-4", [
          m(".col-12 col-md-6 col-lg-5 m-auto pt-3 pt-lg-0", [
            m("h3", m("strong", "Feature Three")),
            m("p.lead", attrs.lorem.sentences[1])
          ]),

          m(".col-12 col-md-6 col-lg-5 m-auto pt-3 pt-lg-0", [
            m("h3", m("strong", "Feature Four")),
            m("p.lead", attrs.lorem.sentences[2])
          ])
        ])
      ])
    );
  }
};
