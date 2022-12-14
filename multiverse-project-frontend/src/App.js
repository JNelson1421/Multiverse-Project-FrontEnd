import './App.css';
import Home from './components/Home';
import Search from './components/Search';
import NavbarMain from './components/NavbarMain';
import View from './components/View';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <NavbarMain />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/view/:id' element={<View />} />
        </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
