import React from 'react';
import { Link } from 'react-router-dom'

class CompanyListComponent extends React.Component {
  constructor() {
    super()
  }
  componentDidMount(){
  
    // $(':root').css('--theme-color', '#346304');
    // $(':root').css('--link-color', '#02ccf7');
    // $(':root').css('--button-bg', '#6765ff');
    // $(':root').css('--button-text-color', '#346304');
  }
  render() {
    return (
        <section className="page-wrapper">
        <div className="container-fluid">
            <div className="custom-panel">
                <div className="panel-head">Companies</div>
                <div className="tool-box">
                    <div className="tool-list">
                    <Link to="/addcompany" className="btn add-button"><i className="icon-plus-icon"></i></Link>
                       
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
                                    <th>Company Name</th>
                                    <th>Contact Name</th>
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
                                            <li className="box edit">
                                            <Link to="/editcompany" ><i className="icon-edit"></i></Link>
                                            </li>
                                            <li className="icon"><Link to="/coveragecompany"><i className="icon-location-marker"></i></Link></li>
                                            <li className="icon"><a href="#"><i className="icon-spect-profile-details"></i></a></li>	
                                            
                                        </ul>
                                    </td>
                                    <td>Alexander & Baldwin</td>
                                    <td>Aaron</td>
                                    <td>9925699450</td>
                                    <td>alexander@gmail.com</td>
                                    <td>2020-11-18</td>
                                    <td>
                                        <div className="active"><span></span>Active</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <ul className="action">
                                            <li className="box edit"><a href="edit-company-profile.html"><i className="icon-edit"></i></a></li>
                                            <li className="icon"><a href="after-save-compnay-coverage.html"><i className="icon-location-marker"></i></a></li>
                                            <li className="icon"><a href="#"><i className="icon-spect-profile-details"></i></a></li>	
                                            
                                        </ul>
                                    </td>
                                    <td>jayesh</td>
                                    <td>Aaron</td>
                                    <td>9925699450</td>
                                    <td>alexander@gmail.com</td>
                                    <td>2020-11-18</td>
                                    <td>
                                        <div className="active"><span></span>Active</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <ul className="action">
                                            <li className="box edit"><a href="edit-company-profile.html"><i className="icon-edit"></i></a></li>
                                            <li className="icon"><a href="after-save-compnay-coverage.html"><i className="icon-location-marker"></i></a></li>
                                            <li className="icon"><a href="#"><i className="icon-spect-profile-details"></i></a></li>	
                                            
                                        </ul>
                                    </td>
                                    <td>Alexander & Baldwin</td>
                                    <td>Aaron</td>
                                    <td>9925699450</td>
                                    <td>alexander@gmail.com</td>
                                    <td>2020-11-18</td>
                                    <td>
                                        <div className="active"><span></span>Active</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <ul className="action">
                                            <li className="box edit"><a href="edit-company-profile.html"><i className="icon-edit"></i></a></li>
                                            <li className="icon"><a href="after-save-compnay-coverage.html"><i className="icon-location-marker"></i></a></li>
                                            <li className="icon"><a href="#"><i className="icon-spect-profile-details"></i></a></li>	
                                            
                                        </ul>
                                    </td>
                                    <td>Alexander & Baldwin</td>
                                    <td>Aaron</td>
                                    <td>9925699450</td>
                                    <td>alexander@gmail.com</td>
                                    <td>2020-11-18</td>
                                    <td>
                                        <div className="active"><span></span>Active</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <ul className="action">
                                            <li className="box edit"><a href="edit-company-profile.html"><i className="icon-edit"></i></a></li>
                                            <li className="icon"><a href="after-save-compnay-coverage.html"><i className="icon-location-marker"></i></a></li>
                                            <li className="icon"><a href="#"><i className="icon-spect-profile-details"></i></a></li>	
                                            
                                        </ul>
                                    </td>
                                    <td>Alexander & Baldwin</td>
                                    <td>Aaron</td>
                                    <td>9925699450</td>
                                    <td>alexander@gmail.com</td>
                                    <td>2020-11-18</td>
                                    <td>
                                        <div className="active"><span></span>Active</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <ul className="action">
                                            <li className="box edit"><a href="edit-company-profile.html"><i className="icon-edit"></i></a></li>
                                            <li className="icon"><a href="after-save-compnay-coverage.html"><i className="icon-location-marker"></i></a></li>
                                            <li className="icon"><a href="#"><i className="icon-spect-profile-details"></i></a></li>	
                                            
                                        </ul>
                                    </td>
                                    <td>Alexander & Baldwin</td>
                                    <td>Aaron</td>
                                    <td>9925699450</td>
                                    <td>alexander@gmail.com</td>
                                    <td>2020-11-18</td>
                                    <td>
                                        <div className="active"><span></span>Active</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <ul className="action">
                                            <li className="box edit"><a href="edit-company-profile.html"><i className="icon-edit"></i></a></li>
                                            <li className="icon"><a href="after-save-compnay-coverage.html"><i className="icon-location-marker"></i></a></li>
                                            <li className="icon"><a href="#"><i className="icon-spect-profile-details"></i></a></li>	
                                            
                                        </ul>
                                    </td>
                                    <td>Alexander & Baldwin</td>
                                    <td>Aaron</td>
                                    <td>9925699450</td>
                                    <td>alexander@gmail.com</td>
                                    <td>2020-11-18</td>
                                    <td>
                                        <div className="active"><span></span>Active</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <ul className="action">
                                            <li className="box edit"><a href="edit-company-profile.html"><i className="icon-edit"></i></a></li>
                                            <li className="icon"><a href="after-save-compnay-coverage.html"><i className="icon-location-marker"></i></a></li>
                                            <li className="icon"><a href="#"><i className="icon-spect-profile-details"></i></a></li>	
                                            
                                        </ul>
                                    </td>
                                    <td>Alexander & Baldwin</td>
                                    <td>Aaron</td>
                                    <td>9925699450</td>
                                    <td>alexander@gmail.com</td>
                                    <td>2020-11-18</td>
                                    <td>
                                        <div className="active"><span></span>Active</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <ul className="action">
                                            <li className="box edit"><a href="edit-company-profile.html"><i className="icon-edit"></i></a></li>
                                            <li className="icon"><a href="after-save-compnay-coverage.html"><i className="icon-location-marker"></i></a></li>
                                            <li className="icon"><a href="#"><i className="icon-spect-profile-details"></i></a></li>	
                                            
                                        </ul>
                                    </td>
                                    <td>Alexander & Baldwin</td>
                                    <td>Aaron</td>
                                    <td>9925699450</td>
                                    <td>alexander@gmail.com</td>
                                    <td>2020-11-18</td>
                                    <td>
                                        <div className="inactive"><span></span>Inactive</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <ul className="action">
                                            <li className="box edit"><a href="edit-company-profile.html"><i className="icon-edit"></i></a></li>
                                            <li className="icon"><a href="after-save-compnay-coverage.html"><i className="icon-location-marker"></i></a></li>
                                            <li className="icon"><a href="#"><i className="icon-spect-profile-details"></i></a></li>	
                                            
                                        </ul>
                                    </td>
                                    <td>Alexander & Baldwin</td>
                                    <td>Aaron</td>
                                    <td>9925699450</td>
                                    <td>alexander@gmail.com</td>
                                    <td>2020-11-18</td>
                                    <td>
                                        <div className="inactive"><span></span>Inactive</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <ul className="action">
                                            <li className="box edit"><a href="edit-company-profile.html"><i className="icon-edit"></i></a></li>
                                            <li className="icon"><a href="after-save-compnay-coverage.html"><i className="icon-location-marker"></i></a></li>
                                            <li className="icon"><a href="#"><i className="icon-spect-profile-details"></i></a></li>	
                                            
                                        </ul>
                                    </td>
                                    <td>Alexander & Baldwin</td>
                                    <td>Aaron</td>
                                    <td>9925699450</td>
                                    <td>alexander@gmail.com</td>
                                    <td>2020-11-18</td>
                                    <td>
                                        <div className="inactive"><span></span>Inactive</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>	
                </div>
                <div className="panel-footer">
                    <div className="action-button">
                        <button className="btn white-line">Cancel</button>
                        <button className="btn blue-btn">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    )
  }
}

export default CompanyListComponent;
