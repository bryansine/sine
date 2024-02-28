import { BgGrid } from "./components/app/bg-grid";
import Footer from "./components/app/footer";
import Navbar from "./components/app/navbar";
import CaseStudies from "./pages/case-studies";
import Contact from "./pages/contact";
import Home from "./pages/home";

function App() {

  return (
    <BgGrid>
      <div className="w-full flex justify-center px-4">
        <div className="font-inter w-full max-w-[1400px] border relative">
          <Navbar />
          <Home />
          <CaseStudies />
          <Contact />
          <Footer />
        </div>
      </div>
    </BgGrid>
  )
}

export default App;