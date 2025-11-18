import InnerHeader from "../../../layouts/headers/InnerHeader";
import FooterOne from "../../../layouts/footers/FooterOne";
import CareerHero from "./Hero";
import OpenPositions from "./OpenPositions";
import Benefits from "./Benefits";

const CareerPage = () => {
   return (
      <>
         <InnerHeader />
         <div id="smooth-wrapper">
            <div id="smooth-content">
               <main>
                  <CareerHero />
                  <OpenPositions />
                  <Benefits />
               </main>
               <FooterOne style={false} />
            </div>
         </div>
      </>
   );
};

export default CareerPage;

