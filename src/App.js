import styled from 'styled-components';
import About from './Components/About.tsx';
import Contact from './Components/Contact.tsx';
import Edu from './Components/Edu.tsx';
import Header from './Components/Header.tsx';
import Home from './Components/Home.tsx';
import Portfolio from './Components/Portfolio.tsx';
import MenuBar from './Components/MenuBar.tsx';



function App() {
  return (
    <>
      <MenuBar />
      <Header />
      <Home />
      <About />
      <Edu />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
