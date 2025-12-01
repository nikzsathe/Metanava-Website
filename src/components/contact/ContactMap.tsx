const ContactMap = () => {
   return (
      <div className="td-contact-map-area">
         <div className="container-fluid p-0">
            <div className="row">
               <div className="col-12">
                  <div className="td-contact-map p-relative">
                     <div className="td-contact-map-wrap">
                        <h2 className="mb-100" style={{ fontSize: '32px', fontWeight: '700', color: '#000000', letterSpacing: '2px' }}>Metanova Tech</h2>
                        <h6 className="mb-25">Contact info:</h6>
                        <a href="tel:+918956644751">+91 89566 44751</a>
                        <a className="mb-10" href="mailto:info@metanovatech.com">info@metanovatech.com</a>
                        <p className="mb-0">406, Arihant Avenue, Wanowrie,<br /> Pune, Maharashtra 411040</p>
                     </div>
                     <div className="td-contact-map-inner">
                        <iframe
                           title="Metanova Tech Location"
                           src="https://www.google.com/maps?q=406+Arihant+Avenue+Wanowrie+Pune+Maharashtra+411040&output=embed"
                           width="600"
                           height="450"
                           style={{ border: 0 }}
                           loading="lazy"
                        ></iframe>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ContactMap
