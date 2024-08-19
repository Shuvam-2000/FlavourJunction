import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from "./components/Header";
import Home from './components/Home';
import AboutUS from './components/AboutUS';
import ExploreMore from './components/ExploreMore';
import SignIn from './components/SignIn';
import Footer from "./components/Footer";
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1)
  }

  return (
    <BrowserRouter>
      <Header count={count} />
      <Routes>
        <Route path='/' element={<Home handleAdd={handleAdd}/>} />
        <Route path='/aboutus' element={<AboutUS />} />
        <Route path='/exploremore' element={<ExploreMore />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;


