import m from "mithril";

export default {
  view: function(vnode) {
    const attrs = vnode.attrs;

    return m(
      "section.fdb-block",
      m(
        ".container",
        m(".row text-center", m(".col", m("h1", "Pricing"))),

        m(".row mt-5 align-items-center", [
          m(
            ".col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-left",
            m(".fdb-box fdb-touch p-5 rounded", [
              m("h2", [
                attrs.plans[0].name,
                m(
                  "strong.float-xl-right d-lg-block d-xl-inline",
                  attrs.plans[0].price
                )
              ]),

              m("p.lead", m("em", attrs.lorem.sentences[10])),

              m(
                "ul.text-left pl-3 mt-5 mb-5",
                attrs.plans[0].items.map(item => {
                  return m("li", item.name);
                })
              ),

              m(
                "p.text-left pt-4",
                m(
                  "a",
                  { href: attrs.site.href, class: "btn btn-primary" },
                  "Buy Now"
                )
              )
            ])
          ),

          m(
            ".col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-left pt-4 pt-lg-0",
            m(".fdb-box fdb-touch p-5 rounded", [
              m("h2", [
                attrs.plans[1].name,
                m(
                  "strong.float-xl-right d-lg-block d-xl-inline",
                  attrs.plans[1].price
                )
              ]),

              m("p.lead", m("em", attrs.lorem.sentences[11])),

              m(
                "ul.text-left pl-3 mt-5 mb-5",
                attrs.plans[1].items.map(item => {
                  return m("li", item.name);
                })
              ),

              m(
                "p.text-left pt-4",
                m(
                  "a",
                  { href: attrs.site.href, class: "btn btn-primary" },
                  "Buy Now"
                )
              )
            ])
          ),

          m(
            ".col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-left pt-4 pt-lg-0",
            m(".fdb-box fdb-touch p-5 rounded", [
              m("h2", [
                attrs.plans[2].name,
                m(
                  "strong.float-xl-right d-lg-block d-xl-inline",
                  attrs.plans[2].price
                )
              ]),

              m("p.lead", m("em", attrs.lorem.sentences[12])),

              m(
                "ul.text-left pl-3 mt-5 mb-5",
                attrs.plans[2].items.map(item => {
                  return m("li", item.name);
                })
              ),

              m(
                "p.text-left pt-4",
                m(
                  "a",
                  { href: attrs.site.href, class: "btn btn-primary" },
                  "Buy Now"
                )
              )
            ])
          )
        ])
      )
    );
  }
};
