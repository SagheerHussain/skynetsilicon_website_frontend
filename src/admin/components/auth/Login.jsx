import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import Swal from "sweetalert2";

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    // State Variables
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const loginAccount = async (data) => {
        setLoading(true)
        try {
            const response = await fetch(`https://skynetsilicon-website-backend.vercel.app/api/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            })
            if (!response.ok) throw new Error("Something Went Wrong");
            const user = await response.json();
            console.log(user);

            if (user.token) {
                setLoading(false);
                Swal.fire({
                    icon: "success",
                    text: "Successfully Register Account",
                });
                // Store Token
                sessionStorage.setItem("token", user.token)
                // Redirect
                setTimeout(() => {
                    navigate("/dashboard");
                }, 2000);
            }

        } catch (error) {
            setError(error)
        }
    }

    return (
        <>
            <div className="w-screen flex items-center justify-center h-screen bg-gray-900">
                <div className="w-[30%] p-3 bg-gray-800 rounded-none shadow-lg">
                    {/* Header */}
                    <div className="bg-zinc-900 p-4 rounded-none text-center">
                        <h2 className="text-white text-xl font-semibold">Admin Dashboard Credentials</h2>
                    </div>

                    {error && <p className="text-red-600">{error}</p>}

                    {/* Form */}
                    <form className="p-3" onSubmit={handleSubmit(loginAccount)}>
                        <div className="mb-4">
                            <label className="block text-gray-300 mb-2">Email</label>
                            <div className="flex items-center bg-gray-700 p-2 rounded-none">
                                <span className="text-gray-400 mr-2">🔑</span>
                                <input {...register("email", { required: true })} type="email" placeholder="Email" className="w-full bg-transparent focus:outline-none text-white" />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-300 mb-2">Password</label>
                            <div className="flex items-center bg-gray-700 p-2 rounded-none">
                                <span className="text-gray-400 mr-2">🔒</span>
                                <input {...register("password", { required: true })} type="password" placeholder="Password" className="w-full bg-transparent focus:outline-none text-white" />
                            </div>
                        </div>

                        <div className="mb-4 flex items-center">
                            <input type="checkbox" id="remember" className="mr-2" />
                            <label htmlFor="remember" className="text-gray-400">Remember me</label>
                        </div>

                        <button disabled={loading} className={`w-full bg-zinc-900 text-zinc-300 py-2 rounded-none font-semibold ${loading ? "opacity-50" : "opacity-100 hover:bg-zinc-950"}`}>
                            {loading ? <BeatLoader size={12} color='#fff' /> : "Login Your Account"}
                        </button>

                        <span className="text-center text-white block py-2">or</span>
                        <div className="w-full bg-zinc-900 text-center py-2 hover:bg-zinc-950 cursor-pointer">
                            <Link to={`/`} className="text-zinc-300">Go Back To Website</Link>
                        </div>
                    </form>

                </div>
            </div>
        </>
    );
};

export default Login;
