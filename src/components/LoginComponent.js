import React from 'react'

class LoginComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
      return (
        <>
        <section className="login-register">
        <div className="inner-screen">
          <div className="logo"><img src="/content/images/logo.png"/></div>
          <div className="white-box">
            <h1>Sign In</h1>
            <div className="form-group">
              <label>Email:*</label>
              <input type="email" name="" className="form-control" placeholder="Email"/>
            </div>
            <div className="form-group">
              <label>Password:*</label>
              <input type="password" name="" className="form-control" placeholder="Password"/>
            </div>
            <div className="forgot-pass"><a href="forgot-password.html">Forgot Password?</a></div>
            <div className="form-group">
              <button className="btn login-btn">Sign In</button>
            </div>
            <div className="bottom-link">
              Do Not Have an Account? <a href="">Sign Up</a>
            </div>
          </div>
        </div>
      </section>
      </>
      )
}
}
export default LoginComponent
