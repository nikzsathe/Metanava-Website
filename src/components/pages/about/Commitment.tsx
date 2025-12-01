import { Link } from "react-router-dom"
import { UserGroupIcon } from "@heroicons/react/24/outline"
import useSectionAnimation from "../../../hooks/useSectionAnimation"
import useIconAnimation from "../../../hooks/useIconAnimation"

const Commitment = () => {
   const sectionRef = useSectionAnimation({ delay: 0.2, duration: 1.2 });
   const iconRef = useIconAnimation();

   return (
      <div className="td-about-commitment-area pt-100 pb-100 grey-bg-2">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-10">
                  <div ref={sectionRef} className="td-about-commitment-content text-center">
                     <div ref={iconRef} className="d-inline-flex align-items-center justify-content-center mb-30">
                        <UserGroupIcon className="hero-icon-large" style={{ width: '60px', height: '60px', color: 'var(--td-theme-primary)' }} />
                     </div>
                     <span className="td-section-subtitle mb-15 d-inline-block">// Our Commitment</span>
                     <h2 className="td-section-title mb-30 td-text-invert">Your Success Is Our Success</h2>
                     <p className="mb-30">
                        Metanova Tech operates as an extension of your revenue team, not just a service provider. We invest in understanding your business, your market, and your goals. Our commitment extends to transparent reporting, proactive recommendations, and a partnership approach that evolves with your needs.
                     </p>
                     <p className="mb-40">
                        We measure our success by your success—when you win, we win. Our future vision is to continue innovating, expanding our global reach, and helping more technology brands achieve predictable, scalable growth.
                     </p>
                     <div className="td-btn-group justify-content-center">
                        <Link className="td-btn-circle" to="/contact">
                           <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                        <Link className="td-btn-2 td-btn-primary" to="/contact">EXPLORE ENGAGEMENT MODELS</Link>
                        <Link className="td-btn-circle" to="/contact">
                           <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Commitment

