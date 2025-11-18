import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import type { JobPosition } from '../../../data/CareerData';

interface CareerFormData {
   user_name: string;
   user_email: string;
   user_phone: string;
   user_linkedin?: string;
   user_portfolio?: string;
   cover_letter: string;
   resume?: FileList;
}

interface CareerFormProps {
   job: JobPosition;
   isOpen: boolean;
   onClose: () => void;
}

const schema = yup
   .object({
      user_name: yup.string().required("Name is required").label("Name"),
      user_email: yup.string().required("Email is required").email("Invalid email address").label("Email"),
      user_phone: yup.string().required("Phone number is required").label("Phone"),
      user_linkedin: yup.string().notRequired().test("url", "Must be a valid URL", (value) => !value || yup.string().url().isValidSync(value)).label("LinkedIn"),
      user_portfolio: yup.string().notRequired().test("url", "Must be a valid URL", (value) => !value || yup.string().url().isValidSync(value)).label("Portfolio"),
      cover_letter: yup.string().required("Cover letter is required").min(50, "Cover letter must be at least 50 characters").label("Cover Letter"),
      resume: yup.mixed<FileList>().nullable(),
   })
   .required();

const CareerForm = ({ job, isOpen, onClose }: CareerFormProps) => {
   const { register, handleSubmit, reset, formState: { errors }, } = useForm<CareerFormData>({ 
      resolver: yupResolver(schema) as any,
   });

   const form = useRef<HTMLFormElement>(null);

   useEffect(() => {
      if (isOpen) {
         document.body.style.overflow = 'hidden';
         document.body.classList.add('has-modal-open');
      } else {
         document.body.style.overflow = '';
         document.body.classList.remove('has-modal-open');
      }
      
      return () => {
         document.body.style.overflow = '';
         document.body.classList.remove('has-modal-open');
      };
   }, [isOpen]);

   const sendEmail = async () => {
      if (form.current) {
         try {
            await emailjs.sendForm(
               'themegenix', 
               'template_hdr7ic6', 
               form.current, 
               'QOBCxT0bzNKEs-CwW'
            );
            
            toast.success('Application submitted successfully!', { position: 'top-center' });
            reset();
            onClose();
         } catch (error) {
            console.error(error);
            toast.error('Failed to submit application. Please try again or email us directly.', { position: 'top-center' });
         }
      }
   };

   if (!isOpen) return null;

   const portalRoot = document.body;

   return createPortal(
      <div className="career-form-overlay" onClick={onClose}>
         <div className="career-form-modal" onClick={(e) => e.stopPropagation()}>
            <div className="career-form-header">
               <h3>Apply for {job.title}</h3>
               <button className="career-form-close" onClick={onClose} type="button" aria-label="Close form">
                  <i className="fa-solid fa-xmark"></i>
               </button>
            </div>
            <form ref={form} onSubmit={handleSubmit(() => sendEmail())} className="career-form-content">
               <input type="hidden" name="job_title" value={job.title} />
               <input type="hidden" name="job_location" value={job.location} />
               <input type="hidden" name="job_type" value={job.type} />
               
               <div className="row">
                  <div className="col-md-6 mb-25">
                     <label htmlFor="user_name">Full Name <span className="required">*</span></label>
                     <input 
                        {...register("user_name")} 
                        className="td-input" 
                        id="user_name" 
                        type="text" 
                        placeholder="John Doe"
                     />
                     <p className="form_error">{errors.user_name?.message}</p>
                  </div>
                  <div className="col-md-6 mb-25">
                     <label htmlFor="user_email">Email Address <span className="required">*</span></label>
                     <input 
                        {...register("user_email")} 
                        className="td-input" 
                        id="user_email" 
                        type="email" 
                        placeholder="john@example.com"
                     />
                     <p className="form_error">{errors.user_email?.message}</p>
                  </div>
                  <div className="col-md-6 mb-25">
                     <label htmlFor="user_phone">Phone Number <span className="required">*</span></label>
                     <input 
                        {...register("user_phone")} 
                        className="td-input" 
                        id="user_phone" 
                        type="tel" 
                        placeholder="+91 12345 67890"
                     />
                     <p className="form_error">{errors.user_phone?.message}</p>
                  </div>
                  <div className="col-md-6 mb-25">
                     <label htmlFor="user_linkedin">LinkedIn Profile</label>
                     <input 
                        {...register("user_linkedin")} 
                        className="td-input" 
                        id="user_linkedin" 
                        type="url" 
                        placeholder="https://linkedin.com/in/yourprofile"
                     />
                     <p className="form_error">{errors.user_linkedin?.message}</p>
                  </div>
                  <div className="col-md-6 mb-25">
                     <label htmlFor="user_portfolio">Portfolio/Website</label>
                     <input 
                        {...register("user_portfolio")} 
                        className="td-input" 
                        id="user_portfolio" 
                        type="url" 
                        placeholder="https://yourwebsite.com"
                     />
                     <p className="form_error">{errors.user_portfolio?.message}</p>
                  </div>
                  <div className="col-md-6 mb-25">
                     <label htmlFor="resume">Resume/CV (PDF, DOC, DOCX)</label>
                     <input 
                        {...register("resume")} 
                        className="td-input" 
                        id="resume" 
                        type="file" 
                        accept=".pdf,.doc,.docx"
                     />
                     <p className="form_error">{errors.resume?.message}</p>
                     <small className="text-muted">You can also email your resume separately to careers@metanovatech.com</small>
                  </div>
                  <div className="col-12 mb-25">
                     <label htmlFor="cover_letter">Cover Letter <span className="required">*</span></label>
                     <textarea 
                        {...register("cover_letter")} 
                        className="td-input message" 
                        id="cover_letter" 
                        rows={6}
                        placeholder="Tell us why you're interested in this role and what makes you a great fit..."
                     ></textarea>
                     <p className="form_error">{errors.cover_letter?.message}</p>
                  </div>
                  <div className="col-12">
                     <div className="career-form-actions">
                        <button type="button" className="td-btn-2 td-btn-white" onClick={onClose}>
                           Cancel
                        </button>
                        <button type="submit" className="td-btn-2 td-btn-primary">
                           Submit Application
                        </button>
                     </div>
                     <p className="career-form-note mt-20">
                        By submitting this form, you agree to our <Link to="/privacy-policy">Privacy Policy</Link>. 
                        We'll review your application and get back to you soon.
                     </p>
                  </div>
               </div>
            </form>
         </div>
      </div>,
      portalRoot
   );
};

export default CareerForm;
