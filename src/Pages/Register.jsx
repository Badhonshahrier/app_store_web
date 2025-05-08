import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link, useNavigate } from "react-router";
import { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const Register = () => {
  const navigate = useNavigate();
  const { creatUser, setUser, googleSignIn, userProfile } = use(AuthContext);
  const handleGoggleRegister = () => {
    googleSignIn()
      .then((result) => {
        toast.success("Google sign in successful!")
        navigate("/login");
      })
      .catch((error) => {
      });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const isLengthValid = password.length >= 6;

    if (!hasUpperCase) {
      toast.error("Password must contain at least one uppercase letter.");
      return;
    }

    if (!hasLowerCase) {
      toast.error("Password must contain at least one lowercase letter.");
      return;
    }

    if (!isLengthValid) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }

    console.log({ name, email, photo, password });
    creatUser(email, password)
      .then((result) => {
         Swal.fire({
                  title: "Logged in!",
                  text: "Successfully Register Your Account",
                  icon: "success",
                  confirmButtonText: "OK",
                  confirmButtonColor: "#3085d6",
                });
        navigate("/");
        const user = result.user;

        console.log(user);
        userProfile({
          displayName: name,
          photoURL: photo,
        }).then(() => {
          setUser({
            ...user,
            displayName: name,
            photoURL: photo,
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="bg-amber-100">
      <Helmet>
                <meta charSet="utf-8" />
                <title>Register - AppStore</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <Navbar></Navbar>
        <div className="card bg-base-100 mx-auto max-w-sm my-20 shadow-2xl">
          <div className="card-body ">
            <h1 className="text-center font-bold text-2xl text-teal-400">
              Register Here!
            </h1>
            <form onSubmit={handleRegister} className="fieldset ">
              <label className="label text-xl font-bold">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Your Name"
              />
              <label className="label text-xl font-bold">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label text-xl font-bold">Photo URL</label>
              <input
                type="url"
                className="input"
                name="photo"
                placeholder="Your photo URL"
              />
              <label className="label text-xl font-bold">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <label className="label font-bold text-xl">
                Login with Google
              </label>
              <button
                onClick={handleGoggleRegister}
                type="button"
                className="btn border-black hover:bg-amber-300"
              >
                <FcGoogle size={20} />
                Google Login
              </button>
              <p className="font-bold text-center pt-4">
                Already have an account?{" "}
                <Link to="/login">
                  <span className="text-red-500">Login</span>
                </Link>{" "}
                here.
              </p>

              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
};

export default Register;
