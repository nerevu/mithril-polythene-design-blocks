import m from "mithril";

export default {
  view: function(vnode) {
    const attrs = vnode.attrs;

    return m(
      "section.fdb-block",
      { style: `backgroundImage: 'url(${attrs.paths.images}/shapes/8.svg)'` },
      m(".container", [
        m(".row text-center", m(".col", m("h1", "Pricing Plans"))),

        m(".row mt-5 align-items-center no-gutters", [
          m(
            ".col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-center shadow",
            m(".bg-white pb-5 pt-5 pl-4 pr-4 rounded-left", [
              m("h2.font-weight-light", attrs.plans[0].name),
              m("p.h1 mt-5 mb-5", [
                m("strong", attrs.plans[0].price),
                m("span.h4", "/month")
              ]),

              m(
                "ul.text-left",
                attrs.plans[0].items.map(item => {
                  return m("li", item.name);
                })
              ),

              m(
                "p.text-center pt-4",
                m(
                  "a",
                  { href: attrs.site.href, class: "btn btn-outline-dark" },
                  "Choose Plan"
                )
              )
            ])
          ),

          m(
            ".col-12 col-sm-10 col-md-8 ml-auto mr-auto col-lg-4 text-center mt-4 mt-lg-0 sl-1 pt-0 pt-lg-3 pb-0 pb-lg-3 bg-white fdb-touch rounded shadow",
            m(".pb-5 pt-5 pl-4 pr-4", [
              m("h2.font-weight-light", attrs.plans[1].name),
              m("p.h1 mt-5 mb-5", [
                m("strong", attrs.plans[1].price),
                m("span.h4", "/month")
              ]),

              m(
                "ul.text-left",
                attrs.plans[1].items.map(item => {
                  return m("li", item.name);
                })
              ),

              m(
                "p.text-center pt-4",
                m(
                  "a",
                  {
                    href: attrs.site.href,
                    class: "btn btn-primary btn-shadow"
                  },
                  "Choose Plan"
                )
              )
            ])
          ),

          m(
            ".col-12 col-sm-10 col-md-8 ml-auto mr-auto col-lg-4 text-center mt-4 mt-lg-0 shadow",
            m(".bg-white pb-5 pt-5 pl-4 pr-4 rounded-right", [
              m("h2.font-weight-light", attrs.plans[2].name),

              m("p.h1 mt-5 mb-5", [
                m("strong", attrs.plans[2].price),
                m("span.h4", "/month")
              ]),

              m(
                "ul.text-left",
                attrs.plans[2].items.map(item => {
                  return m("li", item.name);
                })
              ),

              m(
                "p.text-center pt-4",
                m(
                  "a",
                  { href: attrs.site.href, class: "btn btn-outline-dark" },
                  "Choose Plan"
                )
              )
            ])
          )
        ])
      ])
    );
  }
};
