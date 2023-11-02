import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import signup from '../assets/video/signup.mp4';

const Signup = () => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        username: '',
        email: '',
        password: '',
    });
    const { username, email, password } = inputValue;

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    };

    const handleError = (err) =>
        toast.error(err, {
            position: 'bottom-left',
        });
    const handleSuccess = (msg) =>
        toast.success(msg, {
            position: 'bottom-left',
        });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('http://localhost:3000/signup', {
                ...inputValue,
            }, { withCredentials: true });

            const { success, message } = data;
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate('/');
                }, 1000);
            } else {
                handleError(message);
            }
        } catch (error) {
            console.error(error);
        }
        setInputValue({
            ...inputValue,
            username: '',
            email: '',
            password: '',
        });
    };

    return (
        <div className="flex h-screen">
            <div className="w-1/2 relative">
                <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={signup} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="w-1/2 flex items-center justify-center">
                <div className="w-4/5 max-w-md bg-white p-8 rounded shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Signup Account</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm">Username</label>
                            <input
                                type="text"
                                name="username"
                                value={username}
                                placeholder="Enter your username"
                                onChange={handleOnChange}
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                placeholder="Enter your email"
                                onChange={handleOnChange}
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={password}
                                placeholder="Enter your password"
                                onChange={handleOnChange}
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-peach hover:bg-orange text-white py-2 rounded-md"
                        >
                            Submit
                        </button>
                    </form>
                    <span className="mt-2 block">
                        Already have an account?{" "}
                        <Link to="/" className="text-peach hover:text-orange hover:underline">
                            Login
                        </Link>
                    </span>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Signup;