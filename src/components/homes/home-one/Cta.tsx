import { Link } from "react-router-dom"

const Cta = () => {
   return (
      <div className="td-cta-area">
         <div className="container">
            <div className="col-lg-12">
               <div className="td-cta-wrap p-relative z-index-1 text-center pt-135 pb-135 include-bg" style={{ backgroundImage: `url(/assets/img/cta/bg.jpg)` }}>
                  <img className="td-cta-shape d-none d-xl-block" src="/assets/img/cta/cta.png" alt="" />
                  <h2 className="title p-relative d-inline-block mb-30" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                     <img className="td-cta-shape-2 d-none d-md-block" src="/assets/img/cta/cta-2.png" alt="" />
                     <span className="td-text-invert">
                        Push Us to Transform Your B2B Business
                     </span>
                  </h2>
                  <p className="mt-35 mb-40 td-text-invert" style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '1.5rem auto 2rem' }}>
                     We're prepared to tackle your most ambitious B2B Marketing objectives. Ready to get started?
                  </p>
                  <div className="td-btn-group justify-content-center">
                     <Link className="td-btn-2 td-btn-primary" to="/contact">
                        Start the Conversation
                     </Link>
                     <Link className="td-btn-circle" to="/contact">
                        <i className="fa-solid fa-arrow-right"></i>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Cta
