import m from "mithril";

export default {
  view: function(vnode) {
    const attrs = vnode.attrs;

    return m(
      "section.fdb-block team-2",
      m(".container", [
        m(
          ".row text-center justify-content-center",
          m(".col-8", m("h1", "Meet Our Team"))
        ),

        m(".row-50"),

        m(
          ".row text-center justify-content-center",
          attrs.team.map(member => {
            return m(".col-sm-3 m-sm-auto", [
              m("img", {
                alt: "image",
                class: "img-fluid rounded-circle",
                src: member.photo.href
              }),
              m("h3", m("strong", member.name)),
              m("p", member.position)
            ]);
          })
        )
      ])
    );
  }
};
