import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Home from './components/Home';
import AboutUS from './components/AboutUS';
import ExploreMore from './components/ExploreMore';
import SignIn from './components/SignIn';
import Footer from "./components/Footer";
import ScrollOnTop from './components/ScrollOnTop';
import CartPage from './components/CartPage';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollOnTop />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<AboutUS />} />
          <Route path='/exploremore' element={<ExploreMore />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/cartpage' element={<CartPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;


