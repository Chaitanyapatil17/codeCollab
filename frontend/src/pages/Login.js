function Login() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
        <h1 className="text-3xl">Login Page</h1>
        <input className="p-2 m-2 text-black" placeholder="Email" />
        <input className="p-2 m-2 text-black" type="password" placeholder="Password" />
        <button className="bg-blue-500 p-2 rounded">Login</button>
      </div>
    );
  }
  
  export default Login;
  