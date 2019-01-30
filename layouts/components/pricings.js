import m from "mithril";

import Pricing01 from "./blocks/pricings/pricing01";
import Pricing02 from "./blocks/pricings/pricing02";
import Pricing03 from "./blocks/pricings/pricing03";
import Pricing04 from "./blocks/pricings/pricing04";
import Pricing05 from "./blocks/pricings/pricing05";

export default {
  view: function(vnode) {
    const attrs = vnode.attrs;

    return [
      m(Pricing01, attrs),
      m(Pricing02, attrs),
      m(Pricing03, attrs),
      m(Pricing04, attrs),
      m(Pricing05, attrs)
    ];
  }
};
