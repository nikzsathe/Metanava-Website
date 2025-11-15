const ServiceArea = () => {
   return (
      <div className="td-service-main-area pb-125">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="td-service-main-bigthumb fix td-rounded-10">
                     <img data-speed=".9" src="/assets/img/service/details/bg.jpg" alt="" />
                  </div>
               </div>
            </div>
            <div className="row justify-content-center">
               <div className="col-lg-9">
                  <div className="td-service-main-content text-center pt-140 mb-60  wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1s">
                     <span className="mb-25 d-inline-block">//  How we create revenue</span>
                     <h2>Revenue programs designed for technology marketers that demand compliant data, predictable delivery, and transparent attribution.</h2>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-lg-4">
                  <div className="td-service-main-expreance mb-30  wow fadeInUp" data-wow-delay=".4s" data-wow-duration="1s">
                     <h2 className="expreance mb-0">15</h2>
                     <span className="year">YEARS OF B2B EXPERTISE</span>
                  </div>
               </div>
               <div className="col-lg-8">
                  <div className="td-service-main-strategy-wrap ml-50">
                     <div className="row">
                        <div className="col-lg-6 col-md-6  wow fadeInUp" data-wow-delay=".6s" data-wow-duration="1s">
                           <div className="td-service-main-strategy mb-40">
                              <h3 className="title mb-20">Compliance-first delivery</h3>
                              <p className="text">Every program is audited for GDPR, CAN-SPAM, and regional privacy regulations before a single lead is accepted.</p>
                           </div>
                        </div>
                        <div className="col-lg-6 col-md-6  wow fadeInUp" data-wow-delay=".8s" data-wow-duration="1s">
                           <div className="td-service-main-strategy mb-40">
                              <h3 className="title mb-20">Global reach, local nuance</h3>
                              <p className="text">Dedicated pods for AMER, EMEA, and APAC manage localization, language coverage, and territory routing.</p>
                           </div>
                        </div>
                        <div className="col-12  wow fadeInUp" data-wow-delay=".9s" data-wow-duration="1s">
                           <div className="td-service-main-strategy">
                              <p className="text">Metanova Tech unifies data operations, media, and sales enablement so marketing-qualified and sales-qualified leads arrive with context, conversation intelligence, and a clear path to revenue.</p>
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

export default ServiceArea
