import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import type { JSX } from "react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

interface DataType {
   id: number;
   thumb: string;
   sub_title: string;
   title: string;
   desc: JSX.Element;
   list: string[];
   link: string;
}

const service_data: DataType[] = [
   {
      id: 1,
      thumb: "/assets/img/service/details/thumb.jpg",
      sub_title: "Pipeline Acceleration",
      title: "B2B Lead Generation & Demand Programs",
      desc: (<>Global campaigns that surface in-market buyers, enrich firmographic fields, and hand sales compliant marketing-qualified leads on your SLAs.</>),
      list: ["B2B Lead Generation", "Demand Generation Journeys", "Marketing Qualified Leads (MQL)", "Content Syndication Pods"],
      link: "/services/b2b-lead-generation",
   },
   {
      id: 2,
      thumb: "/assets/img/service/details/thumb-2.jpg",
      sub_title: "Account Excellence",
      title: "Account-Based Marketing & ABX",
      desc: (<>Account intelligence, buying committee mapping, and orchestrated outreach across email, paid media, and SDR enablement to move target accounts faster.</>),
      list: ["Account-Based Marketing", "BANT Lead Validation", "Deal-Stage Nurture Plays", "Executive Summary Dashboards"],
      link: "/services/account-based-marketing",
   },
   {
      id: 3,
      thumb: "/assets/img/service/details/thumb-3.jpg",
      sub_title: "Digital Amplification",
      title: "Content Syndication & Always-On Digital",
      desc: (<>Thought-leadership distribution, multilingual email marketing, and digital retargeting that keep your narrative consistent from top to bottom funnel.</>),
      list: ["Content Syndication Networks", "Digital Marketing Campaigns", "Email Marketing & Nurture", "Intent + Technographic Targeting"],
      link: "/services/content-syndication",
   },
   {
      id: 4,
      thumb: "/assets/img/service/details/thumb-4.jpg",
      sub_title: "Sales Acceleration",
      title: "SQL, Appointment & Callback Programs",
      desc: (<>Human-qualified engagements that convert interest into sales-ready conversations, complete with recordings, notes, and calendar holds.</>),
      list: ["Sales Qualified Leads (SQL)", "Appointment Generation", "Confirmed Callback Leads", "Sales Enablement Toolkits"],
      link: "/services/digital-marketing",
   },
];

const ServiceItem = () => {

   useEffect(() => {
      if (typeof window !== "undefined") {
         const mm = gsap.matchMedia();

         mm.add("(min-width: 991px)", () => {
            const panels = document.querySelectorAll(".td-service-pin-item-panel");

            panels.forEach((panel) => {
               gsap.to(panel, {
                  scrollTrigger: {
                     trigger: panel,
                     start: "top top",
                     end: "bottom 100%",
                     pin: true,
                     pinSpacing: false,
                     scrub: true,
                     markers: false,
                     endTrigger: ".td-service-pin-items",
                  },
               });
            });
         });

         return () => mm.revert();
      }
   }, []);

   return (
      <div className="td-service-pin-item td-service-pin-items">
         <div className="container-fluid p-0">
            {service_data.map((item) => (
               <div key={item.id} className="black-bg td-service-pin-item-panel">
                  <div className="row align-items-center">
                     <div className="col-lg-6">
                        <div className="td-service-pin-thumb">
                           <img className="w-100" src={item.thumb} alt="" />
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="td-service-pin-content-inner pt-40 pb-40 ml-100">
                           <div className="td-service-pin-subtitle mb-15">
                              <span className="number">0{item.id}</span>
                              <span>{item.sub_title}</span>
                           </div>
                           <h2 className="td-service-pin-title mb-30">{item.title}</h2>
                           <div className="td-service-pin-content  ml-50">
                              <p className="mb-40">{item.desc}</p>
                              <ul>
                                 {item.list.map((list, i) => (
                                    <li key={i}>{list}</li>
                                 ))}
                              </ul>
                              <div className="td-btn-group td-btn-group-border pt-50">
                                 <Link className="td-btn-circle" to={item.link}>
                                    <i className="fa-solid fa-arrow-right"></i>
                                 </Link>
                                 <Link className="td-btn-2 td-btn-primary" to={item.link}>VIEW DETAILS</Link>
                                 <Link className="td-btn-circle" to={item.link}>
                                    <i className="fa-solid fa-arrow-right"></i>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div >
   )
}

export default ServiceItem
