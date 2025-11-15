import HomeOne from "../components/homes/home-one";
import SEO from "../components/SEO";
import Wrapper from "../layouts/Wrapper";

const HomeOnemain = () => {
   return (
      <Wrapper>
         <SEO
            pageTitle={"Metanova Tech"}
            description="Metanova Tech builds predictable B2B pipelines through compliant lead generation, demand programs, and omnichannel marketing for global technology companies."
            keywords={[
               "Metanova Tech",
               "B2B marketing agency",
               "lead generation partner",
               "demand generation services",
               "technology marketing",
            ]}
         />
         <HomeOne />
      </Wrapper>
   );
};

export default HomeOnemain;
