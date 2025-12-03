import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./Body";
import Login from "./Login";
import Profile from "./Profile";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Route>

          <Route path="/login" element={<div>Login page</div>} />
          <Route path="/login1" element={<div>Login1 page</div>} />
        </Routes>
      </BrowserRouter>
      {/* <h1 className="text-3xl font-bold underline">DevTinder</h1> */}
    </>
  );
}

export default App;
