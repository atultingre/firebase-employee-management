import React, { useState } from "react";
import Swal from "sweetalert2";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import "./Login.css";

const Login = ({ setIsAuthenticated }) => {
  // const adminEmail = 'admin@example.com';
  // const adminPassword = 'qwerty';
  // const [email, setEmail] = useState('admin@example.com');
  // const [password, setPassword] = useState('qwerty');
  // if (email === adminEmail && password === adminPassword) {
  //   Swal.fire({
  //     timer: 1500,
  //     showConfirmButton: false,
  //     willOpen: () => {
  //       Swal.showLoading();
  //     },
  //     willClose: () => {
  //       localStorage.setItem('is_authenticated', true);
  //       setIsAuthenticated(true);

  //       Swal.fire({
  //         icon: 'success',
  //         title: 'Successfully logged in!',
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //     },
  //   });
  // } else {
  //   Swal.fire({
  //     timer: 1500,
  //     showConfirmButton: false,
  //     willOpen: () => {
  //       Swal.showLoading();
  //     },
  //     willClose: () => {
  //       Swal.fire({
  //         icon: 'error',
  //         title: 'Error!',
  //         text: 'Incorrect email or password.',
  //         showConfirmButton: true,
  //       });
  //     },
  //   });
  // }

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = async (e) => {
    e.preventDefault();

    const auth = getAuth();
    if (document.activeElement.name === "Login") {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        Swal.fire({
          timer: 1500,
          showConfirmButton: false,
          willOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            localStorage.setItem("is_authenticated", true);
            setIsAuthenticated(true);

            Swal.fire({
              icon: "success",
              title: "Successfully logged in!",
              showConfirmButton: false,
              timer: 1500,
            });
          },
        });
      } catch (error) {
        console.log(error);
        Swal.fire({
          timer: 1500,
          showConfirmButton: false,
          willOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            Swal.fire({
              icon: "error",
              title: "Error!",
              text: "Incorrect email or password.",
              showConfirmButton: true,
            });
          },
        });
      }
    } else if (document.activeElement.name === "Register") {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        Swal.fire({
          timer: 1500,
          showConfirmButton: false,
          willOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            setIsAuthenticated(true);

            Swal.fire({
              icon: "success",
              title: "Successfully Registred & logged in!",
              showConfirmButton: false,
              timer: 1500,
            });
          },
        });
      } catch (error) {
        console.log(error);
        Swal.fire({
          timer: 1500,
          showConfirmButton: false,
          willOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            Swal.fire({
              icon: "error",
              title: "Error!",
              text: "Registration Faild.",
              showConfirmButton: true,
            });
          },
        });
      }
    }
  };

  const [isLogin, setIsLogin] = useState(true);

  const handleSignupClick = () => {
    setIsLogin(false);
  };

  const handleLoginClick = () => {
    setIsLogin(true);
  };

  return (
    <div className="body">
      <div className="wrapper">
        <div className="title-text">
          {isLogin ? (
            <div className="title">Admin Login</div>
          ) : (
            <div className="title">Admin Register</div>
          )}
        </div>
        <div className="form-container">
          <div className="slide-controls">
            <input
              type="radio"
              name="slide"
              id="login"
              checked={isLogin}
              onChange={handleLoginClick}
            />
            <input
              type="radio"
              name="slide"
              id="signup"
              checked={!isLogin}
              onChange={handleSignupClick}
            />
            <label htmlFor="login" className="slide login label">
              Login
            </label>
            <label htmlFor="signup" className="slide signup label">
              Signup
            </label>
            <div className="slider-tab"></div>
          </div>
        </div>

        <div className="form-inner">
          <div className="form">
            {/* <div className="small-container"> */}
            <form
              onSubmit={handleLogin}
              className={isLogin ? "login" : "signup"}>
              {/* <h1>Admin Login</h1> */}
              <label htmlFor="email">Email</label>
              <div className="field">
                <input
                  className="input"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="admin@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <label htmlFor="password">Password</label>
              <div className="field">
                <input
                  className="input"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="qwerty"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {isLogin ? (
                <div className="field btn">
                  <div className="btn-layer"></div>
                  <input
                    className="input"
                    style={{ marginLeft: "12px" }}
                    type="submit"
                    // value="Login"
                    value={isLogin ? "Login" : "Register"}
                    name="Login"
                  />
                </div>
              ) : (
                <div className="field btn">
                  <div className="btn-layer"></div>
                  <input
                    style={{
                      // marginTop: "12px",
                      marginLeft: "12px",
                      // backgroundColor: "black",
                    }}
                    type="submit"
                    value="Register"
                    name="Register"
                    className="input"
                  />
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
