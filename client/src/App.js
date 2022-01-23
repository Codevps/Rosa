import "./style/Phone.css";
import "./style/Pc.css";
import Hero from "./components/Hero.js";
import Navbar from "./components/Navbar.js";
import Story from "./components/Story.js";
import Menu from "./components/Menu.js";
import Reservations from "./components/Reservations.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Story />
      <Menu />
      <Reservations />
      <Footer />
    </div>
  );
}

export default App;
