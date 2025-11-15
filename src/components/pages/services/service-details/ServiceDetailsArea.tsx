
import type { ServicePageContent } from "../../../../data/ServicePages";

interface Props {
   content: ServicePageContent;
}

const ServiceDetailsArea = ({ content }: Props) => {
   const {
      heroBadge,
      heroTitle,
      heroHighlight,
      heroDescription,
      heroHighlights,
      heroImage,
      heroSecondaryImage,
   } = content;

   return (
      <div className="td-service-area td-breadcrumb-spacing pb-45">
         <div className="container">
            <div className="row">
               <div className="col-lg-6">
                  <div className="td-breadcrumb-wrap ">
                     <h2 className="td-section-page-title mb-35 wow fadeInLeft" data-wow-delay=".5s" data-wow-duration="1s">
                        {heroTitle} <span>{heroHighlight}</span>
                     </h2>
                     <div className="td-service-hero-thumb-2 fix td-rounded-10 pt-105 mb-30">
                        <img data-speed=".9" className="td-rounded-10" src={heroImage} alt={heroTitle} />
                     </div>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="td-service-hero-wrap">
                     <div className="td-service-hero-content ml-110  wow fadeInRight" data-wow-delay=".5s" data-wow-duration="1s">
                        <span className="mb-25 d-inline-block">{heroBadge}</span>
                        <p className="mb-40">{heroDescription}</p>
                        <div className="td-service-hero-border mb-60"></div>
                        <div className="td-about-main-feature-list">
                           <ul>
                              {heroHighlights.map((item) => (
                                 <li key={item}>{item}</li>
                              ))}
                           </ul>
                        </div>
                     </div>
                     <div className="td-service-hero-thumb fix td-rounded-10 pt-200">
                        <img data-speed=".9" className="td-rounded-10" src={heroSecondaryImage} alt={`${heroTitle} secondary`} />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ServiceDetailsArea
