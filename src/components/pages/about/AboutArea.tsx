const AboutArea = () => {
   return (
      <div className="td-about-area td-about-main-spacing pb-100">
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
                     <h3 className="td-about-main-title mb-20">Our Story: Building the Most Trusted B2B Growth Collective</h3>
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
                                 Founded in 2020, Metanova Tech emerged from a simple yet powerful observation: technology companies were struggling with fragmented marketing approaches. Enterprise brands needed a comprehensive solution that unified data operations, demand strategy, lead generation, and creative media—not disconnected services from multiple vendors.
                              </p>
                              <p className="mb-0">
                                 Our founders, drawing on 15 years of combined B2B marketing expertise, set out to create a growth collective that delivers integrated, revenue-first programs with transparent accountability. Today, we help technology companies across the globe build predictable revenue pipelines and accelerate growth through our comprehensive, integrated approach.
                              </p>
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
