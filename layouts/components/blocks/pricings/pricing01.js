import m from "mithril";

export default {
  view: function(vnode) {
    const attrs = vnode.attrs;

    return m(
      "section.fdb-block",
      { style: `background-image: url("${attrs.paths.images}/shapes/1.svg")` },
      m(".container", [
        m(".row text-center", m(".col", m("h1.text-light", "Pricing"))),

        m(".row mt-5 align-items-center", [
          m(
            ".col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-center",
            m(".fdb-box shadow pb-5 pt-5 pl-3 pr-3 rounded", [
              m("h2", attrs.plans[0].name),
              m("p.lead", m("strong", attrs.plans[0].price)),
              m("p.h3 font-weight-light", attrs.lorem.sentences[4]),

              m(
                "ul.text-left mt-5 mb-5",
                attrs.plans[0].items.map(item => {
                  return m("li", item.name);
                })
              ),

              m(
                "p",
                m(
                  "a",
                  {
                    href: attrs.site.href,
                    class: "btn btn-outline-primary mt-4"
                  },
                  "Subscribe"
                )
              )
            ])
          ),

          m(
            ".col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-center pt-4 pt-lg-0",
            m(".fdb-box shadow pb-5 pt-5 pl-3 pr-3 fdb-touch rounded", [
              m("h2.text-primary", attrs.plans[1].name),
              m("p.lead", m("strong", attrs.plans[1].price)),
              m("p.h3 font-weight-light", attrs.lorem.sentences[5]),

              m(
                "ul.text-left mt-5 mb-5",
                attrs.plans[1].items.map(item => {
                  return m("li", item.name);
                })
              ),

              m(
                "p",
                m(
                  "a",
                  { href: attrs.site.href, class: "btn btn-primary mt-4" },
                  "Subscribe"
                )
              )
            ])
          ),

          m(
            ".col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-center pt-4 pt-lg-0",
            m(".fdb-box shadow pb-5 pt-5 pl-3 pr-3 rounded", [
              m("h2", attrs.plans[2].name),
              m("p.lead", m("strong", attrs.plans[2].price)),
              m("p.h3 font-weight-light", attrs.lorem.sentences[2]),

              m(
                "ul.text-left mt-5 mb-5",
                attrs.plans[2].items.map(item => {
                  return m("li", item.name);
                })
              ),

              m(
                "p",
                m(
                  "a",
                  {
                    href: attrs.site.href,
                    class: "btn btn-outline-primary mt-4"
                  },
                  "Subscribe"
                )
              )
            ])
          )
        ])
      ])
    );
  }
};
