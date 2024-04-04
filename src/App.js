import './App.css';
import Nav from './components/Nav';
import LandingPage from './pages/LandingPage';
import Pages from './pages/Pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/auth/*" element={<Auth />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Pages />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
