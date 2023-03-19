import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import HeaderHome from "./routes/Catalog"

function App() {

  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<HeaderHome />} >
        </Route>
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
