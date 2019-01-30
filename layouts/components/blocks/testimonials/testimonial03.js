import m from "mithril";

export default {
  view: function(vnode) {
    const attrs = vnode.attrs;

    return m(
      "section.fdb-block",
      m(
        ".container",
        m(
          ".row text-center",
          m(".col-12", [
            m("h3", m("strong", "You are in good company")),

            // m(".mt-2 mt-md-5 justify-content-center",
            m(
              ".mt-5 justify-content-center",
              attrs.testimonials.map(testimonial => {
                return m("img", {
                  alt: "image",
                  height: "30",
                  class: "ml-3 mr-3 mb-2 mt-2",
                  src: `${testimonial.company}.svg`
                });
              })
            )
          ])
        )
      )
    );
  }
};
