import { Header } from "./Components_UI/Header/Header";
import { Home } from "./Pages/Home";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { LoginPage } from "./Pages/Login/LoginPage";
function App() {

  

  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
      

    </>
  );
}

export default App
