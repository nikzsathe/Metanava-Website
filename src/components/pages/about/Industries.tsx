import { 
   CloudIcon, 
   ComputerDesktopIcon, 
   UserPlusIcon, 
   BriefcaseIcon, 
   MegaphoneIcon, 
   Cog6ToothIcon, 
   TruckIcon 
} from "@heroicons/react/24/outline"
import useSectionAnimation from "../../../hooks/useSectionAnimation"
import useStaggerAnimation from "../../../hooks/useStaggerAnimation"

const Industries = () => {
   const titleRef = useSectionAnimation({ delay: 0.1, duration: 1 });
   const itemsRef = useStaggerAnimation({ stagger: 0.12, delay: 0.3, duration: 0.6 });

   const industries = [
      { icon: CloudIcon, name: "SaaS Platforms", desc: "Scalable demand programs for software-as-a-service companies" },
      { icon: ComputerDesktopIcon, name: "IT Services", desc: "Market presence building for technology service providers" },
      { icon: UserPlusIcon, name: "Staffing Agencies", desc: "Qualified placement generation and candidate sourcing" },
      { icon: BriefcaseIcon, name: "Consulting Firms", desc: "Reach expansion and thought leadership positioning" },
      { icon: MegaphoneIcon, name: "Marketing Agencies", desc: "Capability enhancement and service line growth" },
      { icon: Cog6ToothIcon, name: "Manufacturing", desc: "Digital transformation and sales funnel optimization" },
      { icon: TruckIcon, name: "Logistics Providers", desc: "Sales optimization and market expansion" }
   ];

   return (
      <div className="td-about-industries-area pt-100 pb-100">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div ref={titleRef} className="td-about-industries-title-wrap text-center mb-60">
                     <span className="td-section-subtitle mb-15 d-inline-block">// Industries We Serve</span>
                     <h2 className="td-section-title td-text-invert">Technology Companies Across Diverse Sectors</h2>
                     <p className="mt-20 mb-0">
                        We specialize in helping technology companies across diverse sectors succeed. Our deep understanding of technology buyer behavior across these industries enables us to deliver programs that resonate with decision-makers.
                     </p>
                  </div>
               </div>
            </div>
            <div ref={itemsRef} className="row">
               {industries.map((industry, i) => {
                  const IconComponent = industry.icon;
                  return (
                     <div key={i} className="col-lg-4 col-md-6 mb-30">
                        <div className="td-about-industries-item animate-item">
                           <div className="d-flex align-items-center mb-15">
                              <div className="d-inline-flex align-items-center justify-content-center p-2 rounded" style={{ background: 'rgba(92, 196, 204, 0.1)', marginRight: '12px' }}>
                                 <IconComponent style={{ width: '24px', height: '24px', color: 'var(--td-theme-primary)' }} />
                              </div>
                              <h5 className="mb-0">{industry.name}</h5>
                           </div>
                           <p className="mb-0">{industry.desc}</p>
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>
      </div>
   )
}

export default Industries

