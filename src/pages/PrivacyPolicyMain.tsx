import Wrapper from "../layouts/Wrapper";
import SEO from "../components/SEO";
import PrivacyPolicyPage from "../components/pages/policies/PrivacyPolicyPage";

const PrivacyPolicyMain = () => {
   return (
      <Wrapper>
         <SEO
            pageTitle="Privacy Policy"
            description="Read Metanova Tech’s privacy practices, including data collection, usage, and protection."
         />
         <PrivacyPolicyPage />
      </Wrapper>
   );
};

export default PrivacyPolicyMain;

