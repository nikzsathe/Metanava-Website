import HomeOne from "../components/homes/home-one";
import SEO from "../components/SEO";
import Wrapper from "../layouts/Wrapper";

const HomeOnemain = () => {
   return (
      <Wrapper>
         <SEO
            pageTitle={"Metanova Tech | Leading B2B Marketing Agency for Technology Brands"}
            description="Metanova Tech is a leading B2B marketing agency specializing in lead generation, demand generation, account-based marketing, and digital marketing services for technology companies. Build predictable revenue pipelines with our integrated approach."
            keywords={[
               "B2B marketing agency",
               "technology marketing agency",
               "B2B lead generation",
               "B2B demand generation",
               "account-based marketing services",
               "B2B growth strategy",
               "B2B content syndication",
               "SaaS marketing services",
               "B2B digital marketing",
               "email marketing for B2B",
               "Metanova Tech",
            ]}
         />
         <HomeOne />
      </Wrapper>
   );
};

export default HomeOnemain;
