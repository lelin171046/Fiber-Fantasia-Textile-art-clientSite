import { Button, Input, InputGroup, InputRightElement, Show } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogIn from './SocialLogIn';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hook/useAuth';
import toast from 'react-hot-toast';

const LogIn = () => {


  const navigate = useNavigate();
  const location = useLocation();
  
  const from = location?.state || "/";

  const [show, setShow] = React.useState(false)
  const { user, signInUser } = useAuth()
  const handleClick = () => setShow(!show)
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    const { email, password } = data;
    signInUser(email, password)
      .then((result) => {
        if (result.user) {
          navigate(from)
          return toast.success('Login Successfull')
        }
      })
      .catch(error => {
        // toast.error(error.message);
        alert(error?.message)
        console.log(error?.message);
      })
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className='pt-5 pl-3'>If you are new? Please <Link className='text-pink-400 font-semibold' to={'/signup'}>Sign Up</Link></p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <InputGroup size='md'>
                <Input
                  pr='4.5rem'
                  type={show ? 'text' : 'password'}
                  placeholder='Enter password'
                  {...register("password", {
                    pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i
                  })}
                />
                <InputRightElement width='4.5rem'>
                  <Button h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
              {errors.password && <span className="text-red-500 text-sm">Password must include at least one letter, one number, and one special character, and be at least 8 characters long.</span>}

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <SocialLogIn></SocialLogIn>
        </div>
      </div>
    </div>
  );
};

export default LogIn;