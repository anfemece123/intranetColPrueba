import { createBrowserRouter } from "react-router-dom";
import MiniDrawer from "../../components/SideBar";
import Home from "../../screens/Home";
import TablasBasicas from "../../screens/TablasBasicas";
import SignInSide from "../../screens/SignInSide";
import Usuarios from "../../screens/Usuarios";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MiniDrawer />,
    // errorElement: <ErrorPage />,
  },
    {
      path: "/Home",
      element: <Home />,
    },
    {
      path: "/TablasBasicas",
      element: <TablasBasicas />,
    },
    {
      path: "/Login",
      element: <SignInSide />,
    },
    {
      path: "/Usuarios",
      element: <Usuarios />,
    },
   
  ]);
  
  export default router;