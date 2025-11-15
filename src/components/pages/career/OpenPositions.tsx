import { jobPositions } from "../../../data/CareerData";
import { Link } from "react-router-dom";

const OpenPositions = () => {
   return (
      <section className="td-project-area pt-60 pb-80">
         <div className="container">
            <div className="row align-items-center mb-40">
               <div className="col-lg-8">
                  <h3 className="td-section-title mb-0">Open roles</h3>
                  <p className="mt-15">We hire across time zones. Don’t see a role that fits? Email your profile to careers@metanovatech.com.</p>
               </div>
               <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
                  <Link to="/contact" className="td-btn-2 td-btn-primary">Talk to Talent Team</Link>
               </div>
            </div>
            <div className="row">
               {jobPositions.map((job) => (
                  <div key={job.id} className="col-12 mb-25">
                     <div className="td-project-item career-card p-30 d-flex flex-column flex-md-row justify-content-between align-items-start">
                        <div>
                           <span className="td-section-subtitle mb-10 d-inline-block">{job.location} • {job.type}</span>
                           <h4 className="mb-10">{job.title}</h4>
                           <p className="mb-0">{job.summary}</p>
                        </div>
                        <div className="mt-3 mt-md-0">
                           <a className="td-btn-2 td-btn-primary" href={`mailto:${job.applyEmail}?subject=${encodeURIComponent(job.title)}`}>
                              Apply now
                           </a>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default OpenPositions;

