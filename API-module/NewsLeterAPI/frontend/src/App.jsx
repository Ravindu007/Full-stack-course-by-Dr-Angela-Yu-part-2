import {BrowserRouter, Routes, Route} from "react-router-dom"
import SignupPage from "./pages/SignupPage/SignupPage"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* pages */}
        <Route path="/" element={<SignupPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
