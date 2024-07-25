import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Home/Navbar';
import Footer from './pages/Footer';
import ScrollTop from './pages/ScrollTop';


function App() {
  return (
    <>
    <ScrollTop/>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  );
}

export default App;
