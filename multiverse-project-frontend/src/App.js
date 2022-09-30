import './App.css';
import Home from './components/Home';
import Search from './components/Search';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/search' element={<Search />} />
        </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
