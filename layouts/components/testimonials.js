import m from "mithril";

import Testimonial01 from "./blocks/testimonials/testimonial01";
import Testimonial02 from "./blocks/testimonials/testimonial02";
import Testimonial03 from "./blocks/testimonials/testimonial03";
import Testimonial04 from "./blocks/testimonials/testimonial04";
import Testimonial05 from "./blocks/testimonials/testimonial05";

export default {
  view: function(vnode) {
    const attrs = vnode.attrs;

    return [
      m(Testimonial01, attrs),
      m(Testimonial02, attrs),
      m(Testimonial03, attrs),
      m(Testimonial04, attrs),
      m(Testimonial05, attrs)
    ];
  }
};
