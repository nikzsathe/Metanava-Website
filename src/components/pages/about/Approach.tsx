import { CircleStackIcon, ChartPieIcon, PaintBrushIcon } from "@heroicons/react/24/outline"
import useSectionAnimation from "../../../hooks/useSectionAnimation"
import useStaggerAnimation from "../../../hooks/useStaggerAnimation"

const Approach = () => {
   const titleRef = useSectionAnimation({ delay: 0.1, duration: 1 });
   const itemsRef = useStaggerAnimation({ stagger: 0.2, delay: 0.3, duration: 0.8 });

   const approaches = [
      {
         icon: CircleStackIcon,
         title: "Data Operations",
         desc: "Our data analysts ensure compliance and accuracy across every program, maintaining GDPR, CAN-SPAM, and regional privacy standards while delivering enriched, verified contact data."
      },
      {
         icon: ChartPieIcon,
         title: "Strategic Planning",
         desc: "Marketing strategists design full-funnel programs that align with your revenue goals, creating integrated campaigns that span awareness, consideration, and conversion stages."
      },
      {
         icon: PaintBrushIcon,
         title: "Creative Excellence",
         desc: "Creative experts craft compelling narratives and visual content that resonates with technology buyers, ensuring your brand stands out in competitive markets."
      }
   ];

   return (
      <div className="td-about-approach-area pt-100 pb-100">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div ref={titleRef} className="td-about-approach-title-wrap text-center mb-60">
                     <span className="td-section-subtitle mb-15 d-inline-block">// Our Approach</span>
                     <h2 className="td-section-title td-text-invert">Data-Driven Insights Meet Creative Execution</h2>
                  </div>
               </div>
            </div>
            <div ref={itemsRef} className="row">
               {approaches.map((approach, i) => {
                  const IconComponent = approach.icon;
                  return (
                     <div key={i} className="col-lg-4 col-md-6 mb-40">
                        <div className="td-about-approach-item animate-item">
                           <div className="d-inline-flex align-items-center justify-content-center mb-20 p-3 rounded-circle" style={{ background: 'rgba(92, 196, 204, 0.1)' }}>
                              <IconComponent style={{ width: '32px', height: '32px', color: 'var(--td-theme-primary)' }} />
                           </div>
                           <h4 className="mb-15">{approach.title}</h4>
                           <p className="mb-0">{approach.desc}</p>
                        </div>
                     </div>
                  );
               })}
            </div>
            <div className="row mt-20">
               <div className="col-lg-12">
                  <p className="text-center mb-0">
                     We believe in meaningful client connections, staying ahead of industry trends, and measuring success beyond just revenue—considering factors like customer lifetime value, pipeline health, and market expansion.
                  </p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Approach

