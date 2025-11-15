
interface Props {
   heading: string;
   paragraphs: string[];
   image: string;
   shape: string;
}

const ServiceReplace = ({ heading, paragraphs, image, shape }: Props) => {
   return (
      <div className="td-service-replace-area pt-120 pb-130">
         <div className="container">
            <div className="row">
               <div className="col-lg-10">
                  <div className="td-service-main-content mb-85">
                     <h2 className="td-text-invert">{heading}</h2>
                  </div>
               </div>
               <div className="col-lg-4">
                  <div className="td-service-replace-shape pt-100 pb-30">
                     <img src={shape} alt="Service shape" />
                  </div>
               </div>
               <div className="col-lg-8">
                  <div className="td-service-replace-content">
                     <div className="td-service-replace-thumb mb-50">
                        <img className="td-rounded-10" src={image} alt="Service highlight" />
                     </div>
                     <div className="row">
                        {paragraphs.map((text, index) => (
                           <div key={index} className="col-lg-6 col-md-6">
                              <div className="mb-20">
                                 <p>{text}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ServiceReplace
