import { NavLink } from "react-router-dom";

function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-white w-12 h-12 flex items-center justify-center rounded-md duration-300 bg-zinc-700"
      : " text-white hover:bg-zinc-900 w-12 h-12 flex items-center justify-center p-4 rounded-md duration-300";
  return (
    <>
      <div className="w-10 h-10">
        <img src="/finVueLogo.png" alt="FinVue Logo" />
      </div>
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
    </>
  );
}

export default Navbar;
