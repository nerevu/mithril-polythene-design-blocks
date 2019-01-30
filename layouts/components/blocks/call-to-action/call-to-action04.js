import m from "mithril";

export default {
  view: function(vnode) {
    const attrs = vnode.attrs;

    return m(
      "section.fdb-block",
      m(".container", [
        m(
          ".row justify-content-center",
          m(".col-12 col-md-8 col-lg-6 text-center", [
            m("h1", "Call to Action"),
            m("p.lead", attrs.lorem.sentences[5]),
            m(
              "p.mt-5 mt-sm-4",
              m("a.btn btn-primary", { href: attrs.site.href }, "Download")
            )
          ])
        ),

        m(
          ".row pt-5 pb-3",
          m(
            ".col-12 text-center",
            m("p", m("strong", "Fortune 100 companies are using our products"))
          )
        ),
        m(
          ".row",
          m(
            ".col-12 text-center",
            attrs.clients.map(client => {
              return m("img", {
                alt: "image",
                height: "30",
                class: "ml-3 mr-3 mb-2 mt-2",
                src: `${attrs.images}/customers/${client.name}.svg`
              });
            })
          )
        )
      ])
    );
  }
};
