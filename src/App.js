import './App.css';
import About from './routes/About';
import Home from './routes/Home';
import Service from './routes/Service';
import Contact from './routes/Contact';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/"element={<Home/>} />
          <Route path="/about"element={<About/>} />
          <Route path="/service"element={<Service/>} />
          <Route path="/contact"element={<Contact/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
