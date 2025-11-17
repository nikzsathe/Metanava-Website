import { Link } from "react-router-dom"
import { useState } from "react";
import Offcanvas from "./Menu/Offcanvas";
import UseSticky from "../../hooks/UseSticky";

const HeaderOne = () => {

   const { sticky } = UseSticky();
   const [offCanvas, setOffCanvas] = useState<boolean>(false);

   return (
      <>
         <header>
            <div id="header-sticky" className={`td-header__area td-header-spacing td-header-home p-relative z-index-1 ${sticky ? "header-sticky" : ""}`}>
               <div className="container container-1750">
                  <div className="row align-items-center">
                     <div className="col-lg-4 col-md-4 col-sm-4 col-5">
                        <div className="tdmenu__wrap">
                           <div onClick={() => setOffCanvas(true)} className="tdmenu-offcanvas-open-btn mobile-nav-toggler d-flex align-items-center justify-content-center">
                              <span className="text mr-5">menu</span>
                              <div onClick={() => setOffCanvas(true)} className="tdmenu-offcanvas-open-bar">
                                 <span></span>
                                 <span></span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-4 col-sm-4 col-5">
                        <div className="logo text-center">
                           <Link className="logo-1" to="/"><img data-width="96" src="/assets/img/logo/logo-black.png" alt="Logo" /></Link>
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-4 col-sm-4 col-2">
                        <div className="td-header-right text-end">
                           <Link to="/contact" className="td-btn td-btn-lg d-none d-md-inline-block td-btn-switch-animation">
                              <span className="d-flex align-items-center justify-content-center">
                                 <span className="btn-text"> Contact Us </span>
                                 <span className="btn-icon"><i className="fa-sharp fa-solid fa-angle-right"></i></span>
                                 <span className="btn-icon"><i className="fa-sharp fa-solid fa-angle-right"></i></span>
                              </span>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <Offcanvas offCanvas={offCanvas} setOffCanvas={setOffCanvas} />
         </header>
      </>
   )
}

export default HeaderOne
