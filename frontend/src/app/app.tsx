
import LoginPage from "@/components/ui/login/Loginpage"
import ListBeneficiaires from "@/components/ui/list-beneficiaires"
import { Route, Routes, useNavigate } from "react-router-dom"

// App manages login state and redirects to dashboard after login
function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Handler for successful login
  const handleLoginSuccess = () => {
    navigate("/list-beneficiaires");
  };

  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage onLoginSuccess={handleLoginSuccess} />} />
        <Route path="list-beneficiaires" element={<ListBeneficiaires />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </>
  );
}

export default App;