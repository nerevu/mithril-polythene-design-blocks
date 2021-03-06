import m from "mithril";

export default {
  view: function(vnode) {
    const attrs = vnode.attrs;

    return m(
      "section.fdb-block team-5",
      m(".container", [
        m(
          ".row text-center justify-content-center",
          m(".col-8", m("h1", "Meet Our Team"))
        ),

        m(".row-70"),

        // m(".row justify-content-center text-center mt-5",
        m(
          ".row text-center justify-content-center",
          attrs.team.map(member => {
            return m(".col-sm-2 m-sm-auto", [
              m("img", {
                alt: "image",
                class: "img-fluid rounded-circle",
                src: `${attrs.paths.images}/people/${member.name}.jpg`
              }),
              m("h3", m("strong", member.name)),
              m("p", m("em", member.position)),
              m("p", m("em", member.bio))
            ]);
          })
        )
      ])
    );
  }
};
