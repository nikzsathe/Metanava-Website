import FooterOne from "../../../../layouts/footers/FooterOne"
import InnerHeader from "../../../../layouts/headers/InnerHeader"
import Cta from "../../../common/Cta"
import Faq from "./Faq"
import ServiceDetailsArea from "./ServiceDetailsArea"
import ServiceProcess from "./ServiceProcess"
import ServiceReplace from "./ServiceReplace"
import type { ServicePageContent } from "../../../../data/ServicePages"

interface ServiceDetailsProps {
   content: ServicePageContent;
}

const ServiceDetails = ({ content }: ServiceDetailsProps) => {
   return (
      <>
         <InnerHeader />
         <div id="smooth-wrapper">
            <div id="smooth-content">
               <main>
                  <ServiceDetailsArea content={content} />
                  <ServiceProcess
                     subtitle={content.processSubtitle}
                     title={content.processTitle}
                     highlight={content.processHighlight}
                     steps={content.processSteps}
                  />
                  <Faq style={false} items={content.faq} />
                  <ServiceReplace
                     heading={content.replaceHeading}
                     paragraphs={content.replaceParagraphs}
                     image={content.replaceImage}
                     shape={content.replaceShape}
                  />
                  <Cta />
               </main>
               <FooterOne style={true} />
            </div>
         </div>
      </>
   )
}

export default ServiceDetails
