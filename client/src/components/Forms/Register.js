import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../context/AuthContext/AuthContext";

const Register = () => {
  const { registerUserAction, error } = useContext(authContext)
  //form data
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  //Destructure
  const { fullname, email, password } = formData;
  const [errors, setErrors] = useState({})
  //onChange
  const onChangeInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //Handle submit
  const onSubmitHandler = (e) => {
    e.preventDefault();


    registerUserAction(formData);
    const validationErrors = {}
    if (!formData.fullname.trim()) {
      validationErrors.fullname = 'Name is required'
    } else if (!/^[a-zA-Z]+(-_ [a-zA-Z]+)*/.test(formData.fullname)) {
      validationErrors.fullname = 'Full Name is not valid'
    }
    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required'
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
      validationErrors.email = 'Email is not valid'

    }
    if (!formData.password.trim()) {
      validationErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      validationErrors.password = 'Password should be at least 6 characters'
    }
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully")
    }
  };

  return (
    <>
      <section className="py-24 md:py-32 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-sm mx-auto">
            <div className="mb-6 text-center">
              <h3 className="mb-4 text-2xl md:text-3xl font-bold">
                Register for an account
              </h3>
            </div>
            <form onSubmit={onSubmitHandler}>
              <div className="mb-6">
                <label
                  className="block mb-2 text-coolGray-800 font-medium"
                  htmlFor
                >
                  Email
                </label>
                <input
                  value={email}
                  onChange={onChangeInput}
                  name="email"
                  className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-sm placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  type="email"
                  placeholder="shah@gmail.com"
                />
                {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
              </div>
              <div className="mb-6">
                <label
                  className="block mb-2 text-coolGray-800 font-medium"
                  htmlFor
                >
                  Full Name
                </label>
                <input
                  value={fullname}
                  onChange={onChangeInput}
                  name="fullname"
                  className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-sm placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  type="text"
                  placeholder="Shah Vansh"
                />
                {errors.fullname && <span style={{ color: 'red' }}>{errors.fullname}</span>}
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-coolGray-800 font-medium"
                  htmlFor
                >
                  Password
                </label>
                <input
                  value={password}
                  onChange={onChangeInput}
                  name="password"
                  className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-sm placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  type="password"
                  placeholder="************"
                />
                {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
              </div>
              <div className="flex flex-wrap items-center justify-between mb-6"></div>
              <button
                className="inline-block py-3 px-7 mb-6 w-full text-base text-green-50 font-medium text-center leading-6 bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm"
                type="submit"
              >
                Register
              </button>
              <p className="text-center">
                <span className="text-xs font-medium">
                  Already have an account?
                  <Link to="/login" className="inline-block text-xs font-medium text-green-500 hover:text-green-600 hover:underline">
                    &nbsp;Sign in
                  </Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
