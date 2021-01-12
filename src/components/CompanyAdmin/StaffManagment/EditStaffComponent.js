import React from 'react';
import { Link } from 'react-router-dom'
import $ from 'jquery'
class EditStaffComponent extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<>
				<section className="page-wrapper">
					<div className="container-fluid">
						<div className="custom-panel">
							<div className="panel-head">Edit Staff</div>
							<div className="panel-body scroll-bar-style scroll-bar-height">
								<div className="form-view">
									<div className="row">
										<div className="col-lg-4 col-md-6 col-xs-12">
											<div className="form-group">
												<label>Role:*</label>
												<select className="form-control">
													<option>Manager</option>
													<option>Manager</option>
													<option>Manager</option>
												</select>
											</div>
										</div>
										<div className="col-lg-4 col-md-6 col-xs-12">
											<div className="form-group">
												<label>Name:*</label>
												<input type="text" className="form-control" name="" placeholder="Contact Name" />
											</div>
										</div>
										<div className="col-lg-4 col-md-6 col-xs-12">
											<div className="form-group">
												<label>Phone Number:*</label>
												<input type="text" className="form-control" name="" placeholder="Phone Number" />
											</div>
										</div>
										<div className="col-lg-4 col-md-6 col-xs-12">
											<div className="form-group">
												<label>Email:*</label>
												<input type="email" className="form-control" name="" placeholder="Email" />
											</div>
										</div>
										<div className="col-lg-4 col-md-6 col-xs-12">
											<div className="form-group">
												<label>Password:*</label>
												<input type="password" className="form-control" name="" placeholder="Password" />
											</div>
										</div>
										<div className="col-lg-4 col-md-6 col-xs-12">
											<div className="form-group">
												<label>Confirm Password:*</label>
												<input type="password" className="form-control" name="" placeholder="Confirm Password" />
											</div>
										</div>
										<div className="col-lg-4 col-md-6 col-xs-12">
											<div className="form-group">
												<label>State:</label>
												<select className="form-control">
													<option>California</option>
													<option>California</option>
													<option>California</option>
												</select>
											</div>
										</div>
										<div className="col-lg-4 col-md-6 col-xs-12">
											<div className="form-group">
												<label>County:</label>
												<select className="form-control">
													<option>California - Albany, California - Butte County, 494 More</option>
													<option>California - Albany, California - Butte County, 494 More</option>
													<option>California - Albany, California - Butte County, 494 More</option>
												</select>
											</div>
										</div>
										<div className="col-lg-4 col-md-6 col-xs-12">
											<div className="form-group">
												<label>Active</label>
												<div className="day-radiobtn">
													<div className="custom-radio">
														<div className="radio-group">
															<input type="radio" id="test1" name="radio-group" checked />
															<label for="test1">Yes</label>
														</div>
														<div className="radio-group">
															<input type="radio" id="test2" name="radio-group" />
															<label for="test2">No</label>
														</div>
													</div>

												</div>
											</div>
										</div>

									</div>
								</div>
							</div>
							<div className="panel-footer">
								<div className="action-button">
									<button className="btn white-line">Cancel</button>
									<button className="btn blue-btn" style={{ "background": "#1B67B4", "color": "#fff" }}>Save</button>
								</div>
							</div>
						</div>
					</div>
				</section>


			</>
		)
	}
}

export default EditStaffComponent;
