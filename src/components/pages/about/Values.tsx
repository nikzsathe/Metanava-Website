import { 
   DocumentTextIcon, 
   ShieldCheckIcon, 
   StarIcon, 
   UserGroupIcon, 
   LightBulbIcon, 
   SparklesIcon 
} from "@heroicons/react/24/outline"
import useSectionAnimation from "../../../hooks/useSectionAnimation"
import useStaggerAnimation from "../../../hooks/useStaggerAnimation"

const Values = () => {
   const titleRef = useSectionAnimation({ delay: 0.1, duration: 1 });
   const itemsRef = useStaggerAnimation({ stagger: 0.15, delay: 0.3, duration: 0.7 });

   const values = [
      {
         icon: DocumentTextIcon,
         title: "Transparency",
         desc: "We operate with complete transparency in reporting, pricing, and program performance, ensuring you always know where your investment is going and what results you're achieving."
      },
      {
         icon: ShieldCheckIcon,
         title: "Accountability",
         desc: "Every program we deliver is tied to measurable outcomes. We take ownership of results and continuously optimize to exceed your expectations."
      },
      {
         icon: StarIcon,
         title: "Quality First",
         desc: "We prioritize quality over quantity in every aspect of our work—from lead generation to campaign execution, ensuring every deliverable meets the highest standards."
      },
      {
         icon: UserGroupIcon,
         title: "Partnership",
         desc: "We operate as an extension of your team, investing in understanding your business, market, and goals to deliver solutions that truly drive growth."
      },
      {
         icon: LightBulbIcon,
         title: "Innovation",
         desc: "We stay ahead of industry trends and continuously refine our methodologies, adopting new technologies and strategies that deliver better results."
      },
      {
         icon: SparklesIcon,
         title: "Excellence",
         desc: "Our team culture emphasizes collaboration, innovation, and a commitment to excellence that extends to every program we deliver."
      }
   ];

   return (
      <div className="td-about-values-area pt-100 pb-100 grey-bg-2">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div ref={titleRef} className="td-about-values-title-wrap text-center mb-60">
                     <span className="td-section-subtitle mb-15 d-inline-block">// Core Values</span>
                     <h2 className="td-section-title td-text-invert">What Drives Us Every Day</h2>
                  </div>
               </div>
            </div>
            <div ref={itemsRef} className="row">
               {values.map((value, i) => {
                  const IconComponent = value.icon;
                  return (
                     <div key={i} className="col-lg-4 col-md-6 mb-40">
                        <div className="td-about-values-item animate-item">
                           <div className="d-inline-flex align-items-center justify-content-center mb-20 p-3 rounded-circle" style={{ background: 'rgba(92, 196, 204, 0.1)' }}>
                              <IconComponent style={{ width: '28px', height: '28px', color: 'var(--td-theme-primary)' }} />
                           </div>
                           <h4 className="mb-15">{value.title}</h4>
                           <p className="mb-0">{value.desc}</p>
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>
      </div>
   )
}

export default Values

