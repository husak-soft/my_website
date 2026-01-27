const Frontend = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="16" strokeWidth="2" rx="1" ry="1"/>
    <line x1="3" y1="8" x2="21" y2="8" strokeWidth="2"/>
  </svg>
);

const Mobile = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="7" y="2" width="10" height="20" rx="2" ry="2" strokeWidth="2"/>
    <circle cx="12" cy="18" r="1" strokeWidth="2"/>
  </svg>
);

const CloudDevOps = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeWidth="2" d="M5 16a4 4 0 010-8 5 5 0 0110 0 4 4 0 010 8H5z"/>
    <path strokeWidth="2" d="M3 20h18"/>
  </svg>
);

const AIML = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="4" strokeWidth="2"/>
    <path strokeWidth="2" d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M5 19l3-3M16 8l3-3"/>
  </svg>
);

const PaymentIntegration = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="3" y="6" width="18" height="12" rx="2" ry="2" strokeWidth="2"/>
    <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2"/>
    <circle cx="16" cy="16" r="1" strokeWidth="2"/>
  </svg>
);

const TestingQuality = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeWidth="2" d="M5 13l4 4L19 7"/>
  </svg>
);

const VersionControl = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="6" cy="6" r="2" strokeWidth="2"/>
    <circle cx="18" cy="6" r="2" strokeWidth="2"/>
    <circle cx="12" cy="18" r="2" strokeWidth="2"/>
    <path strokeWidth="2" d="M6 8v8M18 8v8M6 12h12"/>
  </svg>
);


const Backend = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="4" y="6" width="16" height="4" strokeWidth="2" rx="1" ry="1"/>
    <rect x="4" y="14" width="16" height="4" strokeWidth="2" rx="1" ry="1"/>
  </svg>
);

const DesignPrototyping = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2l7 7-7 7-7-7 7-7zm0 14v6m0-6h6m-6 0H6" />
  </svg>
);

const Databases = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <ellipse cx="12" cy="6" rx="8" ry="3" strokeWidth="2"/>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6v12c0 1.657 3.582 3 8 3s8-1.343 8-3V6" />
  </svg>
);

const ECommerce = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8h13.2L17 13M7 13H5.4M17 13l1.6 8M6 21a1 1 0 100-2 1 1 0 000 2zm12 0a1 1 0 100-2 1 1 0 000 2z" />
  </svg>
);

const MarketingAnalytics = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 11V3m0 8h8m-8 0L3 21l8-4 8 4-8-12z" />
  </svg>
);

export const techStack = [
  {
    category: "Frontend",
    tools: [
      "React",
      "NextJs",
      "VueJs",
      "Angular",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "HTML5/CSS3",
    ],
    Icon: Frontend,
  },
  {
    category: "Backend",
    tools: [
      "NodeJs",
      "Python",
      "NestJs",
      "Flask",
      "Django",
      "ExpressJs",
      "GraphQL",
      "RESTful APIs",
    ],
    Icon: Backend,
  },
  {
    category: "Mobile",
    tools: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic", "PWA"],
    Icon: Mobile,
  },
  {
    category: "Databases",
    tools: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis",
      "Firebase",
      "DynamoDB",
      "Elasticsearch",
    ],
    Icon: Databases,
  },
  {
    category: "Cloud & DevOps",
    tools: [
      "AWS",
      "Google Cloud",
      "Azure",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Terraform",
      "Jenkins",
    ],
    Icon: CloudDevOps,
      },
  {
    category: "AI & ML",
    tools: [
      "TensorFlow",
      "PyTorch",
      "OpenAI",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "LangChain",
    ],
    Icon: AIML,
    },
  {
    category: "Payment Integration",
    tools: [
      "Stripe",
      "PayPal",
      "Square",
      "Razorpay",
      "Braintree",
      "Crypto Payments",
    ],
    Icon: PaymentIntegration,
    },
  {
    category: "Testing & Quality",
    tools: [
      "Jest",
      "Cypress",
      "Selenium",
      "JUnit",
      "Postman",
      "SonarQube",
      "Playwright",
    ],
    Icon: TestingQuality,
    },
  {
    category: "Version Control",
    tools: ["Git", "GitHub", "GitLab", "Bitbucket", "Jira", "Confluence"],
    Icon: VersionControl,
    },
  {
    category: "Design & Prototyping",
    tools: [
      "Figma",
      "Adobe XD",
      "Sketch",
      "InVision",
      "Photoshop",
      "Illustrator",
    ],
    Icon: DesignPrototyping,
    },
  {
    category: "E-Commerce",
    tools: [
      "Shopify",
      "WooCommerce",
      "Magento",
      "BigCommerce",
      "Stripe Commerce",
      "Custom Storefronts",
    ],
    Icon: ECommerce,
    },
  {
    category: "Marketing & Analytics",
    tools: [
      "Google Analytics",
      "Mixpanel",
      "HubSpot",
      "Mailchimp",
      "SEMrush",
      "Google Ads",
      "Meta Ads",
    ],
    Icon: MarketingAnalytics,
    },
];

export const featuredStack = [
  {
    category: "Frontend",
    tools: [
      "React",
      "NextJs",
      "VueJs",
      "Angular",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "HTML5/CSS3",
    ],
    Icon: Frontend,
  },
  {
    category: "Backend",
    tools: [
      "NodeJs",
      "Python",
      "NestJs",
      "Flask",
      "Django",
      "ExpressJs",
      "GraphQL",
      "RESTful APIs",
    ],
    Icon: Backend
  },
  {
    category: "Design & Prototyping",
    tools: [
      "Figma",
      "Adobe XD",
      "Sketch",
      "InVision",
      "Photoshop",
      "Illustrator",
    ],
    Icon: DesignPrototyping
  },
  {
    category: "Databases",
    tools: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis",
      "Firebase",
      "DynamoDB",
      "Elasticsearch",
    ],
    Icon: Databases
  },
  {
    category: "E-Commerce",
    tools: [
      "Shopify",
      "WooCommerce",
      "Magento",
      "BigCommerce",
      "Stripe Commerce",
      "Custom Storefronts",
    ],
    Icon: ECommerce
  },
  {
    category: "Marketing & Analytics",
    tools: [
      "Google Analytics",
      "Mixpanel",
      "HubSpot",
      "Mailchimp",
      "SEMrush",
      "Google Ads",
      "Meta Ads",
    ],
    Icon: MarketingAnalytics
  },
];
