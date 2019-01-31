import m from "mithril";

import Footer01 from "./blocks/footers/footer01";
import Footer02 from "./blocks/footers/footer02";
import Footer03 from "./blocks/footers/footer03";
import Footer04 from "./blocks/footers/footer04";
import Footer05 from "./blocks/footers/footer05";

export default {
  view: function(vnode) {
    const attrs = vnode.attrs;

    return [
      m(Footer01, attrs),
      m(Footer02, attrs),
      m(Footer03, attrs),
      m(Footer04, attrs),
      m(Footer05, attrs)
    ];
  }
};
