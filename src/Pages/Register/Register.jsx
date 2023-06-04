/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate();
    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            updateUserProfile(data.name, data.photoURL)
            .then(()=>{
                console.log('user profile info update')
                reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User Created Successfuly',
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/')
            })
            .catch(error=>{console.log(error)})
        })
    };
    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet><title>Bisstro Boss | Register</title></Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Sign Up Now!</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Enter Your Name" {...register('name', {required: true})} className="input input-bordered" />
                    {errors.name && <span className='text-red-600'>Name is required</span>}
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" placeholder="Enter Your Photo url" {...register('PhotoURL', {required: true})} className="input input-bordered" />
                    {errors.photoURL && <span className='text-red-600'>Photo is required</span>}
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" {...register('email', {required: true})} className="input input-bordered" />
                    {errors.email && <span className='text-red-600'>Email is required</span>}

                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" {...register('password', {required: true, minLength: 8, maxLength:15})} className="input input-bordered" />
                    {errors.password && <span className='text-red-600'>Password Minimun 8 character</span>}
                    </div>
                    <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit" value="Sign Up" />
                    </div>
                    <p>Already Registered? <Link to='/login'>Go To Login</Link></p>

                </form>
                </div>
            </div>
        </div>
    );
};

export default Register;