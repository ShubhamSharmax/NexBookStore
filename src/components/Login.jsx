import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Login = ({ setIsLoginOpen }) => {

    const [isSignUpOpen, setIsSignUpOpen] = useState(false);
    const apiUrl = import.meta.env.VITE_BACKEND_URL;
    // For Login form
    const {
        register: loginRegister,
        handleSubmit: handleLoginSubmit,
        formState: { errors: loginErrors },
    } = useForm();

    // For Sign Up form
    const {
        register: signUpRegister,
        handleSubmit: handleSignUpSubmit,
        watch,
        formState: { errors: signUpErrors },
    } = useForm();

    const onLoginSubmit = async (data) => {
        const user = {
            email: data.email,
            password: data.password,
        };
        try {
            const response = await axios.post(`${apiUrl}/user/login`, user);
            localStorage.setItem('User', JSON.stringify({
                user: response.data.user,
                isUserLoggedIn: true
            }));
            const { fullname } = response.data.user;
            alert(`Welcome, ${fullname}!`)
            setIsLoginOpen(false);

        } catch (error) {
            console.error('Login Error:', error.message);
            alert('Login failed. Please check your credentials.');
        }
    };

    const onSignUpSubmit = async (data) => {
        const user = {
            fullname: data.name,
            email: data.email,
            password: data.password,
        };

        try {
            const response = await axios.post(`${apiUrl}/user/signup`, user);
            alert('Sign-up successful! You can now log in.');
            setIsSignUpOpen(false)
        } catch (error) {
            if (error.response && error.response.data) {
                alert(error.response.data.error);
            } else {
                alert('Sign-up failed. Please try again.');
            }
        }
    };
    const password = watch('password', '');
    return (<>
        {/* Log In Form */}
        {!isSignUpOpen && (
            <div>
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <form onSubmit={handleLoginSubmit(onLoginSubmit)}>
                    <label className="block mb-2">Email:</label>
                    <input
                        type="email"
                        className="border p-2 w-full mb-4"
                        {...loginRegister('email', { required: 'Email is required' })}
                    />
                    {loginErrors.email && <span className="text-red-500">{loginErrors.email.message}</span>}

                    <label className="block mb-2">Password:</label>
                    <input
                        type="password"
                        className="border p-2 w-full mb-4"
                        {...loginRegister('password', { required: 'Password is required' })}
                    />
                    {loginErrors.password && <span className="text-red-500">{loginErrors.password.message}</span>}

                    <button type="submit" className="bg-blue-500 text-white p-2 rounded">Login</button>
                </form>
                <span>Not registered? </span>
                <button onClick={() => setIsSignUpOpen(true)}>Signup</button>
            </div>
        )}

        {/* SignUp Form  */}
        {isSignUpOpen && (
            <div>
                <h2 className="text-2xl font-bold mb-4">Sign up</h2>
                <form onSubmit={handleSignUpSubmit(onSignUpSubmit)}>
                    <label className="block mb-2">Email:</label>
                    <input
                        type="email"
                        className="border p-2 w-full mb-4"
                        {...signUpRegister('email', {
                            required: 'Email is required'
                        })}
                    />
                    {signUpErrors.email && <span className="text-red-500">{signUpErrors.email.message}</span>}

                    <label className="block mb-2">Name:</label>
                    <input
                        type="text"
                        className="border p-2 w-full mb-4"
                        {...signUpRegister('name', { required: 'Name is required' })}
                    />
                    {signUpErrors.name && <span className="text-red-500">{signUpErrors.name.message}</span>}

                    <label className="block mb-2">Password:</label>
                    <input
                        type="password"
                        className="border p-2 w-full mb-4"
                        {...signUpRegister('password', {
                            required: 'Password is required',
                            minLength: { value: 6, message: 'Password must be at least 6 characters' },
                        })}
                    />
                    {signUpErrors.password && <span className="text-red-500">{signUpErrors.password.message}</span>}

                    <label className="block mb-2">Confirm Password:</label>
                    <input
                        type="password"
                        className="border p-2 w-full mb-4"
                        {...signUpRegister('confirmPassword', {
                            required: 'Confirm Password is required',
                            validate: (value) => value === password || 'Passwords do not match',
                        })}
                    />
                    {signUpErrors.confirmPassword && (
                        <span className="text-red-500">{signUpErrors.confirmPassword.message}</span>
                    )}

                    <button type="submit" className="bg-blue-500 text-white p-2 rounded">Sign Up</button>
                </form>
                <span>Already registered? </span>
                <button onClick={() => setIsSignUpOpen(false)}>Login</button>
            </div>
        )}

    </>
    )
};

export default Login;