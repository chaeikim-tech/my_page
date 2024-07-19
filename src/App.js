import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';
import Header from './Components/Header.jsx';
import Home from './Components/Home.jsx';
import MySkill from './Components/MySkill.jsx';
import Portfolio from './Components/Portfolio.jsx';
import ScrollToTop from './Components/ScrollToTop.jsx';
import Title from './Components/Title.jsx';

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Home />
      <Title title='Career' />
      <About />
      <Title title='My Skill' />
      <MySkill />
      <Title title='Portfolio' />
      <Portfolio />
      <Title title='Contact Me' />
      <Contact />
    </>
  );
}

export default App;
