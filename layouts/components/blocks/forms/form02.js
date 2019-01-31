import m from "mithril";

export default {
  view: function(vnode) {
    const attrs = vnode.attrs;

    return m(
      "section.fdb-block",
      { style: `background-image: url("${attrs.paths.images}/hero/blue.svg")` },
      m(
        ".container",
        m(
          ".fdb-box",
          m(".row justify-content-center align-items-center", [
            m(".col-12 col-lg-6", [
              m("h2", "Join us!"),
              m("p.lead", attrs.lorem.sentences[0])
            ]),

            m(
              ".col-12 col-lg-5 text-center",
              m(".input-group mt-4", [
                m("input.form-control", {
                  type: "text",
                  placeholder: "Enter your email address"
                }),

                m(
                  ".input-group-append",
                  m("button.btn btn-primary", { type: "button" }, "Submit")
                )
              ])
            )
          ])
        )
      )
    );
  }
};
