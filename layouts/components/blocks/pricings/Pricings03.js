import m from "mithril";

export default {
  view: function(vnode) {
    const attrs = vnode.attrs;

    return m(
      "section.fdb-block",
      { style: `backgroundImage: 'url(${attrs.images}/hero/red.svg)'` },
      m(".container", [
        m(".row text-center", m(".col", m("h1.text-white", "Pricing"))),

        m(".row mt-5 align-items-center", [
          m(
            ".col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-center",
            m(".fdb-box p-4", [
              m("h2", attrs.plans[0].name),
              m("p.lead", attrs.lorem.sentences[7]),
              m("p.h1 mt-5 mb-5", attrs.plans[0].price),
              m(
                "p",
                m(
                  "a",
                  { href: attrs.site.href, class: "btn btn-dark" },
                  "Buy Now"
                )
              )
            ])
          ),

          m(
            ".col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-center pt-4 pt-lg-0",
            m(".fdb-box px-4 pt-5", [
              m("h2", attrs.plans[1].name),
              m("p.lead", attrs.lorem.sentences[6]),
              m("p.h1 mt-5 mb-5", attrs.plans[1].price),
              m(
                "p",
                m(
                  "a",
                  { href: attrs.site.href, class: "btn btn-secondary" },
                  "Buy Now"
                )
              )
            ])
          ),

          m(
            ".col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-center pt-4 pt-lg-0",
            m(".fdb-box p-4", [
              m("h2", attrs.plans[2].name),
              m("p.lead", attrs.lorem.sentences[4]),
              m("p.h1 mb-5 mt-5", attrs.plans[2].price),
              m(
                "p",
                m(
                  "a",
                  { href: attrs.site.href, class: "btn btn-dark" },
                  "Buy Now"
                )
              )
            ])
          )
        ])
      ])
    );
  }
};
