import m from "mithril";

import Form01 from "./blocks/forms/form01";
import Form02 from "./blocks/forms/form02";
import Form03 from "./blocks/forms/form03";
import Form04 from "./blocks/forms/form04";
import Form05 from "./blocks/forms/form05";

export default {
  view: function(vnode) {
    const attrs = vnode.attrs;

    return [
      m(Form01, attrs),
      m(Form02, attrs),
      m(Form03, attrs),
      m(Form04, attrs),
      m(Form05, attrs)
    ];
  }
};
