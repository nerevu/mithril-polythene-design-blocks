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
          m(".col-12 col-md-8 col-lg-6 text-center", [
            m("h1", "Subscribe"),
            m(".input-group mt-4 mb-4", [
              m("input.form-control", {
                type: "text",
                placeholder: "Enter your email address"
              }),
              m(
                ".input-group-append",
                m("button.btn btn-primary", { type: "button" }, "Submit")
              )
            ]),

            m("p.h4", [
              "Find us on",
              m("a", { href: attrs.site.href }, "Facebook"),
              "and",
              m("a", { href: attrs.site.href }, "Twitter"),
              "."
            ])
          ])
        )
      )
    );
  }
};
