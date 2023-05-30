import "./App.css";
import LoginForm from "./Pages/LoginForm";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { UserInfoContext } from "./constants/providers";
import SignupForm from "./Pages/SignUpForm";
import UserDetails from "./Pages/UserDetails";
function App() {
  const [userInfo, setUserInfo] = useState();

  return (
    <UserInfoContext.Provider value={[userInfo, setUserInfo]}>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/user/details" element={<UserDetails />} />
      </Routes>
    </UserInfoContext.Provider>
  );
}

export default App;
