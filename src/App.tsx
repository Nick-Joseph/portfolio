import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import type { Project } from './types/Project'
import type { SkillGroup } from './components/Skills'
import type { ResumeEntry } from './components/Resume'
import './App.css'

/* =====================================================
   SITE CONTENT
   Everything you'd edit to update the site lives here.
   Change the text below and the page updates.
   ===================================================== */

const aboutParagraphs = [
  'I’m a software developer and front-end engineer based in Orlando, Florida, building responsive, accessible web applications with React and TypeScript.',
  'My experience spans front-end engineering, full-stack development, and QA automation across healthcare, fintech, and research platforms — turning Figma designs into production-ready interfaces and integrating the APIs that power them.',
]

const skillGroups: SkillGroup[] = [
  { category: 'Languages', items: ['TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3'] },
  { category: 'Front-End', items: ['React', 'Next.js', 'JSX', 'Responsive Design'] },
  { category: 'Back-End & APIs', items: ['Node.js', 'Express', 'REST APIs', 'Firebase', 'MongoDB', 'SQL', 'Plaid', 'Stripe'] },
  { category: 'QA & Testing', items: ['Playwright', 'Selenium', 'Cross-Browser', 'Regression', 'WCAG 2.1'] },
  { category: 'Tools', items: ['Git', 'GitHub', 'Figma', 'Postman', 'Jira', 'VS Code'] },
]

const myProjects: Project[] = [
  {
    id: 'financial-data-platform',
    title: 'Financial Data Integration Platform',
    description:
      'Secure financial data integrations using Plaid and Stripe — authentication flows, transaction dashboards, and account management.',
    tech: ['React', 'Node.js', 'Plaid', 'Stripe'],
  },
  {
    id: 'automated-testing-framework',
    title: 'Automated Testing Framework',
    description:
      'Reusable automated test suites for web applications that reduce manual regression effort and improve pre-release confidence.',
    tech: ['Playwright', 'TypeScript'],
  },
  {
    id: 'portfolio-site',
    title: 'Personal Portfolio',
    description:
      'This site — a responsive portfolio built from scratch with React 19, TypeScript, Vite, and a serverless backend.',
    tech: ['React', 'TypeScript', 'Vite', 'Express', 'Node.js'],
    repoUrl: 'https://github.com/Nick-Joseph/portfolio',
  },
]

const myEntries: ResumeEntry[] = [
  {
    id: 'esseva-frontend',
    role: 'Software Developer / Front-End Engineer',
    organization: 'Esseva Technologies',
    period: 'June 2025 – Present',
    description:
      'Build pixel-perfect, responsive React + TypeScript applications and reusable UI components, translating Figma into accessible, WCAG-compliant interfaces across healthcare and research platforms. Integrate REST APIs and use AI tools daily to accelerate delivery.',
  },
  {
    id: 'logride-flutter',
    role: 'Flutter Developer',
    organization: 'Logride',
    period: 'June 2024 – June 2025',
    description:
      'Designed, tested, and deployed features for enterprise-grade mobile applications. Authored and executed test cases, documented defects, and contributed to Agile sprint planning and release readiness.',
  },
  {
    id: 'savana-sdet',
    role: 'Software Development Engineer in Test (SDET)',
    organization: 'Savana',
    period: 'June 2023 – June 2024',
    description:
      'Developed and maintained automated test suites in Playwright and TypeScript for fintech and banking applications. Ran cross-browser, cross-device, and regression testing, and validated API integrations and transaction workflows in a regulated environment.',
  },
  {
    id: 'lunadev-developer',
    role: 'Software Developer',
    organization: 'LunaDev',
    period: 'May 2021 – June 2024',
    description:
      'Designed and developed client-facing web applications with React, JavaScript, HTML5, and CSS3 for startups and small businesses. Integrated APIs and backend services, and supported end-to-end testing, debugging, and deployment.',
  },
]

function App() {
  return (
    <>
      <Navbar />
      <Hero
        name="Nicholas Joseph"
        tagline="Software Developer & Front-End Engineer"
        available={true}
        businessUrl="https://essevatech.com/"
        businessLabel="Esseva Technologies"
      />
      <About headline="About me" paragraphs={aboutParagraphs} />
      <Skills headline="Skills" groups={skillGroups} />
      <Projects headline="Projects" projects={myProjects} />
      <Resume headline="Experience" entries={myEntries} resumeUrl="/resume.pdf" />
      <Contact />
    </>
  )
}

export default App
