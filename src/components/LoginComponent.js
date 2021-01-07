import React from 'react'
import { Link } from 'react-router-dom'
import { history } from "../helpers/history";
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
            <div className="forgot-pass"><Link to="/forgot">Forgot Password?</Link></div>
            <div className="form-group">
              <button className="btn login-btn" onClick={e=>{history.push('/company')}}>Sign In</button>
            </div>
            <div className="bottom-link">
              Do Not Have an Account? <Link to="signup">Sign Up</Link>
            </div>
          </div>
        </div>
      </section>
      </>
      )
}
}
export default LoginComponent
