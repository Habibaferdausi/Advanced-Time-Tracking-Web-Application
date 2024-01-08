"use client"
import { AuthContext } from '@/context/AuthProvider';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react'
import Swal from 'sweetalert2';

export default function SignUp() {
    const { createUser, updateUser } = useContext(AuthContext);
    const  navigate = useRouter();



  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoURL.value;

    if ((name, email, photoUrl, password)) {
      createUser(email, password)
        .then((result) => {
          updateUser(result.user, name, photoUrl)
            .then(() => {
                navigate.push('/Dashboard')
              Swal.fire({
                position: "top",
                icon: "success",
                title: "Successfully Register",
                showConfirmButton: false,
                timer: 1500,
              });
            })
            .catch((err) => {
              console.log(err.message);
            });
          console.log(result.user);
          Swal.fire("Something Wrong! Try again");
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  return (
    <div>
      <div className="hero max-w-2xl mx-auto">
        <div className="hero mt-20 ">
          <div>
            <h1 className="lg:text-2xl mb-10 text-lg text-center text-blue-500 font-bold">
              Sign Up
            </h1>
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Your Password"
                  className="input input-bordered"
                  pattern="(?=.*\d).{8,}"
                  title="Password must contain at least one number and be at least 8 characters long."
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="Enter Only Url"
                  className="input input-bordered"
               
                />
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn bg-red-500 hover:bg-blue-600 text-white border border-0"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="my-4 text-center">
              Already Have an Account?{" "}
              <Link className="text-blue-500 ms-3 font-bold" href="/">
                Login
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

};
