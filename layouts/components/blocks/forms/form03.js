import m from "mithril";

export default {
  view: function(vnode) {
    const attrs = vnode.attrs;

    return m(
      "section.fdb-block",
      m(
        ".container",
        m(
          ".row justify-content-center",
          m(".col-12 col-lg-10 col-xl-8 text-center", [
            m(
              ".row",
              m(".col", [
                m("h1", "Register"),
                m("p.lead", attrs.lorem.sentences[1])
              ])
            ),

            m(".row align-items-center", [
              m(
                ".col-12 col-md-5 mt-4",
                m("input.form-control", { type: "text", placeholder: "Email" })
              ),

              m(
                ".col-12 col-md-5 mt-4",
                m("input.form-control", {
                  type: "password",
                  placeholder: "Password"
                })
              ),

              m(
                ".col-12 col-md-2 mt-4",
                m("button.btn btn-secondary", { type: "button" }, "Submit")
              )
            ])
          ])
        )
      )
    );
  }
};
