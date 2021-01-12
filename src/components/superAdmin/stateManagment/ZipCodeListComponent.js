import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import _ from 'lodash'
import getZipAction from "../../../actions/stateManagment/getZipAction";

class ZipCodeListComponent extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			skip: 0,
			limit: 10,
			sort_key: 'zipcode',
			sort_type: 1
		}
	}
	componentDidMount() {
		const { skip, limit, sort_key, sort_type } = this.state
		var urlParameters = '?skip=' + skip + '&limit=' + limit + '&sort_key=' + sort_key + '&sort_type=' + sort_type
		this.props.getZipAction(urlParameters);
	}
	render() {
		console.log("this.props ", this.props);
		let ziplist = _.get(this, ['props', 'state', 'stateManagmentReducer', 'zipData', 'data'], [])
		let stateName = (ziplist.length?ziplist[0].state_docs.state_name:'')
		let stateId = (ziplist.length?ziplist[0].state_docs._id:'')
		return (
			<>
				<section className="page-wrapper">
					<div className="container-fluid">
						<div className="custom-panel">
							<div className="panel-head">
								<nav aria-label="breadcrumb">
									<ol className="breadcrumb">
										<li className="breadcrumb-item"><Link to="/state">State: {_.get(this, 'props.match.params.statename')}</Link></li>
										<li className="breadcrumb-item"><Link to={"/county/"+stateName+"/"+stateId}>County: {_.get(this, 'props.match.params.countyname')}</Link></li>
										<li className="breadcrumb-item active" aria-current="page">Zip Codes</li>
									</ol>
								</nav>
							</div>
							<div className="tool-box">
								<div className="tool-list">
									<a data-toggle="modal" href=".add-zip-code" className="btn add-button"><i className="icon-plus-icon"></i></a>
								</div>
								<div className="search-box">
									<div className="search"><input type="search" name="" id="searchbox" placeholder="Search" />
										<button className="btn"><i className="icon-search"></i></button></div>
								</div>
							</div>
							{ziplist.length ?
								<div className="panel-body">
									<div className="comman-datatable">
										<table id="customize-datatable" className="table table-striped " style={{ "width": "100%" }}>
											<thead>
												<tr>
													<th>Action</th>
													<th>Zip Code</th>
													<th>City</th>
													<th>Tax Rate</th>
												</tr>
											</thead>
											<tbody>
												{ziplist.map((value, key) => {
													return(
													<tr key={key}>
														<td>
															<ul className="action">
																<li className="box edit"><a data-toggle="modal" href=".right-modal"><i className="icon-edit"></i></a></li>
															</ul>
														</td>
														<td>{value.zipcode}</td>
														<td>{value.city_name}</td>
														<td>{value.zipcode_tax_rate}%</td>
													</tr>
													)
												})}


											</tbody>
										</table>
									</div>
								</div>

								:
								<div class="scroll-bar-style scroll-bar-height">
									<div class="screen-center">

										<p>No record found</p>
									</div>
								</div>
							}

						</div>
					</div>
				</section>


				<div className="modal fade comman-modal right-modal add-zip-code" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
					<div className="modal-dialog modal-lg" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalLongTitle">Add Zip Code</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body scroll-bar-style">
								<div className="form-group">
									<label>States</label>
									<select className="form-control" disabled="disabled">
										<option>California</option>
										<option>Florida</option>
										<option>Florida</option>
										<option>Florida</option>
									</select>
								</div>
								<div className="form-group">
									<label>County</label>
									<select className="form-control" disabled="disabled">
										<option>Alameda County</option>
										<option>Florida</option>
										<option>Florida</option>
										<option>Florida</option>
									</select>
								</div>
								<div className="form-group">
									<label>Zip Code</label>
									<input type="text" className="form-control" name="" value="362526" />
								</div>
								<div className="form-group">
									<label>City</label>
									<input type="text" className="form-control" name="" value="Albany" />
								</div>
								<div className="form-group">
									<label>Tax Rate</label>
									<input type="text" className="form-control" name="" value="5.0%" />
								</div>

							</div>
							<div className="modal-footer">
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
				</div>

				<div className="modal fade comman-modal right-modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
					<div className="modal-dialog modal-lg" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalLongTitle">Edit Zip Code</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body scroll-bar-style">
								<div className="form-group">
									<label>States</label>
									<select className="form-control" disabled="disabled">
										<option>California</option>
										<option>Florida</option>
										<option>Florida</option>
										<option>Florida</option>
									</select>
								</div>
								<div className="form-group">
									<label>County</label>
									<select className="form-control" disabled="disabled">
										<option>Alameda County</option>
										<option>Florida</option>
										<option>Florida</option>
										<option>Florida</option>
									</select>
								</div>
								<div className="form-group">
									<label>Zip Code</label>
									<input type="text" className="form-control" name="" value="362526" />
								</div>
								<div className="form-group">
									<label>City</label>
									<input type="text" className="form-control" name="" value="Albany" />
								</div>
								<div className="form-group">
									<label>County Tax</label>
									<input type="text" className="form-control" name="" value="5.0%" />
								</div>

							</div>
							<div className="modal-footer">
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
				</div>

			</>
		)
	}
}
function mapStateToProps(state) {
	console.log("zip list map state ", state);
	return { state }
}
const actionCreators = {
	getZipAction: getZipAction,
}
export default connect(mapStateToProps, actionCreators)(ZipCodeListComponent)

