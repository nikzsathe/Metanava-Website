import { Link } from "react-router-dom"

const Awards = () => {
   return (
      <div className="td-awards-area td-awards-about-wrap pt-120 pb-130">
         <div className="container">
            <div className="row mb-40">
               <div className="col-lg-6">
                  <div className="td-awards-5-title-wrap mb-30">
                     <h2 className="td-testimonial-title mb-25 td-text-invert">Proof of <span>performance</span></h2>
                     <Link className="td-awards-5-btn" to="/contact">Request detailed case studies</Link>
                  </div>
               </div>
               <div className="col-lg-6  wow fadeInRight" data-wow-delay=".5s" data-wow-duration="1s">
                  <div className="td-awards-5-text mt-140 mb-30 mr-80">
                     <p className="mb-0">We obsess over measurable impact: compliant lead generation, faster MQL-to-SQL velocity, and marketing investments that sales leaders trust.</p>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-lg-6  wow fadeInLeft" data-wow-delay=".5s" data-wow-duration="1s">
                  <div className="td-awards-5-thumb text-center pt-70 mb-30">
                     <img src="/assets/img/awards/awards-5/award.png" alt="" />
                  </div>
               </div>
               <div className="col-lg-6  wow fadeInRight" data-wow-delay=".5s" data-wow-duration="1s">
                  <div className="td-awards-5-list mb-30">
                     <div className="td-awards-5-list-item d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                           <span className="mr-60">300%</span>
                           <span>Average pipeline lift from demand programs</span>
                        </div>
                        <span>Rolling 12 months</span>
                     </div>
                     <div className="td-awards-5-list-item d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                           <span className="mr-60">50+</span>
                           <span>B2B tech clients served across AMER, EMEA, APAC</span>
                        </div>
                        <span>Since 2021</span>
                     </div>
                     <div className="td-awards-5-list-item d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                           <span className="mr-60">92%</span>
                           <span>Leads approved through marketing & sales QA</span>
                        </div>
                        <span>Quality score</span>
                     </div>
                     <div className="td-awards-5-list-item d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                           <span className="mr-60">24hrs</span>
                           <span>Average turnaround for campaign optimizations</span>
                        </div>
                        <span>SLA</span>
                     </div>
                     <div className="td-awards-5-list-item d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                           <span className="mr-60">100%</span>
                           <span>GDPR, CCPA & CAN-SPAM compliant operations</span>
                        </div>
                        <span>Audit ready</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Awards
