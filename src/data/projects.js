import fusionexLogo from '@/assets/images/logos/fusionex.jpg'
import foodtaleLogo from '@/assets/images/logos/foodtale-black.png'
import foodtaleAppLogo from '@/assets/images/logos/foodtale-app.png'
import rsvpLogo from '@/assets/images/logos/rsvp-logo.png'
// import foodtaleAppScreenshot from '@/assets/images/projects/foodtale-app-screenshot.svg'
// import foodtalePlatformScreenshot from '@/assets/images/projects/foodtale-platform-screenshot.svg'
// import rsvpScreenshot from '@/assets/images/projects/rsvp-screenshot.svg'

export const projects = [
  {
    id: 'foodtale-mobile',
    title: 'Foodtale Mobile App',
    company: 'Nextale',
    url: null,
    featured: false,
    hasDetail: true,
    description:
      'Built Flutter mobile features including discover/search feeds, review creation, deep links, shared restaurant tracking, and order confirmation flows integrated with backend services.',
    tags: ['Flutter', 'REST APIs', 'MongoDB'],
    image: foodtaleAppLogo,
    imageAlt: 'Foodtale mobile app interface',
    imageType: 'logo',
    problem:
      'Users needed a seamless way to discover restaurants, share experiences, and complete orders across a growing mobile ecosystem.',
    solution:
      'Delivered end-to-end Flutter features — discover/search feeds, review creation, deep links, shared restaurant tracking, and order confirmation — all integrated with backend REST APIs and MongoDB Atlas.',
    outcome:
      'Shipped production-ready mobile flows that improved content discovery and order completion, with reliable backend integration across the Foodtale ecosystem.',
    role: 'Full Stack Developer'
  },
  {
    id: 'foodtale-search',
    title: 'Discover & Search',
    company: 'Foodtale Mobile App',
    url: null,
    featured: false,
    hasDetail: false,
    description:
      'Discover and search feature in the Foodtale mobile app, powered by MongoDB Atlas APIs for content and user discovery across the ecosystem.',
    tags: ['MongoDB', 'REST APIs', 'Node.js'],
    image: foodtaleAppLogo,
    imageAlt: 'Foodtale app logo',
    imageType: 'logo'
  },
  {
    id: 'foodtale-platform',
    title: 'Foodtale Platform',
    company: 'Nextale',
    url: null,
    featured: false,
    hasDetail: false,
    description:
      'Own Vue.js and Laravel admin features across the platform; resolved Docker and GitHub Actions CI/CD build failures across Flutter web and Laravel services.',
    tags: ['Vue.js', 'Laravel', 'Docker', 'CI/CD'],
    image: foodtaleLogo,
    imageAlt: 'Foodtale platform admin dashboard',
    imageType: 'logo'
  },
  {
    id: 'foodtale-bank-integration',
    title: 'UOB Payment Integration',
    company: 'Foodtale Platform',
    url: null,
    featured: false,
    hasDetail: false,
    description:
      'Commission payout function on Foodtale Platform: ISO 20022 XML payment pipeline with SFTP delivery, PGP encryption, inbound response parsing, and webhook callbacks.',
    tags: ['XML', 'SFTP', 'Laravel', 'REST APIs'],
    image: foodtaleLogo,
    imageAlt: 'Foodtale logo',
    imageType: 'logo'
  },
  {
    id: 'giant',
    title: 'Giant',
    company: 'Fusionex',
    url: null,
    featured: false,
    hasDetail: false,
    description:
      'Designed and implemented frontend and backend features for Giant, Fusionex data visualization software, using ASP.NET MVC, ASP.NET Core, and Knockout.js. Built a construction fee forecasting module reducing manual effort by 20%.',
    tags: ['ASP.NET Core', 'C#', 'Knockout.js'],
    image: fusionexLogo,
    imageAlt: 'Fusionex logo',
    imageType: 'logo'
  },
  {
    id: 'nextale-rsvp',
    title: 'RSVP Seating Module',
    company: 'The RSVP Club',
    url: 'https://portal.thersvpclub.com',
    featured: false,
    hasDetail: true,
    description:
      'Developed a full-stack event seating arrangement module for an RSVP web application across Laravel backend and Vue.js frontend.',
    tags: ['Vue.js', 'Laravel', 'JavaScript'],
    image: rsvpLogo,
    imageAlt: 'RSVP seating module interface',
    imageType: 'logo',
    problem:
      'Event organizers needed a flexible seating arrangement tool within the existing RSVP portal to manage table layouts and guest assignments.',
    solution:
      'Built a full-stack seating module with a Vue.js frontend for drag-and-drop layout editing and a Laravel backend for persistence, validation, and event data integration.',
    outcome:
      'Delivered a production seating module now live at portal.thersvpclub.com, streamlining event setup for venue staff.',
    role: 'Full Stack Developer'
  }
]

export function getProjectById(id) {
  return projects.find((project) => project.id === id)
}
