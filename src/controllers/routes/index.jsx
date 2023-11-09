import { Route, Routes, createBrowserRouter } from "react-router-dom";
import MiniDrawer from "../../components/SideBar";
import Home from "../../screens/Home";
import TablasBasicas from "../../screens/TablasBasicas";
import SignInSide from "../../screens/SignInSide";
import Usuarios from "../../screens/Usuarios";
import { AppColores } from "../../color/AppColores";

export const AppRouter = () => {
  return (
    <AppColores>
      <Routes>
        <Route path="/" element={<MiniDrawer />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/TablasBasicas" element={<TablasBasicas />} />
        <Route path="/Login" element={<SignInSide />} />
        <Route path="/Usuarios" element={<Usuarios />} />
      </Routes>
    </AppColores>
  )
}


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MiniDrawer />,
//     // errorElement: <ErrorPage />,
//   },
//   {
//     path: "/Home",
//     element: <Home />,
//   },
//   {
//     path: "/TablasBasicas",
//     element: <TablasBasicas />,
//   },
//   {
//     path: "/Login",
//     element: <SignInSide />,
//   },
//   {
//     path: "/Usuarios",
//     element: <Usuarios />,
//   },

// ]);

// export default router;