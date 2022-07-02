import './App.css';
import './bgIcon.css';
import Navbar from './components/Layout/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Wrapper from './components/Layout/Wrapper';

const App = () => {
  return (
    <>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Wrapper>
    </>
  );
};

export default App;
