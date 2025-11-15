import Wrapper from "../layouts/Wrapper";
import SEO from "../components/SEO";
import CASLPolicyPage from "../components/pages/policies/CASLPolicyPage";

const CASLPolicyMain = () => {
  return (
    <Wrapper>
      <SEO
        pageTitle="Canada's Anti-Spam Legislation (CASL)"
        description="Understand how Metanova Tech complies with Canada’s Anti-Spam Legislation when sending commercial electronic messages."
      />
      <CASLPolicyPage />
    </Wrapper>
  );
};

export default CASLPolicyMain;


