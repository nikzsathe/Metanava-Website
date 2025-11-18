import { jobPositions } from "../../../data/CareerData";
import { Link } from "react-router-dom";
import { useState } from "react";
import CareerForm from "./CareerForm";

const OpenPositions = () => {
   const [selectedJob, setSelectedJob] = useState<number | null>(null);
   const [isFormOpen, setIsFormOpen] = useState(false);

   const handleApply = (jobId: number) => {
      console.log('Apply clicked for job:', jobId);
      setSelectedJob(jobId);
      setIsFormOpen(true);
      console.log('Form should be open:', true);
   };

   const handleCloseForm = () => {
      setIsFormOpen(false);
      setSelectedJob(null);
   };

   return (
      <>
         <section className="td-project-area pt-40 pb-60">
            <div className="container">
               <div className="row align-items-center mb-50">
                  <div className="col-lg-8">
                     <span className="td-section-subtitle mb-15 d-inline-block">// Open positions</span>
                     <h2 className="td-section-title mb-20">Join our team</h2>
                     <p className="mb-0">We hire across time zones. Don't see a role that fits? Email your profile to careers@metanovatech.com.</p>
                  </div>
                  <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
                     <Link to="/contact" className="td-btn-2 td-btn-primary">TALK TO TALENT TEAM</Link>
                  </div>
               </div>
               <div className="row g-3">
                  {jobPositions.map((job) => (
                     <div key={job.id} className="col-12">
                        <div className="career-card-new p-35 d-flex flex-column flex-lg-row justify-content-between align-items-start gap-4">
                           <div className="flex-grow-1">
                              <div className="d-flex align-items-center gap-3 mb-12 flex-wrap">
                                 <span className="career-badge">{job.location}</span>
                                 <span className="career-divider">•</span>
                                 <span className="career-type">{job.type}</span>
                              </div>
                              <h3 className="career-title mb-12">{job.title}</h3>
                              <p className="career-summary mb-0">{job.summary}</p>
                           </div>
                           <div className="mt-2 mt-lg-0 flex-shrink-0">
                              <button 
                                 onClick={() => handleApply(job.id)} 
                                 className="td-btn-2 td-btn-primary career-apply-btn"
                                 type="button"
                              >
                                 Apply Now
                              </button>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>
         {isFormOpen && selectedJob && (
            <CareerForm 
               job={jobPositions.find(j => j.id === selectedJob)!}
               isOpen={isFormOpen}
               onClose={handleCloseForm}
            />
         )}
      </>
   );
};

export default OpenPositions;

