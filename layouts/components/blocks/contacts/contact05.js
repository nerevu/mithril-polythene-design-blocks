import m from "mithril";

export default {
  view: function(vnode) {
    const attrs = vnode.attrs;

    return m("section.fdb-block pt-0", [
      m(".container-fluid p-0 pb-3", m(Iframe, attrs.map)),

      m(".container", [
        m(
          ".row text-center justify-content-center pt-5",
          m(".col-12 col-md-7", m("h1", "Contact Us"))
        ),

        m(
          ".row justify-content-center pt-4",
          m(
            ".col-12 col-md-7",
            m("form", [
              m(
                ".row",
                m(
                  ".col",
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
        ),

        m(".row-100")
      ]),

      m(
        ".bg-dark",
        m(".container", [
          m(".row-50"),
          m(".row justify-content-center text-center", [
            m(".col-12 col-md mr-auto ml-auto", [
              m("img", {
                alt: "image",
                height: "40",
                class: "mb-2",
                src: `${attrs.paths.images}/icons/phone.svg`
              }),
              m("p.lead", "+44 (112) 123 752")
            ]),

            m(
              ".col-12 col-md pt-4 pt-md-0 mr-auto ml-auto",
              m("img", {
                alt: "image",
                height: "40",
                class: "mb-2",
                src: `${attrs.paths.images}/icons/navigation.svg`
              }),
              m("p.lead", ["123 6th St.", m("br"), "Melbourne, FL 32904"])
            ),

            m(".col-12 col-md pt-4 pt-md-0 mr-auto ml-auto", [
              m("img", {
                alt: "image",
                height: "40",
                class: "mb-2",
                src: `${attrs.paths.images}/icons/mail.svg`
              }),
              m("p.lead", "support@website.com")
            ])
          ]),

          m(".row-50")
        ])
      ),

      m(".container", [
        m(".row-70"),
        m(
          ".row text-center",
          m(
            ".col",
            m("p.h2", [
              m(
                "a",
                { href: attrs.site.href, class: "mx-2" },
                m("i.fab fa-facebook")
              ),
              m(
                "a",
                { href: attrs.site.href, class: "mx-2" },
                m("i.fab fa-twitter")
              ),
              m(
                "a",
                { href: attrs.site.href, class: "mx-2" },
                m("i.fab fa-instagram")
              ),
              m(
                "a",
                { href: attrs.site.href, class: "mx-2" },
                m("i.fab fa-google")
              ),
              m(
                "a",
                { href: attrs.site.href, class: "mx-2" },
                m("i.fab fa-pinterest")
              )
            ])
          )
        )
      ])
    ]);
  }
};
