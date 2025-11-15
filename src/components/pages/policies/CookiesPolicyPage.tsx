const cookieTypes = [
   {
      name: "Necessary / Essential Cookies",
      type: "Session Cookies",
      administeredBy: "Metanova Tech",
      description:
         "These cookies are required to provide secure access to the website, authenticate users, and prevent fraudulent use of accounts. Without them, the services you request cannot be delivered.",
   },
   {
      name: "Functionality Cookies",
      type: "Persistent Cookies",
      administeredBy: "Metanova Tech",
      description:
         "Functionality cookies remember your preferences—such as language choice or login details—to deliver a more personal experience and avoid re-entering preferences during future visits.",
   },
];

const browserHelpLinks = [
   { name: "Google Chrome", url: "https://support.google.com/accounts/answer/32050" },
   { name: "Microsoft Edge / Internet Explorer", url: "http://support.microsoft.com/kb/278835" },
   { name: "Mozilla Firefox", url: "https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored" },
   { name: "Apple Safari", url: "https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" },
];

const CookiesPolicyPage = () => {
   return (
      <section className="td-about-area td-about-main-spacing pb-100">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-10">
                  <div className="text-center mb-40">
                     <span className="td-section-subtitle mb-15 d-inline-block">//  Metanova Tech</span>
                     <h1 className="td-section-page-title">Cookies Policy</h1>
                     <p className="mt-20">
                        Last updated: March 24, 2024. This policy explains what cookies are, how Metanova Tech uses them, and the
                        choices you have to control cookies on our Website.
                     </p>
                  </div>
                  <div className="policy-content">
                     <section>
                        <h2>Interpretation and Definitions</h2>
                        <p>
                           Words with capitalized initial letters have meanings defined under the following conditions. These
                           definitions apply whether they appear in singular or plural.
                        </p>
                        <ul>
                           <li>
                              <strong>Company</strong> (“Metanova Tech”, “we”, “us”, or “our”) refers to Metanova Tech Private
                              Limited, 406 Arihant Avenue, Wanowrie, Pune 411040 Maharashtra, India.
                           </li>
                           <li>
                              <strong>Cookies</strong> are small files placed on your computer or device by a website, containing
                              details of your browsing history, preferences, and session information.
                           </li>
                           <li>
                              <strong>Website</strong> refers to Metanova Tech, accessible from www.metanovatech.com.
                           </li>
                           <li>
                              <strong>You</strong> means the individual accessing or using the Website, or the company or legal
                              entity on whose behalf such individual is using the Website.
                           </li>
                        </ul>
                        <p>
                           Cookies typically do not contain personally identifiable information; however, the personal data we
                           store may be linked to information obtained from cookies. For further details on how we handle
                           personal data, review our <a href="/privacy-policy">Privacy Policy</a>.
                        </p>
                     </section>

                     <section>
                        <h2>Type of Cookies We Use</h2>
                        <p>We use both session and persistent cookies for the purposes described below.</p>
                        <div className="row">
                           {cookieTypes.map((cookie) => (
                              <div key={cookie.name} className="col-md-6 mb-30">
                                 <div className="policy-card">
                                    <h5>{cookie.name}</h5>
                                    <p className="mb-1">
                                       <strong>Type:</strong> {cookie.type}
                                    </p>
                                    <p className="mb-1">
                                       <strong>Administered by:</strong> {cookie.administeredBy}
                                    </p>
                                    <p>{cookie.description}</p>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </section>

                     <section>
                        <h2>Your Choices Regarding Cookies</h2>
                        <p>
                           You can disable cookies through your browser settings and delete existing cookies at any time. Doing so
                           may limit certain features or affect the functionality of the Website.
                        </p>
                        <p>Use the resources below to manage cookies in popular browsers:</p>
                        <ul>
                           {browserHelpLinks.map((link) => (
                              <li key={link.name}>
                                 <a href={link.url} target="_blank" rel="noopener noreferrer">
                                    {link.name}
                                 </a>
                              </li>
                           ))}
                           <li>For other browsers, please consult the official support documentation.</li>
                        </ul>
                     </section>

                     <section>
                        <h2>More Information</h2>
                        <p>
                           Learn more about cookies at{" "}
                           <a href="https://www.termsfeed.com/blog/cookies/" target="_blank" rel="noopener noreferrer">
                              All About Cookies by TermsFeed
                           </a>
                           .
                        </p>
                     </section>

                     <section>
                        <h2>Contact Us</h2>
                        <p>If you have questions about this Cookies Policy, contact us via:</p>
                        <ul>
                           <li>
                              Email: <a href="mailto:info@metanovatech.com">info@metanovatech.com</a>
                           </li>
                           <li>Website: www.metanovatech.com/cookies-policy</li>
                        </ul>
                     </section>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default CookiesPolicyPage;

