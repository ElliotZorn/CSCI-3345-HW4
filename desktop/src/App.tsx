import Header from './components/Header';
import { Routes, Route } from "react-router-dom";
import Personal from "./pages/Personal";
import Professional from "./pages/Professional";



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/personal" element={<Personal />} />
        <Route path="/professional" element={<Professional />} />
      </Routes>
    </>
  )
}

export default App;