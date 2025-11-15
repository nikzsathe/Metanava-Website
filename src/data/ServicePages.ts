export interface ServiceFaqItem {
   title: string;
   desc: string;
}

export interface ServiceStep {
   title: string;
   desc: string;
}

export interface ServicePageContent {
   slug: string;
   label: string;
   shortDescription: string;
   heroBadge: string;
   heroTitle: string;
   heroHighlight: string;
   heroDescription: string;
   heroHighlights: string[];
   heroImage: string;
   heroSecondaryImage: string;
   processSubtitle: string;
   processTitle: string;
   processHighlight: string;
   processSteps: ServiceStep[];
   replaceHeading: string;
   replaceParagraphs: string[];
   replaceImage: string;
   replaceShape: string;
   faq: ServiceFaqItem[];
   seoTitle: string;
   seoDescription: string;
}

export const servicePages: ServicePageContent[] = [
   {
      slug: "b2b-lead-generation",
      label: "B2B Lead Generation",
      shortDescription: "Compliant contact discovery and qualification.",
      heroBadge: "//  Pipeline acceleration",
      heroTitle: "B2B Lead",
      heroHighlight: "Generation",
      heroDescription: "Metanova Tech delivers compliant lead generation programs that discover, verify, and activate buying teams across every territory you sell into.",
      heroHighlights: [
         "GDPR, CAN-SPAM & privacy-compliant data acquisition",
         "Intent, technographic, and firmographic targeting",
         "Lead enrichment, de-duplication, and CRM-ready delivery",
         "Real-time SLA dashboards and quality governance",
      ],
      heroImage: "/assets/img/service/details/bg.jpg",
      heroSecondaryImage: "/assets/img/service/details/thumb.jpg",
      processSubtitle: "//  How we operate",
      processTitle: "Lead engines built for",
      processHighlight: "predictable revenue",
      processSteps: [
         { title: "Audience modeling", desc: "We define ICPs, triggers, and validation rules before the first record is sourced." },
         { title: "Data compliance desk", desc: "Centralized verification, phone/email validation, and consent tracking for every contact." },
         { title: "Activation pods", desc: "Multilingual specialists run outbound/email/paid plays to secure marketing-qualified responses." },
         { title: "Revenue QA loop", desc: "Sales feedback is captured, scored, and loops directly into targeting to increase SQL conversion." },
      ],
      replaceHeading: "We replace unpredictable lead vendors with a transparent, auditable growth partner.",
      replaceParagraphs: [
         "Dedicated compliance officers monitor every jurisdiction you operate in so marketing and legal teams stay confident.",
         "Delivery squads coordinate with your RevOps team to ensure data, routing rules, and reporting mirror your CRM setup.",
      ],
      replaceImage: "/assets/img/service/replace/thumb.jpg",
      replaceShape: "/assets/img/service/replace/shape.png",
      faq: [
         { title: "What industries do you support?", desc: "We specialize in technology buyers—software, cloud, cybersecurity, fintech, hardware, and industrial tech—with coverage across AMER, EMEA, and APAC." },
         { title: "How do you measure lead quality?", desc: "Every record passes through a multi-layer QA process: compliance review, enrichment, manual validation, and post-delivery sales feedback to maintain >92% approval rates." },
         { title: "Can you integrate with our CRM?", desc: "Yes. We frequently push data directly into Salesforce, HubSpot, Microsoft Dynamics, and custom marketing automation workflows." },
      ],
      seoTitle: "B2B Lead Generation Services | Metanova Tech",
      seoDescription: "Launch GDPR-compliant B2B lead generation programs with Metanova Tech. Verified buying groups, intent signals, and CRM-ready delivery.",
   },
   {
      slug: "demand-generation",
      label: "Demand Generation",
      shortDescription: "Multi-channel programs that build and nurture intent.",
      heroBadge: "//  Full-funnel demand",
      heroTitle: "Demand",
      heroHighlight: "Generation",
      heroDescription: "Move beyond isolated campaigns with orchestrated media, nurture, and measurement frameworks that surface in-market demand sooner.",
      heroHighlights: [
         "Journey design for top, middle, and bottom funnel",
         "Paid + owned media orchestration",
         "Lifecycle automation with clear exit criteria",
         "Attribution dashboards tied to pipeline",
      ],
      heroImage: "/assets/img/service/details/thumb-2.jpg",
      heroSecondaryImage: "/assets/img/service/details/thumb-3.jpg",
      processSubtitle: "//  Demand workflow",
      processTitle: "Program architecture for",
      processHighlight: "sustainable growth",
      processSteps: [
         { title: "Strategy & offer design", desc: "We align personas, narratives, and offers to the buying cycle with tangible value exchanges." },
         { title: "Channel mix planning", desc: "Always-on media blends content syndication, paid social, programmatic, and organic amplification." },
         { title: "Nurture intelligence", desc: "Behavioral scoring and conversational signals trigger progression to sales teams." },
         { title: "Optimization sprints", desc: "Weekly testing rhythms evaluate CPL, conversion, and velocity to redirect spend fast." },
      ],
      replaceHeading: "We operate as your extended demand desk, unifying media, nurture, and revenue reporting.",
      replaceParagraphs: [
         "Marketing, SDR, and RevOps stakeholders receive unified scorecards so priorities stay aligned.",
         "Insights turn into immediate tests—channel reallocation, creative refreshes, or nurture adjustments—to protect ROI.",
      ],
      replaceImage: "/assets/img/service/replace/thumb.jpg",
      replaceShape: "/assets/img/service/replace/shape.png",
      faq: [
         { title: "Do you work with existing agencies?", desc: "Absolutely. We frequently collaborate with internal teams and agency partners, plugging into the analytics and execution gaps that need dedicated focus." },
         { title: "How quickly can we launch?", desc: "Most demand programs go live within 4-6 weeks, including strategy workshops, data prep, and creative deployment." },
      ],
      seoTitle: "Demand Generation Agency | Metanova Tech",
      seoDescription: "Design and run predictable demand generation programs with Metanova Tech. Integrated media, nurture, and analytics for B2B marketers.",
   },
   {
      slug: "account-based-marketing",
      label: "Account-Based Marketing",
      shortDescription: "ABM and ABX programs for enterprise buying committees.",
      heroBadge: "//  Account excellence",
      heroTitle: "Account-Based",
      heroHighlight: "Marketing",
      heroDescription: "Land and expand strategic accounts with programs that prioritize named lists, buying groups, and coordinated sales plays.",
      heroHighlights: [
         "Account segmentation and prioritization",
         "Buying committee research & enrichment",
         "Personalized outbound, paid, and content",
         "Deal-stage enablement synced with sales",
      ],
      heroImage: "/assets/img/service/details/thumb-4.jpg",
      heroSecondaryImage: "/assets/img/service/details/thumb-2.jpg",
      processSubtitle: "//  ABM methodology",
      processTitle: "Focus on the accounts",
      processHighlight: "that matter most",
      processSteps: [
         { title: "Account intelligence", desc: "We map technographics, intent spikes, and stakeholder influence for each target account." },
         { title: "Play orchestration", desc: "Campaign pods align outbound, paid, and experiential tactics per stage of the account journey." },
         { title: "Sales alignment", desc: "Joint war rooms keep SDRs, AEs, and marketing in sync with shared cadences and insights." },
         { title: "Expansion & advocacy", desc: "Post-sale programs identify cross-sell opportunities and turn wins into reference stories." },
      ],
      replaceHeading: "Replace disconnected ABM pilots with an accountable account experience engine.",
      replaceParagraphs: [
         "Gain visibility into which personas engaged, what content resonated, and how sales should respond.",
         "Every play is documented, repeatable, and optimized so future account cohorts activate faster.",
      ],
      replaceImage: "/assets/img/service/replace/thumb.jpg",
      replaceShape: "/assets/img/service/replace/shape.png",
      faq: [
         { title: "Can you work from our named account list?", desc: "Yes. We enrich your named lists with verified stakeholders, intent activity, and recommended plays per segment." },
         { title: "Do you support 1:1, 1:few, or 1:many?", desc: "We build frameworks for all three motions and determine which tier each account belongs to based on ACV and sales goals." },
      ],
      seoTitle: "Account-Based Marketing Services | Metanova Tech",
      seoDescription: "Deploy data-driven ABM and ABX programs with Metanova Tech. Activate buying committees and accelerate enterprise revenue.",
   },
   {
      slug: "content-syndication",
      label: "Content Syndication",
      shortDescription: "Get thought leadership in front of in-market buyers.",
      heroBadge: "//  Content amplification",
      heroTitle: "Content",
      heroHighlight: "Syndication",
      heroDescription: "Give every whitepaper, report, or webinar a second life through curated third-party networks and always-on storytelling.",
      heroHighlights: [
         "Global network of technology publishers",
         "Topic + persona matching",
         "Lead guarantees tied to your definitions",
         "Performance dashboards for each asset",
      ],
      heroImage: "/assets/img/service/details/thumb-3.jpg",
      heroSecondaryImage: "/assets/img/service/details/thumb-4.jpg",
      processSubtitle: "//  Amplification process",
      processTitle: "Extend your content",
      processHighlight: "across the funnel",
      processSteps: [
         { title: "Asset readiness", desc: "We audit message, CTA, and metadata to ensure the asset captures attention quickly." },
         { title: "Publisher alignment", desc: "Channels are selected based on historical conversion, geography, and vertical performance." },
         { title: "Lead capture + QA", desc: "Syndicated leads are verified, enriched, and delivered with engagement context." },
         { title: "Insight recycling", desc: "Top-performing narratives inform future assets and nurture sequences." },
      ],
      replaceHeading: "We turn content calendars into predictable lead sources without overloading your team.",
      replaceParagraphs: [
         "Dedicated program managers handle publisher relationships, pacing, and creative refreshes.",
         "Transparent pacing reports show delivery status, CPL, and recommendations by asset.",
      ],
      replaceImage: "/assets/img/service/replace/thumb.jpg",
      replaceShape: "/assets/img/service/replace/shape.png",
      faq: [
         { title: "What formats perform best?", desc: "Research reports, benchmark studies, ROI calculators, and webinar replays typically generate the highest engagement." },
         { title: "Can you support multilingual assets?", desc: "Yes. We translate, localize, and syndicate content in key EMEA and APAC languages." },
      ],
      seoTitle: "Content Syndication Services | Metanova Tech",
      seoDescription: "Scale your content reach with Metanova Tech. Syndication programs that guarantee quality leads and engagement insights.",
   },
   {
      slug: "digital-marketing",
      label: "Digital Marketing",
      shortDescription: "Performance-driven paid and owned campaigns.",
      heroBadge: "//  Digital excellence",
      heroTitle: "Digital",
      heroHighlight: "Marketing",
      heroDescription: "From paid media to onsite experience, we orchestrate digital ecosystems that continually attract and convert your ideal buyers.",
      heroHighlights: [
         "Search, social, and programmatic execution",
         "Landing page and CRO experimentation",
         "Analytics & attribution consulting",
         "Creative production for performance",
      ],
      heroImage: "/assets/img/service/details/bg.jpg",
      heroSecondaryImage: "/assets/img/service/details/thumb-3.jpg",
      processSubtitle: "//  Performance loop",
      processTitle: "Optimize every click",
      processHighlight: "into pipeline",
      processSteps: [
         { title: "Foundation audit", desc: "Tracking, pixels, and martech integrations are verified before scaling spend." },
         { title: "Creative & messaging", desc: "Audience-specific creative is produced for each channel and lifecycle stage." },
         { title: "Experimentation", desc: "Always-on testing frameworks balance quick wins with strategic bets." },
         { title: "Insight ops", desc: "We translate dashboards into actions for both marketing and sales leadership." },
      ],
      replaceHeading: "Metanova becomes your digital command center with transparent performance management.",
      replaceParagraphs: [
         "Weekly stand-ups review budget shifts, creative learnings, and funnel impact.",
         "Shared dashboards keep executives informed without digging through multiple platforms.",
      ],
      replaceImage: "/assets/img/service/replace/thumb.jpg",
      replaceShape: "/assets/img/service/replace/shape.png",
      faq: [
         { title: "Which platforms do you manage?", desc: "Google, LinkedIn, Meta, Microsoft Ads, programmatic DSPs, and emerging channels that reach B2B buyers." },
         { title: "Do you provide creative?", desc: "Yes. Our studio delivers ad variants, landing page modules, and motion assets optimized for performance." },
      ],
      seoTitle: "Digital Marketing for B2B | Metanova Tech",
      seoDescription: "Run high-performance digital marketing campaigns with Metanova Tech. Paid media, CRO, and analytics for B2B growth.",
   },
   {
      slug: "email-marketing",
      label: "Email Marketing",
      shortDescription: "Lifecycle journeys that keep buyers engaged.",
      heroBadge: "//  Lifecycle orchestration",
      heroTitle: "Email",
      heroHighlight: "Marketing",
      heroDescription: "Launch nurture streams, newsletters, and sales follow-ups that feel personal, stay compliant, and produce measurable ROI.",
      heroHighlights: [
         "Journey design for prospects, customers, and partners",
         "Marketing automation build-outs (Marketo, HubSpot, Pardot)",
         "Deliverability monitoring & list hygiene",
         "Testing frameworks for copy, design, and offers",
      ],
      heroImage: "/assets/img/service/details/thumb-2.jpg",
      heroSecondaryImage: "/assets/img/service/details/thumb.jpg",
      processSubtitle: "//  Lifecycle workflow",
      processTitle: "Email experiences that",
      processHighlight: "build trust",
      processSteps: [
         { title: "Audience segmentation", desc: "We define lifecycle stages, data sources, and personalization fields." },
         { title: "Journey orchestration", desc: "Automations handle welcomes, nurtures, re-engagement, and customer marketing." },
         { title: "Creative lab", desc: "Copywriters and designers produce brand-aligned templates and modules." },
         { title: "Optimization & deliverability", desc: "Health checks, A/B tests, and compliance monitoring keep performance high." },
      ],
      replaceHeading: "We operate your email marketing factory so teams can focus on strategy and storytelling.",
      replaceParagraphs: [
         "Metanova manages calendars, production, QA, and deployment across all business units.",
         "Detailed reporting shows how each program influences pipeline, revenue, and customer retention.",
      ],
      replaceImage: "/assets/img/service/replace/thumb.jpg",
      replaceShape: "/assets/img/service/replace/shape.png",
      faq: [
         { title: "Can you work inside our automation platform?", desc: "Yes. We build within your Marketo, HubSpot, Pardot, Iterable, or Braze instance with appropriate permissions and governance." },
         { title: "How do you handle deliverability?", desc: "Dedicated specialists monitor sender reputation, authentication, bounce trends, and spam complaints to keep inbox placement high." },
      ],
      seoTitle: "Email Marketing Services | Metanova Tech",
      seoDescription: "Metanova Tech designs, builds, and optimizes B2B email marketing programs—from nurture to customer marketing and retention.",
   },
];

export const getServicePageBySlug = (slug: string): ServicePageContent | undefined =>
   servicePages.find((service) => service.slug === slug);

