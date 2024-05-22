import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";

function Layout() {
  

  return (
    <>
      <header className="p-6 w-full bg-gradient-to-tr from-zinc-900 to-zinc-800 flex justify-between items-center">
        <Navbar/>
      </header>
      <main>
        <Outlet />
        <ToastContainer />
      </main>
    </>
  );
}

export default Layout;
