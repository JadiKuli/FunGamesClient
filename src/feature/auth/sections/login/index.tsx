export default function LoginSection() {
  return (
    <div className="space-y-5">
      <div className="text-center">
        <p className="text-lg font-light">Login</p>
        <h1 className="text-2xl font-semibold">
          To access the app, please login
        </h1>
      </div>
      <div className="text-center flex flex-col items-center justify-center">
        <label htmlFor="username">Username</label>
        <input
          className="outline-none border border-white w-full p-2 rounded-xl mb-5"
          type="text"
        />
        <label htmlFor="username">Password</label>
        <input
          className="outline-none border border-white w-full p-2 rounded-xl mb-5"
          type="password"
        />
        <button className="bg-white text-black w-full p-2 rounded-xl hover:scale-y-105 transition duration-300 hover:cursor-pointer hover:bg-black border hover:border-white hover:text-white">
          Login
        </button>
      </div>
    </div>
  );
}
