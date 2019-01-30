import m from "mithril";

export default {
  view: function(vnode) {
    const attrs = vnode.attrs;

    return m(
      "section.fdb-block",
      m(
        ".container",
        m(".row align-items-center justify-content-center", [
          m(
            ".col-md-6",
            m(".fdb-box fdb-touch", [
              m("p.h3 mb-4", attrs.testimonials[0].content),

              m("p", [
                m("img", {
                  alt: "image",
                  height: "50",
                  class: "rounded-circle",
                  src: attrs.testimonials[0].photo.href
                }),
                m("strong.ml-3", attrs.testimonials[0].name)
              ])
            ])
          ),

          m(
            ".col-md-6 mt-4 mt-md-0",
            m(".fdb-box fdb-touch", [
              m("p.h3 mb-4", attrs.testimonials[1].content),

              m("p", [
                m("img", {
                  alt: "image",
                  height: "50",
                  class: "rounded-circle",
                  src: attrs.testimonials[1].photo.href
                }),
                m("strong.ml-3", attrs.testimonials[1].name)
              ])
            ])
          )
        ])
      )
    );
  }
};
