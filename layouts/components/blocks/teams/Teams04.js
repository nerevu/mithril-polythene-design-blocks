import m from "mithril";

export default {
  view: function(vnode) {
    const attrs = vnode.attrs;

    return m(
      "section.fdb-block team-4",
      m(".container", [
        m(
          ".row text-center justify-content-center",
          m(".col-8", m("h1", "Team"))
        ),

        m(
          ".row text-center mt-5",
          attrs.team.map(member => {
            return m(".col-3", [
              m("img", {
                alt: "image",
                class: "img-fluid rounded",
                src: member.photo.href
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
