interface PolicyViewerProps {
   title: string;
   description: string;
   filePath: string;
}

const PolicyViewer = ({ title, description, filePath }: PolicyViewerProps) => {
   return (
      <section className="td-about-area td-about-main-spacing pb-100">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-10">
                  <div className="text-center mb-40">
                     <span className="td-section-subtitle mb-15 d-inline-block">//  Metanova Tech</span>
                     <h1 className="td-section-page-title">{title}</h1>
                     <p className="mt-20">{description}</p>
                  </div>
                  <div className="policy-embed">
                     <iframe
                        src={`https://docs.google.com/gview?embedded=1&url=${window.location.origin}${filePath}`}
                        title={title}
                        loading="lazy"
                        aria-label={title}
                     />
                     <div className="text-center mt-20">
                        <a className="td-btn-2 td-btn-primary" href={filePath} target="_blank" rel="noopener noreferrer">
                           Download PDF
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default PolicyViewer;

