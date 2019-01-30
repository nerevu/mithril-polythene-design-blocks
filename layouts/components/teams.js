import m from "mithril";

import Team01 from "./blocks/teams/team01";
import Team02 from "./blocks/teams/team02";
import Team03 from "./blocks/teams/team03";
import Team04 from "./blocks/teams/team04";
import Team05 from "./blocks/teams/team05";

export default {
  view: function(vnode) {
    const attrs = vnode.attrs;

    return [
      m(Team01, attrs),
      m(Team02, attrs),
      m(Team03, attrs),
      m(Team04, attrs),
      m(Team05, attrs)
    ];
  }
};
