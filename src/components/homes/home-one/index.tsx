import Hero from "./Hero"
import TrustedBrands from "./TrustedBrands"
import About from "./About"
import Service from "./Service"
import Project from "./Project"
import Process from "./Process"
import Testimonial from "./Testimonial"
import Blog from "./Blog"
import Cta from "./Cta"
import ContactInfo from "./ContactInfo"
import HeaderOne from "../../../layouts/headers/HeaderOne"
import FooterOne from "../../../layouts/footers/FooterOne"

const HomeOne = () => {
   return (
      <>
         <HeaderOne />
         <div id="smooth-wrapper">
            <div id="smooth-content">
               <main>
                  <Hero />
                  <TrustedBrands />
                  <About />
                  <Service />
                  <Project />
                  <Process />
                  <Testimonial />
                  <Blog />
                  <Cta />
                  <ContactInfo />
               </main>
               <FooterOne style={true} />
            </div>
         </div>
      </>
   )
}

export default HomeOne
