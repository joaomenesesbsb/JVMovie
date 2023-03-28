import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Movie } from "./models/movie";
import HeaderHome from "./routes/HeaderHome"
import EvaluationForm from "./routes/HeaderHome/EvaluationForm"
import Listing from "./routes/HeaderHome/Listing"

function App() {

  return (
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<HeaderHome />} >
            <Route index element={<Listing />} />
            <Route path="/listing" element={<Listing />} />
            <Route path="/form" element={<EvaluationForm />}>
              <Route path=":movieId" element={<EvaluationForm />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </BrowserRouter>

  )
}

export default App
