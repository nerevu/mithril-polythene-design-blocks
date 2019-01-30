import m from "mithril";

import Header01 from "./blocks/headers/header01";
import Header02 from "./blocks/headers/header02";
import Header03 from "./blocks/headers/header03";
import Header04 from "./blocks/headers/header04";
import Header05 from "./blocks/headers/header05";

export default {
  view: function(vnode) {
    const attrs = vnode.attrs;

    return [
      m(Header01, attrs),
      m(Header02, attrs),
      m(Header03, attrs),
      m(Header04, attrs),
      m(Header05, attrs)
    ];
  }
};
