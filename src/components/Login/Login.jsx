import React from 'react';
import axios from 'axios';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  const [data, setData] = React.useState({
    email: '',
    password: '',
  });

  const [error, setError] = React.useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = 'https://recipe-bakend.onrender.com/api/auth/login';
      const { data: res } = await axios.post(url, data);
      navigate('/', { replace: true, state: { from: location } });
      console.log('Successfully signed up!', res);
      toast.success('Welcome to Spice up');
    } catch (err) {
      if (
        err.response.status &&
        err.response.status >= 400 &&
        err.response.status <= 500
      ) {
        setError(err.response.data.message);
        toast.error(err.response.data.message);
      }
    }
  };
  return (
    <div className=" w-full min-h-screen bg-[#f5f5f5] flex items-center justify-center ">
      <div className="  lg:h-[500px] h-screen lg:flex-row flex-col    flex rounded-[10px] items-center just shadow-xl ">
        <div className="login  "></div>
        <div className="flex flex-col h-full items-center justify-center bg-white p-8 ">
          <form
            className="flex flex-col items-center  "
            onSubmit={handleSubmit}
          >
            <h1 className="text-3xl mt-0">Login</h1>

            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className="outline-0 border-0 w-[370px] p-[15px] rounded-[10px] bg-[#edf5f3] my-[5px] mx-0 text-2xl "
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className="outline-0 border-0 w-[370px] p-[15px] rounded-[10px] bg-[#edf5f3] my-[5px] mx-0 text-2xl "
            />
            {error && (
              <div className=" w-[370px] p-[15px] my-[5px] mx-0 text-2xl bg-[#f34646] text-white rounded-[5px] items-center ">
                {error}
              </div>
            )}
            <button
              type="submit"
              className="bg-[#3bb19b] text-white m-[10px] py-4 px-16 rounded-[10px] font-bold"
            >
              Login
            </button>
            <div className=" hover:underline font-bold ">
              <a href="/auth/signup">Don't Have An Account ? Join Here</a>
            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
