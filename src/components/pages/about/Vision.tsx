import useSectionAnimation from "../../../hooks/useSectionAnimation"

const Vision = () => {
   const contentRef = useSectionAnimation({ delay: 0.2, duration: 1, y: 30 });
   const imageRef = useSectionAnimation({ delay: 0.4, duration: 1, y: 30 });

   return (
      <div className="td-about-vision-area pt-100 pb-100 grey-bg-2">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-6">
                  <div ref={contentRef} className="td-about-vision-content">
                     <span className="td-section-subtitle mb-15 d-inline-block">// Our Vision</span>
                     <h2 className="td-section-title mb-30 td-text-invert">Become the Most Trusted B2B Marketing Partner</h2>
                     <p className="mb-20">
                        Become the most trusted B2B marketing partner for enterprises that need accountable growth across global markets. We envision a future where technology companies can confidently scale their demand generation efforts knowing that every dollar invested translates into measurable pipeline velocity.
                     </p>
                     <p className="mb-0">
                        Our vision extends beyond vendor relationships—we aim to be true partners who invest in our clients' long-term success. We measure our success by your success—when you win, we win.
                     </p>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div ref={imageRef} className="td-about-vision-thumb fix td-rounded-10">
                     <img className="w-100 td-rounded-10" src="/assets/img/about/main/thumb.jpg" alt="Metanova Tech Vision" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Vision

