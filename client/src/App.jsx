import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import Home from "./views/Home"
import Landing from "./views/landing"
import Admin from "./views/Admin"
function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Navigate to="/landing" />} />
        <Route path="/landing" element={<Landing/>}/>
        <Route path="/home" element={<Home/>} />
        <Route path="/admin" element={<Admin/>}/>

      </Routes>
    </>
  )
}

export default App
