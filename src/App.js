import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Auth from './pages/Auth';

function App() {
  const location = useLocation();
  const isAuthRoute = location.pathname.startsWith('/auth');

  // Redirect to the login page if the user is not authenticated
  const isAuthenticated = false; // Replace this with your authentication logic
  if (!isAuthenticated && !isAuthRoute) {
    return <Navigate to="/auth/login" replace />;
  }

  return (
    <div className="App">
      {!isAuthRoute && <Nav />} {/* Render Nav only if not on auth route */}
      <Routes>
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
