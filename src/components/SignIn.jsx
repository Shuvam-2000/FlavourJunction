
const SigninPage = () => {

  return (
    <div className= " flex flex-col justify-center w-[90%] mx-auto mb-[40px] font-serif">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Welcome Back!</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md w-2vw">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-black">
          <form className="space-y-6 mb-14 mt-10 sm:mb-16">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none"/>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none"/>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a href="#" className="font-medium text-yellow-500 hover:text-yellow-600">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Sign in
              </button>
            </div>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">Don't have an account yet?</p>
            <a href="#" className="font-medium text-yellow-500 hover:text-yellow-600">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
