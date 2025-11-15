import { useEffect } from "react";

type SEOProps = {
   pageTitle: string;
   description?: string;
   keywords?: string[];
   canonicalUrl?: string;
};

const DEFAULT_DESCRIPTION =
   "Metanova Tech is a B2B growth partner delivering compliant lead generation, demand programs, and full-funnel digital marketing for technology brands worldwide.";
const DEFAULT_KEYWORDS = [
   "Metanova Tech",
   "B2B lead generation",
   "demand generation agency",
   "account-based marketing",
   "content syndication",
   "digital marketing services",
];
const BASE_DOMAIN = "https://metanovatech.com";

const SEO = ({ pageTitle, description, keywords, canonicalUrl }: SEOProps) => {
   useEffect(() => {
      document.title = `${pageTitle} | Metanova Tech`;

      const setMetaTag = (selector: string, attr: "name" | "property", value: string, content: string) => {
         let tag = document.querySelector<HTMLMetaElement>(selector);
         if (!tag) {
            tag = document.createElement("meta");
            tag.setAttribute(attr, value);
            document.head.appendChild(tag);
         }
         tag.setAttribute("content", content);
      };

      const metaDescription = description ?? DEFAULT_DESCRIPTION;
      const metaKeywords = (keywords ?? DEFAULT_KEYWORDS).join(", ");
      const computedCanonical = canonicalUrl ?? `${BASE_DOMAIN}${window.location.pathname}`;

      setMetaTag('meta[name="description"]', "name", "description", metaDescription);
      setMetaTag('meta[name="keywords"]', "name", "keywords", metaKeywords);
      setMetaTag('meta[property="og:title"]', "property", "og:title", `${pageTitle} | Metanova Tech`);
      setMetaTag('meta[property="og:description"]', "property", "og:description", metaDescription);
      setMetaTag('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
      setMetaTag('meta[name="twitter:title"]', "name", "twitter:title", `${pageTitle} | Metanova Tech`);
      setMetaTag('meta[name="twitter:description"]', "name", "twitter:description", metaDescription);

      let canonicalTag = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!canonicalTag) {
         canonicalTag = document.createElement("link");
         canonicalTag.setAttribute("rel", "canonical");
         document.head.appendChild(canonicalTag);
      }
      canonicalTag.setAttribute("href", computedCanonical);
   }, [pageTitle, description, keywords, canonicalUrl]);

   return null;
};

export default SEO;