import m from "mithril";

import Contact01 from "./blocks/contacts/contact01";
import Contact02 from "./blocks/contacts/contact02";
import Contact03 from "./blocks/contacts/contact03";
import Contact04 from "./blocks/contacts/contact04";
import Contact05 from "./blocks/contacts/contact05";

export default {
  view: function(vnode) {
    const attrs = vnode.attrs;

    return [
      m(Contact01, attrs),
      m(Contact02, attrs),
      m(Contact03, attrs),
      m(Contact04, attrs),
      m(Contact05, attrs)
    ];
  }
};
