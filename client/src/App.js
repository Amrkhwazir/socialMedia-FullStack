
import { AuthContext } from "./context/AuthContext";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/rigester/Register";
import React, { useContext } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const {user} = useContext(AuthContext); 
  return (
<Router>
<Routes>
  <Route path="/" element={<React.Fragment>
    {user ? <Home /> : <Register/>}
  </React.Fragment>} />
 
  <Route path="/login" element={<React.Fragment>
    {user ? <Home/> : <Login />}
  </React.Fragment>} />
 
  <Route path="/register" element={<React.Fragment>
    {user ? <Home/> : <Register />}
  </React.Fragment>} />
 
  <Route path="/profile/:username" element={<React.Fragment>
    <Profile />
  </React.Fragment>} />

</Routes>
</Router>
    )
}

export default App;
