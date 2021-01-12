import React from 'react';
import { Link } from 'react-router-dom'
class StateListComponent extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
        <>
        <section className="page-wrapper">
        <div className="container-fluid">
            <div className="custom-panel">
                <div className="panel-head">States</div>
                <div className="tool-box">
                    <div className="tool-list">
                        {/* <!-- <a href="createcompany.html" className="btn add-button"><i className="icon-plus-icon"></i></a> --> */}
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
                                    <th>State</th>
                                    <th className="test">State Tax Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <ul className="action">
                                            <li className="box edit"><a data-toggle="modal" href=".right-modal"><i className="icon-edit"></i></a></li>
                                            <li className="icon"><Link to="/county"><i className="icon-location-marker"></i></Link></li>
                                        </ul>
                                    </td>
                                    <td>Alaska</td>
                                    <td>5.0%</td>
                                </tr>
                                <tr>
                                    <td>
                                        <ul className="action">
                                            <li className="box edit"><a data-toggle="modal" href=".right-modal"><i className="icon-edit"></i></a></li>
                                            <li className="icon"><a href="county-management.html"><i className="icon-location-marker"></i></a></li>
                                        </ul>
                                    </td>
                                    <td>Arizona</td>
                                    <td>12.0%</td>
                                </tr>
                                <tr>
                                    <td>
                                        <ul className="action">
                                            <li className="box edit"><a data-toggle="modal" href=".right-modal"><i className="icon-edit"></i></a></li>
                                            <li className="icon"><a href="county-management.html"><i className="icon-location-marker"></i></a></li>
                                        </ul>
                                    </td>
                                    <td>California</td>
                                    <td>10.0%</td>
                                </tr>
                                <tr>
                                    <td>
                                        <ul className="action">
                                            <li className="box edit"><a data-toggle="modal" href=".right-modal"><i className="icon-edit"></i></a></li>
                                            <li className="icon"><a href="county-management.html"><i className="icon-location-marker"></i></a></li>
                                        </ul>
                                    </td>
                                    <td>California</td>
                                    <td>10.0%</td>
                                </tr>
                                <tr>
                                    <td>
                                        <ul className="action">
                                            <li className="box edit"><a data-toggle="modal" href=".right-modal"><i className="icon-edit"></i></a></li>
                                            <li className="icon"><a href="county-management.html"><i className="icon-location-marker"></i></a></li>
                                        </ul>
                                    </td>
                                    <td>California</td>
                                    <td>10.0%</td>
                                </tr>
                                <tr>
                                    <td>
                                        <ul className="action">
                                            <li className="box edit"><a data-toggle="modal" href=".right-modal"><i className="icon-edit"></i></a></li>
                                            <li className="icon"><a href="county-management.html"><i className="icon-location-marker"></i></a></li>
                                        </ul>
                                    </td>
                                    <td>California</td>
                                    <td>10.0%</td>
                                </tr>
                                <tr>
                                    <td>
                                        <ul className="action">
                                            <li className="box edit"><a data-toggle="modal" href=".right-modal"><i className="icon-edit"></i></a></li>
                                            <li className="icon"><a href="county-management.html"><i className="icon-location-marker"></i></a></li>
                                        </ul>
                                    </td>
                                    <td>California</td>
                                    <td>10.0%</td>
                                </tr>
                                <tr>
                                    <td>
                                        <ul className="action">
                                            <li className="box edit"><a data-toggle="modal" href=".right-modal"><i className="icon-edit"></i></a></li>
                                            <li className="icon"><a href="county-management.html"><i className="icon-location-marker"></i></a></li>
                                        </ul>
                                    </td>
                                    <td>California</td>
                                    <td>10.0%</td>
                                </tr>
                                <tr>
                                    <td>
                                        <ul className="action">
                                            <li className="box edit"><a data-toggle="modal" href=".right-modal"><i className="icon-edit"></i></a></li>
                                            <li className="icon"><a href="county-management.html"><i className="icon-location-marker"></i></a></li>
                                        </ul>
                                    </td>
                                    <td>California</td>
                                    <td>10.0%</td>
                                </tr>
                                <tr>
                                    <td>
                                        <ul className="action">
                                            <li className="box edit"><a data-toggle="modal" href=".right-modal"><i className="icon-edit"></i></a></li>
                                            <li className="icon"><a href="county-management.html"><i className="icon-location-marker"></i></a></li>
                                        </ul>
                                    </td>
                                    <td>California</td>
                                    <td>10.0%</td>
                                </tr>
                                <tr>
                                    <td>
                                        <ul className="action">
                                            <li className="box edit"><a data-toggle="modal" href=".right-modal"><i className="icon-edit"></i></a></li>
                                            <li className="icon"><a href="county-management.html"><i className="icon-location-marker"></i></a></li>
                                        </ul>
                                    </td>
                                    <td>California</td>
                                    <td>10.0%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>	
                </div>
            </div>
        </div>
    </section>
    <div className="modal fade comman-modal right-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  	<div className="modal-dialog modal-lg" role="document">
	    <div className="modal-content">
	      	<div className="modal-header">
		        <h5 className="modal-title" id="exampleModalLongTitle">California</h5>
		        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
	      	</div>
	      	<div className="modal-body scroll-bar-style">
				<div className="form-group"> 
					<label>State Tax</label>
				 	<input type="text" className="form-control" name="" value="5.0%"/>
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

export default StateListComponent;
