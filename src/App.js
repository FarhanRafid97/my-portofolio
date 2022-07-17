import { Route, Routes } from 'react-router-dom';
import './App.css';

import About from './components/About/About';
import Home from './components/Home/Home';
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
