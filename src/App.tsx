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
  'Hey, I’m a software developer based in Orlando, Florida.',
  'Anything you need to build I can do!',
]

const skillGroups: SkillGroup[] = [
  { category: 'Languages', items: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'Dart', 'Flutter'] },
  { category: 'Frontend', items: ['React', 'Vite'] },
  { category: 'Backend', items: ['Node.js', 'Express'] },
  { category: 'Tools', items: ['Git', 'GitHub', 'VS Code'] },
]

const myProjects: Project[] = [
  {
    id: 'portfolio-site',
    title: 'Personal Portfolio',
    description:
      'This site — built from scratch with React 19, TypeScript, Vite, and an Express backend.',
    tech: ['React', 'TypeScript', 'Vite', 'Express', 'Node.js'],
    repoUrl: 'https://github.com/Nick-Joseph',
  },
]

const myEntries: ResumeEntry[] = [
  // One experience entry — repeat the object for each job:
  {
    id: 'flutterdeveloper-role',        // any unique string, e.g. 'acme-2022'
    role: 'Flutter Developer',
    organization: 'Logride',
    period: '2025 – 2026',
    description: 'Flutter developer for the android application in logride',

  },
  {
    id: 'savana-role',
    role: 'Flutter SDET',
    organization: 'Savana',
    period: '2024 – 2025',
    description:
      'Creating automated testing suites for inner banking systems and processes',
  },
  {
    id: 'consulting-role',
    role: ' Software Developer',
    organization: 'LunaDev',
    period: '2020 – 2024',
    description:
      'Full Stack mobile developer creating applications for Orlando based companies.',
  },
]

function App() {
  return (
    <>
      <Navbar />
      <Hero
        name="Nicholas Joseph"
        tagline="Full-Stack Developer"
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
