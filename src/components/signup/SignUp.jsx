import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const SignUp = () => {
  const [data, setData] = React.useState({
    fullName: '',
    userName: '',
    email: '',
    password: '',
  });

  const [error, setError] = React.useState('');
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = 'https://recipe-bakend.onrender.com/api/users/signup';
      const { data: res } = await axios.post(url, data);
      navigate('/auth/login');
      console.log('Successfully signed up!', res);
      toast.success('Welcome to Spice up');
    } catch (err) {
      if (
        err.response &&
        err.response.status >= 400 &&
        err.response.status <= 500
      ) {
        setError(err.response.data.message);
        toast.error('FILL ALL DATA');
      } else {
        // Handle other types of errors here
        console.error('An error occurred:', err);
        toast.error('An error occurred. Please try again later.');
      }
    }
  };
  return (
    <div className=" w-full min-h-screen bg-[#f5f5f5] flex items-center justify-center ">
      <div className="  lg:h-[500px] h-screen flex rounded-[10px] items-center just shadow-xl ">
        <div className="signup hidden lg:block"></div>
        <div className="flex flex-col h-full items-center justify-center bg-white p-8 ">
          <form className="flex flex-col items-center" onSubmit={handleSubmit}>
            <h1 className="text-3xl mt-0">Sign Up</h1>
            <input
              type="text"
              placeholder="FullName"
              name="fullName"
              onChange={handleChange}
              value={data.fullName}
              required
              className="outline-0 border-0 w-[370px] p-[15px] rounded-[10px] bg-[#edf5f3] my-[5px] mx-0 text-2xl "
            />
            <input
              type="text"
              placeholder="UserName"
              name="userName"
              onChange={handleChange}
              value={data.userName}
              required
              className="outline-0 border-0 w-[370px] p-[15px] rounded-[10px] bg-[#edf5f3] my-[5px] mx-0 text-2xl "
            />
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
              <div className=" w-[370px] p-[15px] my-[5px] mx-0 text-[10px] bg-[#f34646] text-white rounded-[5px] items-center ">
                {error}
              </div>
            )}
            <button
              type="submit"
              className="bg-[#3bb19b] text-white m-[10px] py-4 px-16 rounded-[10px] font-bold"
            >
              Sign Up
            </button>
            <div className=" hover:underline hover:text-blue-500 ">
              <a href="/auth/login"> Already Have An Account ? Login Here</a>
            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default SignUp;
