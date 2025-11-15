import Wrapper from "../layouts/Wrapper";
import SEO from "../components/SEO";
import CookiesPolicyPage from "../components/pages/policies/CookiesPolicyPage";

const CookiesPolicyMain = () => {
   return (
      <Wrapper>
         <SEO
            pageTitle="Cookies Policy"
            description="Learn how Metanova Tech uses cookies to enhance your experience."
         />
         <CookiesPolicyPage />
      </Wrapper>
   );
};

export default CookiesPolicyMain;

