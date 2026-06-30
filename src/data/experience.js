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
          'Owned delivery of back-office features on a Vue.js + Laravel admin platform — including voucher distribution, referral settings, commission settings, and payment admin workflows — improving validation rules, admin usability, and system reliability.',
          'Led end-to-end implementation of Foodtale mobile features including discover/search feeds, review creation, deep links, shared restaurant tracking, and order confirmation — coordinating Flutter UI, API integration, and production fixes.',
          'Improved restaurant and content discovery by designing search ranking logic (relevance, engagement, recency) and paginated discover APIs used in live mobile feeds.',
          'Built and supported a UOB bank payment integration using ISO 20022 XML (outbound payment file generation and inbound response processing), including file exchange, encryption, audit logging, and webhook callback handling.',
          'Maintained and extended REST APIs across admin, identity, ordering, and management services — ensuring consistent validation, integrations, and service behaviour for web and mobile clients.',
          'Delivered a payment callback proxy to route third-party POST responses into mobile deep links, enabling reliable order confirmation after external payment events.',
          'Supported team release readiness by resolving Docker and GitHub Actions pipeline failures, keeping Flutter web and Laravel services buildable and deployable.',
          'Investigated and resolved cross-stack production issues during live user flows, spanning admin UI, mobile app, backend services, and database behaviour.'
        ]
      },
      {
        title: 'Web Developer (Part-Time)',
        date: 'October 2023 — December 2023',
        bullets: [
          'Built an event seating arrangement module for an RSVP web application using Vue.js and Laravel across frontend and backend layers.',
          'Integrated third-party npm libraries to deliver new UI features and streamline frontend development.',
          'Optimized application performance by resolving bottlenecks that affected responsiveness under load.'
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
          'Identified and fixed bugs in a web-based distribution management system, improving system stability and user experience.',
          'Provided L1–L3 technical support, troubleshooting application and system issues and coordinating timely resolution with stakeholders.'
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
        title: 'Consultant, Solution Development',
        date: 'July 2022 — February 2024',
        bullets: [
          'Designed and shipped full-stack features for data visualization software (GIANT) using .NET and Knockout.js.',
          'Partnered with cross-functional teams in an agile delivery setting to gather requirements and release production-ready solution increments.',
          'Built a forecasting module for construction project fee estimation, reducing manual effort and errors by 20%.',
          'Mentored interns through code reviews, technical guidance, and hands-on feature development support.'
        ]
      }
    ]
  }
]
