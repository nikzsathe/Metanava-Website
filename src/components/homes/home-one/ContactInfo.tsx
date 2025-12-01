import { Link } from "react-router-dom";

const ContactInfo = () => {
   return (
      <section className="td-contact-highlight-area pt-120 pb-120 grey-bg-2">
         <div className="container">
            <div className="row align-items-center mb-50">
               <div className="col-lg-6">
                  <span className="td-section-subtitle d-inline-block mb-15">CONTACT US</span>
                  <h2 className="td-section-title td-text-invert">Let’s build your next demand engine</h2>
               </div>
               <div className="col-lg-6 text-lg-end mt-4 mt-lg-0">
                  <Link className="td-btn-2 td-btn-primary" to="/contact">
                     Talk to our consultants
                  </Link>
               </div>
            </div>
            <div className="row">
               <div className="col-lg-4 col-md-6">
                  <div className="td-contact-highlight-card mb-30">
                     <h4>Address</h4>
                     <p className="mb-0">406, Arihant Avenue, Wanowrie, Pune, Maharashtra 411040</p>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6">
                  <div className="td-contact-highlight-card mb-30">
                     <h4>Phone</h4>
                     <a href="tel:+918956644751">+91 89566 44751</a>
                     <p className="mb-0 mt-10">Mon - Fri, 9:00 am to 8:00 pm IST</p>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6">
                  <div className="td-contact-highlight-card mb-30">
                     <h4>Email</h4>
                     <a href="mailto:info@metanovatech.com">info@metanovatech.com</a>
                     <p className="mb-0 mt-10">We respond within one business day</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default ContactInfo;

