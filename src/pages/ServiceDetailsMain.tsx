import ServiceDetails from "../components/pages/services/service-details"
import SEO from "../components/SEO"
import Wrapper from "../layouts/Wrapper"
import { getServicePageBySlug } from "../data/ServicePages"

const ServiceDetailsMain = () => {
   const defaultContent = getServicePageBySlug("b2b-lead-generation");

   return (
      <Wrapper>
         <SEO
            pageTitle={defaultContent ? defaultContent.seoTitle : "Service Details"}
            description={defaultContent?.seoDescription}
         />
         {defaultContent && <ServiceDetails content={defaultContent} />}
      </Wrapper>
   )
}

export default ServiceDetailsMain
