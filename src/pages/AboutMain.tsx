import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import About from '../components/pages/about';

const AboutMain = () => {
   return (
      <Wrapper>
         <SEO
            pageTitle={'About Metanova Tech | B2B Marketing Experts & Technology Marketing Specialists'}
            description="Learn about Metanova Tech, a leading B2B growth agency founded in 2020. Discover our mission, vision, team expertise, and how we help technology companies build predictable revenue systems through integrated marketing strategies."
            keywords={[
               'B2B marketing experts',
               'technology marketing specialists',
               'B2B growth agency',
               'marketing strategy consultants',
               'Metanova Tech mission',
               'B2B lead generation expertise',
               'digital marketing vision',
               'account-based marketing agency'
            ]}
         />
         <About />
      </Wrapper>
   );
};

export default AboutMain;