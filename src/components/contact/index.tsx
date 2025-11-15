import ContactMap from "./ContactMap"
import ContactArea from "./ContactArea"
import ContactBranch from "./ContactBranch"
import Breadcrumb from "./Breadcrumb"
import InnerHeader from "../../layouts/headers/InnerHeader"
import FooterOne from "../../layouts/footers/FooterOne"

const Contact = () => {
   return (
      <>
         <InnerHeader />
         <div id="smooth-wrapper">
            <div id="smooth-content">
               <main>
                  <Breadcrumb />
                  <ContactMap />
                  <ContactArea />
                  <ContactBranch />
               </main>
               <FooterOne style={false} />
            </div>
         </div>
      </>
   )
}

export default Contact
