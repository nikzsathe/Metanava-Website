import AboutArea from "./AboutArea"
import Mission from "./Mission"
import Vision from "./Vision"
import Approach from "./Approach"
import Values from "./Values"
import Industries from "./Industries"
import Commitment from "./Commitment"
import Feature from "./Feature"
import Team from "./Team"
import Awards from "./Awards"
import InnerHeader from "../../../layouts/headers/InnerHeader"
import Testimonial from "../../homes/home-five/Testimonial"
import FooterOne from "../../../layouts/footers/FooterOne"

const About = () => {
   return (
      <>
         <InnerHeader />
         <div id="smooth-wrapper">
            <div id="smooth-content">
               <main>
                  <AboutArea />
                  <Mission />
                  <Vision />
                  <Approach />
                  <Values />
                  <Industries />
                  <Commitment />
                  <Testimonial />
                  <Feature />
                  <Team />
                  <Awards />
               </main>
               <FooterOne />
            </div>
         </div>
      </>
   )
}

export default About
