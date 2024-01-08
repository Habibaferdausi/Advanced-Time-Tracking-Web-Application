"use client" ;

import { AuthContext } from "@/context/AuthProvider";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import Swal from "sweetalert2";
import login from "@/public/login.json"
import Lottie from "lottie-react";


export default function Home() {
 

  const { signIn, googleLogin } = useContext(AuthContext);
  
  const navigate = useRouter();

  
  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
   

    signIn(email, password)
      .then((result) => {
        const user = result.user;
      
        navigate.push('/Dashboard')
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Successfully Login",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };
  const handleGoogle = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        navigate.push('/Dashboard')
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Successfully Login",
          showConfirmButton: false,
          timer: 1500,
        });
      })

      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="hero   max-w-2xl mx-auto">
        <div className="hero  ">
          <div className="">
            <h1 className="lg:text-2xl text-purple-600 text-lg lg:mt-11 mt-6 pt-6 mb-7 lg:mb-11 text-center font-bold ">Advanced Time Tracking Web Application</h1>
            
            <div className=" grid gap-6 grid-cols-2 mt-7"> 
              <div>
              <Lottie
              animationData={login}
              loop={true}
             
            />
              </div>
              <div> <form onSubmit={handleLogIn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-2">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Your Password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn text-white hover:bg-green-500 border bg-blue-500"
                  type="submit"
                  value="Login"
                />
              </div>
            </form></div>
            </div>
            
            
           
            <p className="my-4  text-center">
              Haven't Any Account?
              <Link className="text-red-500 ms-4 font-bold" href="/sign-up">
                Sign Up
              </Link>{" "}
            </p>
            <div className="divider">OR</div>

            <h2 className=" text-blue-400 text-center font-bold">
              Sign In With
            </h2>
            <div className="flex justify-center mt-4 items-center gap-5">
              <div>
                <button onClick={handleGoogle}>
                  <img
                    src="https://freesvg.org/img/1534129544.png"
                    alt=""
                    className="h-10 w-10"
                  />
                </button>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
