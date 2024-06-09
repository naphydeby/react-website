import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Signup from "./Components/Signup";
import ErrorPage from "./Components/ErrorPage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='contact' element={<Contact />}></Route>
        <Route path='signup' element={<Signup />}></Route>
        <Route path='/*' element={<ErrorPage />}></Route>
      </Routes>
      <Footer />
    </>
  );
}
export default App;
