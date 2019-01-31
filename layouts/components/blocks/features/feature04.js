import m from "mithril";

export default {
  view: function(vnode) {
    const attrs = vnode.attrs;

    return m(
      "section.fdb-block bg-dark",
      {
        style: `backgroundImage: 'url(${attrs.paths.images}/hero/purple.svg)'`
      },
      m(".container", [
        m(".row", m(".col text-center", m("h1", "Froala Design Blocks"))),

        m(".row-70"),

        m(".row text-center justify-content-sm-center no-gutters", [
          m(
            ".col-12 col-sm-10 col-md-8 col-lg-7 col-xl-3 m-auto",
            m(".fdb-box fdb-touch", [
              m("h2", "Feature 1"),
              m("p", attrs.lorem.sentences[0]),
              m("p.mt-4", [
                m("a", { href: attrs.site.href }, [
                  "Learn More",
                  m("i.fas fa-angle-right")
                ])
              ])
            ])
          ),

          m(
            ".col-12 col-sm-10 col-md-8 col-lg-7 col-xl-3 m-auto pt-5 pt-xl-0",
            m(".fdb-box fdb-touch", [
              m("h2", "Feature 2"),
              m("p", attrs.lorem.sentences[1]),
              m("p.mt-4", [
                m("a", { href: attrs.site.href }, [
                  "Learn More",
                  m("i.fas fa-angle-right")
                ])
              ])
            ])
          ),

          m(
            ".col-12 col-sm-10 col-md-8 col-lg-7 col-xl-3 m-auto pt-5 pt-xl-0",
            m(".fdb-box fdb-touch", [
              m("h2", "Feature 3"),
              m("p", attrs.lorem.sentences[2]),
              m("p.mt-4", [
                m("a", { href: attrs.site.href }, [
                  "Learn More",
                  m("i.fas fa-angle-right")
                ])
              ])
            ])
          )
        ])
      ])
    );
  }
};
