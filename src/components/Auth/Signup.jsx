import { Link } from "react-router-dom";

const Signup = () =>
{
    return (
        <div className='min-h-screen pt-3 flex items-start justify-center bg-gradient-to-r from-gray-100 to-white p-4'>
            <form className='bg-white shadow-lg my-3 mx-auto w-full max-w-sm p-10 rounded-lg border border-transparent transition duration-300 transform hover:scale-105 hover:shadow-xl'>
                <h1 className='font-bold text-2xl py-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-green-500 to-blue-500'>
                    Register Your SusNet Hardware
                </h1>

                <div className='space-y-4'>
                    <input
                        type='text'
                        placeholder='Full Name'
                        className='p-3 w-full shadow-md border border-gray-300 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 placeholder-gray-500'
                    />

                    <input
                        type='email'
                        placeholder='Email Address'
                        className='p-3 w-full shadow-md border border-gray-300 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 placeholder-gray-500'
                    />

                    <input
                        type='password'
                        placeholder='Password'
                        className='p-3 w-full shadow-md border border-gray-300 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 placeholder-gray-500'
                    />
                </div>

                <button className='mt-6 p-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white w-full font-bold rounded-lg hover:from-green-500 hover:to-teal-500 transition duration-300 transform hover:scale-105'>
                    Sign Up
                </button>

                <p className='mt-4 text-center text-gray-600'>
                    Already have an account?{' '}
                    <Link to='/login' clLinkssName='text-blue-500 font-semibold hover:underline'>
                        Log In
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Signup;
