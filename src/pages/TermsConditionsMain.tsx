import Wrapper from "../layouts/Wrapper";
import SEO from "../components/SEO";
import TermsConditionsPage from "../components/pages/policies/TermsConditionsPage";

const TermsConditionsMain = () => {
   return (
      <Wrapper>
         <SEO
            pageTitle="Terms & Conditions"
            description="Review the terms that govern your use of Metanova Tech’s websites, products, and services."
         />
         <TermsConditionsPage />
      </Wrapper>
   );
};

export default TermsConditionsMain;