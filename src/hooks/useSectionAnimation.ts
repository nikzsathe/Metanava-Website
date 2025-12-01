import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface UseSectionAnimationProps {
   delay?: number;
   duration?: number;
   y?: number;
}

const useSectionAnimation = ({ delay = 0, duration = 1, y = 50 }: UseSectionAnimationProps = {}) => {
   const ref = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const element = ref.current;
      if (!element) return;

      try {
         gsap.fromTo(
            element,
            {
               opacity: 0,
               y: y,
               scale: 0.95,
            },
            {
               opacity: 1,
               y: 0,
               scale: 1,
               duration: duration,
               delay: delay,
               ease: "power3.out",
               scrollTrigger: {
                  trigger: element,
                  start: "top 85%",
                  end: "bottom 60%",
                  toggleActions: "play none none reverse",
                  markers: false,
               },
            }
         );
      } catch (error) {
         console.error("Animation error:", error);
         // Fallback: just show the element
         element.style.opacity = "1";
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
   }, [delay, duration, y]);

   return ref;
};

export default useSectionAnimation;

