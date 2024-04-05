import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Auth from './pages/Auth';

function App() {
  const location = useLocation();
  const isAuthRoute = location.pathname.startsWith('/auth');

  return (
    <div className=" overflow-x-hidden">
      {!isAuthRoute && <Nav />} {/* Render Nav only if not on auth route */}
      <Routes>
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
