import m from "mithril";

export default {
  view: function(vnode) {
    const attrs = vnode.attrs;

    return m(
      "section.fdb-block",
      { style: `background-image: url("${attrs.paths.images}/hero/red.svg")` },
      m(
        ".container",
        m(
          ".fdb-box",
          m(".row align-items-center justify-content-center", [
            m(
              ".col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 m-auto",
              m("img", {
                alt: "image",
                class: "img-fluid rounded-circle",
                src: `${attrs.paths.images}/people/${attrs.testimonials[0].name}.jpg`
              })
            ),

            m(".col-12 col-md-8 ml-auto mr-auto mt-4 mt-md-0", [
              m("p.lead", attrs.testimonials[0].content),
              m("p.h3 mt-4 mt-lg-5", m("strong", attrs.testimonials[0].name)),
              m("p", m("em", attrs.testimonials[0].position))
            ])
          ])
        )
      )
    );
  }
};
