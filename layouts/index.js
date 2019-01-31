import m from "mithril";
import Base from "./components/base";

import CallToAction from "./components/call-to-action";
import Contacts from "./components/contacts";
import Contents from "./components/contents";
import Features from "./components/features";
import Footers from "./components/footers";
import Forms from "./components/forms";
import Headers from "./components/headers";
import Pricings from "./components/pricings";
import Teams from "./components/teams";
import Testimonials from "./components/testimonials";

const entries = [
  { name: "", route: "/call-to-action", component: CallToAction },
  { name: "", route: "/contacts", component: Contacts },
  { name: "", route: "/contents", component: Contents },
  { name: "", route: "/features", component: Features },
  { name: "", route: "/footers", component: Footers },
  { name: "", route: "/forms", component: Forms },
  { name: "", route: "/headers", component: Headers },
  { name: "", route: "/pricings", component: Pricings },
  { name: "", route: "/teams", component: Teams },
  { name: "", route: "/testimonials", component: Testimonials }
];

export default {
  ctrl: function(file, metalsmith) {
    this.attrs = metalsmith._metadata;
    this.attrs.text = m.trust(file.html);
    return this;
  },

  view: function(ctrl, file, metalsmith) {
    let attrs = ctrl.attrs;

    attrs.content = m("div", [
      m(
        "section.fdb-block py-0 my-5",
        m(
          ".container bg-r py-5",
          {
            style: `backgroundImage: 'url(${attrs.paths.images}/shapes/1.svg)'`
          },
          m(
            ".row justify-content-start",
            m(".col-12 col-sm-10 col-md-8 text-center text-sm-left", [
              m("h1", ""),
              m("p.lead", ""),
              m("p.mt-4", [
                m(
                  "a.btn btn-dark mr-3 mr-sm-0",
                  {
                    href: "https://github.com/froala/design-blocks"
                  },
                  [m("i.fab fa-github"), "Github Docs"]
                ),
                m(
                  "a.btn btn-primary ml-sm-3 mr-3 mr-sm-0 mt-3 mt-sm-0",
                  {
                    href: "https://froala.com/design-blocks#playground"
                  },
                  "Official Website"
                )
              ])
            ])
          )
        )
      ),

      m(
        "section.fdb-block p-2#navigator",
        m(
          ".container-fluid",
          m("nav.navbar navbar-expand-md", [
            m(
              "button.navbar-toggler mr-auto ml-auto",
              {
                type: "button"
              },
              m("span.navbar-toggler-icon")
            ),

            m(
              ".collapse navbar-collapse mt-2 mt-md-0#navbarNav0",
              m(
                "nav.m-auto",
                entries.map(entry => {
                  return m(
                    "a.btn btn-outline-primary m-1",
                    {
                      href: entry.route
                    },
                    entry.name
                  );
                })
              )
            )
          ])
        )
      ),

      entries.map(entry => {
        return m(entry.component, attrs)
      })
    ]);

    return m(Base, attrs);
  }
};
