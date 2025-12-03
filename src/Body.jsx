import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
const Body = () => {
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
