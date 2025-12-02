import { Link } from "react-router-dom";
import { useRef } from "react";

import useGsapAnimation from "../../../hooks/useGsapAnimation";

interface DataType {
   id: number;
   class: string;
   class_2: string;
   thumb: string;
   title: string;
}

const project_data: DataType[] = [
   {
      id: 1,
      class: "mr-30",
      class_2: "col-lg-4 col-md-6",
      thumb: "/assets/img/project/product.jpg",
      title: "Enterprise SaaS: Achieved 3.2x pipeline growth through strategic EMEA demand generation program",
   },
   {
      id: 2,
      class: "two pt-195 ml-100 mr-100",
      class_2: "col-lg-4 col-md-6",
      thumb: "/assets/img/project/product-2.jpg",
      title: "Cybersecurity ABM: Successfully engaged 186 decision-making committees within 8 weeks",
   },
   {
      id: 3,
      class: "three pt-175 ml-70",
      class_2: "col-lg-4 col-md-6",
      thumb: "/assets/img/project/product-3.jpg",
      title: "Cloud infrastructure: Accelerated MQL to SQL conversion by 41% through enhanced nurturing strategy",
   },
   {
      id: 4,
      class: "four pt-85",
      class_2: "col-lg-6 col-md-6",
      thumb: "/assets/img/project/product-4.jpg",
      title: "Fintech startup: Generated 2,400 verified callbacks via multilingual email marketing operations",
   },
   {
      id: 5,
      class: "five",
      class_2: "col-lg-6 col-md-12",
      thumb: "/assets/img/project/product-5.jpg",
      title: "Hardware enterprise: Worldwide content distribution network supporting 11 regional sales teams",
   },
];

const Project = () => {

   const triggerRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
   const pinRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
   useGsapAnimation({
      triggerRef,
      pinRef,
   });

   return (
      <div className="td-project-area td-fixed-title-wrap z-index-1 p-relative pt-155 pb-95" style={{ backgroundImage: `url(/assets/img/project/bg.jpg)` }} ref={triggerRef}>
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="td-project-title text-center pb-80 td-fixed-title z-index-m-1" ref={pinRef}>
                     <span className="subtitle d-inline-block mb-15">PROVEN REVENUE RESULTS</span>
                     <h2 className="title">Initiatives that <span>Drive Real Impact</span></h2>
                  </div>
               </div>
               {project_data.map((item) => (
                  <div key={item.id} className={item.class_2}>
                     <div className={`td-project-item mb-30 ${item.class}`}>
                        <div className="td-project-thumb mb-25">
                           <img className="w-100" src={item.thumb} alt="" />
                        </div>
                        <div className="td-project-content">
                           <Link to="/portfolio-details">
                              <span className="mr-40">{item.title}</span>
                              <span className="icon">
                                 <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 13L13 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M1 1H13V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                 </svg>
                              </span>
                           </Link>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Project
