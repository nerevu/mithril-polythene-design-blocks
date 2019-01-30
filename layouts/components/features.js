import m from "mithril";

import Feature01 from "./blocks/features/feature01";
import Feature02 from "./blocks/features/feature02";
import Feature03 from "./blocks/features/feature03";
import Feature04 from "./blocks/features/feature04";
import Feature05 from "./blocks/features/feature05";

export default {
  view: function(vnode) {
    const attrs = vnode.attrs;

    return [
      m(Feature01, attrs),
      m(Feature02, attrs),
      m(Feature03, attrs),
      m(Feature04, attrs),
      m(Feature05, attrs)
    ];
  }
};
