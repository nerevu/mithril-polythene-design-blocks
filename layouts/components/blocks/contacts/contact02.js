import m from "mithril";

export default {
  view: function(vnode) {
    const attrs = vnode.attrs;

    return m(
      "section.fdb-block bg-dark",
      { style: `backgroundImage: 'url(${attrs.paths.images}/hero/blue.svg)'` },
      m(".container", [
        m(
          ".row text-center justify-content-center",
          m(".col-12 col-md-8 col-lg-7", [
            m("h1", "Contact Us"),
            m("h2", "We love to hear from you!")
          ])
        ),

        m(
          ".row pt-4",
          m(
            ".col-12",
            m("form", [
              m(".row", [
                m(
                  ".col-12 col-md",
                  m("input.form-control", { type: "text", placeholder: "Name" })
                ),

                m(
                  ".col-12 col-md mt-4 mt-md-0",
                  m("input.form-control", {
                    type: "text",
                    placeholder: "Email"
                  })
                ),

                m(
                  ".col-12 col-md mt-4 mt-md-0",
                  m("input.form-control", {
                    type: "text",
                    placeholder: "Phone (optional)"
                  })
                )
              ]),

              m(
                ".row mt-4",
                m(
                  ".col",
                  m("input", {
                    type: "email",
                    class: "form-control",
                    placeholder: "Subject"
                  })
                )
              ),

              m(
                ".row mt-4",
                m(
                  ".col",
                  m("textarea.form-control", {
                    name: "message",
                    rows: "3",
                    placeholder: "How can we help?"
                  })
                )
              ),

              m(
                ".row mt-4",
                m(
                  ".col text-center",
                  m(
                    "button",
                    { type: "submit", class: "btn btn-dark" },
                    "Submit"
                  )
                )
              )
            ])
          )
        )
      ])
    );
  }
};
