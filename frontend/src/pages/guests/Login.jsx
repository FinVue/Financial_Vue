import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";
import { loginUser } from "../../controllers/user";
import { auth, googleProvider } from "../../../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { UserContext } from "../../contexts/UserContext";

function Login() {
  const nav = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPwd, setShowPwd] = useState(false);
  const {user, setUser} = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser(formData.email, formData.password);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      setUser(userCredential.user);
      toast.success('You have successfully logged in!');
      nav('/dashboard');
    } catch (error) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case "auth/invalid-credential":
            toast.error("Invalid email or password. Please try again.");
            break;
          default:
            toast.error(error.code);
            break;
        }
      } else {
        toast.error(error.message);
      }
    }
  };

  const loginWithGoogleAccount = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      toast.success("You have successfully logged in!");
    } catch (error) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case "auth/popup-closed-by-user":
            toast.error(
              "The sign-in process was interrupted because the popup was closed. Please try again."
            );
            break;
          default:
            toast.error(error.code);
            break;
        }
      } else {
        toast.error(error.message);
      }
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-r from-secondary to-secondary-2">
      <article className="p-6">
        <div className="returnBtn">
          <i className="fa-solid fa-arrow-left text-white"></i>
        </div>
        <h1 className="text-right text-heading-3 font-bold pb-4 tracking-f-small leading-snug">
          Access your
          <br />
          financial hub
          <br />
          instantly for
          <br />
          seamless control
          <br />
          over your finances.
          <br />
        </h1>
      </article>
      <article className="bg-zinc-900 w-full py-16 lg:h-[calc(50vh+500px)] px-6 rounded-t-[30px] flex flex-col gap-4">
        <h2 className="text-heading-3 font-bold text-white tracking-f-small py-5">
          Log in to Fin<span className="text-secondary">Vue</span>
        </h2>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="grid gap-1">
            <label className="primary-label" htmlFor="email">
              Email <span className="text-secondary">*</span>
            </label>
            <input
              className="primary-input text-white"
              type="email"
              placeholder="finvue@gmail.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>
          <div className="grid gap-1">
            <label className="primary-label" htmlFor="password">
              Password <span className="text-secondary">*</span>
            </label>
            <div className="flex items-center justify-center relative">
              <input
                className="primary-input text-white"
                type={showPwd ? "text" : "password"}
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                min={8}
                required
              />
              <i
                onClick={() => setShowPwd(!showPwd)}
                className={`cursor-pointer text-white fa-solid ${
                  showPwd ? "fa-eye" : "fa-eye-slash"
                } absolute right-1 pr-2 bg-zinc-900`}
              ></i>
            </div>
          </div>
          <button type="submit" className="primary-btn">
            Login
          </button>
        </form>
        <div className="grid grid-cols-3 justify-center items-center">
          <hr className="bg-secondary h-[2px] border-0"></hr>
          <p className="text-center text-white text-pre-title">OR</p>
          <hr className="bg-secondary h-[2px] border-0"></hr>
        </div>
        <div onClick={loginWithGoogleAccount} className="secondary-btn">
          <i className="fa-brands fa-google text-white"></i> &nbsp;&nbsp;&nbsp;
          Continue with Google
        </div>
        <p className="pt-8 pb-6 text-pre-title text-white text-center">
          FinVue uses cookies for analytics personalized content and ads. By
          using FinVue&apos;s services you agree to this use of cookies.&nbsp;
          <span className="font-bold underline cursor-pointer">Learn more</span>
        </p>
      </article>
    </section>
  );
}

export default Login;
