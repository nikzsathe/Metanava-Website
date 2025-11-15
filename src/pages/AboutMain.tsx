import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import About from '../components/pages/about';

const AboutMain = () => {
   return (
      <Wrapper>
         <SEO
            pageTitle={'About Metanova Tech'}
            description="Discover Metanova Tech’s mission, vision, and B2B marketing expertise that accelerate enterprise demand, revenue, and customer lifetime value."
            keywords={[
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