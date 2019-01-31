import m from "mithril";

export default {
  view: function(vnode) {
    const attrs = vnode.attrs;

    return m(
      "section.fdb-block team-1",
      m(".container", [
        m(
          ".row text-center justify-content-center",
          m(
            ".col-8",
            m("h1", "Our Team"),
            m("p.lead", attrs.lorem.sentences[5])
          )
        ),

        m(".row-50"),

        m(
          ".row",
          attrs.team.map(member => {
            return m(
              ".col-sm-3 text-left",
              m(".fdb-box p-0", [
                m("img", {
                  alt: "image",
                  class: "img-fluid rounded-0",
                  src: `${attrs.paths.images}/people/${member.name}.jpg`
                }),
                m(".content p-3", [
                  m("h3", m("strong", member.name)),
                  m("p", member.position)
                ])
              ])
            );
          })
        )
      ])
    );
  }
};
