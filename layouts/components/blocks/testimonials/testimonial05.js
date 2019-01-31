import m from "mithril";

export default {
  view: function(vnode) {
    const attrs = vnode.attrs;

    return m(
      "section.fdb-block py-5",
      m(
        ".container py-5",
        { style: `background-image: url("${attrs.paths.images}/shapes/2.svg")` },
        m(".row align-items-center justify-content-center", [
          m(
            ".col-lg-9 col-xl-6",
            m(
              ".fdb-box",
              m(".row", [
                m(
                  ".col-8 col-sm-6 col-md-4 col-xl-3 ml-auto mr-auto",
                  m("img", {
                    alt: "image",
                    class: "img-fluid rounded",
                    src: `${attrs.paths.images}/people/${attrs.testimonials[0].name}.jpg`
                  })
                ),

                m(".col-md-8 mt-4 mt-md-0", [
                  m("p.lead", attrs.testimonials[0].content),
                  m(
                    "p.h3 mt-4 mt-xl-5",
                    m("strong", attrs.testimonials[0].name)
                  ),
                  m("p", m("em", attrs.testimonials[0].position))
                ])
              ])
            )
          ),

          m(
            ".col-lg-9 col-xl-6 mt-4 mt-xl-0",
            m(
              ".fdb-box",
              m(".row", [
                m(
                  ".col-8 col-sm-6 col-md-4 col-xl-3 ml-auto mr-auto",
                  m("img", {
                    alt: "image",
                    class: "img-fluid rounded",
                    src: `${attrs.paths.images}/people/${attrs.testimonials[1].name}.jpg`
                  })
                ),

                m(".col-md-8 mt-4 mt-md-0", [
                  m("p.lead", attrs.testimonials[1].content),
                  m(
                    "p.h3 mt-4 mt-xl-5",
                    m("strong", attrs.testimonials[1].name)
                  ),
                  m("p", m("em", attrs.testimonials[1].position))
                ])
              ])
            )
          )
        ])
      )
    );
  }
};
