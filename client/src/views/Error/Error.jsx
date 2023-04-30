import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <div>
      <Link to='/Home' className="flex justify-center text-white">Back to Home</Link>
      <div className="flex justify-center text-white text-3xl p-10 m-10 bg-red-500">
        Error 404
      </div>
    </div>
  );
};
