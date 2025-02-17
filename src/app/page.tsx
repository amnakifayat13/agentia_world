
import MovingDots from "./components/dotedBg";
import Features from "./components/features";
import Technology from "./components/technology";
import Agents from "./components/agents";
import Pricing from "./components/pricing";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <MovingDots/>
      <Features/> 
      <Technology/>
      <Agents/>
      <Pricing/>
      <Contact/>
      <Footer/>
    </div>
  );
}
