import { Link } from "react-router-dom"

const About = () => {
   return (
      <div id="about" className="td-about-area">
         <div className="container">
            <div className="row">
               <div className="col-lg-4">
                  <div className="td-about-left mb-30">
                     <span>WHO WE ARE</span>
                     <div className="td-about-left-thumb ml-60 fix td-rounded-10">
                        <img data-speed=".9" src="/assets/img/about/thumb.jpg" alt="" />
                     </div>
                  </div>
               </div>
               <div className="col-lg-8">
                  <div className="td-about-content mb-30">
                     <h2 className="td-about-title mb-30">What Makes Metanova Tech Your Trusted B2B Growth Partner</h2>
                     <p className="mb-20">
                        Metanova Tech is a B2B growth collective blending data operations, demand strategy, and creative media to help technology brands win the buying moment. Founded in 2020, we identified a critical gap in the market: technology companies needed a comprehensive, integrated solution that combined compliance-first data operations, strategic demand generation, and creative execution—not disconnected services from multiple vendors.
                     </p>
                     <p className="mb-20">
                        From Pune to the world, our global teams orchestrate compliant audiences, multi-touch nurture journeys, and sales-ready conversations that stretch across email, digital, content syndication, and account-based marketing plays. We serve a diverse range of technology companies including SaaS platforms, IT service providers, staffing agencies, consulting firms, marketing agencies, manufacturing companies, and logistics providers across AMER, EMEA, and APAC markets.
                     </p>
                     <p className="mb-20">
                        Our mission is to build predictable revenue programs for every client, while our vision is to make enterprise demand generation as measurable as performance marketing. We lead with insight, activate with precision, and report on what matters most—pipeline velocity. Every program we deliver is engineered to provide clear attribution back to revenue, ensuring that marketing investments translate directly into sales results.
                     </p>
                     <p className="mb-45">
                        What sets Metanova Tech apart is our integrated approach. Instead of siloed services, we deliver unified revenue operations that align data, demand, and creative teams around a single goal: accelerating your pipeline. Our compliance-first methodology ensures every lead, every touchpoint, and every campaign meets global regulatory standards while maintaining the highest quality standards. Trust indicators include our 15 years of combined B2B expertise, transparent reporting frameworks, and a commitment to partnership that goes beyond vendor relationships.
                     </p>
                     <div className="td-btn-group mb-35">
                        <Link className="td-btn-circle" to="/about">
                           <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                        <Link className="td-btn-2 td-btn-primary" to="/about">ABOUT US</Link>
                        <Link className="td-btn-circle" to="/about">
                           <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                     </div>
                     <div className="td-about-thumb-wrap d-flex align-items-center justify-content-end">
                        <div className="mr-150 td-about-shape">
                           <img className="td-live-anim-spin" src="/assets/img/about/shape.png" alt="" />
                        </div>
                        <div className="td-about-thumb fix td-rounded-10">
                           <img data-speed=".9" src="/assets/img/about/thumb-2.jpg" alt="" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default About
