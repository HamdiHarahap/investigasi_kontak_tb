import { useAOS } from './hooks/useAOS'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Introduction from './components/sections/Introduction'
import Problems from './components/sections/Problems'
import Impacts from './components/sections/Impacts'
import Flow from './components/sections/Flow'
import DataGuide from './components/sections/DataGuide'
import Roles from './components/sections/Roles'
import Tips from './components/sections/Tips'
import Examples from './components/sections/Examples'
import Dashboard from './components/sections/Dashboard'
import Simulation from './components/sections/Simulation'
import Faq from './components/sections/Faq'
import Closing from './components/sections/Closing'
import Team from './components/sections/Team'

export default function App() {
  useAOS()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <Problems />
        <Impacts />
        <Flow />
        <DataGuide />
        <Roles />
        <Tips />
        <Examples />
        <Dashboard />
        <Simulation />
        <Faq />
        <Closing />
        <Team />
      </main>
      <Footer />
    </>
  )
}
