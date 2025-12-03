import { Provider } from "react-redux"; // provider used to use Store
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Feed from "./components/Feed";
import Login from "./components/Login";

import Profile from "./components/Profile";
import appStore from "./utils/appStore";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />

              <Route path="/login" element={<Login />} />

              <Route path="/profile" element={<Profile />} />
            </Route>

            {/* <Route path="/login" element={<div>Login page</div>} /> */}
            <Route path="/login1" element={<div>Login1 page</div>} />
          </Routes>
        </BrowserRouter>
      </Provider>
      {/* <h1 className="text-3xl font-bold underline">DevTinder</h1> */}
    </>
  );
}

export default App;
