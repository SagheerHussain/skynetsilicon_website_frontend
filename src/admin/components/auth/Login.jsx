// // import React, { useState } from "react";
// // import { useForm } from "react-hook-form";
// // import { Link, useNavigate } from "react-router-dom";
// // import { BeatLoader } from "react-spinners";
// // import Swal from "sweetalert2";
// // import loginBg from "/Images/login.jpg";
// // import { FaEye, FaEyeSlash } from "react-icons/fa";

// // const Login = () => {

// //     const { register, handleSubmit, formState: { errors } } = useForm();

// //     // State Variables
// //     const [error, setError] = useState(false);
// //     const [loading, setLoading] = useState(false);
// //     const [password, setPassword] = useState(false);

// //     const navigate = useNavigate();

// //     const loginAccount = async (data) => {
// //         setLoading(true)
// //         try {
// //             const response = await fetch(`https://skynetsilicon-website-backend.vercel.app/api/auth/login`, {
// //                 method: "POST",
// //                 headers: { "Content-Type": "application/json" },
// //                 body: JSON.stringify(data)
// //             })
// //             if (!response.ok) throw new Error("Something Went Wrong");
// //             const user = await response.json();
// //             console.log(user);

// //             if (user.token) {
// //                 setLoading(false);
// //                 Swal.fire({
// //                     icon: "success",
// //                     text: "Successfully Register Account",
// //                 });
// //                 // Store Token
// //                 sessionStorage.setItem("token", user.token)
// //                 // Redirect
// //                 setTimeout(() => {
// //                     navigate("/dashboard");
// //                 }, 2000);
// //             }

// //         } catch (error) {
// //             setError(error)
// //         }
// //     }

// //     return (
// //         <>
// //             <div className="w-screen flex items-center justify-center h-screen bg-[#010205ee]">
// //                 <div className="lg:w-[50%] xl:w-[40%] 2xl:w-[33%] p-3 relative rounded-none z-[999] shadow-2xl" style={{ background: `url(${loginBg})` }}>
// //                     <div className="after:content-[''] after:block after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-gradient-to-r from-[#000000e7] to-[#00042aee] after:z-[-1]"></div>

// //                     <h2 className="mx-3 text-white text-lg relative inline font-medium after:content-[''] after:block after:w-[100%] after:h-[2px] after:translate-y-2 after:absolute after:bottom-0 after:left-0 after:bg-[#393e66]">SIGN IN</h2>

// //                     {error && <p className="text-red-600">{error}</p>}

// //                     {/* Form */}
// //                     <form className="p-3 z-[99999] mt-4" onSubmit={handleSubmit(loginAccount)}>
// //                         <div className="mb-4">
// //                             <label className="block text-gray-300 mb-2 ps-2">Email</label>
// //                             <div className="flex items-center bg-[#393e6653] p-2 rounded-full w-full">
// //                                 <span className="text-gray-400 mr-2">🔑</span>
// //                                 <input {...register("email", { required: true })} type="email" placeholder="Email" className="form-control w-full bg-transparent focus:outline-none focus:bg-transparent text-white placeholder:text-zinc-400 focus:shadow-none border-none" />
// //                             </div>
// //                         </div>

// //                         <div className="mb-4">
// //                             <label className="block text-gray-300 mb-2 ps-2">Password</label>
// //                             <div className="flex items-center justify-between bg-[#393e6653] py-2 px-3 rounded-full">
// //                                 <div className="password_input flex items-center w-full">
// //                                     <span className="text-gray-400 mr-2">🔒</span>
// //                                     <input {...register("password", { required: true })} type={`${password ? "text" : "password"}`} placeholder="Password" className="form-control w-full bg-transparent focus:outline-none focus:bg-transparent text-white placeholder:text-zinc-400 focus:shadow-none border-none" />
// //                                 </div>
// //                                 <div className="password_eye_icon">
// //                                     {
// //                                         password ? <FaEye onClick={() => setPassword(false)} className="text-white cursor-pointer" /> : <FaEyeSlash onClick={() => setPassword(true)} className="text-white cursor-pointer" />
// //                                     }
// //                                 </div>
// //                             </div>
// //                         </div>

// //                         <div className="mb-4 flex items-center">
// //                             <input type="checkbox" id="remember" className="mr-2" />
// //                             <label htmlFor="remember" className="text-gray-400">Remember me</label>
// //                         </div>

// //                         <button disabled={loading} className={`w-full bg-[#393e66c5] rounded-full text-zinc-300 py-2 font-semibold ${loading ? "opacity-50" : "opacity-100 hover:bg-[#393e66ed]"}`}>
// //                             {loading ? <BeatLoader size={12} color='#fff' /> : "Login Your Account"}
// //                         </button>

// //                         <span className="text-center text-white block py-2">or</span>
// //                         <div className="w-full bg-[#393e66c5] rounded-full text-center py-2 hover:bg-[#393e66ed] cursor-pointer">
// //                             <Link to={`/`} className="text-zinc-300">Go Back To Website</Link>
// //                         </div>
// //                     </form>

// //                 </div>
// //             </div>
// //         </>
// //     );
// // };

// // export default Login;


// import React, { useState, useEffect, useRef } from "react";
// import { useForm } from "react-hook-form";
// import { Link, useNavigate } from "react-router-dom";
// import { BeatLoader } from "react-spinners";
// import Swal from "sweetalert2";
// import loginBg from "/Images/login.jpg";
// import { FaEye, FaEyeSlash } from "react-icons/fa";

// const Login = () => {
//     const { register, handleSubmit, formState: { errors } } = useForm();

//     // State Variables
//     const [error, setError] = useState(false);
//     const [loading, setLoading] = useState(false);
//     const [password, setPassword] = useState(false);
//     const [rememberMe, setRememberMe] = useState(false);

//     const navigate = useNavigate();
//     const emailRef = useRef();

//     useEffect(() => {
//         const storedEmail = localStorage.getItem("rememberedEmail");
//         if (storedEmail) {
//             emailRef.current = storedEmail;
//             setRememberMe(true);
//         }
//     }, [register]);

//     const loginAccount = async (data) => {
//         setLoading(true);
//         try {
//             const response = await fetch(`https://skynetsilicon-website-backend.vercel.app/api/auth/login`, {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(data)
//             });
//             if (!response.ok) throw new Error("Something Went Wrong");
//             const user = await response.json();
//             console.log(user);

//             if (user.token) {
//                 setLoading(false);
//                 Swal.fire({
//                     icon: "success",
//                     text: "Successfully Registered Account",
//                 });
                
//                 if (rememberMe) {
//                     localStorage.setItem("rememberedEmail", data.email);
//                 } else {
//                     localStorage.removeItem("rememberedEmail");
//                 }
                
//                 sessionStorage.setItem("token", user.token);
//                 setTimeout(() => {
//                     navigate("/dashboard");
//                 }, 2000);
//             }
//         } catch (error) {
//             setError(error);
//         }
//     };

//     return (
//         <div className="w-screen flex items-center justify-center h-screen bg-[#010205ee]">
//             <div className="lg:w-[50%] xl:w-[40%] 2xl:w-[33%] p-3 relative rounded-none z-[999] shadow-2xl" style={{ background: `url(${loginBg})` }}>
//                 <div className="after:content-[''] after:block after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-gradient-to-r from-[#000000e7] to-[#00042aee] after:z-[-1]"></div>
//                 <h2 className="mx-3 text-white text-lg relative inline font-medium after:content-[''] after:block after:w-[100%] after:h-[2px] after:translate-y-2 after:absolute after:bottom-0 after:left-0 after:bg-[#393e66]">SIGN IN</h2>
//                 {error && <p className="text-red-600">{error}</p>}

//                 {/* Form */}
//                 <form className="p-3 z-[99999] mt-4" onSubmit={handleSubmit(loginAccount)}>
//                     <div className="mb-4">
//                         <label className="block text-gray-300 mb-2 ps-2">Email</label>
//                         <div className="flex items-center bg-[#393e6653] p-2 rounded-full w-full">
//                             <span className="text-gray-400 mr-2">🔑</span>
//                             <input ref={emailRef} {...register("email", { required: true })} type="email" placeholder="Email" className="form-control w-full bg-transparent focus:outline-none focus:bg-transparent text-white placeholder:text-zinc-400 focus:shadow-none border-none" />
//                         </div>
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-gray-300 mb-2 ps-2">Password</label>
//                         <div className="flex items-center justify-between bg-[#393e6653] py-2 px-3 rounded-full">
//                             <div className="password_input flex items-center w-full">
//                                 <span className="text-gray-400 mr-2">🔒</span>
//                                 <input {...register("password", { required: true })} type={`${password ? "text" : "password"}`} placeholder="Password" className="form-control w-full bg-transparent focus:outline-none focus:bg-transparent text-white placeholder:text-zinc-400 focus:shadow-none border-none" />
//                             </div>
//                             <div className="password_eye_icon">
//                                 {password ? <FaEye onClick={() => setPassword(false)} className="text-white cursor-pointer" /> : <FaEyeSlash onClick={() => setPassword(true)} className="text-white cursor-pointer" />}
//                             </div>
//                         </div>
//                     </div>
//                     <div className="mb-4 flex items-center">
//                         <input type="checkbox" id="remember" className="mr-2" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
//                         <label htmlFor="remember" className="text-gray-400">Remember me</label>
//                     </div>
//                     <button disabled={loading} className={`w-full bg-[#393e66c5] rounded-full text-zinc-300 py-2 font-semibold ${loading ? "opacity-50" : "opacity-100 hover:bg-[#393e66ed]"}`}>
//                         {loading ? <BeatLoader size={12} color='#fff' /> : "Login Your Account"}
//                     </button>
//                     <span className="text-center text-white block py-2">or</span>
//                     <div className="w-full bg-[#393e66c5] rounded-full text-center py-2 hover:bg-[#393e66ed] cursor-pointer">
//                         <Link to={`/`} className="text-zinc-300">Go Back To Website</Link>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Login;


import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import Swal from "sweetalert2";
import loginBg from "/Images/login.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    // State Variables
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState(false);

    const navigate = useNavigate();

    const loginAccount = async (data) => {
        setLoading(true);
        try {
            const response = await fetch(`https://skynetsilicon-website-backend.vercel.app/api/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });
            if (!response.ok) throw new Error("Something Went Wrong");
            const user = await response.json();
            console.log(user);

            if (user.token) {
                setLoading(false);
                Swal.fire({
                    icon: "success",
                    text: "Successfully Registered Account",
                });

                sessionStorage.setItem("token", user.token);
                setTimeout(() => {
                    navigate("/dashboard");
                }, 2000);
            }
        } catch (error) {
            setError(error);
        }
    };

    return (
        <div className="w-screen flex items-center justify-center h-screen bg-[#010205ee]">
            <div className="lg:w-[50%] xl:w-[40%] 2xl:w-[33%] p-3 relative rounded-none z-[999] shadow-2xl" style={{ background: `url(${loginBg})` }}>
                <div className="after:content-[''] after:block after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-gradient-to-r from-[#000000e7] to-[#00042aee] after:z-[-1]"></div>
                <h2 className="mx-3 text-white text-lg relative inline font-medium after:content-[''] after:block after:w-[100%] after:h-[2px] after:translate-y-2 after:absolute after:bottom-0 after:left-0 after:bg-[#393e66]">SIGN IN</h2>
                {error && <p className="text-red-600">{error}</p>}

                {/* Form */}
                <form className="p-3 z-[99999] mt-4" onSubmit={handleSubmit(loginAccount)}>
                    <div className="mb-4">
                        <label className="block text-gray-300 mb-2 ps-2">Email</label>
                        <div className="flex items-center bg-[#393e6653] p-2 rounded-full w-full">
                            <span className="text-gray-400 mr-2">🔑</span>
                            <input {...register("email", { required: true })} type="email" placeholder="Email" className="form-control w-full bg-transparent focus:outline-none focus:bg-transparent text-white placeholder:text-zinc-400 focus:shadow-none border-none" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-300 mb-2 ps-2">Password</label>
                        <div className="flex items-center justify-between bg-[#393e6653] py-2 px-3 rounded-full">
                            <div className="password_input flex items-center w-full">
                                <span className="text-gray-400 mr-2">🔒</span>
                                <input {...register("password", { required: true })} type={`${password ? "text" : "password"}`} placeholder="Password" className="form-control w-full bg-transparent focus:outline-none focus:bg-transparent text-white placeholder:text-zinc-400 focus:shadow-none border-none" />
                            </div>
                            <div className="password_eye_icon">
                                {password ? <FaEye onClick={() => setPassword(false)} className="text-white cursor-pointer" /> : <FaEyeSlash onClick={() => setPassword(true)} className="text-white cursor-pointer" />}
                            </div>
                        </div>
                    </div>

                    <button disabled={loading} className={`w-full bg-[#393e66c5] rounded-full text-zinc-300 py-2 font-semibold ${loading ? "opacity-50" : "opacity-100 hover:bg-[#393e66ed]"}`}>
                        {loading ? <BeatLoader size={12} color='#fff' /> : "Login Your Account"}
                    </button>
                    <span className="text-center text-white block py-2">or</span>
                    <div className="w-full bg-[#393e66c5] rounded-full text-center py-2 hover:bg-[#393e66ed] cursor-pointer">
                        <Link to={`/`} className="text-zinc-300">Go Back To Website</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
