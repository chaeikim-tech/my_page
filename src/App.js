<<<<<<< HEAD
import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';
import Header from './Components/Header.jsx';
import Home from './Components/Home.jsx';
import Portfolio from './Components/Portfolio.jsx';
import ScrollToTop from './Components/ScrollToTop.jsx';
import Navbar from './Components/Nav/Navbar.jsx';

function App() {

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
=======
import styled from 'styled-components';
import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';
import Header from './Components/Header.jsx';
import Home from './Components/Home.jsx';
import Portfolio from './Components/Portfolio.jsx';
import MenuBar from './Components/MenuBar.jsx';
import ScrollToTop from './Components/ScrollToTop.jsx';


function App() {
  return (
    <>
      <ScrollToTop />
      <MenuBar />
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
>>>>>>> parent of 106178b (Add Menu onclickevent)
