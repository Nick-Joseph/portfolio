import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import type { Project } from './types/Project'
import './App.css'

const myProjects: Project[] = [
  {
    id: 'portfolio-site',
    title: 'Personal Portfolio',
    description:
      'This site — built from scratch with React 19, TypeScript, Vite, and an Express backend.',
    tech: ['React', 'TypeScript', 'Vite', 'Express', 'Node.js'],
    repoUrl: 'https://github.com/yourname/portfolio-frontend',
  },
]

const myEntries = [
  {
    id: 'self-study',
    role: 'Self-directed Software Development Study',
    organization: 'Independent',
    period: '2026 – present',
    description:
      'Building a full-stack portfolio with React, TypeScript, Vite, and Express. Learning by shipping.',
  },
  {
    id: 'finance-role',
    role: 'Finance — past role',
    organization: 'Replace with your real employer',
    period: '2020 – 2025',
    description:
      'Replace with one or two sentences describing what you did. Quantify if you can.',
  },
]

function App() {
  return (
    <>
      <Navbar />
      <Hero name="Nicholas Joseph" tagline="FullStack Developer in training" />
      <About
        headline="About me"
        paragraphs={['Hello, I’m a software developer from Orlando, Florida.']}
      />
      <Projects headline="Projects" projects={myProjects} />
      <Resume headline="Experience" entries={myEntries} />
      <Contact />
    </>
  )
}

export default App