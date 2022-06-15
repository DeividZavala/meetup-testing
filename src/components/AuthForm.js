export default function AuthForm({ handleSubmit, handleChange }) {
  return (
    <div className='w-full lg:w-3/4 bg-white rounded-lg'>
      <div className='py-12 px-5 text-center'>
        <h2 className='text-2xl font-semibold text-gray-700 fo'>Sign In</h2>

        <form onSubmit={handleSubmit}>
          <div className='mt-4'>
            <input
              className='block w-full px-4 py-2 text-gray-700 placeholder-gray-400 bg-white border rounded-md focus:border-blue-400 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring'
              type='email'
              name='email'
              onChange={handleChange}
              placeholder='Email address'
              aria-label='Email address'
            />
            <input
              className='block w-full px-4 py-2 mt-4 text-gray-700 placeholder-gray-400 bg-white border rounded-md focus:border-blue-400 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring'
              type='password'
              name='password'
              onChange={handleChange}
              placeholder='Password'
              aria-label='Password'
            />
          </div>

          <div className='flex items-center justify-between mt-4'>
            <a href='/' className='text-sm text-gray-600 hover:underline'>
              Forget Password?
            </a>

            <button
              type='submit'
              className='px-4 py-2 font-semibold text-white transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-800'
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
