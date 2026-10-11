import Hero from './components/Hero'
import Projects from './components/Projects'
import LanguageSwitcher from './components/LanguageSwitcher'

export default function App() {
  return (
    <>
      <header className="mx-auto flex max-w-2xl justify-end px-4 pt-4">
        <LanguageSwitcher />
      </header>
      <Hero />
      <Projects />
    </>
  )
}