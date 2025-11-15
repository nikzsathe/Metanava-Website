import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "metanova_cookie_consent";

type ConsentValue = "accepted" | "denied";

const CookieConsent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setIsOpen(true);
    }
  }, []);

  const handleChoice = (value: ConsentValue) => {
    localStorage.setItem(STORAGE_KEY, value);
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="cookie-banner">
      <div className="cookie-banner__card">
        <button className="cookie-banner__close" onClick={() => handleChoice("denied")} aria-label="Close cookie notice">
          &times;
        </button>
        <p className="cookie-banner__eyebrow">Manage Consent</p>
        <h4>We use cookies to power a better experience</h4>
        <p>
          To provide the best experiences, we use technologies like cookies to store and/or access device information. Consenting
          to these technologies allows us to process marketing analytics, browsing behavior, and unique IDs on this site. Not
          consenting may adversely affect certain features and functions.
        </p>
        {showPreferences && (
          <div className="cookie-banner__preferences">
            <h5>Preference center</h5>
            <ul>
              <li>
                <strong>Necessary cookies</strong> - enable core functionality such as secure login, navigation, and protecting
                forms against spam.
              </li>
              <li>
                <strong>Analytics cookies</strong> - help us measure campaign performance and improve the site experience.
              </li>
            </ul>
          </div>
        )}
        <div className="cookie-banner__actions">
          <button className="td-btn-2 td-btn-white" onClick={() => handleChoice("denied")}>
            Deny
          </button>
          <button className="td-btn-2 td-btn-outline" onClick={() => setShowPreferences((prev) => !prev)}>
            {showPreferences ? "Hide preferences" : "View preferences"}
          </button>
          <button className="td-btn-2 td-btn-primary" onClick={() => handleChoice("accepted")}>
            Accept
          </button>
        </div>
        <div className="cookie-banner__links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/cookies-policy">Cookies Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
