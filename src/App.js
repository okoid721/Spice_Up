import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/auth/*" element={<Auth />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
