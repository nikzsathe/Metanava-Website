import { Navigate, useParams } from "react-router-dom";
import Wrapper from "../layouts/Wrapper";
import SEO from "../components/SEO";
import ServiceDetails from "../components/pages/services/service-details";
import { getServicePageBySlug } from "../data/ServicePages";

const ServiceDetailsDynamic = () => {
   const { serviceSlug } = useParams();
   const content = serviceSlug ? getServicePageBySlug(serviceSlug) : undefined;

   if (!content) {
      return <Navigate to="/service" replace />;
   }

   return (
      <Wrapper>
         <SEO pageTitle={content.seoTitle} description={content.seoDescription} />
         <ServiceDetails content={content} />
      </Wrapper>
   );
};

export default ServiceDetailsDynamic;

