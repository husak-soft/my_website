export interface Project {
  id: string;
  title: string;
  description: string;
  image: string; // URL or path
  tags: string[];
  link: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Nero Budget App',
    description: 'An AI-driven financial assistant that simplifies money management through automated expense tracking with OCR and proactive, conversational insights.',
    image: '/images/nero.png',
    tags: ['Yapily', 'Redis', 'PostgreSQL','AWS','Flask'],
    link: 'https://nerobudget.ai/'
  },
  {
    id: '2',
    title: 'Sleet',
    description: 'A logistics management platform with a specialized real-time tracking engine and predictive analytics for the complex supply chain landscape.',
    image: '/images/sleet.png',
    tags: ['NestJs','AWS','MapBox'],
    link: 'https://sleet.sa/'
  },
  {
    id: '3',
    title: 'Ordrio',
    description: 'A powerful, custom Shopify solution offering deep backend customization and complex API integrations that standard apps cannot provide.',
    image: '/images/ordrio.png',
    tags: ['Alrahji', 'Shopify', 'AWS'],
    link: 'https://ordrio.com/'
  },
  {
    id: '4',
    title: 'SkipTheCall',
    description: 'An automated call response system designed to handle customer inquiries efficiently, reducing wait times and operational overhead.',
    image: '/images/skipthecall.png',
    tags: ['Whatsapp', 'Twilio', 'AWS'],
    link: 'https://skipthecall.com/'
  },
  {
    id: '5',
    title: 'BlockBook',
    description: 'A community-driven social marketplace designed with a blockchain-inspired ethos for transparency and user-controlled interactions.',
    image: '/images/blockbook.png',
    tags: ['Twitter','Instagram', 'Redis', 'AWS','BullMq'],
    link: 'https://blockbook.app/'
  },
  {
    id: '6',
    title: 'Contractor Assist',
    description: 'A contract management platform designed to simplify and secure agreements between freelancers and clients.',
    image: '/images/gigle.png',
    tags: ['Firebase','AWS','Stripe','NodeJs','Firebase CAPI'],
    link: 'https://staging-contractor-assist.web.app/'
  }
];

export const skills: string[] = [
  "JavaScript (ES6+)", "TypeScript", "Node.js", "React", "NextJs",
  "Python", "Flask","Docker", "AWS", "SQL", "NoSQL","NestJs","Firebase","Firebase CAPI","MongoDB","Stripe","Redis","BullMq","OpenAI",'Postgresql'
];

export const services: Service[] = [
  {
    id: '1',
    title: 'Web Development',
    description: 'Building modern, responsive, and high-performance websites.',
    image: 'https://placehold.co/400x300/e5e5e5/000000?text=Web+Dev'
  },
  {
    id: '2',
    title: 'Backend Engineering',
    description: 'Designing robust APIs and scalable server-side architectures.',
    image: 'https://placehold.co/400x300/e5e5e5/000000?text=Backend'
  },
  {
    id: '3',
    title: 'Cloud Solutions',
    description: 'Deploying and managing applications on AWS, Google Cloud, or Azure.',
    image: 'https://placehold.co/400x300/e5e5e5/000000?text=Cloud'
  }
];
