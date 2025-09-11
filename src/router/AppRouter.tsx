import { Route, BrowserRouter, Routes } from "react-router-dom"
import CurriculumLibrary from "../pages/CurriculumLibrary"
import NotFound from "../pages/NotFound"


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CurriculumLibrary/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}



export default AppRouter
