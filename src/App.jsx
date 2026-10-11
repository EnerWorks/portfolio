import Hero from './components/Hero'
import LanguageSwitcher from './components/LanguageSwitcher'

export default function App() {
  return (
    <>
      <header className="flex justify-end p-4">
        <LanguageSwitcher />
      </header>
      <Hero />
    </>
  )
}