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
  'I’m a full-stack and mobile developer based in Orlando, Florida, with several years of experience shipping production applications.',
  'My focus is building polished, reliable mobile apps with Flutter and Dart, backed by web technologies like React, TypeScript, and Node.js. I’ve also worked as an SDET writing automated test suites for banking systems, so I care as much about software that works correctly as software that ships.',
]

const skillGroups: SkillGroup[] = [
  { category: 'Languages', items: ['TypeScript', 'JavaScript', 'Dart', 'HTML', 'CSS'] },
  { category: 'Mobile', items: ['Flutter', 'Android'] },
  { category: 'Frontend', items: ['React', 'Vite'] },
  { category: 'Backend', items: ['Node.js', 'Express'] },
  { category: 'Testing', items: ['Automated testing', 'SDET'] },
  { category: 'Tools', items: ['Git', 'GitHub', 'VS Code'] },
]

const myProjects: Project[] = [
  {
    id: 'portfolio-site',
    title: 'Personal Portfolio',
    description:
      'This site — built from scratch with React 19, TypeScript, Vite, and a serverless backend.',
    tech: ['React', 'TypeScript', 'Vite', 'Express', 'Node.js'],
    repoUrl: 'https://github.com/Nick-Joseph/portfolio',
  },
]

const myEntries: ResumeEntry[] = [
  {
    id: 'logride-flutter',
    role: 'Flutter Developer',
    organization: 'LogRide',
    period: '2025 – 2026',
    description:
      'Developed and maintained the Android application using Flutter and Dart.',
  },
  {
    id: 'savana-sdet',
    role: 'Flutter SDET',
    organization: 'Savana',
    period: '2024 – 2025',
    description:
      'Built automated testing suites for internal banking systems and processes.',
  },
  {
    id: 'lunadev-developer',
    role: 'Software Developer',
    organization: 'LunaDev',
    period: '2020 – 2024',
    description:
      'Full-stack mobile developer building applications for Orlando-based companies.',
  },
]

function App() {
  return (
    <>
      <Navbar />
      <Hero
        name="Nicholas Joseph"
        tagline="Full-Stack & Mobile Developer"
        available={true}
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
