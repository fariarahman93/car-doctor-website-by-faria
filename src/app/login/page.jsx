"use client";
import React from 'react';
import Image from "next/image";
import { FaGoogle, FaGithub } from "react-icons/fa";
import Link from 'next/link';

const page = () => {

    const handleLogin = async (event) =>{
        event.preventDefault();
        const newUser ={
             email : event.target.email.value,
             password : event.target.password.value,
        };
        console.log(newUser);
       
    }
    return (
        <div className="grid grid-cols-2 gap-9 items-center min-h-screen">
          
            <div className="flex justify-center">
                <Image
                    src="/assets/images/login/login.svg"
                    height="500"
                    width="500"
                    alt="login image"
                />
            </div>

            
            <div className="flex items-center justify-center h-full">
                <div className="border-2 rounded-lg p-12 w-full max-w-lg shadow-xl bg-white">
                    <div className="hero-content flex-col">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold text-[#FF3811]">Login now</h1>
                        </div>
                        <div className="card w-full bg-base-100 shadow-2xl">
                            <form onSubmit={handleLogin} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary text-white">Login</button>
                                </div>
                                <div className="text-center my-6">
                                    <h6>Or sign in with</h6>
                                    <div className="flex justify-center gap-4 mt-4">
                                        <button className="btn p-6 flex items-center justify-center text-primary">
                                            <FaGoogle />
                                        </button>
                                        <button className="btn p-6 flex items-center justify-center text-primary">
                                            <FaGithub />
                                        </button>
                                    </div>
                                    <h6 className='pt-3'>Not have account ? <Link className='text-primary font-semibold' href={'/signup'}>Sign Up</Link></h6>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
