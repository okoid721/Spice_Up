import SignUp from '../components/signup/SignUp';
import Login from '../components/Login/Login';
import { Routes, Route } from 'react-router-dom';

const Auth = () => {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Auth;
