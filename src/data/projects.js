import fusionexLogo from '@/assets/images/logos/fusionex.jpg'
import foodtaleLogo from '@/assets/images/logos/foodtale-black.png'
import foodtaleAppLogo from '@/assets/images/logos/foodtale-app.png'
import rsvpLogo from '@/assets/images/logos/rsvp-logo.png'

// To use a project screenshot: save it under src/assets/images/projects/,
// import it below, and set image + imageType: 'screenshot' on that project.

// Optional url: public project link; omit or set null for internal-only work.

export const projects = [
  {
    id: 'foodtale-mobile',
    title: 'Foodtale Mobile App',
    company: 'Nextale',
    url: null,
    description:
      'Built Flutter mobile features including discover/search feeds, review creation, deep links, shared restaurant tracking, and order confirmation flows integrated with backend services.',
    tags: ['Flutter', 'REST APIs', 'MongoDB'],
    image: foodtaleAppLogo,
    imageAlt: 'Foodtale app logo',
    imageType: 'logo'
  },
  {
    id: 'foodtale-search',
    title: 'Discover & Search',
    company: 'Foodtale Mobile App',
    url: null,
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
    description:
      'Own Vue.js and Laravel admin features across the platform; resolved Docker and GitHub Actions CI/CD build failures across Flutter web and Laravel services.',
    tags: ['Vue.js', 'Laravel', 'Docker', 'CI/CD'],
    image: foodtaleLogo,
    imageAlt: 'Foodtale logo',
    imageType: 'logo'
  },
  {
    id: 'foodtale-bank-integration',
    title: 'UOB Payment Integration',
    company: 'Foodtale Platform',
    url: null,
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
    description:
      'Developed a full-stack event seating arrangement module for an RSVP web application across Laravel backend and Vue.js frontend.',
    tags: ['Vue.js', 'Laravel', 'JavaScript'],
    image: rsvpLogo,
    imageAlt: 'The RSVP Club logo',
    imageType: 'logo'
  }
]
