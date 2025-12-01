import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface UseStaggerAnimationProps {
   stagger?: number;
   delay?: number;
   duration?: number;
   y?: number;
}

const useStaggerAnimation = ({ 
   stagger = 0.2, 
   delay = 0, 
   duration = 0.8, 
   y = 30 
}: UseStaggerAnimationProps = {}) => {
   const ref = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const element = ref.current;
      if (!element) return;

      const children = element.querySelectorAll(".animate-item");

      if (children.length === 0) return;

      try {
         gsap.fromTo(
            children,
            {
               opacity: 0,
               y: y,
               scale: 0.9,
            },
            {
               opacity: 1,
               y: 0,
               scale: 1,
               duration: duration,
               delay: delay,
               stagger: stagger,
               ease: "power2.out",
               scrollTrigger: {
                  trigger: element,
                  start: "top 80%",
                  end: "bottom 60%",
                  toggleActions: "play none none reverse",
                  markers: false,
               },
            }
         );
      } catch (error) {
         console.error("Stagger animation error:", error);
         // Fallback: just show the items
         children.forEach((child) => {
            (child as HTMLElement).style.opacity = "1";
         });
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
   }, [stagger, delay, duration, y]);

   return ref;
};

export default useStaggerAnimation;

