import React from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Main from './layout/main/Main';
import About from './layout/about/About';
import Navigation from './components/navigation/Navigation';
import Blog from './layout/blog/Blog';
import Footer from './components/footer/Footer';
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
              <Routes>
                  <Route path = "/" element = {<Main/>}></Route>
                  <Route path = "/api/about" element = {<About/>}></Route>
                  <Route path = "/api/blog" element = {<Blog/>}></Route>
              </Routes>
          <Footer/> 
    </BrowserRouter>
  );
}

export default App;
