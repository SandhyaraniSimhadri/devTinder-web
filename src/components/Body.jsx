import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { addUser } from "../utils/userSlice";
import Footer from "./Footer";
import NavBar from "./NavBar";
const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //if we have data in redux, we dont need to call api again and again
  // so for that we need to check the store
  const userData = useSelector((store) => store.user);
  const fetchUser = async () => {
    if (userData) return;

    try {
      const user = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });

      dispatch(addUser(user));
    } catch (err) {
      if (err.status === 401) {
        navigate("/login");
      } else {
        console.log("error message", err.message);
      }
      // navigate("/login");
    }
  };
  useEffect(() => {
    // if (!userData) {
    fetchUser();
    // }
  }, []);
  return (
    <div>
      <NavBar />
      {/* to render the inner router/children routes , we need to give space to show them / outlet to show them.. so we used outlet here 
      those will be rendered below the navbar here in the outlet place*/}
      <Outlet />
      <Footer />
    </div>
  );
};
export default Body;
