import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useIconAnimation = () => {
   const ref = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const element = ref.current;
      if (!element) return;

      const icon = element.querySelector("svg, .hero-icon-large, .hero-icon-medium");
      if (!icon) return;

      try {
         gsap.fromTo(
            icon,
            {
               opacity: 0,
               scale: 0,
               rotation: -180,
            },
            {
               opacity: 1,
               scale: 1,
               rotation: 0,
               duration: 1,
               ease: "back.out(1.7)",
               scrollTrigger: {
                  trigger: element,
                  start: "top 85%",
                  toggleActions: "play none none reverse",
                  markers: false,
               },
            }
         );
      } catch (error) {
         console.error("Icon animation error:", error);
         // Fallback: just show the icon
         (icon as HTMLElement).style.opacity = "1";
      }

      return () => {
         try {
            ScrollTrigger.getAll().forEach((trigger) => {
               if (trigger.vars && trigger.vars.trigger === element) {
                  trigger.kill();
               }
            });
         } catch (error) {
            console.error("Cleanup error:", error);
         }
      };
   }, []);

   return ref;
};

export default useIconAnimation;

