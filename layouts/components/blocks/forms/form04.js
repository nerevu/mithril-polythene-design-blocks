import m from "mithril";

export default {
  view: function(vnode) {
    const attrs = vnode.attrs;

    return m(
      "section.fdb-block py-0",
      m(
        ".container py-5 my-5",
        { style: `background-image: url("${attrs.paths.images}/shapes/6.svg")` },
        m(
          ".row",
          m(".col-12 col-md-8 col-lg-7 col-xl-5 text-left", [
            m(
              ".row",
              m(".col", [
                m("h1", "Sign Up"),
                m("p.lead", attrs.lorem.sentences[0])
              ])
            ),

            m(
              ".row",
              m(
                ".col mt-4",
                m("input.form-control", { type: "text", placeholder: "Email" })
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
                m("button.btn btn-primary", { type: "button" }, "Submit")
              )
            )
          ])
        )
      )
    );
  }
};
