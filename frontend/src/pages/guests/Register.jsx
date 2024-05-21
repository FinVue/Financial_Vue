import { useState } from "react";
import { registerUser } from "../../controllers/user";
import { toast } from "react-toastify";
import { FirebaseError } from "firebase/app";
import { auth, db, googleProvider } from "../../../firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { Link } from "react-router-dom";
import bcryptjs from "bcryptjs";

function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmedPassword: "",
  });
  const [showPwd, setShowPwd] = useState(false);
  const [showConfirmedPwd, setShowConfirmedPwd] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await registerUser(
        formData.email,
        formData.password,
        formData.confirmedPassword
      );
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const salt = await bcryptjs.genSalt(10);
      const saltedPassword = (await formData.password) + salt;
      const hashedPassword = await bcryptjs.hash(saltedPassword, 10);

      await addDoc(collection(db, "users"), {
        uid: userCredential.user.uid,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: hashedPassword,
      });

      toast.success('Your account has been successfully registered.');
    } catch (error) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case "auth/weak-password":
            toast.error(
              "The password is too weak: Please choose a stronger password."
            );
            break;
          case "auth/email-already-in-use":
            toast.error(
              "The email address is already in use by another account."
            );
            break;
          case "auth/invalid-email":
            toast.error("Please use a valid Gmail account for registration.");
            break;
          default:
            toast.error(error.message);
        }
      } else {
        toast.error(error.message);
      }
    }
  };

  const createAccountWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      toast.success("Your account has been successfully registered!");
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
          Unlock the power
          <br />
          of financial control
          <br />
          at your fingertips
          <br />
          swiftly.
          <br />
        </h1>
      </article>
      <article className="bg-zinc-900 w-full py-16 lg:h-[calc(50vh+500px)] px-6 rounded-t-[30px] flex flex-col gap-4">
        <h2 className="text-heading-3 font-bold text-white tracking-f-small py-5">
          Create <span className="text-secondary">Account</span>
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid gap-1">
            <label className="primary-label" htmlFor="firstName">
              First Name <span className="text-secondary">*</span>
            </label>
            <input
              className="primary-input text-white"
              name="firstName"
              type="text"
              placeholder="Ex. John"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              required
            />
          </div>
          <div className="grid gap-1">
            <label className="primary-label" htmlFor="lastName">
              Last Name <span className="text-secondary">*</span>
            </label>
            <input
              className="primary-input text-white"
              name="lastName"
              type="text"
              placeholder="Ex. Doe"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              required
            />
          </div>
          <div className="grid gap-1">
            <label className="primary-label" htmlFor="email">
              Email <span className="text-secondary">*</span>
            </label>
            <input
              className="primary-input text-white"
              type="email"
              placeholder="hello@gmail.com"
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
                minLength="8"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
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
          <div className="grid gap-1">
            <label className="primary-label" htmlFor="confirmPassword">
              Confirm Password <span className="text-secondary">*</span>
            </label>
            <div className="flex items-center justify-center relative">
              <input
                className="primary-input text-white"
                name="confirmPassword"
                type={showConfirmedPwd ? "text" : "password"}
                placeholder="Confirm your password"
                value={formData.confirmedPassword}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    confirmedPassword: e.target.value,
                  })
                }
                required
              />
              <i
                onClick={() => setShowConfirmedPwd(!showConfirmedPwd)}
                className={`cursor-pointer text-white fa-solid ${
                  showConfirmedPwd ? "fa-eye" : "fa-eye-slash"
                } absolute right-1 pr-2 bg-zinc-900`}
              ></i>
            </div>
          </div>
          <button type="submit" className="primary-btn">
            CREATE AN ACCOUNT
          </button>
        </form>
        
        <div className="grid grid-cols-3 justify-center items-center">
          <hr className="bg-secondary h-[2px] border-0"></hr>
          <p className="text-center text-white text-pre-title">OR</p>
          <hr className="bg-secondary h-[2px] border-0"></hr>
        </div>
        <div onClick={createAccountWithGoogle} className="secondary-btn">
          <i className="fa-brands fa-google text-white"></i> &nbsp;&nbsp;&nbsp;
          Continue with Google
        </div>
        <p className="pt-8 pb-2 text-pre-title text-white text-center">
          By selecting Create Account, you agree to our{" "}
          <a href="https://firebasestorage.googleapis.com/v0/b/finvue-e2d75.appspot.com/o/terms%20and%20aggrement%2FTerms%20and%20Agreement.pdf?alt=media&token=9ae0ad82-ee3d-4a53-8738-264bcc4a6bea" className="font-bold underline cursor-pointer text-secondary">
          Terms
          </a>{" "}
          and have read and acknowledge our{" "}
          <a href="https://firebasestorage.googleapis.com/v0/b/finvue-e2d75.appspot.com/o/terms%20and%20aggrement%2FRA-10173-Data-Privacy-Act-of-2012.pdf?alt=media&token=badaab91-6e83-4f30-85ab-716ae2c1df08" className="font-bold underline cursor-pointer text-secondary">
            Global Privacy Statement
          </a>
          .
        </p>
        <div className="mt-2 text-center text-sm">
          <span className="text-white">Already have an account?</span>{" "}
            <Link to="/login" className="font-bold underline cursor-pointer text-secondary text">
              Sign in
            </Link>
        </div>
      </article>
    </section>
    
  );
}

export default Register;
