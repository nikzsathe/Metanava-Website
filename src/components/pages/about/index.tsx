import AboutArea from "./AboutArea"
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
