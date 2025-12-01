import useSectionAnimation from "../../../hooks/useSectionAnimation"

const Mission = () => {
   const sectionRef = useSectionAnimation({ delay: 0.2, duration: 1.2 });

   return (
      <div className="td-about-mission-area pt-100 pb-100">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-10">
                  <div ref={sectionRef} className="td-about-mission-content text-center">
                     <span className="td-section-subtitle mb-15 d-inline-block">// Our Mission</span>
                     <h2 className="td-section-title mb-30 td-text-invert">Empower Revenue Teams with Predictable Pipeline Growth</h2>
                     <p className="td-section-text mb-0">
                        Empower revenue teams with compliant data, agile execution, and transparent reporting so every buyer touchpoint accelerates pipeline. We believe that marketing should be as measurable as performance advertising, with every campaign, lead, and engagement tied directly to revenue outcomes. Our mission drives us to continuously refine our methodologies, stay ahead of industry trends, and deliver results that matter most to our clients—predictable pipeline growth.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Mission

