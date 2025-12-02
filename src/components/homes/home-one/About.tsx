import { Link } from "react-router-dom"
import { ShieldCheckIcon, GlobeAltIcon, BoltIcon, ChartBarIcon, RocketLaunchIcon, ClockIcon } from "@heroicons/react/24/outline"

const features = [
   {
      icon: ShieldCheckIcon,
      title: "Streamlined Regulatory Compliance",
      description: "Navigate GDPR and CCPA requirements effortlessly. We prioritize your data security."
   },
   {
      icon: GlobeAltIcon,
      title: "Worldwide Market Expansion",
      description: "Scale your operations across APAC, EMEA, and North America with accurate targeting."
   },
   {
      icon: BoltIcon,
      title: "Fast-Track Lead Delivery",
      description: "Receive qualified, sales-ready leads delivered to your pipeline in under 24 hours."
   },
   {
      icon: ChartBarIcon,
      title: "Superior Connection Quality",
      description: "Experience exceptional outcomes with validated contact information and phone numbers."
   },
   {
      icon: RocketLaunchIcon,
      title: "Campaigns Ready for Launch",
      description: "Thorough market analysis guarantees every initiative delivers maximum impact."
   },
   {
      icon: ClockIcon,
      title: "Lightning-Fast Support",
      description: "Receive expert responses to all inquiries within 30 minutes, every single time."
   },
]

const About = () => {
   return (
      <div id="about" className="td-about-area pt-80 pb-80">
         <div className="container">
            <div className="row justify-content-center mb-50">
               <div className="col-lg-10 text-center">
                  <h2 className="td-section-title mb-15" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                     Unlocking Potential Through Exceptional Service
                  </h2>
               </div>
            </div>
            
            <div className="row g-4 mb-50">
               {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                     <div key={index} className="col-lg-4 col-md-6">
                        <div className="td-feature-card h-100" style={{ 
                           background: '#ffffff', 
                           borderRadius: '16px',
                           padding: '30px',
                           transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                           border: 'none',
                           boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                           cursor: 'pointer',
                           position: 'relative',
                           overflow: 'hidden'
                        }}>
                           <div 
                              className="td-feature-icon mb-20" 
                              style={{ 
                                 width: '56px', 
                                 height: '56px', 
                                 color: 'var(--td-theme-primary)',
                                 transition: 'all 0.4s ease',
                                 transform: 'translateY(0)'
                              }}
                           >
                              <Icon style={{ width: '100%', height: '100%' }} />
                           </div>
                           <h3 className="mb-12" style={{ 
                              fontSize: '1.25rem', 
                              fontWeight: 600,
                              color: '#1a1a1a',
                              transition: 'color 0.3s ease',
                              lineHeight: '1.3'
                           }}>
                              {feature.title}
                           </h3>
                           <p className="mb-0" style={{ 
                              color: '#666', 
                              lineHeight: '1.6',
                              fontSize: '0.95rem',
                              transition: 'color 0.3s ease'
                           }}>
                              {feature.description}
                           </p>
                           <div 
                              className="td-feature-hover-bg"
                              style={{
                                 position: 'absolute',
                                 top: 0,
                                 left: 0,
                                 right: 0,
                                 bottom: 0,
                                 background: 'linear-gradient(135deg, rgba(92, 196, 204, 0.03) 0%, rgba(92, 196, 204, 0.01) 100%)',
                                 opacity: 0,
                                 transition: 'opacity 0.4s ease',
                                 pointerEvents: 'none',
                                 borderRadius: '16px'
                              }}
                           />
                        </div>
                     </div>
                  );
               })}
            </div>

            <div className="row">
               <div className="col-lg-6">
                  <div className="td-about-left mb-30">
                     <span className="td-section-subtitle d-inline-block mb-15">WHO WE ARE</span>
                     <h2 className="td-about-title mb-20">Why Choose Metanova Tech as Your B2B Growth Ally</h2>
                     <p className="mb-15">
                        Metanova Tech represents a unified B2B growth platform that merges advanced data management, strategic demand planning, and innovative creative solutions to help technology companies excel at the critical purchase decision stage. Established in 2020, we recognized an essential market need: technology firms required a holistic, unified approach integrating regulatory-compliant data handling, intelligent demand creation, and impactful creative delivery—moving beyond fragmented offerings from various providers.
                     </p>
                     <p className="mb-25">
                        Operating from Pune with a global footprint, our international team coordinates permission-based audiences, comprehensive multi-channel nurturing programs, and conversion-focused engagements spanning email marketing, digital advertising, content distribution, and targeted account-based strategies.
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
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="td-about-thumb-wrap">
                     <div className="td-about-left-thumb fix td-rounded-10 mb-30">
                        <img data-speed=".9" src="/assets/img/about/thumb.jpg" alt="" />
                     </div>
                     <div className="td-about-thumb fix td-rounded-10">
                        <img data-speed=".9" src="/assets/img/about/thumb-2.jpg" alt="" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default About
