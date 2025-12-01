import { Link } from "react-router-dom"
import Count from "../../common/Count";

const service_groups = [
   {
      title: "Revenue-ready Demand Programs",
      summary: "Purpose-built B2B lead generation and demand generation campaigns that surface in-market buyers, score intent, and deliver marketing-qualified leads (MQL) and sales-qualified leads (SQL) directly to your sales team. Our multi-channel approach combines data operations, strategic targeting, and compliance-first execution to build predictable pipelines.",
      highlights: ["B2B Lead Generation", "Demand Generation", "Marketing Qualified Leads (MQL)", "Sales Qualified Leads (SQL)", "Full-funnel Pipeline Development"],
   },
   {
      title: "Account Engagement & Sales Acceleration",
      summary: "Account-based marketing (ABM) and ABX programs that align marketing and SDR teams with verified decision makers across the buying committee. We deploy personalized, multi-touch campaigns that accelerate enterprise deals and expand strategic accounts through coordinated sales and marketing plays.",
      highlights: ["Account-Based Marketing", "BANT Qualification", "Appointment Generation", "Confirmed Callback Leads", "Buying Committee Mapping"],
   },
   {
      title: "Full-funnel Digital Amplification",
      summary: "Always-on digital storytelling that keeps your brand discoverable and trusted across earned, owned, and paid channels. Our integrated content syndication, digital marketing, and email marketing programs ensure consistent brand presence while driving qualified engagement throughout the buyer journey.",
      highlights: ["Content Syndication", "Digital Marketing", "Email Marketing", "PPC & Paid Social", "Marketing Automation"],
   },
];

const Service = () => {
   return (
      <div id="services" className="td-service-area pb-100 pt-100">
         <div className="container">
            <div className="row">
               <div className="col-lg-6">
                  <div className="td-service-title-wrap">
                     <h2 className="td-section-title mb-30 td-text-invert">Comprehensive B2B Marketing Solutions that Convert</h2>
                     <p className="td-section-text mr-200">
                        Every program is engineered to deliver compliant data, richer intent signals, and clear attribution back to revenue. Our integrated approach to B2B lead generation, demand generation, account-based marketing, content syndication, digital marketing, and email marketing ensures that every touchpoint accelerates your pipeline. We serve technology companies across industries—from SaaS platforms and IT services to staffing agencies, consultants, marketing agencies, manufacturing firms, and logistics providers—helping them build predictable revenue systems that scale.
                     </p>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-lg-5">
                  <div className="td-service-btn mt-35 ml-110 mb-30">
                     <div className="td-btn-group mb-35">
                        <Link className="td-btn-circle" to="/contact">
                           <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                        <Link className="td-btn-2 td-btn-primary" to="/contact">Book a strategy call</Link>
                        <Link className="td-btn-circle" to="/contact">
                           <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                     </div>
                  </div>
               </div>
               <div className="col-lg-7">
                  <div className="td-service-content">
                     {service_groups.map((group, i) => (
                        <div key={group.title} className="td-service-item td-service-card">
                           <div className="d-flex align-items-center justify-content-between mb-15">
                              <span className="td-service-count">0{i + 1}</span>
                              <h3 className="mb-0">{group.title}</h3>
                           </div>
                           <p className="mb-20">{group.summary}</p>
                           <ul className="mb-25">
                              {group.highlights.map((service) => (
                                 <li key={service}>{service}</li>
                              ))}
                           </ul>
                           <Link className="td-btn-2 td-btn-primary" to="/contact">
                              Discuss this service
                           </Link>
                        </div>
                     ))}
                     <div className="td-service-counter mt-80">
                        <div className="row">
                           <div className="col-lg-6 col-md-6">
                              <div className="td-service-counter-item mb-30">
                                 <h2><span className="odometer" data-count="72"> <Count number={72} /></span>+</h2>
                                 <span>Programs delivered annually</span>
                              </div>
                           </div>
                           <div className="col-lg-6 col-md-6">
                              <div className="td-service-counter-item mb-30">
                                 <h2><span className="odometer" data-count="25"> <Count number={25} /></span>+</h2>
                                 <span>Markets activated worldwide</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Service
