import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { Button } from "./ui/button";

function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-white w-12 h-12 flex items-center justify-center rounded-md duration-300 bg-zinc-700"
      : " text-white hover:bg-zinc-900 w-12 h-12 flex items-center justify-center p-4 rounded-md duration-300";

  const { user } = useContext(UserContext);
  console.log(user);

  return (
    <>
      <div className="w-10 h-10">
        <img src="/finVueLogo.png" alt="FinVue Logo" />
      </div>
      {user ? (
        <div className="flex gap-5 md:gap-16">
          <NavLink to={"/dashboard"} title="Home" className={linkClass}>
            <i className="fa-solid fa-house"></i>
          </NavLink>
          <NavLink to={"/wallet"} title="Home" className={linkClass}>
            <i className="fa-solid fa-wallet"></i>
          </NavLink>
          <AlertDialog>
            <AlertDialogTrigger><i className="fa-solid fa-circle-plus text-white"></i></AlertDialogTrigger>
            <AlertDialogContent className="bg-zinc-900 border-0">
              <AlertDialogHeader className="bg-zinc-900 w-full">
                <Link to={'/income'}><AlertDialogAction className="w-full"><Button className="text-body text-inc-900 uppercase text-center bg-secondary font-bold tracking-f-widest w-full">Add Income 💸</Button></AlertDialogAction></Link>
                <Link to={'/expense'}><AlertDialogAction className="w-full"><Button className="text-body text-inc-900 uppercase text-center text-white bg-zinc-700 hover:bg-zinc-800 font-bold tracking-f-widest w-full">Add Expense 🚀</Button></AlertDialogAction></Link>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="w-full bg-zinc-900 hover:bg-zinc-800 border-0 text-white uppercase">Cancel</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <NavLink to={"/settings"} title="Home" className={linkClass}>
            <i className="fa-solid fa-gear"></i>
          </NavLink>
        </div>
      ) : (
        <div className="flex gap-5 md:gap-16">
          <NavLink to={"index"} title="Home" className={linkClass}>
            <i className="fa-solid fa-house"></i>
          </NavLink>
          <NavLink to={"/login"} title="Login" className={linkClass}>
            <i className="fa-solid fa-right-to-bracket"></i>
          </NavLink>
          <NavLink to={"/register"} title="Register" className={linkClass}>
            <i className="fa-solid fa-user"></i>
          </NavLink>
        </div>
      )}
    </>
  );
}

export default Navbar;
