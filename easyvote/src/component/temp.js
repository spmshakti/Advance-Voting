<div className="flex justify-center items-center h-screen">
      <div className="bg-white rounded-md shadow-md flex" style={{ width: "100%", height: "100%" }}>
        {/* Left Section */}
        <div className="flex flex-col justify-center items-center bg-gray-300 rounded-l-md p-6 w-2/3">
          <h2 className="font-extrabold text-lg mb-4">Welcome Back</h2>
          <div className="mb-10">
            <div className="border border-gray-400 rounded-md">
              <button className="flex items-center justify-center text-black font-medium rounded-md px-11 py-1 mb-1">
                <img src="/GoogleLogo.svg" className="w-8 h-8 mr-2" alt="Google Icon" />Login with Google
              </button>
            </div>
          </div>
          <p className="text-gray-600 mb-2">OR LOGIN WITH EMAIL</p>
          <input type="text" className="border border-gray-400 rounded-md px-2 py-1 mb-2 w-64" placeholder="Your Email" />
          <input type="password" className="border border-gray-400 rounded-md px-2 py-1 mb-3 w-64" placeholder="Password" />
          <div className="flex items-center mb-3 mt-10">
            <input type="checkbox" className="mr-2" />
            <p className="text-sm">Keep me logged in</p>
            <a className="text-sm ml-3 underline text-blue">Forget password</a>
          </div>
          <button className="bg-blue-700 text-white font-bold rounded-md px-[105px] py-2 mb-3">Log in</button>
          <p className="text-sm mb-2">Don't have an account yet? <span className="text-blue-700 underline">Sign Up</span></p>
          <img src="/path/to/image" className="w-7 h-8" alt="logo" />
        </div>

        {/* Right Section */}
        <div className="bg-indigo-900 rounded-r-md w-1/2"></div>
      </div>
    </div>
