import { Header } from "./Components_UI/Header/Header";
import { Home } from "./Pages/Home";
import {BrowserRouter,Routes,Route, createBrowserRouter, RouterProvider} from "react-router-dom"
import { LoginPage } from "./Pages/Login/LoginPage";
import { AddProductPage } from "./Pages/AddProduct/AddProductPage";

function App() {

  const router = createBrowserRouter([
      {
        path:"/",
        element:<Header/>
      },
      {
        path:"/login",
        element : <LoginPage/>
      },
      {
        path:"/addproduct",
        element : <AddProductPage></AddProductPage>
      }
    ])
  

  return(
    
    <>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/addproduct" element={<AddProductPage/>} />
      </Routes>
    </BrowserRouter> */}

    <RouterProvider router={router} />
      

    </>
  );
}

export default App
