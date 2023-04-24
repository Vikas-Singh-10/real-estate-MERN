import "./App.css";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Pages from "./components/pages/Pages";
import Signup from "./components/signup/index";
import Login from "./components/login/index";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Blog from "./components/blog/Blog";
import Pricing from "./components/pricing/Pricing";
import Contact from "./components/contact/Contact";


function App() {
  const user = localStorage.getItem("token");

  return (

      <BrowserRouter>
         <Routes>
        {user && (
         <Route path='/' element={<Home />} />
         || <Route path='/about' element={<About/>} />
         || <Route path='/services' element={<Services/>} />
         || <Route path='/blog' element={<Blog/>} />
         || <Route path='/pricing' element={<Pricing/>} />
         || <Route path='/contact' element={<Contact/>} />)}
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/pricing' element={<Pricing/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>     
      </BrowserRouter>
    
  );
}

export default App;
