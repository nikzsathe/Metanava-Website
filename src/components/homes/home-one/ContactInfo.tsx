import { Link } from "react-router-dom";

const ContactInfo = () => {
   return (
      <section className="td-contact-highlight-area pt-120 pb-120 grey-bg-2">
         <div className="container">
            <div className="row align-items-center mb-50">
               <div className="col-lg-6">
                  <span className="td-section-subtitle d-inline-block mb-15">GET IN TOUCH</span>
                  <h2 className="td-section-title td-text-invert">Create your next revenue-generating system</h2>
               </div>
               <div className="col-lg-6 text-lg-end mt-4 mt-lg-0">
                  <Link className="td-btn-2 td-btn-primary" to="/contact">
                     Schedule a consultation
                  </Link>
               </div>
            </div>
            <div className="row">
               <div className="col-lg-4 col-md-6">
                  <div className="td-contact-highlight-card mb-30">
                     <h4>Office Location</h4>
                     <p className="mb-0">406, Arihant Avenue, Wanowrie, Pune, Maharashtra 411040</p>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6">
                  <div className="td-contact-highlight-card mb-30">
                     <h4>Contact Number</h4>
                     <a href="tel:+918956644751">+91 89566 44751</a>
                     <p className="mb-0 mt-10">Monday - Friday, 9:00 AM to 8:00 PM IST</p>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6">
                  <div className="td-contact-highlight-card mb-30">
                     <h4>Email Address</h4>
                     <a href="mailto:info@metanovatech.com">info@metanovatech.com</a>
                     <p className="mb-0 mt-10">We reply to all inquiries within 24 business hours</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default ContactInfo;

