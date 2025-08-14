
import LoginPage from "../components/ui/login/Loginpage"
import ListBeneficiaires from "../components/ui/list-beneficiaires"
import ProtectedRoute from "./ProtectedRoute"
import { Route, Routes, useNavigate } from "react-router-dom"



// App manages login state and redirects to dashboard after login
function App() {
  const navigate = useNavigate();

  // Handler for successful login
  const handleLoginSuccess = () => {
    navigate("/list-beneficiaires");
  };



  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage onLoginSuccess={handleLoginSuccess} />} />
        <Route path="login" element={<LoginPage onLoginSuccess={handleLoginSuccess} />} />
        <Route path="list-beneficiaires" element={
          <ProtectedRoute>
            <ListBeneficiaires />
          </ProtectedRoute>
        } />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </>
  );
}

export default App;