import accentureLogo from '@/assets/images/logos/accenture.webp'
import nextaleLogo from '@/assets/images/logos/nextale.jpg'
import fusionexLogo from '@/assets/images/logos/fusionex.jpg'

export const experiences = [
  {
    id: 'nextale-foodtale',
    company: 'Nextale',
    logo: nextaleLogo,
    logoAlt: "Nextale's Logo",
    logoWidth: 120,
    location: 'Petaling Jaya',
    roles: [
      {
        title: 'Full Stack Developer',
        date: 'September 2024 — Present',
        bullets: [
          'Built Flutter mobile features including discover/search feeds, review creation, deep links, shared restaurant tracking, and order confirmation flows integrated with backend services.',
          'Own Vue.js and Laravel admin features and REST API integrations across the Foodtale platform.',
          'Implemented MongoDB Atlas discover/search APIs for user and content discovery.',
          'Resolved Docker and GitHub Actions CI/CD build failures across Flutter web and Laravel services; maintained containerized dev/deploy workflows.',
          'Built UOB bank payment integration using ISO 20022 XML (pain.001 outbound / pain.002 inbound), including SFTP file exchange, PGP encryption, audit logging, and webhook callback handling.'
        ]
      },
      {
        title: 'Full Stack Developer (Part-Time)',
        date: 'October 2023 — December 2023',
        bullets: [
          'Developed a full-stack event seating arrangement module for an RSVP web application using Laravel and Vue.js.',
          'Extended existing HTML/JavaScript interfaces by integrating third-party npm libraries to add functionality with minimal custom rework.',
          'Identified and resolved performance issues ahead of live events, improving application efficiency and user experience.'
        ]
      }
    ]
  },
  {
    id: 'accenture',
    company: 'Accenture',
    logo: accentureLogo,
    logoAlt: "Accenture's Logo",
    logoWidth: 118,
    location: 'Kelana Jaya',
    roles: [
      {
        title: 'Business Architecture Analyst',
        date: 'March 2024 — May 2024',
        bullets: [
          'Identified, diagnosed, and fixed bugs in a web-based distribution management system, improving stability and user experience.',
          'Provided L1–L3 technical support, troubleshooting application and system issues with stakeholders.'
        ]
      }
    ]
  },
  {
    id: 'fusionex',
    company: 'Fusionex',
    logo: fusionexLogo,
    logoAlt: "Fusionex's Logo",
    logoWidth: 140,
    location: 'Petaling Jaya',
    roles: [
      {
        title: 'Consultant, Solutions Development',
        date: 'July 2022 — February 2024',
        bullets: [
          'Designed and implemented frontend and backend features for Giant, Fusionex data visualization software, using ASP.NET MVC, ASP.NET Core, and Knockout.js.',
          'Collaborated with cross-functional teams to gather requirements, design solutions, and deliver production-ready software.',
          'Developed a forecasting module for construction project fee estimation, reducing manual effort and errors by 20%.',
          'Mentored two interns throughout their 3–6 month industrial training periods.'
        ]
      },
      {
        title: 'Web Developer (Internship)',
        date: 'January 2022 — June 2022',
        bullets: [
          'Updated web designs to a minimalist layout provided by UI designers.',
          'Collaborated with senior developers to implement frontend functionality and ensure smooth user experience.',
          'Participated in testing and debugging of web applications to ensure optimal performance.'
        ]
      },
      {
        title: 'Software Tester (Internship)',
        date: 'February 2020 — May 2020',
        bullets: [
          'Analyzed requirements and designed test cases to ensure complete test coverage.',
          'Detected and reported software defects with detailed bug reports for developers.',
          'Developed automated test scripts that reduced manual testing time by 30%.'
        ]
      }
    ]
  }
]
