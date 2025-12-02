import { Link } from "react-router-dom"
import { useState } from "react"
import Count from "../../common/Count";

const service_groups = [
   {
      id: "lead-gen",
      title: "B2B Lead Generation",
      subtitle: "Surpass your monthly revenue targets consistently",
      solutions: [
         {
            statement: "Seeking innovative methods to connect with ideal prospects in your market.",
            service: "Content Syndication"
         },
         {
            statement: "Aiming to cultivate lasting professional relationships throughout the complete customer journey",
            service: "Email Marketing"
         },
         {
            statement: "Searching for cost-efficient approaches to acquire premium leads that convert effectively.",
            service: "Tele-Marketing"
         },
      ]
   },
   {
      id: "abm",
      title: "Account Based Marketing",
      subtitle: "Discover, focus, and connect",
      solutions: [
         {
            statement: "Focusing exclusively on engaging with the most relevant business opportunities.",
            service: "Ideal Customer Profiling"
         },
         {
            statement: "Developing a strategic framework for attracting and converting premium clients.",
            service: "GTM Strategy"
         },
         {
            statement: "Building authority and trust while guiding prospects through the decision-making process toward purchase.",
            service: "Hyper-Personalisation"
         },
      ]
   },
   {
      id: "demand-gen",
      title: "B2B Demand Generation",
      subtitle: "Generate interest, develop relationships, and drive conversions",
      solutions: [
         {
            statement: "Demonstrating your brand's thought leadership and expertise to both current and prospective customers.",
            service: "Webinar & Event Registration"
         },
         {
            statement: "Expanding your opportunity pipeline by securing additional qualified meetings with key decision-makers.",
            service: "B2B Appointment Generation"
         },
         {
            statement: "Connecting with pre-qualified prospects who have demonstrated purchase intent and are ready to engage now.",
            service: "Confirm Call-back Leads"
         },
      ]
   },
   {
      id: "digital",
      title: "Digital Marketing",
      subtitle: "Promote, measure, and refine",
      solutions: [
         {
            statement: "Enhancing your digital visibility to achieve top search engine rankings.",
            service: "Search Engine Optimization (SEO)"
         },
         {
            statement: "Engaging your target audience immediately through strategic paid advertising.",
            service: "Search Engine Marketing (SEM)"
         },
         {
            statement: "Expanding your reach to new market segments with compelling and relevant content.",
            service: "Social Media Marketing (SMM)"
         },
      ]
   },
];

const Service = () => {
   const [activeTab, setActiveTab] = useState("lead-gen");
   const activeService = service_groups.find(s => s.id === activeTab) || service_groups[0];

   return (
      <div id="services" className="td-service-area pb-100 pt-100">
         <div className="container">
            <div className="row justify-content-center mb-60">
               <div className="col-lg-10 text-center">
                  <h2 className="td-section-title mb-20" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                     Complete Marketing Solution Portfolio
                  </h2>
                  <p className="td-section-text" style={{ fontSize: '1.1rem', color: '#666' }}>
                     Launch winning B2B Lead Generation initiatives built for measurable results
                  </p>
               </div>
            </div>

            {/* Service Tabs */}
            <div className="row mb-50">
               <div className="col-12">
                  <div className="d-flex flex-wrap justify-content-center gap-3 mb-40" style={{ borderBottom: '2px solid #e9ecef' }}>
                     {service_groups.map((service) => (
                        <button
                           key={service.id}
                           onClick={() => setActiveTab(service.id)}
                           className="btn"
                           style={{
                              padding: '15px 30px',
                              border: 'none',
                              background: 'transparent',
                              borderBottom: activeTab === service.id ? '3px solid var(--td-theme-primary)' : '3px solid transparent',
                              color: activeTab === service.id ? 'var(--td-theme-primary)' : '#666',
                              fontWeight: activeTab === service.id ? 600 : 400,
                              cursor: 'pointer',
                              transition: 'all 0.3s',
                              fontSize: '1rem'
                           }}
                        >
                           {service.title}
                        </button>
                     ))}
                  </div>
               </div>
            </div>

            {/* Active Service Content */}
            <div className="row mb-60">
               <div className="col-12">
                  <div className="text-center mb-40">
                     <h3 className="td-section-title mb-10" style={{ fontSize: '2rem' }}>
                        {activeService.title}
                     </h3>
                     <p className="td-section-text" style={{ fontSize: '1.1rem', color: '#666' }}>
                        {activeService.subtitle}
                     </p>
                  </div>
               </div>
               <div className="col-lg-8 offset-lg-2">
                  <div className="row g-4">
                     {activeService.solutions.map((solution, index) => (
                        <div key={index} className="col-md-6">
                           <div className="td-service-solution-card h-100" style={{
                              background: '#ffffff',
                              borderRadius: '16px',
                              padding: '35px',
                              border: 'none',
                              height: '100%',
                              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                              cursor: 'pointer',
                              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                              position: 'relative',
                              overflow: 'hidden'
                           }}>
                              <p className="mb-25" style={{ 
                                 fontSize: '1.05rem', 
                                 lineHeight: '1.7', 
                                 color: '#333',
                                 transition: 'color 0.3s ease',
                                 marginBottom: '25px'
                              }}>
                                 {solution.statement}
                              </p>
                              <div className="d-flex align-items-center">
                                 <span className="td-service-badge" style={{
                                    padding: '10px 20px',
                                    background: 'var(--td-theme-primary)',
                                    color: 'white',
                                    borderRadius: '25px',
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    transition: 'all 0.3s ease',
                                    display: 'inline-block'
                                 }}>
                                    {solution.service}
                                 </span>
                              </div>
                              <div 
                                 className="td-service-hover-bg"
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
                     ))}
                  </div>
                  <div className="text-center mt-40">
                     <Link className="td-btn-2 td-btn-primary" to="/contact">
                        Find your Solution
                     </Link>
                  </div>
               </div>
            </div>

            {/* Stats Section */}
            <div className="row mt-80">
               <div className="col-12">
                  <div className="text-center mb-50">
                     <h2 className="td-section-title mb-20">The Metrics Speak for Themselves</h2>
                  </div>
               </div>
               <div className="col-lg-3 col-md-6 mb-30">
                  <div className="td-service-counter-item text-center">
                     <h2 style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--td-theme-primary)' }}>
                        <span className="odometer" data-count="8.5"><Count number={8.5} /></span>M+
                     </h2>
                     <span style={{ fontSize: '1.1rem', color: '#666' }}>Annual Visits</span>
                  </div>
               </div>
               <div className="col-lg-3 col-md-6 mb-30">
                  <div className="td-service-counter-item text-center">
                     <h2 style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--td-theme-primary)' }}>
                        <span className="odometer" data-count="2.4"><Count number={2.4} /></span>M+
                     </h2>
                     <span style={{ fontSize: '1.1rem', color: '#666' }}>Annual Subscribers</span>
                  </div>
               </div>
               <div className="col-lg-3 col-md-6 mb-30">
                  <div className="td-service-counter-item text-center">
                     <h2 style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--td-theme-primary)' }}>
                        <span className="odometer" data-count="29"><Count number={29} /></span>M+
                     </h2>
                     <span style={{ fontSize: '1.1rem', color: '#666' }}>Annual Page Views</span>
                  </div>
               </div>
               <div className="col-lg-3 col-md-6 mb-30">
                  <div className="td-service-counter-item text-center">
                     <h2 style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--td-theme-primary)' }}>
                        <span className="odometer" data-count="73"><Count number={73} /></span>M+
                     </h2>
                     <span style={{ fontSize: '1.1rem', color: '#666' }}>Annual Emails Sent</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Service
