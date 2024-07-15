import { Button, Input, InputGroup, InputRightElement, Toast } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { AuthContent } from '../../FireBase/FirebaseProvider';
import { useForm } from 'react-hook-form';
import { updateProfile as firebaseUpdateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
// Assuming you are using react-toastify for notifications

const SignUp = () => {

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const { createUser } = useContext(AuthContent);
  const navigate = useNavigate();

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = data => {
    const { email, password, fullName, image } = data;
    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        return firebaseUpdateProfile(user, {
          displayName: fullName,
          photoURL: image
        });
        
      })
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Registration successfull",
          showConfirmButton: false,
          timer: 1500
        });
         
       

        navigate('/');
      })
      fetch('https://fiber-fantasia-server-site-9h7ytplys.vercel.app/users', {
        method : "POST",
        headers : {
          "content-type" : "application/json"
        },
        body: JSON.stringify(data)
      })
      .catch(error => {
        toast.error(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Welcome to <br /> Fiber<span className='text-pink-500'>Fantasia</span>!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">

            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="Your name" className="input input-bordered"  {...register("fullName", { required: true })} />
              {errors.fullName && <span className='text-red-600'>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Image URL</span>
              </label>
              <input type="text" placeholder="Your image"  {...register("image", { required: true })} className="input input-bordered" />
              {errors.image && <span className='text-red-600'>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
              {errors.email && <span className='text-red-600'>This field is required</span>}
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
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
