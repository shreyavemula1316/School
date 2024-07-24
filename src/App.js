import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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
