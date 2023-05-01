import {BrowserRouter, Routes, Route} from "react-router-dom"
import SignupPage from "./pages/SignupPage/SignupPage"
import SuccessPage from "./pages/successPage/SuccessPage"
import FaliurePage from "./pages/faliurePage/FaliurePage"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* pages */}
        <Route path="/" element={<SignupPage/>}/>
        <Route path="/success" element={<SuccessPage/>}/>
        <Route path="/faliure" element={<FaliurePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
