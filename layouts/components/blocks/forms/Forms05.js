import m from "mithril";

export default {
  view: function(vnode) {
    const attrs = vnode.attrs;

    return m(
      "section.fdb-block py-0",
      m(
        ".container py-5 my-5",
        { style: `backgroundImage: 'url(${attrs.images}/shapes/4.svg)'` },
        m(
          ".row justify-content-end",
          m(
            ".col-12 col-md-8 col-lg-6 col-xl-5 text-left",
            m(".fdb-box", [
              m(
                ".row",
                m(".col", [
                  m("h1", "Log In"),
                  m("p.lead", attrs.lorem.sentences[1])
                ])
              ),

              m(
                ".row",
                m(
                  ".col mt-4",
                  m("input.form-control", {
                    type: "text",
                    placeholder: "Email"
                  })
                )
              ),

              m(
                ".row mt-4",
                m(
                  ".col",
                  m("input.form-control", {
                    type: "password",
                    placeholder: "Password"
                  })
                )
              ),

              m(
                ".row mt-4",
                m(
                  ".col",
                  m("button.btn btn-secondary", { type: "button" }, "Submit")
                )
              )
            ])
          )
        )
      )
    );
  }
};
