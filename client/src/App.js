
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/rigester/Register";
import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";

function App() {
  return (
<Router>
<Routes>
  <Route path="/" element={<React.Fragment>
    <Home />
  </React.Fragment>} />
 
  <Route path="/login" element={<React.Fragment>
    <Login />
  </React.Fragment>} />
 
  <Route path="/register" element={<React.Fragment>
    <Register />
  </React.Fragment>} />
 
  <Route path="/profile/:username" element={<React.Fragment>
    <Profile />
  </React.Fragment>} />

</Routes>
</Router>
    )
}

export default App;
