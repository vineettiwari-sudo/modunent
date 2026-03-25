import Hero from "../components/Hero"
import ComponentShowcase from "../components/ComponentShowcase"
import ExploreCta from "../components/ExploreCta"
import TrustStats from "../components/TrustStats"
import PillRows from "../components/PillRows"
import LatestElements from "../components/LatestElements"

function Home() {
  return (
    <main>
      <Hero />
      <ComponentShowcase />
      <ExploreCta />
      <TrustStats />
      <PillRows />
      <LatestElements />
    </main>
  )
}

export default Home
