import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { CustomEase } from "gsap/CustomEase";

// ease (0.6, 0, 0.4, 1)
const NEW_EASE_DEFAULT = "M0,0 C0.6,0 0.4,1 1,1"
const GSAP_EASE = "gsap-new-ease"
CustomEase.create(GSAP_EASE, NEW_EASE_DEFAULT)

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, CustomEase);

function scrollTriggerRefresh() {
  ScrollTrigger.refresh();
}

export { gsap, scrollTriggerRefresh, GSAP_EASE, ScrollTrigger }
