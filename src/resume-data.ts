import YektanetLogo from '@/assets/yektanet-logo.png';
import PheebsLogo from '@/assets/pheebs-logo.jpeg';
import UTLogo from '@/assets/university-of-tehran.jpeg';
import SFULogo from '@/assets/sfu-logo-square.png';
import AuperaLogo from '@/assets/aupera-logo.png';
import SchemaIranLogo from '@/assets/schemairan-logo.jpg';
import type { WorkExperienceModel, EducationModel } from '@/models/experience';

export const WORK_EXPERIENCES: WorkExperienceModel[] = [
  {
    icon: AuperaLogo,
    company: 'Aupera Technologies Inc.',
    country: 'Vancouver, CA',
    type: 'full-time',
    positions: [
      {
        title: 'Software Team Lead',
        start: { month: '06', year: '2024' },
        end: { month: '09', year: '2024' },
        desc: `
<ul>
  <li>Led a team of 5 in building an AI-powered NVR software capable of real-time detection and natural language video search from the ground up to a sellable state in 4 months</li>
  <li>Drove the architectural planning of key features such as Licensing, real-time notification, and integration of vector databases</li>
  <li>Streamlined development by prioritizing tasks, reviewing 100+ PRs, and implementing automations to enhance team efficiency</li>
</ul>`,
      },
      {
        title: 'Software Engineer',
        start: { month: '03', year: '2023' },
        end: { month: '06', year: '2024' },
        desc: `
<ul>
  <li>Architected and implemented the data flow of an on-premise MLOps solution to streamline and automate continuous data collection, model retraining, and model deployment of a license plate recognition service</li>
  <li>Designed and maintained a self-hosted CI/CD pipeline (GitHub Actions), fully automating testing of video streaming framework</li>
  <li>Led the backend development of Video Streaming AI framework including IdP, MongoDB, RTSP video streams, 3rd party integrations, docker-compose deployment, and event based notification systems</li>
  <li>Guided customers with technical support and documentations for testing and deployment of the MLOps solution</li>
</ul>`,
      },
    ],
  },
  {
    icon: SchemaIranLogo,
    company: 'SchemaIran Schematherapy Center',
    country: 'Remote',
    type: 'Contract Job',
    hideInResume: true,
    positions: [
      {
        title: 'Software Developer',
        start: { month: '09', year: '2021' },
        end: { month: '03', year: '2022' },
        desc: `
<ul>
  <li>Developed a Telegram bot for Schemairan clinic to conduct YSQ tests online. Collected and Analyzed 10k+ test results</li>
</ul>`,
      },
    ],
  },
  {
    icon: SFULogo,
    company: 'CSIL - SFU',
    country: 'Canada',
    type: 'Contract Job',
    hideInResume: true,
    positions: [
      {
        title: 'Software Developer',
        start: { month: '06', year: '2021' },
        end: { month: '09', year: '2021' },
        desc: `
<ul>
  <li>Revamped Web server and client of CSIL in-lab test scheduling automation using JS and PostgreSQL</li>
</ul>`,
      },
    ],
  },
  {
    icon: YektanetLogo,
    company: 'Yektanet - Digital Advertising Platform',
    country: 'Iran',
    type: 'full-time',
    positions: [
      {
        title: 'Intermediate Software Engineer',
        start: { month: '12', year: '2019' },
        end: { month: '12', year: '2020' },
        // <p>After working at Tapsell for approximately 5 years, I leveraged my experience to establish and streamline processes, document tacit knowledge, develop developer handbooks, and implement a unified internal chat platform for the entire enterprise, spanning all products and teams across all Tapsell offices.</p>
        desc: `
<ul>
  <li>Scaled and refactored a legacy push notification service from 5M to 100M daily pushes, driving 15x revenue growth in 1 year</li>
  <li>Optimized large-scale PostgreSQL and Redis databases (40M+ users), reducing critical query times by 80%</li>
  <li>Built log management pipelines using ELK stack (Elasticsearch, Logstash, Kibana) which cut debugging time in half</li>
  <li>Interviewed 5 candidates, coached 3 interns, reviewed 50+ resumes and 50+ technical tasks</li>
</ul>`,
      },
    ],
  },
  {
    icon: PheebsLogo,
    company: 'Pheebs - Entertainment Mobile Apps',
    country: 'Iran',
    type: 'part-time',
    // hideInResume: true,
    positions: [
      {
        title: 'Full-Stack Developer',
        start: { month: '09', year: '2017' },
        end: { month: '12', year: '2019' },
        desc: `
        <ul>
        <li>Led backend development for two mobile apps, built from scratch with GraphQL, Node.js, MongoDB, Docker, Nginx, and Redis</li>
        </ul>`,
      },
    ],
  },
];


export const EDUCATION_EXPERIENCES: EducationModel[] = [
  {
    icon: SFULogo,
    name: 'Simon Fraser University',
    country: 'Canada',
    degree: "Thesis Based Master's Degree",
    start: { month: '09', year: '2020' },
    end: { month: '05', year: '2023' },
    desc: `
<ul>
  <li>Published "Code Coverage Criteria for Asynchronous Programs"; Mohammad Ganji, Saba Alimadadi, Frank Tip (ESEC/FSE’23)</li>
</ul>`,
    // hideInResume: true,
  },
  {
    icon: UTLogo,
    name: 'University of Tehran',
    country: 'Iran',
    degree: "Bachelor's Degree",
    start: { month: '09', year: '2015' },
    end: { month: '01', year: '2020' },
    desc: ``,
    // hideInResume: true,
  },
]