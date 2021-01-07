import React from 'react'
import { Link } from 'react-router-dom'
class SignUpComponent extends React.Component {
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
			<h1 style={{"color": "#1B67B4"}}>Sign Up</h1>
			<div className="form-group">
				<label>Email:*</label>
				<input type="email" name="" className="form-control" placeholder="Email"/>
			</div>
			<div className="form-group">
				<label>Password:*</label>
				<input type="password" name="" className="form-control" placeholder="Password"/>
			</div>
			<div className="form-group">
				<label>Confirm Password:*</label>
				<input type="password" name="" className="form-control" placeholder="Confirm Password"/>
			</div>
			<div className="form-group">
				<label>Company Name:*</label>
				<input type="text" name="" className="form-control" placeholder="Company Name"/>
			</div>
			<div className="form-group">
				<label>Contact Name:*</label>
				<input type="text" name="" className="form-control" placeholder="Contact Name"/>
			</div>
			<div className="form-group">
				<label>Phone Number:*</label>
				<input type="text" name="" className="form-control" placeholder="Phone Number"/>
			</div>
			<div className="form-group">
				<button className="btn login-btn" style={{"background": "#1B67B4", "color": "#fff"}}>Sign Up</button>
			</div>

			<div className="bottom-link">
				Already Have an Account? <Link style={{"color": "#1B67B4"}} to="/">Sign In</Link>
			</div>
		</div>
	</div>
</section>

      </>
      )
}
}
export default SignUpComponent
