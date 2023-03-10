import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/config";
// import { useAuthState } from "react-firebase-hooks/auth";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useState } from "react";
import Drawer from "../components/DrawerConstant";
import Typed from "react-typed";
import { Container } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const Homepage = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  // const [user, loading, error] = useAuthState(auth);
  const [hasErorr, setError] = useState(false);
  const [firebaseError, setfirebasrError] = useState("");
  const [showForm, setshowForm] = useState("");
  const [showSendEmail, setshowSendEmail] = useState(false);
  const [resetEmail, setresetEmail] = useState("");








  const [myMode, setmyMode] = useState("dark");
  const darkTheme = createTheme({
    palette: {
      mode: myMode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <Container className="the-big">

        <Drawer />

        <form className="homeform">


          <Typed
            Typed
            strings={[
              "I am a front-end-dev",
              "welcome to my website",
              "see u",
              "",
            ]}
            typeSpeed={60}
            backSpeed={30}
            attr="placeholder"
            loop={false}
          >
            <input className="typed" type="text" />
          </Typed>


          <p style={{ fontSize: "20px", fontWeight: "300" }}>
            Welcome to our platform <span> &#10084; </span>
          </p>

          <input
            onChange={(eo) => {
              setemail(eo.target.value);
            }}
            type="email"
            required
            placeholder="Email"
          />

          <input
            onChange={(eo) => {
              setpassword(eo.target.value);
            }}
            type="password"
            required
            placeholder="Password"
          />

          <button
            onClick={(eo) => {
              eo.preventDefault();

              signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  // Signed in

                  window.location.href = "https://courageous-froyo-50292c.netlify.app/";

                  console.log("done");
                  // const user = userCredential.user;
                  // ...
                })
                .catch((error) => {
                  const errorCode = error.code;
                  // const errorMessage = error.message;

                  setError(true);
                  setfirebasrError(errorCode);

                  if (errorCode === "auth/invalid-email") {
                    setfirebasrError("Invalid-Email");
                  } else if (errorCode === "auth/wrong-password") {
                    setfirebasrError("Invalid-password");
                  } else if (errorCode === "auth/user-not-found") {
                    setfirebasrError("user not found");
                  } else if (errorCode === "auth/internal-error") {
                    setfirebasrError("password needed");
                  }
                });
            }}
          >
            Sign in{" "}
          </button>
          <br />

          <p>
            {" "}
            Don't have an account<Link to="/sign-up"> Sign-up </Link>{" "}
          </p>

          <p
            onClick={() => {
              setshowForm("show-popup-form");
            }}
            className="forgot-pass"
          >
            {" "}
            Forgot password{" "}
          </p>

          {hasErorr && <h3 style={{ color: "red" }}> {firebaseError} </h3>}

          {/* "pop up form  */}

          <div>
            <form className={`popup-form ${showForm}`}>
              <span
                onClick={() => {
                  setshowForm("hide-popup-form");
                }}
              >
                X
              </span>
              <input
                onChange={(eo) => {
                  setresetEmail(eo.target.value);
                }}
                type="email"
                required
                placeholder="write your email"
              ></input>
              <button
                onClick={(eo) => {
                  eo.preventDefault();
                  sendPasswordResetEmail(auth, resetEmail)
                    .then(() => {
                      setshowSendEmail(true);
                      console.log(resetEmail);

                      // ..
                    })
                    .catch((error) => {
                      // const errorCode = error.code;
                      // const errorMessage = error.message;
                      // ..
                    });
                }}
              >
                {" "}
                Reset password
              </button>
              <br /> <br />
              {showSendEmail && (
                <p>please check your email to reset your password</p>
              )}
            </form>
          </div>

          {/* <Footer /> */}
        </form>
      </Container>
    </ThemeProvider>
  );
};

export default Homepage;
