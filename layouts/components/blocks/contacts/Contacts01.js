import m from "mithril";

export default {
  view: function(vnode) {
    const attrs = vnode.attrs;

    return m("section.fdb-block pt-0", [
      m(".container-fluid p-0 pb-md-5", m(Iframe, attrs.map)),

      m(
        ".container",
        m(".row mt-5", [
          m(".col-12 col-md-6 col-lg-5", [
            m("h2", "Contact Us"),
            m("p.lead", attrs.lorem.sentences[6]),

            m("p.lead", attrs.lorem.sentences[3]),

            m("p.h3 mt-5", [
              m("strong", "Email:"),
              m("a", { href: attrs.site.href }, "hello@website.com")
            ]),

            m("p.lead", [
              m("strong", "Phone:"),
              m("a", { href: attrs.site.href }, "+44 123 123 1232")
            ])
          ]),

          m(
            ".col-12 col-md-6 ml-auto pt-5 pt-md-0",
            m("form", [
              m(".row", [
                m(
                  ".col",
                  m("input.form-control", {
                    type: "text",
                    placeholder: "First name"
                  })
                ),
                m(
                  ".col",
                  m("input.form-control", {
                    type: "text",
                    placeholder: "Last name"
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
                    placeholder: "Enter email"
                  })
                )
              ),

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
                  ".col",
                  m(
                    "button",
                    { type: "submit", class: "btn btn-primary" },
                    "Submit"
                  )
                )
              )
            ])
          )
        ])
      )
    ]);
  }
};
