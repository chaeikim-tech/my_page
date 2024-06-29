import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';
import Header from './Components/Header.jsx';
import Home from './Components/Home.jsx';
import Portfolio from './Components/Portfolio.jsx';
import ScrollToTop from './Components/ScrollToTop.jsx';
import MenuBar from './Components/MenuBar.jsx';
import Title from './Components/Title.jsx';
import Slider from './Components/Slider.jsx';


function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      {/* <MenuBar /> */}
      <Home />
      <Title title='Career' />
      <About />
      <Title title='Portfolio' />
      {/* <Portfolio /> */}
      <Slider />
      <Title title='Contact Me' />
      <Contact />
    </>
  );
}

export default App;
