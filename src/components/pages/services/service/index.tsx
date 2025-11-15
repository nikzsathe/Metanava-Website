import FooterOne from "../../../../layouts/footers/FooterOne"
import InnerHeader from "../../../../layouts/headers/InnerHeader"
import BreadcrumbTwo from "../../../common/BreadcrumbTwo"
import Brand from "../../../homes/home-seven/Brand"
import ServiceArea from "./ServiceArea"
import ServiceItem from "./ServiceItem"

const Service = () => {
   return (
      <>
         <InnerHeader />
         <div id="smooth-wrapper">
            <div id="smooth-content">
               <main>
                  <BreadcrumbTwo sub_title="WHAT WE DELIVER"
                     title={<>Metanova Tech <br /> <span>B2B Marketing Services</span></>}
                     desc="Full-funnel demand generation, account activation, and sales acceleration programs engineered for technology and enterprise brands that need measurable growth."
                  />
                  <ServiceArea />
                  <ServiceItem />
                  <Brand style={true} />
               </main>
               <FooterOne style={false} />
            </div>
         </div>
      </>
   )
}

export default Service
