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
  { name: "Call To Action", id: "call-to-action", route: "/call-to-action", component: CallToAction },
  { name: "Contacts", id: "contacts", route: "/contacts", component: Contacts },
  { name: "Contents", id: "contents", route: "/contents", component: Contents },
  { name: "Features", id: "features", route: "/features", component: Features },
  { name: "Footers", id: "footers", route: "/footers", component: Footers },
  { name: "Forms", id: "forms", route: "/forms", component: Forms },
  { name: "Headers", id: "headers", route: "/headers", component: Headers },
  { name: "Pricings", id: "pricings", route: "/pricings", component: Pricings },
  { name: "Teams", id: "teams", route: "/teams", component: Teams },
  { name: "Testimonials", id: "testimonials", route: "/testimonials", component: Testimonials }
];

export default {
  ctrl: function(file, metalsmith) {
    this.attrs = metalsmith._metadata;
    this.attrs.title = this.attrs.title || file.title;
    this.attrs.html = file.html;
    return this;
  },

  view: function(ctrl, file, metalsmith) {
    let attrs = ctrl.attrs;

    attrs.content = [
      m(
        "section.fdb-block py-0 my-5",
        m(
          ".container bg-r py-5",
          {
            style: `background-image: url("${attrs.paths.images}/shapes/1.svg")`
          },
          m(
            ".row justify-content-start",
            m(".col-12 col-sm-10 col-md-8 text-center text-sm-left", [
              m.trust(attrs.html),
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
        return m(`.blocks ${entry.id}`, m(entry.component, attrs))
      })
    ];

    return m(Base, attrs);
  }
};
