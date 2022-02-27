
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import Admin from './Admin'
import Contact from './Contact';

import Inscription from './Inscription';
import About from './About';
import NotFound from './NotFound'


function App() {
  return (
    <div className="App">
      <BrowserRouter >

        <Routes >



          <Route path="/admin"
            element={<Admin />}
          />
          <Route path="/"
            element={<Home />} />








          <Route path="/Inscription"
            element={<Inscription />}
          />



          <Route path="/Contact"
            element={< Contact />}
          />

          <Route path="/About"
            element={<About />}
          />

          <Route element={< NotFound />} />

        </Routes >
      </BrowserRouter>




      <footer class="page-footer">
        <p>&copy; <span id="date">2022</span>
          <span class="footer-logo">HannaBel</span>
          build by <a href="https://www.facebook.com/safa.hasanaoui.9">safa</a>


        </p>
      </footer>

    </div>
  );
}

export default App;
