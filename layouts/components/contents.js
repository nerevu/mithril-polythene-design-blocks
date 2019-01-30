import m from "mithril";

import Content01 from "./blocks/contents/content01";
import Content02 from "./blocks/contents/content02";
import Content03 from "./blocks/contents/content03";
import Content04 from "./blocks/contents/content04";
import Content05 from "./blocks/contents/content05";

export default {
  view: function(vnode) {
    const attrs = vnode.attrs;

    return [
      m(Content01, attrs),
      m(Content02, attrs),
      m(Content03, attrs),
      m(Content04, attrs),
      m(Content05, attrs)
    ];
  }
};
