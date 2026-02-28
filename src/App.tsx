import { useState } from "react";
import AboutContainer from "./components/about/AboutContainer";
import ContactContainer from "./components/Contact/ContactContainer";
import Header from "./components/header/Header";
import Home from "./components/Home/Home";
import Projects from "./components/projects/Projects";
import SkillContainer from "./components/skills/SkillContainer";
import SideBarContainer from "./components/sidebar/SideBarContainer";
import Footer from "./components/footer/Footer";

const App = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen scroll-smooth bg-linear-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
      {!open && <Header setOpen={() => setOpen(true)} />}
      {!open && <Home />}
      {!open && <AboutContainer />}
      {!open && <SkillContainer />}
      {!open && <Projects />}
      {!open && <ContactContainer />}
      {!open && <Footer />}
      {open && <SideBarContainer setOpen={() => setOpen(false)} />}
    </div>
  );
};

export default App;
