import m from "mithril";

export default {
  view: function(vnode) {
    const attrs = vnode.attrs;

    return m(
      "section.fdb-block",
      m(".container", [
        m(".row text-left justify-content-sm-center", [
          m(".col-12 col-sm-6 col-lg-3 col-xl-2 ml-xl-auto mr-xl-auto", [
            m("h3", m("strong", "Feature 1")),
            m("p", attrs.lorem.sentences[7])
          ]),

          m(
            ".col-12 col-sm-6 col-lg-3 col-xl-2 ml-xl-auto mr-xl-auto pt-3 pt-md-0 pt-lg-0",
            [
              m("h3", m("strong", "Feature 2")),
              m("p", attrs.lorem.sentences[8])
            ]
          ),

          m(
            ".col-12 col-sm-6 col-lg-3 col-xl-2 ml-xl-auto mr-xl-auto pt-3 pt-lg-0",
            [
              m("h3", m("strong", "Feature 3")),
              m("p", attrs.lorem.sentences[9])
            ]
          ),

          m(
            ".col-12 col-sm-6 col-lg-3 col-xl-2 ml-xl-auto mr-xl-auto pt-3 pt-lg-0",
            [
              m("h3", m("strong", "Feature 4")),
              m("p", attrs.lorem.sentences[6])
            ]
          )
        ]),

        m(".row text-left justify-content-sm-center pt-3 pt-lg-5", [
          m(".col-12 col-sm-6 col-lg-3 col-xl-2 ml-xl-auto mr-xl-auto", [
            m("h3", m("strong", "Feature 5")),
            m("p", attrs.lorem.sentences[7])
          ]),

          m(
            ".col-12 col-sm-6 col-lg-3 col-xl-2 ml-xl-auto mr-xl-auto pt-3 pt-md-0 pt-lg-0",
            [
              m("h3", m("strong", "Feature 6")),
              m("p", attrs.lorem.sentences[8])
            ]
          ),

          m(
            ".col-12 col-sm-6 col-lg-3 col-xl-2 ml-xl-auto mr-xl-auto pt-3 pt-lg-0",
            [
              m("h3", m("strong", "Feature 7")),
              m("p", attrs.lorem.sentences[9])
            ]
          ),

          m(
            ".col-12 col-sm-6 col-lg-3 col-xl-2 ml-xl-auto mr-xl-auto pt-3 pt-lg-0",
            [
              m("h3", m("strong", "Feature 8")),
              m("p", attrs.lorem.sentences[6])
            ]
          )
        ])
      ])
    );
  }
};
