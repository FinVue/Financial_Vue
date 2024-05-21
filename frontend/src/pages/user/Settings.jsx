import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";

function Settings() {
  const nav = useNavigate();

  const handleSignOut = () => {
    try {
      auth.signOut().then(() => {
        nav("/login");
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="bg-zinc-900 min-h-screen py-4">
      <article className="p-6">
        <div className="returnBtn bg-secondary">
          <i className="fa-solid fa-arrow-left text-black"></i>
        </div>
      </article>
      <article className="p-6">
        <h3 className="text-heading-3 tracking-f-small font-bold text-white py-2">
          Settings
        </h3>
        <div
          onClick={handleSignOut}
          className="bg-zinc-800 cursor-pointer flex gap-3 p-4 w-full min-h-[60px] h-3/4 rounded-xl lg:grid-cols-10"
        >
          <div className="bg-red-500 w-12 h-12 rounded-lg p-2 grid self-center">
            <p className="text-center grid self-center justify-self-center fa-solid fa-sign-out-alt text-white"></p>
          </div>
          <div className="flex items-center">
            <p className="text-white text-small">Sign out</p>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Settings;
