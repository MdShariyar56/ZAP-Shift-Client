import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import { Link } from "react-router";
import Sociallogin from "../SocialLogin/Sociallogin";

const Registe = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {registerUser} = useAuth();

  const handleRegisteration = (data) => {
      console.log("after register", data);
      registerUser(data.email, data.password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
            })
  };
  return (
    <div  className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <h3 className='text-3xl text-center'>Welcome Zap Shift</h3>
          <p className='text-center'>Please Register</p>
      <form className="card-body" onSubmit={handleSubmit(handleRegisteration)}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Email is required</p>
          )}

          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
            })}
            className="input"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500">Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">
              Password must be 6 characters or longer{" "}
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-500">
              Password must include uppercase, lowercase & a number
            </p>
          )}

          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
         <p>Already have an account <Link className="text-blue-400" to="/login">Login</Link> </p>
      </form>
      <Sociallogin></Sociallogin>
    </div>
  );
};

export default Registe;
