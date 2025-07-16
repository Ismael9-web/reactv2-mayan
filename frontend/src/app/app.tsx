// import Dash07 from "@/components/dash07/dash07"
import Login from "@/components/ui/login/Login"
import LoginPage from "@/components/ui/login/Loginpage"
import { Route, Routes } from "react-router-dom"

function App() {

  // {
  //   false &&
  //     <Dash07 />
 


  return (
    <>
      <Routes>
        <Route path='/' element={<LoginPage/>} />
       <Route path='login1' element={<LoginPage/>} />
        <Route path='login2' element={<Login/>}/>
 
     
    
       </Routes>
    </>
  )
}

export default App