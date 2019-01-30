import m from "mithril";

export default {
  view: function(vnode) {
    const attrs = vnode.attrs;

    return m(
      "section.fdb-block",
      m(
        ".container",
        m(".row align-items-center", [
          m(".col-12 col-lg-6 col-xl-5", [
            m("h1", "Design Blocks"),
            m("p.lead", attrs.lorem.sentences.slice(5, 8)),

            m(".row pt-4 pt-xl-5", [
              m(".col-12 col-md-5", [
                m("h4", m("strong", "Feature One")),
                m("p", attrs.lorem.sentences[3])
              ]),

              m(".col-12 col-md-5 m-auto pt-3 pt-md-0", [
                m("h4", m("strong", "Feature Two")),
                m("p", attrs.lorem.sentences[6])
              ])
            ])
          ]),

          m(
            ".col-12 col-md-8 col-lg-6 m-auto mr-lg-0 ml-lg-auto pt-5 pt-lg-0",
            m("img.img-fluid", {
              alt: "image",
              src: `${attrs.images}/draws/scrum.svg`
            })
          )
        ])
      )
    );
  }
};
