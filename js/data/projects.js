// projects.js - Centralized project data
export const projects = [
  {
    id: 1,
    title: 'Dichol E-commerce Website',
    description: 'A full-featured online store with payment integration and admin dashboard.',
    image: './dichol-project.png',
    tags: ['Next.js', 'PostgreSQL', 'TypeScript', 'Next Auth', 'Stripe', 'ShadCN UI', 'Paypal'],
    links: {
      demo: 'https://dicholl.vercel.app/',
      code: 'https://github.com/vvduth/dicholl'
    }
  },
  {
    id: 2,
    title: 'Rental house X',
    description: 'A full-featured real estate platform, allow users to browse, list, and manage properties.',
    image: './rental-project.png',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Next Auth', 'MongoDB'],
    links: {
      demo: 'https://rental-housex.vercel.app/',
      code: 'https://github.com/vvduth/rental-housex'
    }
  },
  {
    id: 3,
    title: 'Clean blog',
    description: 'My personal blog website, where I share my document on hand-on projects that related to Cloud, DevOps, Web development.',
    image: './blog-project.png',
    tags: ['JavaScript', 'Python', 'Flask', 'PostgreSQL', 'AWS'],
    links: {
      demo: 'http://13.60.94.174',
      code: 'https://github.com/vvduth/my-blog'
    }
  },
  {
    id: 4,
    title: 'Matchyy',
    description: 'Social dating app, users can like, upload pictures, live-talk, update profile with others.',
    image: './matchhy-project.png',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Next Auth', 'Resend', 'PostgreSQL', 'Prisma'],
    links: {
      demo: 'https://matcchy.vercel.app/',
      code: 'https://github.com/vvduth/matcchy'
    }
  },
  {
    id: 5,
    title: 'AI Summary',
    description: 'A modern SAAS web application that lets you upload PDF files and receive concise, AI-generated summaries',
    image: './ai-summary.png',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Uploadthing', 'OpenAI', 'GeminiAI', 'PostgreSQL'],
    links: {
      demo: 'https://ai-summary-nu.vercel.app/',
      code: 'https://github.com/vvduth/ai-summary'
    }
  },
  {
    id: 6,
    title: 'Get Yolk',
    description: 'An AI-powered coach for combat athletes — functional strength, clean diets.',
    image: './get-yolk.png',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Vapi', 'Convex', 'PostgreSQL'],
    links: {
      demo: 'https://getyolk.vercel.app/',
      code: 'https://github.com/vvduth/getyolk'
    }
  },
  {
    id: 7,
    title: 'RentApp',
    description: 'A full-stack rental property management application. Closed because of AWS cost too much.',
    image: './rental-aws.png',
    tags: ['Next.js', 'Node.js', 'TypeScript', 'AWS S3', 'AWS Amplify', 'AWS RDS', 'PostgreSQL', 'AWS EC2'],
    links: {
      demo: 'https://main.d1vydoe7zr96su.amplifyapp.com/search',
      code: 'https://github.com/vvduth/rental-app'
    }
  },
  {
    id: 8,
    title: 'MeatMotors',
    description: 'A full-stack car dealership management system.',
    image: './meat-motors.png',
    tags: ['Next.js', 'TypeScript', 'AWS S3', 'PostgreSQL', 'OpenAI SDK', 'Redis'],
    links: {
      demo: 'https://car-dealer-lake-eight.vercel.app/',
      code: 'https://github.com/vvduth/car-dealer'
    }
  },
  {
    id: 9,
    title: 'Foodboot',
    description: 'A comprehensive food delivery application. Closed because of AWS cost too much.',
    image: './foodboot.png',
    tags: ['React', 'TypeScript', 'AWS S3', 'RDS', 'Stripe', 'Java', 'SpringBoot'],
    links: {
      demo: 'http://foodboot-client-react.s3-website-us-east-1.amazonaws.com',
      code: 'https://github.com/vvduth/food-boot-client'
    }
  }, {
    id: 10,
    title: 'Dukem Travel',
    description: 'An AI-powered travel planning platform that creates personalized trip itineraries.',
    image: './ai-travel-project.png',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript', 'OpenAI', 'Convex'],
    links: {
      demo: 'https://dukem-travel.vercel.app/',
      code: 'https://github.com/vvduth/dukem-travel'
    }
  },
  {
    id: 11,
    title: 'Dukem stock',
    description: ' stock market tracking and analysis platform built with Next.js 15, featuring real-time market data, watchlists, AI personalized news',
    image: './stock-project.png',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'GeminiAI', 'MongoDB'],
    links: {
      demo: 'https://dukem-stock.vercel.app/',
      code: 'https://github.com/vvduth/dukem-stock'
    }
  }
];

// Extract unique tags for filtering
export function getAllTags() {
  const tagSet = new Set();
  projects.forEach(project => {
    project.tags.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
}
