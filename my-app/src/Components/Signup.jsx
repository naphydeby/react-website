import { useEffect, useState } from "react";
import Validation from "./Validation";
import student from '../assets/images/student-7.png'

 function Signup() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    date: "",
    email: "",
    phonenumber: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const handleClick = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(form));
    if (Object.keys(Validation(form)).length === 0) {
      alert("form successfully submited")
      console.log(form);
    }
  };

  return (
    <>
      <div className="w-full pt-20">
        <div className=" flex flex-col lg:flex-row mt-2">
          <div
            className="animate-pulse mt-2 bg-gray-500 w-full lg:w-[45vw] lg:h-[500px] py-8  rounded-2xl shadow-lg shadow-gray-600 lg:ml-10 hidden lg:block "
          >
            <img src={student}  />
            <p className="text-white text-center mt-4 text-1xl lg:text-2xl font-bold ">
              WELCOME TO HOLY TRINITY COLLEGE
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-2 bg-gray-200 w-full lg:w-[45vw] h-fit py-2 px-8 lg:px- rounded-2xl shadow-lg shadow-gray-100 lg:ml-4"
          >
            <p
              className=" text-gray-600  lg:ml-[150px] text-4xl"
              style={{ textShadow: "0 2px 6px gray" }}
            >
              REGISTER
            </p>
            <div>
              <input
                className="bg-gray-600 text-white w-[90vw] lg:w-[40vw] h-[40px] py-2 px-4 rounded-2xl shadow-lg shadow-gray-500 focus:outline-none mt-2"
                type="text"
                placeholder=" Firstname:"
                name="firstname"
                value={form.firstname}
                onChange={handleClick}
              />
              <br />
              {errors.firstname && (
                <span className={`text-red-500`}>{errors.firstname}</span>
              )}
            </div>
            <div className="w-[50vw]">
              <input
                className="bg-gray-600 text-white w-[90vw] lg:w-[40vw] h-[40px] py-2 px-4 rounded-2xl  shadow-lg shadow-gray-500 focus:outline-none mt-2"
                type="text"
                placeholder=" Lastname:"
                name="lastname"
                value={form.lastname}
                onChange={handleClick}
              />
              <br />

              {errors.lastname && (
                <span className={`text-red-500`}>{errors.lastname}</span>
              )}
            </div>
            <div>
              <input
                className="bg-gray-600 text-white w-[90vw] lg:w-[40vw] h-[40px] py-2 px-4 rounded-2xl shadow-lg shadow-gray-500 focus:outline-none mt-2"
                type="date"
                name="date"
                value={form.date}
                onChange={handleClick}
              />
              <br />

              {errors.date && (
                <span className={`text-red-500`}>{errors.date}</span>
              )}
            </div>
            <div>
              <input
                className="bg-gray-600 text-white w-[90vw] lg:w-[40vw] h-[40px] py-2 px-4 rounded-2xl shadow-lg shadow-gray-500 focus:outline-none mt-2"
                type="email"
                placeholder=" Email Address:"
                name="email"
                value={form.email}
                onChange={handleClick}
              />
              <br />
              {errors.email && (
                <span className={`text-red-500`}>{errors.email}</span>
              )}
            </div>
            <div>
              <input
                className="bg-gray-600 text-white w-[90vw] lg:w-[40vw] h-[40px] py-2 px-4 rounded-2xl shadow-lg shadow-gray-500 focus:outline-none mt-2"
                type="tel"
                placeholder=" Phonenumber:"
                name="phonenumber"
                value={form.phonenumber}
                onChange={handleClick}
              />
              <br />
              {errors.phonenumber && (
                <span className={`text-red-500`}>{errors.phonenumber}</span>
              )}
            </div>
            <div>
              <input
                className="bg-gray-600 text-white w-[90vw] lg:w-[40vw] h-[40px] py-2 px-4 rounded-2xl shadow-lg shadow-gray-500 focus:outline-none mt-2"
                type="password"
                placeholder=" Password:"
                name="password"
                value={form.password}
                onChange={handleClick}
              />
              <br />
              {errors.password && (
                <span className={`text-red-500`}>{errors.password}</span>
              )}
            </div>
            <div>
              <input
                className="bg-gray-600 text-white w-[90vw] lg:w-[40vw] h-[40px] py-2 px-4 rounded-2xl shadow-lg shadow-gray-500 focus:outline-none mt-2"
                type="password"
                placeholder="Confirm  password:"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleClick}
              />
              <br />
              {errors.confirmPassword && (
                <span className={`text-red-500`}>{errors.confirmPassword}</span>
              )}
            </div>
            <div className="flex ml-4 mt-2`">
              <input type="checkbox" name="checked" defaultChecked />

              <p className="ml-2">
                I agree to <a href="#">terms & coditions</a>
              </p>
            </div>

            <button
              className="bg-gray-600 text-white w-[80vw] lg:w-[30vw] h-[40px] ml-10 py-2 px-2 rounded-2xl shadow-lg shadow-gray-500 focus:outline-none mt-2"
              type="submit"
            >
              Sign up
            </button>
            <p className="text-gray-600 ml-16 mt-2">
              Already have an account?
              <a href="" className="text-blue-600">
                Sign in
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
export default Signup;