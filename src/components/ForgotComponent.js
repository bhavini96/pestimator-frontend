import React from 'react'
import { Link } from 'react-router-dom'
import { history } from "../helpers/history";
class ForgotComponent extends React.Component {
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
			<h1>Forgot Password</h1>
			<div className="form-group">
				<label>Email:*</label>
				<input type="email" name="" className="form-control" placeholder="Email"/>
			</div>
			<div className="form-group">
				<button className="btn login-btn">Reset Password</button>
			</div>
			<div className="bottom-link">
				<Link to="/">Sign In</Link>
			</div>
		</div>
	</div>
</section>
      </>
      )
}
}
export default ForgotComponent
