import {Navbar} from "../components/layout/Navbar"
import {HomeContent} from "../components/layout/HomeContent"
import {Footer} from "../components/layout/Footer"

export function HomePages() {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="pt-18">
        
        <HomeContent />
      </div>
      <Footer />
    </div>
  );
}
