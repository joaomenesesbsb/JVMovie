import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import HeaderHome from "./routes/HeaderHome"
import EvaluationForm from "./routes/HeaderHome/EvaluationForm"

function App() {
    return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<HeaderHome />} >
          <Route index element={<EvaluationForm/>}/>
          <Route path="/form" element={<EvaluationForm/>}/>
        </Route>
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
