import React from 'react';

const Signup = () =>
{
    return (
        <div className='min-h-screen pt-16 flex items-start justify-center bg-gradient-to-r from-gray-100 to-white p-4'>
            <form className='bg-white shadow-lg my-3 mx-auto w-full max-w-sm p-10 rounded-lg border border-transparent transition duration-300 transform hover:scale-105 hover:shadow-xl'>
                <h1 className='font-semibold text-lg py-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-green-500 to-blue-500'>
                    Register Your SusNet Hardware
                </h1>

                <input
                    type='text'
                    placeholder='Full Name'
                    className='p-3 my-2 w-full shadow-md border-b-2 border-gray-300 bg-gray-100 rounded-md focus:outline-none focus:border-blue-500 transition duration-200 placeholder-gray-500'
                />

                <input
                    type='text'
                    placeholder='Email Address'
                    className='p-3 my-2 w-full shadow-md border-b-2 border-gray-300 bg-gray-100 rounded-md focus:outline-none focus:border-blue-500 transition duration-200 placeholder-gray-500'
                />

                <input
                    type='password'
                    placeholder='Password'
                    className='p-3 my-2 w-full shadow-md border-b-2 border-gray-300 bg-gray-100 rounded-md focus:outline-none focus:border-blue-500 transition duration-200 placeholder-gray-500'
                />

                <button className='p-3 my-6 bg-green-500 w-full font-bold hover:bg-green-400 transition duration-300 shadow-lg rounded-lg'>
                    Sign Up
                </button>

                <p className='text-center text-gray-600'>
                    Already have an account?{' '}
                    <a href='/login' className='text-blue-500 font-semibold hover:underline'>
                        Log In
                    </a>
                </p>
            </form>

            {/* Add gradient border effect on hover */}
            <style jsx>{`
        form {
          border-image: linear-gradient(to right, #3b82f6, #a855f7) 1;
        }

        form:hover {
          border: 2px solid transparent;
          border-image: linear-gradient(to right, #3b82f6, #a855f7) 1;
        }
      `}</style>
        </div>
    );
};

export default Signup;
