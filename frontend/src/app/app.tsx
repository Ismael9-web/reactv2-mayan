import LoginPage from "@/components/ui/login/Loginpage"
import Dash07 from "@/components/dash07/dash07"  
import { Route, Routes } from "react-router-dom"

function App() {

  {
    /* This is the main entry point for the application.
       It sets up the routes for the application using React Router.
       The routes include a login page and a dashboard component. */
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<LoginPage/>} />
       <Route path='login' element={<LoginPage/>} />
        {/* <Route path='login2' element={<Login/>}/> */}
        <Route path='dash07' element={<Dash07/>} />
        <Route path='*' element={<div>Page not found</div>} />
    
       </Routes>
    </>
  )
}

export default App