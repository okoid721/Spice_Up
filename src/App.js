import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import { Routes, Route, useLocation } from 'react-router-dom';
import Auth from './pages/Auth';
import Hero from './components/Hero';

function App() {
  const location = useLocation();
  const isAuthRoute =
    location.pathname.startsWith('/auth') || location.pathname === '/';

  return (
    <div className="">
      {!isAuthRoute && <Nav />} {/* Render Nav only if not on auth route */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/home/*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
