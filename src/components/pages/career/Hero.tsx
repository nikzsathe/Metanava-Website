const CareerHero = () => {
   return (
      <section className="td-about-area td-about-main-spacing pb-100">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-6">
                  <div className="td-about-main-wrapper pb-40">
                     <span className="td-section-subtitle mb-15 d-inline-block">//  Join Metanova Tech</span>
                     <h2 className="td-section-page-title td-title-anim">
                        Help us build the most trusted <span>B2B demand collective</span>.
                     </h2>
                     <p className="mt-25">
                        We are strategists, data scientists, media makers, and technologists obsessed with building predictable revenue
                        programs for enterprise marketing teams. If you thrive in fast-moving environments and love collaborating across
                        continents, you will feel at home here.
                     </p>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="td-about-main-thumb fix td-rounded-10 career-hero-thumb">
                     <img className="w-100 td-rounded-10" src="/assets/img/about/main/thumb.jpg" alt="Metanova careers" />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default CareerHero;

