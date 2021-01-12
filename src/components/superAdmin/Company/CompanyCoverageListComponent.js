import React from 'react';
import { Link } from 'react-router-dom'
class CompanyCoverageListComponent extends React.Component {
    constructor() {
        super()
        this.state={
            dropdownOpen:{'counties':false,'states':false, 'zip':false}
        }
    }
    handleDropdownChange=(e,type)=>{
        let dropdownOpen = this.state.dropdownOpen
       
            for (let i in dropdownOpen)
            {
               
                if(i == type){
                    dropdownOpen[type]=!dropdownOpen[type]
                }else{
                    dropdownOpen[i] = false
                }
            }
        
        this.setState({dropdownOpen:dropdownOpen})
    }
    render() {
        console.log("this.state ",this.state);
        let {dropdownOpen}=this.state
        return (
            <>
                <section className="page-wrapper">
                    <div className="container-fluid">
                        <div className="custom-panel">
                            <div className="panel-head">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="createcompany.html">Company: Alexander & Baldwin</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Coverage</li>
                                    </ol>
                                </nav>
                            </div>
                            <div className="tool-box">
                                <div className="tool-list">
                                    {/* <!-- <a href="createcompany.html" className="btn add-button"><i className="icon-plus-icon"></i></a> --> */}
                                    <button className="btn add-button" data-toggle="modal" data-target=".right-modal"> <i className="icon-plus-icon"></i> </button>
                                    <button className="btn icon"> <i className="icon-trash"></i> </button>

                                </div>
                                <div className="search-box">

                                    <div className="search"><input type="search" name="" id="searchbox" placeholder="Search" />
                                        <button className="btn"><i className="icon-search"></i></button></div>
                                </div>
                            </div>
                            <div className="panel-body">
                                {/* <!--No Coverage Available --> */}
                                <div className="scroll-bar-style scroll-bar-height" style={{"display":"none"}}>
                                    <div className="screen-center">
                                        <button className="btn white-line" data-toggle="modal" data-target=".right-modal">Add Coverage</button>
                                        <p>There is No Coverage to Display</p>
                                    </div>
                                </div>
                                {/* <!--End Coverage Available --> */}
                                {/* <!--Coverage Available --> */}
                                <div className="inner-panel-body">
                                    <div className="comman-datatable">
                                        <table id="customize-datatable" className="table table-striped " style={{"width":"100%"}}>
                                            <thead>
                                                <tr>
                                                    <th>
                                                        <label className="checkboxe">
                                                            <input type="checkbox" name="login-check"  /> <span className="checkmark"></span>
                                                        </label>
                                                    </th>
                                                    <th>State</th>
                                                    <th>State Tax Rate</th>
                                                    <th>County</th>
                                                    <th>County Tax Rate</th>
                                                    <th>Zip Code</th>
                                                    <th>Zip Code Tax Rate</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <label className="checkboxe">
                                                            <input type="checkbox" name="login-check"  /> <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td>California</td>
                                                    <td>5%</td>
                                                    <td>Oakland</td>
                                                    <td>3%</td>
                                                    <td>354456</td>
                                                    <td>2%</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label className="checkboxe">
                                                            <input type="checkbox" name="login-check" checked /> <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td>California</td>
                                                    <td>5%</td>
                                                    <td>Oakland</td>
                                                    <td>3%</td>
                                                    <td>354456</td>
                                                    <td>2%</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label className="checkboxe">
                                                            <input type="checkbox" name="login-check" checked /> <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td>California</td>
                                                    <td>5%</td>
                                                    <td>Oakland</td>
                                                    <td>3%</td>
                                                    <td>354456</td>
                                                    <td>2%</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label className="checkboxe">
                                                            <input type="checkbox" name="login-check" checked /> <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td>California</td>
                                                    <td>5%</td>
                                                    <td>Oakland</td>
                                                    <td>3%</td>
                                                    <td>354456</td>
                                                    <td>2%</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label className="checkboxe">
                                                            <input type="checkbox" name="login-check" checked /> <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td>California</td>
                                                    <td>5%</td>
                                                    <td>Oakland</td>
                                                    <td>3%</td>
                                                    <td>354456</td>
                                                    <td>2%</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label className="checkboxe">
                                                            <input type="checkbox" name="login-check" checked /> <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td>California</td>
                                                    <td>5%</td>
                                                    <td>Oakland</td>
                                                    <td>3%</td>
                                                    <td>354456</td>
                                                    <td>2%</td>
                                                </tr><tr>
                                                    <td>
                                                        <label className="checkboxe">
                                                            <input type="checkbox" name="login-check" checked /> <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td>California</td>
                                                    <td>5%</td>
                                                    <td>Oakland</td>
                                                    <td>3%</td>
                                                    <td>354456</td>
                                                    <td>2%</td>
                                                </tr><tr>
                                                    <td>
                                                        <label className="checkboxe">
                                                            <input type="checkbox" name="login-check" checked /> <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td>California</td>
                                                    <td>5%</td>
                                                    <td>Oakland</td>
                                                    <td>3%</td>
                                                    <td>354456</td>
                                                    <td>2%</td>
                                                </tr><tr>
                                                    <td>
                                                        <label className="checkboxe">
                                                            <input type="checkbox" name="login-check" checked /> <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td>California</td>
                                                    <td>5%</td>
                                                    <td>Oakland</td>
                                                    <td>3%</td>
                                                    <td>354456</td>
                                                    <td>2%</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label className="checkboxe">
                                                            <input type="checkbox" name="login-check" checked /> <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td>California</td>
                                                    <td>5%</td>
                                                    <td>Oakland</td>
                                                    <td>3%</td>
                                                    <td>354456</td>
                                                    <td>2%</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label className="checkboxe">
                                                            <input type="checkbox" name="login-check" checked /> <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td>California</td>
                                                    <td>5%</td>
                                                    <td>Oakland</td>
                                                    <td>3%</td>
                                                    <td>354456</td>
                                                    <td>2%</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label className="checkboxe">
                                                            <input type="checkbox" name="login-check" checked /> <span className="checkmark"></span>
                                                        </label>
                                                    </td>
                                                    <td>California</td>
                                                    <td>5%</td>
                                                    <td>Oakland</td>
                                                    <td>3%</td>
                                                    <td>354456</td>
                                                    <td>2%</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            
                <div className="modal fade comman-modal right-modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  	<div className="modal-dialog modal-lg" role="document">
	    <div className="modal-content">
	      	<div className="modal-header">
		        <h5 className="modal-title" id="exampleModalLongTitle">Add Coverage</h5>
		        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
	      	</div>
	      	<div className="modal-body scroll-bar-style">
				
				<div className="form-group"> 
					<label>States</label>
				 	
					<div className="multiselect-dropdown">
						<div className="dropdown-text-view 	" onClick={e=>{this.handleDropdownChange(e,'states')}}>
							Select States
						</div>
						<div className="dropdown-search-select" style={{display:(dropdownOpen['states']?'block':'none')}}>
							<div className="search-box">
								<input type="text" name="" className="form-control" placeholder="Search"/>
							</div>
							<div className="dropdown-chekbox-list scroll-bar-style">
								<ul className="list-dropdown">
									<li> 
										<label className="checkbox-with-text">
											<div className="checkbox-view">	
												<div className="checkboxe">
													<input type="checkbox" name="login-check" /> <span className="checkmark"></span>
												</div>
											</div>
											<div className="select-list-view">
												All states
											</div>
										</label>
									</li>
									<li> 
										<label className="checkbox-with-text">
											<div className="checkbox-view">	
												<div className="checkboxe">
													<input type="checkbox" name="login-check" checked/> <span className="checkmark"></span>
												</div>
											</div>
											<div className="select-list-view">
										     	California
											</div>
										</label>
									</li>
									<li> 
										<label className="checkbox-with-text">
											<div className="checkbox-view">	
												<div className="checkboxe">
													<input type="checkbox" name="login-check" /> <span className="checkmark"></span>
												</div>
											</div>
											<div className="select-list-view">
                                            Florida
											</div>
										</label>
									</li>
									<li> 
										<label className="checkbox-with-text">
											<div className="checkbox-view">	
												<div className="checkboxe">
													<input type="checkbox" name="login-check" /> <span className="checkmark"></span>
												</div>
											</div>
											<div className="select-list-view">
                                            Florida
											</div>
										</label>
									</li>
								</ul>
							</div>
							
						</div>
					</div>
					{/* <!-- End custom multiselect--> */}
				</div>
				
                <div className="form-group"> 
					<label>Counties</label>
				 	{/* <!--select className="form-control">
					 	<option>California</option>
					 	<option>Florida</option>
					 	<option>Florida</option>
					 	<option>Florida</option>
				 	</select--> */}
					{/* <!--custom multiselect--> */}
					<div className="multiselect-dropdown">
						<div className="dropdown-text-view 	" onClick={e=>{this.handleDropdownChange(e,'counties')}}>
							Select Counties
						</div>
						<div className="dropdown-search-select" style={{display:(dropdownOpen['counties']?'block':'none')}}>
							<div className="search-box">
								<input type="text" name="" className="form-control" placeholder="Search"/>
							</div>
							<div className="dropdown-chekbox-list scroll-bar-style">
								<ul className="list-dropdown">
									<li> 
										<label className="checkbox-with-text">
											<div className="checkbox-view">	
												<div className="checkboxe">
													<input type="checkbox" name="login-check" /> <span className="checkmark"></span>
												</div>
											</div>
											<div className="select-list-view">
												All Counties
											</div>
										</label>
									</li>
									<li> 
										<label className="checkbox-with-text">
											<div className="checkbox-view">	
												<div className="checkboxe">
													<input type="checkbox" name="login-check" checked/> <span className="checkmark"></span>
												</div>
											</div>
											<div className="select-list-view">
												California - Butte County
											</div>
										</label>
									</li>
									<li> 
										<label className="checkbox-with-text">
											<div className="checkbox-view">	
												<div className="checkboxe">
													<input type="checkbox" name="login-check" /> <span className="checkmark"></span>
												</div>
											</div>
											<div className="select-list-view">
												California - Castro Valley 
											</div>
										</label>
									</li>
									<li> 
										<label className="checkbox-with-text">
											<div className="checkbox-view">	
												<div className="checkboxe">
													<input type="checkbox" name="login-check" /> <span className="checkmark"></span>
												</div>
											</div>
											<div className="select-list-view">
												California - Colusa
											</div>
										</label>
									</li>
								</ul>
							</div>
							
						</div>
					</div>
					{/* <!-- End custom multiselect--> */}
				</div>
				
                <div className="form-group"> 
					<label>Counties</label>
				 	{/* <!--select className="form-control">
					 	<option>California</option>
					 	<option>Florida</option>
					 	<option>Florida</option>
					 	<option>Florida</option>
				 	</select--> */}
					{/* <!--custom multiselect--> */}
					<div className="multiselect-dropdown">
						<div className="dropdown-text-view 	" onClick={e=>{this.handleDropdownChange(e,'zip')}}>
							Select Zip Codes
						</div>
						<div className="dropdown-search-select" style={{display:(dropdownOpen['zip']?'block':'none')}}>
							<div className="search-box">
								<input type="text" name="" className="form-control" placeholder="Search"/>
							</div>
							<div className="dropdown-chekbox-list scroll-bar-style">
								<ul className="list-dropdown">
									<li> 
										<label className="checkbox-with-text">
											<div className="checkbox-view">	
												<div className="checkboxe">
													<input type="checkbox" name="login-check" /> <span className="checkmark"></span>
												</div>
											</div>
											<div className="select-list-view">
												All Zip Codes
											</div>
										</label>
									</li>
									<li> 
										<label className="checkbox-with-text">
											<div className="checkbox-view">	
												<div className="checkboxe">
													<input type="checkbox" name="login-check" checked/> <span className="checkmark"></span>
												</div>
											</div>
											<div className="select-list-view">
                                               325468
											</div>
										</label>
									</li>
									<li> 
										<label className="checkbox-with-text">
											<div className="checkbox-view">	
												<div className="checkboxe">
													<input type="checkbox" name="login-check" /> <span className="checkmark"></span>
												</div>
											</div>
											<div className="select-list-view">
										     	874654
											</div>
										</label>
									</li>
									<li> 
										<label className="checkbox-with-text">
											<div className="checkbox-view">	
												<div className="checkboxe">
													<input type="checkbox" name="login-check" /> <span className="checkmark"></span>
												</div>
											</div>
											<div className="select-list-view">
											987561
											</div>
										</label>
									</li>
								</ul>
							</div>
							
						</div>
					</div>
					{/* <!-- End custom multiselect--> */}
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

export default CompanyCoverageListComponent;
