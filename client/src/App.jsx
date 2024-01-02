import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import Home from "./views/Home"
import Landing from "./views/landing"

function App() {
  return (
    <>
      <Routes>
        <Route path="/landing" element={<Landing/>}/>
        <Route path="/home" element={<Home/>} />
        

      </Routes>
    </>
  )
}

export default App
