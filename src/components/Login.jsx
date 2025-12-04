import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { addUser } from "../utils/userSlice";
const Login = () => {
  const [emailId, setEmailId] = useState("sandhya@gmail.com");
  const [password, setPassword] = useState("Sandhya@123");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate(); // given by react-router-dom

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        // to allow cookies to get store
        { withCredentials: true },
      );

      dispatch(addUser(res.data)); //adding data to store
      return navigate("/");
      // to add data to store, we need to  , dispatch an action
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
    }
  };
  return (
    <div className="flex justify-center mt-10">
      <div className="card bg-gray-300 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Login</h2>
          <label className="form-control w-full max-w-xs py-2">
            <div className="label">
              <span className="label-text">Email Id {emailId}</span>
            </div>
            <input
              type="text"
              value={emailId}
              className="input input-bordered w=dull max-w-xs mt-1"
              onChange={(e) => setEmailId(e.target.value)}
            />
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Password {password}</span>
            </div>
            <input
              type="text"
              value={password}
              className="input input-bordered w-full max-w-xs mt-1"
              //   this will binding the state variable to the input box
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <p className="text-red-500">{error}</p>

          <div className="card-actions justify-start mt-1">
            <button className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
