import React from 'react';
import { Link } from 'react-router-dom'

class ProfileComponent extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<>
				<section className="page-wrapper">
	<div className="container-fluid">
		<div className="custom-panel">
			<div className="panel-head">My Profile</div>
			<div className="panel-body scroll-bar-style scroll-bar-height">
				<div className="form-view">
					<div className="row">
						<div className="col-lg-4 col-md-6 col-xs-12">
							<div className="form-group">
								<label>Company Name:*</label>
								<input type="text" className="form-control" name="" value="Alexander & Baldwin" placeholder="Company Name"/>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-xs-12">
							<div className="form-group">
								<label>Contact Name:*</label>
								<input type="text" className="form-control" name="" value="Alexander" placeholder="Contact Name"/>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-xs-12">
							<div className="form-group">
								<label>Phone Number:*</label>
								<input type="text" className="form-control" name="" value="9857851581" placeholder="Phone Number"/>
							</div>
						</div>
					</div>
					<div className="row">	
						<div className="col-lg-4 col-md-6 col-xs-12">
							<div className="form-group">
								<label>Email:*</label>
								<input type="email" className="form-control" name="" value="alexander@gmail.com" placeholder="Email"/>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-xs-12">
							<div className="form-group">
								<label>Password:*</label>
								<input type="password" className="form-control" name="" value="******" placeholder="Password"/>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-xs-12">
							<div className="form-group">
								<label>Confirm Password:*</label>
								<input type="password" className="form-control" name="" value="******" placeholder="Confirm Password"/>
							</div>
						</div>
					</div>

					<div className="row">	
						<div className="col-lg-4 col-md-6 col-xs-12">
							<div className="form-group"> 
								<label>Default State:</label>
							 	<select className="form-control" >
								 	<option>California</option>
								 	<option>Florida</option>
								 	<option>Florida</option>
								 	<option>Florida</option>
							 	</select>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-xs-12">
							<div className="form-group"> 
								<label>Default County:</label>
							 	<select className="form-control" >
								 	<option>California</option>
								 	<option>Florida</option>
								 	<option>Florida</option>
								 	<option>Florida</option>
							 	</select>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-xs-12">
							<div className="form-group custom-input">
								<label>Custom URL:*</label>
								<div className="input-group mb-3">
								  	<input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
							  		<div className="input-group-append"> <button className="btn" type="button"><i className="icon-save"></i></button></div>
							  		<span className="url">https://pestcontrolcalculator.com/Pestcontrol</span>
								</div>
							</div>
						</div>
					</div>				


					<div className="row">
						<div className="col-lg-4 col-md-6 col-xs-12">
							<div className="form-group color-picker">
				              <label>Theme Color:</label>
				              <input type="text" className="form-control demo"  value="#1B67B4"/>
				            </div>
						</div>
						<div className="col-lg-4 col-md-6 col-xs-12">
							<div className="form-group color-picker">
				              <label>Link Color / Text Color:</label>
				              <input type="text" className="form-control demo"  value="#FF3F3F"/>
				            </div>
						</div>
						<div className="col-lg-4 col-md-6 col-xs-12">
							<div className="form-group color-picker">
				              <label>Button Background Color:</label>
				              <input type="text" className="form-control demo"  value="#1B67B4"/>
				            </div>
						</div>
					</div>

					<div className="row">
						<div className="col-lg-4 col-md-6 col-xs-12">
							<div className="form-group color-picker">
				              <label>Button Text Color:</label>
				              <input type="text" className="form-control demo"  value="#1B67B4"/>
				            </div>
						</div>
						<div className="col-lg-4 col-md-6 col-xs-12">
							<div className="form-group">
				              <label>Link Color / Text Color:</label>
				              <input type="file" className="form-control"/>
				            </div>
				            <div className="file-logo"><img src="/content/images/logo.png" /></div>
						</div>
					</div>

				</div>	
			</div>
			<div className="panel-footer">
				<div className="action-button">
					<div className="left-list">
						<button className="btn white-line">Cancel</button>
					</div>
					<div className="right-list">
						<button className="btn blue-btn">Save</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>


			</>
		)
	}
}

export default ProfileComponent;
