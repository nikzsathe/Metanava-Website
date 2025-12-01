import { useState } from 'react';
import { toast } from 'react-toastify';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

interface ContactFormData {
   full_name: string;
   work_email: string;
   company_name: string;
   phone_number: string;
   website_url: string;
   job_title: string;
   service_interest: string;
   monthly_budget: string;
   message: string;
}

const schema = yup
   .object({
      full_name: yup.string().required('Full Name is required').min(2, 'Name must be at least 2 characters'),
      work_email: yup.string().required('Work Email is required').email('Must be a valid email address'),
      company_name: yup.string().required('Company Name is required'),
      phone_number: yup.string().required('Phone Number is required'),
      website_url: yup.string().url('Must be a valid URL').required('Website URL is required'),
      job_title: yup.string().required('Job Title is required'),
      service_interest: yup.string().required('Please select a service'),
      monthly_budget: yup.string().required('Please select a budget range'),
      message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters'),
   })
   .required();

const serviceOptions = [
   'B2B Lead Generation',
   'Demand Generation',
   'Account-Based Marketing',
   'Content Syndication',
   'Digital Marketing',
   'Email Marketing',
   'Other',
];

const budgetOptions = [
   'Under $5,000',
   '$5,000 - $10,000',
   '$10,000 - $25,000',
   '$25,000 - $50,000',
   '$50,000 - $100,000',
   'Over $100,000',
];

const ContactForm = () => {
   const [isSubmitting, setIsSubmitting] = useState(false);

   const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({ 
      resolver: yupResolver(schema) as any,
      defaultValues: {
         service_interest: '',
         monthly_budget: '',
      }
   });

   const onSubmit = async (data: ContactFormData) => {
      setIsSubmitting(true);
      
      try {
         // Netlify Forms - encode form data as URL-encoded string
         const formData = new URLSearchParams();
         formData.append('form-name', 'contact');
         formData.append('full_name', data.full_name || '');
         formData.append('work_email', data.work_email || '');
         formData.append('company_name', data.company_name || '');
         formData.append('phone_number', data.phone_number || '');
         formData.append('website_url', data.website_url || '');
         formData.append('job_title', data.job_title || '');
         formData.append('service_interest', data.service_interest || '');
         formData.append('monthly_budget', data.monthly_budget || '');
         formData.append('message', data.message || '');

         console.log('Submitting form data:', formData.toString());

         // Submit to Netlify Forms
         const response = await fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: formData.toString(),
         });

         console.log('Response status:', response.status);
         console.log('Response ok:', response.ok);

         if (response.ok) {
            const responseText = await response.text();
            console.log('Response text:', responseText);
            
            toast.success('Message sent successfully! We\'ll get back to you soon.', { 
               position: 'top-center',
               autoClose: 5000
            });
            reset();
         } else {
            const errorText = await response.text();
            console.error('Error response:', errorText);
            throw new Error(`Form submission failed: ${response.status} ${response.statusText}`);
         }
      } catch (error: any) {
         console.error('Error submitting form:', error);
         const errorMessage = error.message || 'Unknown error occurred';
         toast.error(`Failed to send message: ${errorMessage}. Please try again or contact us directly.`, { 
            position: 'top-center',
            autoClose: 7000
         });
      } finally {
         setIsSubmitting(false);
      }
   };

   return (
      <form 
         name="contact" 
         method="POST" 
         action="/"
         data-netlify="true" 
         netlify-honeypot="bot-field"
         onSubmit={handleSubmit(onSubmit)}
      >
         {/* Hidden field for Netlify */}
         <input type="hidden" name="form-name" value="contact" />
         <input type="hidden" name="bot-field" />
         <p style={{ display: 'none' }}>
            <label>
               Don't fill this out if you're human: <input name="bot-field" />
            </label>
         </p>

         <div className="row">
            <div className="col-12 mb-25">
               <label htmlFor="full_name">Full Name <span className="required">*</span></label>
               <input 
                  {...register("full_name")} 
                  className="td-input" 
                  id="full_name" 
                  type="text" 
                  placeholder="John Doe"
               />
               <p className="form_error">{errors.full_name?.message}</p>
            </div>

            <div className="col-md-6 mb-25">
               <label htmlFor="work_email">Work Email <span className="required">*</span></label>
               <input 
                  {...register("work_email")} 
                  className="td-input" 
                  id="work_email" 
                  type="email" 
                  placeholder="john@company.com"
               />
               <p className="form_error">{errors.work_email?.message}</p>
            </div>

            <div className="col-md-6 mb-25">
               <label htmlFor="company_name">Company Name <span className="required">*</span></label>
               <input 
                  {...register("company_name")} 
                  className="td-input" 
                  id="company_name" 
                  type="text" 
                  placeholder="Company Inc."
               />
               <p className="form_error">{errors.company_name?.message}</p>
            </div>

            <div className="col-md-6 mb-25">
               <label htmlFor="phone_number">Phone Number <span className="required">*</span></label>
               <input 
                  {...register("phone_number")} 
                  className="td-input" 
                  id="phone_number" 
                  type="tel" 
                  placeholder="+1 234 567 8900"
               />
               <p className="form_error">{errors.phone_number?.message}</p>
            </div>

            <div className="col-md-6 mb-25">
               <label htmlFor="website_url">Website URL <span className="required">*</span></label>
               <input 
                  {...register("website_url")} 
                  className="td-input" 
                  id="website_url" 
                  type="url" 
                  placeholder="https://www.company.com"
               />
               <p className="form_error">{errors.website_url?.message}</p>
            </div>

            <div className="col-md-6 mb-25">
               <label htmlFor="job_title">Job Title <span className="required">*</span></label>
               <input 
                  {...register("job_title")} 
                  className="td-input" 
                  id="job_title" 
                  type="text" 
                  placeholder="VP of Marketing"
               />
               <p className="form_error">{errors.job_title?.message}</p>
            </div>

            <div className="col-md-6 mb-25">
               <label htmlFor="service_interest">Service you looking for? <span className="required">*</span></label>
               <select 
                  {...register("service_interest")} 
                  className="td-input" 
                  id="service_interest"
               >
                  <option value="">Select a service</option>
                  {serviceOptions.map((service) => (
                     <option key={service} value={service}>
                        {service}
                     </option>
                  ))}
               </select>
               <p className="form_error">{errors.service_interest?.message}</p>
            </div>

            <div className="col-12 mb-25">
               <label htmlFor="monthly_budget">Monthly budget range <span className="required">*</span></label>
               <select 
                  {...register("monthly_budget")} 
                  className="td-input" 
                  id="monthly_budget"
               >
                  <option value="">Select budget range</option>
                  {budgetOptions.map((budget) => (
                     <option key={budget} value={budget}>
                        {budget}
                     </option>
                  ))}
               </select>
               <p className="form_error">{errors.monthly_budget?.message}</p>
            </div>

            <div className="col-12 mb-30">
               <label htmlFor="message">Message / Requirements <span className="required">*</span></label>
               <textarea 
                  {...register("message")} 
                  className="td-input message" 
                  id="message" 
                  cols={30} 
                  rows={8}
                  placeholder="Tell us about your requirements and goals..."
               ></textarea>
               <p className="form_error">{errors.message?.message}</p>
            </div>

            <div className="col-12">
               <button 
                  type="submit" 
                  className="td-btn-group" 
                  disabled={isSubmitting}
               >
                  <span className="td-btn-circle">
                     <i className="fa-solid fa-arrow-right"></i>
                  </span>
                  <span className="td-btn-2 td-btn-primary">
                     {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                  <span className="td-btn-circle">
                     <i className="fa-solid fa-arrow-right"></i>
                  </span>
               </button>
               <p className="ajax-response pt-20"></p>
            </div>
         </div>
      </form>
   )
}

export default ContactForm
