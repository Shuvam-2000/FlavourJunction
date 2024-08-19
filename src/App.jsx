import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Home from './components/Home';
import AboutUS from './components/AboutUS';
import ExploreMore from './components/ExploreMore';
import SignIn from './components/SignIn';
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/aboutus' element={<AboutUS />} />
        <Route path='/exploremore' element={<ExploreMore />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;


