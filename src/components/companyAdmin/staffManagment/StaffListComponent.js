import React from 'react';
import { Link } from 'react-router-dom'
import $ from "jquery";


class StaffListComponent extends React.Component {
  constructor() {
    super()
  }
  
  render() {
    return (
        <>
            <section className="page-wrapper">
	<div className="container-fluid">
		<div className="custom-panel">
			<div className="panel-head">Staff</div>
			<div className="tool-box">
				<div className="tool-list">
					{/* <!-- <button className="btn add-button"><i className="icon-plus-icon"></i></button> --> */}
					<Link className="btn add-button" to="/addstaff"><i className="icon-plus-icon"></i></Link>
				</div>
				<div className="search-box">
					
					<div className="search"><input type="search" name="" id="searchbox" placeholder="Search"/>
					<button className="btn"><i className="icon-search"></i></button></div>
				</div>
			</div>
			<div className="panel-body">
				<div className="comman-datatable">
					<table id="customize-datatable" className="table table-striped " style={{"width":"100%"}}>
				        <thead>
				            <tr>
				                <th>Action</th>
				                <th>Role</th>
				                <th>Name</th>
				                <th>Phone Number</th>
				                <th>Email</th>
				                <th>Date Created</th>
				                <th>Status</th>
				            </tr>
				        </thead>
				        <tbody>
				          
				            <tr>
				                <td>
				                	<ul className="action">
				                		<li className="box edit"><Link to="/editstaff"><i className="icon-edit"></i></Link></li>
				                		<li className="box delete"><a href="#"><i className="icon-close"></i></a></li>
				                	</ul>
				                </td>
				                <td>Sales Associate</td>
				                <td>Jesse E. Smith</td>
				                <td>1234567890</td>
				                <td>JesseESmith@teleworm.us</td>
				                <td>2020-11-18</td>
				                <td>
				                	<div className="active"><span></span>Active</div>
				                </td>
				            </tr>
				            <tr>
				                <td>
				                	<ul className="action">
				                		<li className="box edit"><a href="company-admin-add-staff.html"><i className="icon-edit"></i></a></li>
				                		<li className="box delete"><a href="#"><i className="icon-close"></i></a></li>
				                	</ul>
				                </td>
				                <td>Sales Associate</td>
				                <td>Jesse E. Smith</td>
				                <td>1234567890</td>
				                <td>JesseESmith@teleworm.us</td>
				                <td>2020-11-18</td>
				                <td>
				                	<div className="active"><span></span>Active</div>
				                </td>
				            </tr>
				            <tr>
				                <td>
				                	<ul className="action">
				                		<li className="box edit"><a href="company-admin-add-staff.html"><i className="icon-edit"></i></a></li>
				                		<li className="box delete"><a href="#"><i className="icon-close"></i></a></li>
				                	</ul>
				                </td>
				                <td>Sales Associate</td>
				                <td>Jesse E. Smith</td>
				                <td>1234567890</td>
				                <td>JesseESmith@teleworm.us</td>
				                <td>2020-11-18</td>
				                <td>
				                	<div className="active"><span></span>Active</div>
				                </td>
				            </tr>
				            <tr>
				                <td>
				                	<ul className="action">
				                		<li className="box edit"><a href="company-admin-add-staff.html"><i className="icon-edit"></i></a></li>
				                		<li className="box delete"><a href="#"><i className="icon-close"></i></a></li>
				                	</ul>
				                </td>
				                <td>Sales Associate</td>
				                <td>Jesse E. Smith</td>
				                <td>1234567890</td>
				                <td>JesseESmith@teleworm.us</td>
				                <td>2020-11-18</td>
				                <td>
				                	<div className="active"><span></span>Active</div>
				                </td>
				            </tr>
				            <tr>
				                <td>
				                	<ul className="action">
				                		<li className="box edit"><a href="company-admin-add-staff.html"><i className="icon-edit"></i></a></li>
				                		<li className="box delete"><a href="#"><i className="icon-close"></i></a></li>
				                	</ul>
				                </td>
				                <td>Sales Associate</td>
				                <td>Jesse E. Smith</td>
				                <td>1234567890</td>
				                <td>JesseESmith@teleworm.us</td>
				                <td>2020-11-18</td>
				                <td>
				                	<div className="active"><span></span>Active</div>
				                </td>
				            </tr>
				            <tr>
				                <td>
				                	<ul className="action">
				                		<li className="box edit"><a href="company-admin-add-staff.html"><i className="icon-edit"></i></a></li>
				                		<li className="box delete"><a href="#"><i className="icon-close"></i></a></li>
				                	</ul>
				                </td>
				                <td>Sales Associate</td>
				                <td>Jesse E. Smith</td>
				                <td>1234567890</td>
				                <td>JesseESmith@teleworm.us</td>
				                <td>2020-11-18</td>
				                <td>
				                	<div className="active"><span></span>Active</div>
				                </td>
				            </tr>
				            <tr>
				                <td>
				                	<ul className="action">
				                		<li className="box edit"><a href="company-admin-add-staff.html"><i className="icon-edit"></i></a></li>
				                		<li className="box delete"><a href="#"><i className="icon-close"></i></a></li>
				                	</ul>
				                </td>
				                <td>Sales Associate</td>
				                <td>Jesse E. Smith</td>
				                <td>1234567890</td>
				                <td>JesseESmith@teleworm.us</td>
				                <td>2020-11-18</td>
				                <td>
				                	<div className="inactive"><span></span>Inactive</div>
				                </td>
				            </tr>
				            <tr>
				                <td>
				                	<ul className="action">
				                		<li className="box edit"><a href="company-admin-add-staff.html"><i className="icon-edit"></i></a></li>
				                		<li className="box delete"><a href="#"><i className="icon-close"></i></a></li>
				                	</ul>
				                </td>
				                <td>Sales Associate</td>
				                <td>Jesse E. Smith</td>
				                <td>1234567890</td>
				                <td>JesseESmith@teleworm.us</td>
				                <td>2020-11-18</td>
				                <td>
				                	<div className="inactive"><span></span>Inactive</div>
				                </td>
				            </tr>
				            <tr>
				                <td>
				                	<ul className="action">
				                		<li className="box edit"><a href="company-admin-add-staff.html"><i className="icon-edit"></i></a></li>
				                		<li className="box delete"><a href="#"><i className="icon-close"></i></a></li>
				                	</ul>
				                </td>
				                <td>Sales Associate</td>
				                <td>Jesse E. Smith</td>
				                <td>1234567890</td>
				                <td>JesseESmith@teleworm.us</td>
				                <td>2020-11-18</td>
				                <td>
				                	<div className="inactive"><span></span>Inactive</div>
				                </td>
				            </tr>
				            <tr>
				                <td>
				                	<ul className="action">
				                		<li className="box edit"><a href="company-admin-add-staff.html"><i className="icon-edit"></i></a></li>
				                		<li className="box delete"><a href="#"><i className="icon-close"></i></a></li>
				                	</ul>
				                </td>
				                <td>Sales Associate</td>
				                <td>Jesse E. Smith</td>
				                <td>1234567890</td>
				                <td>JesseESmith@teleworm.us</td>
				                <td>2020-11-18</td>
				                <td>
				                	<div className="inactive"><span></span>Inactive</div>
				                </td>
				            </tr>
				        </tbody>
				    </table>
			    </div>	
			</div>
			{/* <!-- <div className="panel-footer">
				<div className="action-button">
					<button className="btn white-line">Cancel</button>
					<button className="btn blue-btn">Save</button>
				</div>
			</div> --> */}
		</div>
	</div>
</section>


        </>
    )
  }
}

export default StaffListComponent;
