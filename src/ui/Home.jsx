import About from "../features/about/About";
import Education from "../features/education/Education";
import Hero from "../features/hero/Hero";
import Skills from "../features/skills/Skills";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Education />
      <Skills />
    </main>
  );
};

export default Home;
