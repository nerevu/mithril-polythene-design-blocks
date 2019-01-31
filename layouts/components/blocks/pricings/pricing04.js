import m from "mithril";

export default {
  view: function(vnode) {
    const attrs = vnode.attrs;

    return m(
      "section.fdb-block py-0",
      m(
        ".container pt-5 my-5",
        { style: `background-image: url("${attrs.paths.images}/shapes/2.svg")` },
        [
          m(".row text-center py-5", m(".col", m("h1", "Pricing Plans"))),

          m(".row py-5 align-items-top", [
            m(
              ".col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-left",
              m(".bg-gray pb-5 pt-5 pl-4 pr-4 rounded shadow", [
                m("h2.font-weight-light", attrs.plans[0].name),
                m("hr"),
                m("p.h2", m("strong", attrs.plans[0].price)),
                m("p.h4", attrs.lorem.sentences[5]),
                m("hr"),

                attrs.plans[0].items.map(item => {
                  return m("li", m("p.text-right", m("em", item.name)));
                }),

                m(
                  "p.text-center pt-4",
                  m(
                    "a",
                    { href: attrs.site.href, class: "btn btn-primary" },
                    "Choose Plan"
                  )
                )
              ])
            ),

            m(
              ".col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-left pt-4 pt-lg-0",
              m(".bg-gray pb-5 pt-5 pl-4 pr-4 rounded shadow", [
                m("h2.font-weight-light", attrs.plans[1].name),
                m("hr"),
                m("p.h2", m("strong", attrs.plans[1].price)),
                m("p.h4", attrs.lorem.sentences[12]),
                m("hr"),

                attrs.plans[1].items.map(item => {
                  return m("li", m("p.text-right", m("em", item.name)));
                }),

                m(
                  "p.text-center pt-4",
                  m(
                    "a",
                    { href: attrs.site.href, class: "btn btn-primary" },
                    "Choose Plan"
                  )
                )
              ])
            ),

            m(
              ".col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-left pt-4 pt-lg-0",
              m(".bg-gray pb-5 pt-5 pl-4 pr-4 rounded shadow", [
                m("h2.font-weight-light", attrs.plans[2].name),
                m("hr"),
                m("p.h2", m("strong", attrs.plans[2].price)),
                m("p.h4", attrs.lorem.sentences[13]),
                m("hr"),

                attrs.plans[0].items.map(item => {
                  return m("li", m("p.text-right", m("em", item.name)));
                }),

                m(
                  "p.text-center pt-4",
                  m(
                    "a",
                    { href: attrs.site.href, class: "btn btn-primary" },
                    "Choose Plan"
                  )
                )
              ])
            )
          ])
        ]
      )
    );
  }
};
