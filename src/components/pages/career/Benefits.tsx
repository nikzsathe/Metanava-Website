import { benefits } from "../../../data/CareerData";

const Benefits = () => {
   return (
      <section className="td-process-area pt-60 pb-60 grey-bg-2">
         <div className="container">
            <div className="row justify-content-center mb-40">
               <div className="col-lg-8 text-center">
                  <span className="td-section-subtitle mb-15 d-inline-block">//  Why Metanova</span>
                  <h3 className="td-testimonial-title td-text-invert">Benefits & culture</h3>
                  <p className="mt-10">We invest in people who invest in each other. Expect transparency, autonomy, and teams that always have your back.</p>
               </div>
            </div>
            <div className="row">
               {benefits.map((benefit) => (
                  <div key={benefit.id} className="col-lg-3 col-md-6 mb-30">
                     <div className="td-service-process-item td-rounded-10 p-35 h-100">
                        <h5 className="mb-10">{benefit.title}</h5>
                        <p className="mb-0">{benefit.description}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default Benefits;

