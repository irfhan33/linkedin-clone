import "./login.css";
import { useState } from "react";
import { auth } from "./firebaseConfig";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { updateProfile } from "firebase/auth";
// import { createUserWithEmailAndPassword } from "firebase/auth";
export default function Login() {
  const [fields, setFields] = useState({
    fullname: "",
    profilepicture: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const logintoApp = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(fields.email, fields.password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        );
      })
      .catch((error) => {
        alert(error);
      });
  };

  const register = (e) => {
    e.preventDefault();
    if (!fields.fullname) {
      return alert("Please enter a full name");
    }

    auth
      .createUserWithEmailAndPassword(fields.email, fields.password)
      .then((userAuth) => {
        userAuth
          .updateProfile({
            displayName: fields.fullname,
            photoURL: fields.profilepicture,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.email,
                uid: userAuth.uid,
                displayName: userAuth.displayName,
                photoURL: userAuth.photoURL,
                tes: "ini dari register",
              })
            );
          });
      })
      .catch((error) => alert(error));

    // auth
    //   .createUserWithEmailAndPassword(fields.email, fields.password)
    //   .then(() => {
    //     dispatch(
    //       login({
    //         email: fields.email,
    //         uid: 1,
    //         displayName: fields.fullname,
    //         photoUrl: fields.profilepicture,
    //       })
    //     );
    //   });
  };

  const fieldHandler = (e) => {
    const name = e.target.getAttribute("name");
    setFields({
      ...fields,
      [name]: e.target.value,
    });
  };
  return (
    <div className="login">
      <img
        src="https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-png.png"
        alt=""
      />
      <form>
        <input
          placeholder="Full Name"
          type="text"
          name="fullname"
          onChange={fieldHandler}
        />
        <input
          placeholder="Profile Picture"
          type="text"
          name="profilepicture"
          onChange={fieldHandler}
        />
        <input
          placeholder="Email"
          type="email"
          name="email"
          onChange={fieldHandler}
        />
        <input
          placeholder="Password"
          type="password"
          name="password"
          onChange={fieldHandler}
        />
        <button onClick={logintoApp}>Sign In</button>
        <p>
          Not a Member?{" "}
          <span className="login__register" onClick={register}>
            Register now
          </span>
        </p>
      </form>
    </div>
  );
}
