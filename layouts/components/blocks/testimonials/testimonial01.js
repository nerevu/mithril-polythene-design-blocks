import m from "mithril";

export default {
  view: function(vnode) {
    const attrs = vnode.attrs;

    return m(
      "section.fdb-block",
      m(
        ".container",
        m(".row align-items-center justify-content-center", [
          m(".col-12 col-md-10 col-lg-8", [
            m("p.lead", attrs.testimonials[0].content),
            m(
              "p.lead",
              m("strong", attrs.testimonials[0].name),
              m("em.ml-4", attrs.testimonials[0].position)
            )
          ]),

          m(
            ".col-8 col-sm-6 col-md-2 col-lg-3 col-xl-2 mt-4 mt-md-0 ml-auto mr-auto mr-md-0",
            m("img", {
              alt: "image",
              class: "img-fluid rounded-circle",
              src: `${attrs.paths.images}/people/${attrs.testimonials[0].name}.jpg`
            })
          )
        ])
      )
    );
  }
};
