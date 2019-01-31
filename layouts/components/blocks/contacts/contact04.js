import m from "mithril";

export default {
  view: function(vnode) {
    const attrs = vnode.attrs;

    return m(
      "section.fdb-block py-0",
      m(
        ".container py-5 my-5",
        { style: `background-image: url("${attrs.paths.images}/shapes/9.svg")` },
        m(
          ".row py-5",
          m(
            ".col py-5",
            m(
              ".fdb-box fdb-touch",
              m(
                ".row text-center justify-content-center",
                m(".col-12 col-md-9 col-lg-7", [
                  m("h1", "Contact Us"),
                  m("p.lead", attrs.lorem.sentences[4])
                ])
              ),

              m(
                ".row justify-content-center pt-4",
                m(
                  ".col-12 col-md-8",
                  m("form", [
                    m(".row", [
                      m(
                        ".col-12 col-md",
                        m("input.form-control", {
                          type: "text",
                          placeholder: "Name"
                        })
                      ),

                      m(
                        ".col-12 col-md mt-4 mt-md-0",
                        m("input.form-control", {
                          type: "text",
                          placeholder: "Email"
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
                          { type: "submit", class: "btn btn-primary" },
                          "Submit"
                        )
                      )
                    )
                  ])
                )
              )
            )
          )
        )
      )
    );
  }
};
