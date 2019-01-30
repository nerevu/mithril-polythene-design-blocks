import m from "mithril";

export default {
  view: function(vnode) {
    const attrs = vnode.attrs;

    return m(
      "section.fdb-block",
      m(".container", [
        m(
          ".row text-center justify-content-center",
          m(".col-12 col-md-8 col-lg-7", [
            m("h1", "Contact Us"),
            m(
              "p.lead",
              "One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar."
            )
          ])
        ),

        m(
          ".row pt-4",
          m(".col-12 col-md-6", m(Iframe, attrs.map)),

          m(
            ".col-12 col-md-6 pt-5 pt-md-0",
            m("form", [
              m(
                ".row",
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
        )
      ])
    );
  }
};
