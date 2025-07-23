
import LoginPage from "@/components/ui/login/Loginpage"
import Dash07 from "@/components/dash07/dash07"
import { Route, Routes, useNavigate } from "react-router-dom"
import React, { useState } from "react"


// App manages login state and redirects to dashboard after login
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Handler for successful login
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    navigate("/dash07");
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage onLoginSuccess={handleLoginSuccess} />} />
        <Route path="login" element={<LoginPage onLoginSuccess={handleLoginSuccess} />} />
        <Route path="dash07" element={isLoggedIn ? <Dash07 /> : <LoginPage onLoginSuccess={handleLoginSuccess} />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </>
  );
}

export default App;