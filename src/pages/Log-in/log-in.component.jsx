import React from "react";
import "./log-in.styles.scss";

import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import googleLogo from "../../assets/svg/google.svg";
import banner from "../../assets/img/login-banner.jpg";

import { Link } from "react-router-dom";

// import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

  };

  render() {
    return (
      <div className="logIn">
        <div className="left">
          <Link to="/">
          </Link>
          <form className="group" onSubmit={this.handleSubmit}>
            <h2>Welcome back home!</h2>
            <FormInput
              type="email"
              placeholder="Email"
              value={this.state.email}
              handleChange={this.handleChange}
              name="email"
              required
            />
            <FormInput
              type="password"
              placeholder="Password"
              value={this.state.password}
              handleChange={this.handleChange}
              name="password"
              required
            />
            <CustomButton type="submit">Login</CustomButton>
            Or
            <CustomButton isGoogleSignIn>
              <div className="container">
                <img src={googleLogo} alt="" />
                <span className="btn-txt">Continue with Google</span>
              </div>
            </CustomButton>
          </form>

          <p className="login__cta">
            Don&apos;t have an account? <Link to="/signup">Sign up now.</Link>
          </p>
        </div>

        <div
          className="right"
          style={{
            backgroundImage: `url(${banner})`,
            backgroundSize: "cover",
            width: "46vw",
            marginLeft: "auto",
          }}
        />
      </div>
    );
  }
}

export default LogIn;