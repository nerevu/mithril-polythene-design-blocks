import m from "mithril";

import Call01 from "./blocks/call-to-action/call-to-action01";
import Call02 from "./blocks/call-to-action/call-to-action02";
import Call03 from "./blocks/call-to-action/call-to-action03";
import Call04 from "./blocks/call-to-action/call-to-action04";
import Call05 from "./blocks/call-to-action/call-to-action05";

export default {
  view: function(vnode) {
    const attrs = vnode.attrs;

    return [
      m(Call01, attrs),
      m(Call02, attrs),
      m(Call03, attrs),
      m(Call04, attrs),
      m(Call05, attrs)
    ];
  }
};
