import React from 'react';

const SignUp = () => {
  const [data, setData] = React.useState({
    fullName: '',
    userName: '',
    email: '',
    password: '',
  });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="signup_con">
      <div className="sign-form_con">
        <div className="left">
          <h1>Sign Up</h1>
        </div>
        <div className="right">
          <form className="form-con" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="FullName"
              name="fullName"
              onChange={handleChange}
              value={data.fullName}
              required
              className="input"
            />
            <input
              type="text"
              placeholder="UserName"
              name="userName"
              onChange={handleChange}
              value={data.userName}
              required
              className="input"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className="input"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className="input"
            />
            <button type="submit" className="green-btn">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
