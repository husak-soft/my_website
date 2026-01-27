import React from "react";
import { Code } from "lucide-react";
import {
  SiRedis,
  SiPostgresql,
  SiAmazonwebservices,
  SiFlask,
  SiNextdotjs,
  SiNestjs,
  SiMapbox,
  SiReact,
  SiShopify,
  SiMongodb,
  SiWhatsapp,
  SiTwilio,
  SiX,
  SiInstagram,
  SiFirebase,
  SiShadcnui,
  SiZillow,
  SiStripe,
  SiNodedotjs,
  SiTailwindcss,
  SiVuedotjs,
  SiAngular,
  SiTypescript,
  SiRedux,
  SiHtml5,
  SiPython,
  SiRabbitmq,
  SiDjango,
  SiExpress,
  SiGraphql,
  SiReactrouter,
  SiFlutter,
  SiSwift,
  SiKotlin,
  SiIonic,
  SiPwa,
  SiMysql,
  SiAmazondynamodb,
  SiElasticsearch,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiJenkins,
  SiTensorflow,
  SiPytorch,
  SiOpenai,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
//   SiLangchain, // Check availability, might need fallback
  SiPaypal,
  SiSquare,
  SiRazorpay,
  SiBraintree,
  SiBitcoin, // for Crypto
  SiJest,
  SiCypress,
  SiSelenium,
  SiJunit5,
  SiPostman,
  SiSonarqube,
//   SiPlaywright, // Removing as it's often missing in si
  SiGit,
  SiGithub,
  SiGitlab,
  SiBitbucket,
  SiJira,
  SiConfluence,
  SiFigma,
  SiAdobexd,
  SiSketch,
  SiInvision,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiWoocommerce,
  SiMagento,
  SiBigcommerce,
  SiGoogleanalytics,
  SiMixpanel,
  SiHubspot,
  SiMailchimp,
  SiSemrush,
  SiGooglemaps,
  SiGoogleads,
  SiMeta,
} from "react-icons/si";

// Fallback Icon
export const DefaultIcon = Code;

export const TAG_MAPPING: Record<string, { icon: React.ElementType; color: string }> = {
  // Frontend
  React: { icon: SiReact, color: "#61DAFB" },
  "NextJs": { icon: SiNextdotjs, color: "#FFFFFF" },
  "VueJs": { icon: SiVuedotjs, color: "#4FC08D" },
  Angular: { icon: SiAngular, color: "#DD0031" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  Tailwind: { icon: SiTailwindcss, color: "#06B6D4" },
  Redux: { icon: SiRedux, color: "#764ABC" },
  "HTML5/CSS3": { icon: SiHtml5, color: "#E34F26" }, // HTML color

  // Backend
  NodeJs: { icon: SiNodedotjs, color: "#339933" },
  Python: { icon: SiPython, color: "#3776AB" },
  NestJs: { icon: SiNestjs, color: "#E0234E" },
  Flask: { icon: SiFlask, color: "#FFFFFF" },
  Django: { icon: SiDjango, color: "#092E20" },
  "ExpressJs": { icon: SiExpress, color: "#FFFFFF" },
  GraphQL: { icon: SiGraphql, color: "#E10098" },
  "RESTful APIs": { icon: SiReactrouter, color: "#FFFFFF" }, // Generic

  // Mobile
  "React Native": { icon: SiReact, color: "#61DAFB" },
  Flutter: { icon: SiFlutter, color: "#02569B" },
  Swift: { icon: SiSwift, color: "#F05138" },
  Kotlin: { icon: SiKotlin, color: "#7F52FF" },
  Ionic: { icon: SiIonic, color: "#3880FF" },
  PWA: { icon: SiPwa, color: "#5A0FC8" },

  // Databases
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
  Redis: { icon: SiRedis, color: "#DC382D" },
  Firebase: { icon: SiFirebase, color: "#FFCA28" },
  "Firebase CAPI": { icon: SiFirebase, color: "#FFCA28" },
  DynamoDB: { icon: SiAmazondynamodb, color: "#4053D6" },
  Elasticsearch: { icon: SiElasticsearch, color: "#005571" },

  // Cloud & DevOps
  AWS: { icon: SiAmazonwebservices, color: "#FF9900" },
  "Google Cloud": { icon: SiGooglecloud, color: "#4285F4" },
  Azure: { icon: Code, color: "#0078D4" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  Kubernetes: { icon: SiKubernetes, color: "#326CE5" },
  "CI/CD": { icon: SiGithub, color: "#FFFFFF" }, // Generic/Github Actions
  Terraform: { icon: SiTerraform, color: "#7B42BC" },
  Jenkins: { icon: SiJenkins, color: "#D24939" },

  // AI & ML
  TensorFlow: { icon: SiTensorflow, color: "#FF6F00" },
  PyTorch: { icon: SiPytorch, color: "#EE4C2C" },
  OpenAI: { icon: SiOpenai, color: "#412991" },
  "Scikit-learn": { icon: SiScikitlearn, color: "#F7931E" },
  Pandas: { icon: SiPandas, color: "#150458" },
  NumPy: { icon: SiNumpy, color: "#013243" },
  LangChain: { icon: Code, color: "#FFFFFF" }, // Fallback

  // Payment
  Stripe: { icon: SiStripe, color: "#008CDD" },
  PayPal: { icon: SiPaypal, color: "#003087" },
  Square: { icon: SiSquare, color: "#FFFFFF" },
  Razorpay: { icon: SiRazorpay, color: "#3395FF" },
  Braintree: { icon: SiBraintree, color: "#FFFFFF" },
  "Crypto Payments": { icon: SiBitcoin, color: "#F7931A" },

  // Testing
  Jest: { icon: SiJest, color: "#C21325" },
  Cypress: { icon: SiCypress, color: "#17202C" },
  Selenium: { icon: SiSelenium, color: "#43B02A" },
  JUnit: { icon: SiJunit5, color: "#25A162" },
  Postman: { icon: SiPostman, color: "#FF6C37" },
  SonarQube: { icon: SiSonarqube, color: "#4E9BCD" },
  Playwright: { icon: Code, color: "#2EAD33" }, // Fallback to Code

  // Version Control
  Git: { icon: SiGit, color: "#F05032" },
  GitHub: { icon: SiGithub, color: "#FFFFFF" },
  GitLab: { icon: SiGitlab, color: "#FC6D26" },
  Bitbucket: { icon: SiBitbucket, color: "#0052CC" },
  Jira: { icon: SiJira, color: "#0052CC" },
  Confluence: { icon: SiConfluence, color: "#172B4D" },

  // Design
  Figma: { icon: SiFigma, color: "#F24E1E" },
  "Adobe XD": { icon: SiAdobexd, color: "#FF61F6" },
  Sketch: { icon: SiSketch, color: "#F7B500" },
  InVision: { icon: SiInvision, color: "#FF3366" },
  Photoshop: { icon: SiAdobephotoshop, color: "#31A8FF" },
  Illustrator: { icon: SiAdobeillustrator, color: "#FF9A00" },

  // E-Commerce
  Shopify: { icon: SiShopify, color: "#96BF48" },
  WooCommerce: { icon: SiWoocommerce, color: "#96588A" },
  Magento: { icon: SiMagento, color: "#EE672F" },
  BigCommerce: { icon: SiBigcommerce, color: "#121118" },
  "Stripe Commerce": { icon: SiStripe, color: "#008CDD" },
  "Custom Storefronts": { icon: Code, color: "#FFFFFF" },

  // Marketing
  "Google Analytics": { icon: SiGoogleanalytics, color: "#E37400" },
  Mixpanel: { icon: SiMixpanel, color: "#7856FF" },
  HubSpot: { icon: SiHubspot, color: "#FF7A59" },
  Mailchimp: { icon: SiMailchimp, color: "#FFE01B" },
  SEMrush: { icon: SiSemrush, color: "#EC6310" },
  "Google Ads": { icon: SiGoogleads, color: "#4285F4" },
  "Meta Ads": { icon: SiMeta, color: "#0668E1" },

  // Others/Misc
  MapBox: { icon: SiMapbox, color: "#4264FB" },
  Whatsapp: { icon: SiWhatsapp, color: "#25D366" },
  Twilio: { icon: SiTwilio, color: "#F22F46" },
  "X(Twitter)": { icon: SiX, color: "#1DA1F2" },
  Twitter: { icon: SiX, color: "#1DA1F2" },
  Instagram: { icon: SiInstagram, color: "#E4405F" },
  "React.js": { icon: SiReact, color: "#61DAFB" },
  "BullMq": { icon: SiRabbitmq, color: "#FFFFFF" },
  "Alrahji": { icon: Code, color: "#FFFFFF" },
  "Yapily": { icon: Code, color: "#FFFFFF" },
  "Shadcn": { icon: SiShadcnui, color: "#FFFFFF" }, // Usually uses Lucide/Radix, no specific brand icon yet in React Icons Si
  "Zillow": { icon: SiZillow, color: "#FFFFFF" },
  "Google Maps": { icon: SiGooglemaps, color: "#FFFFFF" },
};
