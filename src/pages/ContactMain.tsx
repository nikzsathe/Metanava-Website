import Contact from "../components/contact";
import SEO from "../components/SEO";
import Wrapper from "../layouts/Wrapper";

const ContactMain = () => {
   return (
      <Wrapper>
         <SEO
            pageTitle={"Contact Metanova Tech"}
            description="Reach Metanova Tech’s Pune headquarters to launch your next demand program. Call +91 89566 44751 or email info@metanovatech.com."
            keywords={[
               "Metanova Tech contact",
               "B2B marketing partner Pune",
               "Metanova Tech phone number",
               "Metanova Tech email",
            ]}
         />
         <Contact />
      </Wrapper>
   );
};

export default ContactMain;
