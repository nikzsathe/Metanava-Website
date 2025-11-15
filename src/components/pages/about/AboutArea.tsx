import { Link } from "react-router-dom"

const AboutArea = () => {
   return (
      <div className="td-about-area td-about-main-spacing pb-140">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="td-about-main-wrapper pb-90">
                     <h2 className="td-section-page-title td-title-anim text-center">
                        We are Metanova Tech—B2B marketing strategists who build<br />
                        <span>predictable demand systems</span> for technology leaders.
                     </h2>
                  </div>
               </div>
               <div className="col-lg-5">
                  <div className="td-about-main-thumb mb-40 fix td-rounded-10 wow fadeInLeft" data-wow-delay=".5s" data-wow-duration="1s">
                     <img data-speed=".9" className="w-100 td-rounded-10" src="/assets/img/about/main/thumb.jpg" alt="" />
                  </div>
               </div>
               <div className="col-lg-7">
                  <div className="td-about-main-content ml-110 mb-40  wow fadeInRight" data-wow-delay=".5s" data-wow-duration="1s">
                     <h3 className="td-about-main-title mb-20">Mission, vision & value</h3>
                     <div className="row">
                        <div className="col-lg-5 col-md-5">
                           <div className="td-about-main-bigtext">
                              <h2>15</h2>
                              <span>Years of combined B2B expertise</span>
                           </div>
                        </div>
                        <div className="col-lg-7 col-md-7">
                           <div className="td-about-main-text mt-30">
                              <p className="mb-15">
                                 <strong>Mission:</strong> Empower revenue teams with compliant data, agile execution, and transparent reporting so every buyer touchpoint
                                 accelerates pipeline.
                              </p>
                              <p className="mb-15">
                                 <strong>Vision:</strong> Become the most trusted B2B marketing partner for enterprises that need accountable growth across global markets.
                              </p>
                              <p className="mb-30">
                                 <strong>Value proposition:</strong> Deep specialization in B2B lead generation and digital marketing, strengthened by always-on analytics,
                                 Martech craftsmanship, and revenue-first accountability.
                              </p>
                              <div className="td-btn-group">
                                 <Link className="td-btn-circle" to="/contact">
                                    <i className="fa-solid fa-arrow-right"></i>
                                 </Link>
                                 <Link className="td-btn-2 td-btn-primary" to="/contact">EXPLORE ENGAGEMENT MODELS</Link>
                                 <Link className="td-btn-circle" to="/contact">
                                    <i className="fa-solid fa-arrow-right"></i>
                                 </Link>
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

export default AboutArea
