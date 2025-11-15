import Wrapper from "../layouts/Wrapper";
import SEO from "../components/SEO";
import CareerPage from "../components/pages/career";

const CareerMain = () => {
   return (
      <Wrapper>
         <SEO
            pageTitle="Careers"
            description="Join Metanova Tech to build the most trusted B2B marketing programs. Explore open roles across demand generation, marketing ops, and content."
         />
         <CareerPage />
      </Wrapper>
   );
};

export default CareerMain;

