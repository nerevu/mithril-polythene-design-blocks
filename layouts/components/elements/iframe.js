import m from "mithril";

const defStyle = {
  position: "absolute",
  display: "block",
  width: "100%",
  height: "100%"
}

function noop() {}

export default {
  view: function(vnode) {
    const attrs = vnode.attrs;

    return m("iframe", {
      id: attrs.id || "",
      sandbox: attrs.sandbox,
      allow: attrs.allow,
      class: attrs.class || "",
      frameBorder: "0",
      src: attrs.url,
      target: "_parent",
      allowFullScreen: attrs.allowFullScreen || false,
      style: Object.assign({}, defStyle, attrs.styles || {}),
      width: attrs.width || "100%",
      height: attrs.height || "100%",
      name: attrs.name || ""
      // onLoad: attrs.onLoad || noop,
      // onMouseOver: attrs.onMouseOver || noop,
      // onMouseOut: attrs.onMouseOut || noop
    })
  }
}
