import React, { type JSX, useRef } from "react";
import useGsapAnimation from "../../../hooks/useGsapAnimation";

interface DataType {
   id: number;
   count: string;
   title: JSX.Element;
   list: string[];
}

const process_list: DataType[] = [
   {
      id: 1,
      count: "01",
      title: (<>Identification</>),
      list: ["We recognize the signals when potential customers are actively searching for solutions like yours", "Connect with prospects earlier in their evaluation process", "Establish meaningful interactions across multiple engagement channels"],
   },
   {
      id: 2,
      count: "02",
      title: (<>Filtration</>),
      list: ["Access completely new, verified, and regulation-compliant contact information", "Enrich your current database with actionable intelligence", "Maintain the highest standards of data accuracy and applicability"],
   },
   {
      id: 3,
      count: "03",
      title: (<>Sales Cadence</>),
      list: ["We identify the optimal moments when prospects are seeking solutions", "Initiate contact during the initial stages of the purchasing journey", "Refine interaction sequences for maximum effectiveness"],
   },
   {
      id: 4,
      count: "04",
      title: (<>Seal the Deal</>),
      list: ["Ensure your sales team possesses all necessary resources and information", "Optimize appointment outcomes through strategic B2B meeting preparation", "Accelerate deal closure with pre-qualified, high-intent opportunities"],
   },
];

const Process = () => {
   
   const triggerRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
   const pinRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
   useGsapAnimation({
      triggerRef,
      pinRef,
   });

   return (
      <div className="td-process-area pt-130 pb-160">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="td-service-title-wrap pb-10 text-center">
                     <h2 className="td-section-title mb-20" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                        Supporting Your Revenue Operations
                     </h2>
                     <p className="td-section-text" style={{ fontSize: '1.1rem', color: '#666', maxWidth: '700px', margin: '0 auto' }}>
                        Discover how Metanova Tech helps you achieve consistent monthly sales objectives
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <div className="container">
            <div className="td-process-border td-fixed-thumb-wrap" ref={triggerRef}>
               <div className="row">
                  <div className="col-lg-3">
                     <div className="td-process-thumb pt-80 pb-80 td-fixed-thumb" ref={pinRef}>
                        <img src="/assets/img/process/thumb.jpg" alt="" />
                     </div>
                  </div>
                  <div className="col-lg-9">
                     {process_list.map((item) => (
                        <div key={item.id} className="row">
                           <div className="col-lg-2 col-md-3 col-3">
                              <div className="td-process-count">
                                 <span>{item.count}</span>
                              </div>
                           </div>
                           <div className="col-lg-6 col-md-4 col-9">
                              <div className="td-process-title">
                                 <h3 className="mb-0">{item.title}</h3>
                              </div>
                           </div>
                           <div className="col-lg-4 col-md-5">
                              <div className="td-process-list">
                                 <ul>
                                    {item.list.map((list, i) => (
                                       <li key={i}>{list}</li>
                                    ))}
                                 </ul>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Process