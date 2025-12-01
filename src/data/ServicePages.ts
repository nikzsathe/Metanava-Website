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
      heroDescription: "Metanova Tech delivers compliant B2B lead generation services that discover, verify, and activate buying teams across every territory you sell into. Our multi-channel lead generation strategies focus on quality over quantity, ensuring every lead meets your qualification criteria and integrates seamlessly with your sales processes. We specialize in helping technology companies build predictable pipelines through GDPR-compliant data acquisition, intent-based targeting, and comprehensive lead scoring and nurturing programs that deliver measurable ROI.",
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
         { title: "What industries do you support for B2B lead generation?", desc: "We specialize in technology buyers across software, cloud services, cybersecurity, fintech, hardware, and industrial tech sectors. Our lead generation programs have proven success with SaaS companies, IT services, staffing agencies, consultants, marketing agencies, manufacturing firms, and logistics providers, with comprehensive coverage across AMER, EMEA, and APAC markets." },
         { title: "How do you measure lead quality and ensure data accuracy?", desc: "Every record passes through a rigorous multi-layer QA process including compliance review, data enrichment, phone/email validation, manual verification, and post-delivery sales feedback loops. We maintain >92% approval rates by focusing on quality over quantity, ensuring leads meet BANT qualification criteria and align with your ideal customer profile before delivery to your sales team." },
         { title: "Can you integrate with our CRM and marketing automation platforms?", desc: "Yes. We frequently push data directly into Salesforce, HubSpot, Microsoft Dynamics, Marketo, Pardot, and custom marketing automation workflows. Our team works closely with your RevOps team to ensure data fields, routing rules, and reporting align perfectly with your existing systems." },
         { title: "What is your approach to GDPR and privacy compliance?", desc: "Compliance is fundamental to our lead generation methodology. We operate a dedicated compliance desk that monitors every jurisdiction you operate in, ensuring GDPR, CAN-SPAM, CASL, and other regional privacy regulations are met. All data acquisition includes proper consent tracking, opt-in verification, and ongoing compliance monitoring to protect both your brand and your prospects." },
         { title: "How long does it take to see results from your lead generation programs?", desc: "Most programs begin delivering qualified leads within 4-6 weeks of launch. Initial results include audience modeling, compliance setup, and channel activation. Full program optimization typically occurs within 8-12 weeks, allowing time for lead qualification, sales feedback integration, and continuous improvement based on conversion data." },
         { title: "What types of leads can you generate?", desc: "We generate various lead types including marketing qualified leads (MQL), sales qualified leads (SQL), BANT-qualified leads, appointment-setting leads, and confirmed callback leads. Our programs can target specific job titles, company sizes, industries, technographic signals, and intent data to match your ideal customer profile precisely." },
         { title: "How do you ensure leads integrate with our sales process?", desc: "We collaborate with your sales and RevOps teams during program design to understand your lead qualification criteria, routing rules, and sales process. Our delivery includes detailed lead context, engagement history, and enrichment data that helps your sales team have more meaningful conversations. Regular feedback loops ensure continuous improvement in lead quality and conversion rates." },
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
      heroDescription: "Move beyond isolated campaigns with orchestrated media, nurture, and measurement frameworks that surface in-market demand sooner. Our B2B demand generation strategy takes a full-funnel approach, guiding prospects from awareness to conversion through integrated content marketing, SEO, paid media, and marketing automation. We help technology companies build sustainable demand pipelines by developing marketing qualified leads (MQL), aligning with sales teams, and tracking multi-touch attribution to demonstrate clear ROI.",
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
         { title: "What is the difference between demand generation and lead generation?", desc: "Demand generation focuses on building awareness and creating interest among your target audience through full-funnel marketing activities, while lead generation captures and qualifies specific contacts. Demand generation is a longer-term strategy that nurtures prospects through the entire buyer journey, while lead generation focuses on immediate contact acquisition. Our approach integrates both to create sustainable, scalable demand pipelines." },
         { title: "Do you work with existing agencies and internal marketing teams?", desc: "Absolutely. We frequently collaborate with internal teams and agency partners, plugging into the analytics and execution gaps that need dedicated focus. Our demand generation programs complement existing marketing efforts by adding specialized expertise in multi-touch attribution, marketing automation, and performance optimization." },
         { title: "How quickly can we launch a demand generation program?", desc: "Most demand generation programs go live within 4-6 weeks, including strategy workshops, audience research, data preparation, creative deployment, and marketing automation setup. Complex programs requiring extensive content development or technology integration may take 8-10 weeks for full activation." },
         { title: "What channels and tactics do you use for demand generation?", desc: "Our demand generation strategy includes content marketing, SEO, organic social media, paid media (Google Ads, LinkedIn Ads, programmatic), content syndication, email marketing, webinars, events, and marketing automation workflows. We design the optimal channel mix based on your target audience, budget, and goals." },
         { title: "How do you measure demand generation success and ROI?", desc: "We track key metrics including marketing qualified leads (MQL), lead-to-opportunity conversion rates, cost per lead (CPL), pipeline generation, and revenue attribution. Our reporting includes multi-touch attribution models that show how different channels and touchpoints contribute to revenue, providing clear ROI visibility." },
         { title: "Can you align demand generation programs with our sales team?", desc: "Yes. Sales and marketing alignment is critical for demand generation success. We work closely with your sales team to define MQL criteria, establish lead handoff processes, gather feedback on lead quality, and optimize programs based on conversion data. Regular alignment meetings ensure programs stay focused on revenue outcomes." },
         { title: "What types of content support your demand generation programs?", desc: "We leverage a variety of content types including thought leadership articles, research reports, case studies, whitepapers, webinars, videos, infographics, and interactive tools. Content is designed to address different stages of the buyer journey, from awareness-building thought leadership to conversion-focused product content." },
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
      heroDescription: "Land and expand strategic accounts with account-based marketing (ABM) and ABX programs that prioritize named lists, buying groups, and coordinated sales plays. Our ABM strategy helps technology companies target high-value accounts with personalized campaigns, decision-maker mapping, and multi-channel engagement that accelerates enterprise deals. We specialize in both 1:1, 1:few, and 1:many ABM approaches, ensuring each account receives the right level of personalization based on account value and strategic importance.",
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
      heroDescription: "From paid media to onsite experience, we orchestrate comprehensive digital marketing ecosystems that continually attract and convert your ideal buyers. Our B2B digital marketing services include Google Ads, LinkedIn advertising, programmatic display, SEO optimization, social media marketing, and landing page conversion optimization. We combine data-driven campaign management with creative excellence to deliver performance-driven results that scale your pipeline and maximize ROI across all digital touchpoints.",
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

