import PricingArea from "./PricingArea"
import Faq from "../services/service-details/Faq"
import InnerHeader from "../../../layouts/headers/InnerHeader"
import BreadcrumbTwo from "../../common/BreadcrumbTwo"
import FooterOne from "../../../layouts/footers/FooterOne"

const Pricing = () => {
   return (
      <>
         <InnerHeader />
         <div id="smooth-wrapper">
            <div id="smooth-content">
               <main>
                  <BreadcrumbTwo sub_title="OUR PRICING PLANS"
                     title={<>Our suitable pricing<br /> plans <span>for you</span></>}
                     desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse  varius enim in eros elementum Duis cursus, mi quis viverra  ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
                  />
                  <PricingArea />
                  <Faq style={true} />
               </main>
               <FooterOne style={false} />
            </div>
         </div>
      </>
   )
}

export default Pricing
