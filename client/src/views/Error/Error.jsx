import { Link } from "react-router-dom";
import backgroundImage from '../../assets/bg.png'
import './Error.css'

export const Error = () => {
  return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-5xl font-bold text-yellow-500 p-10">Error 404</h1>
        <p className="text-3xl mb-4 text-yellow-500 p-5 mb-10">Page not found</p>
        <Link
          to="/"
          className="px-10 py-3 bg-black font-bold text-white rounded hover:bg-yellow-500 hover:text-black"
        >
          Go back
        </Link>
      </div>
  );
};
