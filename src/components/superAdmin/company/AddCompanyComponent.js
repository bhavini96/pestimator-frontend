import React from 'react';
import { history } from "../../../helpers/history";
class AddCompanyComponent extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
        <section className="page-wrapper">
        <div className="container-fluid">
            <div className="custom-panel">
                <div className="panel-head">Add Company</div>
                <div className="panel-body scroll-bar-style scroll-bar-height">
                    <div className="form-view">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-xs-12">
                                <div className="form-group">
                                    <label>Company Name:*</label>
                                    <input type="text" className="form-control" name="" placeholder="Company Name"/>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-xs-12">
                                <div className="form-group">
                                    <label>Contact Name:*</label>
                                    <input type="text" className="form-control" name="" placeholder="Contact Name"/>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-xs-12">
                                <div className="form-group">
                                    <label>Phone Number:*</label>
                                    <input type="text" className="form-control" name="" placeholder="Phone Number"/>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-xs-12">
                                <div className="form-group">
                                    <label>Email:*</label>
                                    <input type="email" className="form-control" name="" placeholder="Email"/>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-xs-12">
                                <div className="form-group">
                                    <label>Password:*</label>
                                    <input type="password" className="form-control" name="" placeholder="Password"/>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-xs-12">
                                <div className="form-group">
                                    <label>Confirm Password:*</label>
                                    <input type="password" className="form-control" name="" placeholder="Confirm Password"/>
                                </div>
                            </div>
    
                            {/* <!--div className="col-lg-4 col-md-6 col-xs-12">
                                <div className="form-group">
                                    <label>State:*</label>
                                    <select className="js-select2 form-control" multiple="multiple" placeholder="Select State">
                                        <option value="O1" data-badge="">Alaska</option>
                                        <option value="O2" data-badge="">California</option>
                                        <option value="O3" data-badge="">Alameda</option>
                                        <option value="O4" data-badge="">American Samoa</option>
                                        <option value="O5" data-badge="">Arizona</option>
                                        <option value="O5" data-badge="">Arizona</option>
                                        <option value="O5" data-badge="">Arizona</option>
                                        <option value="O5" data-badge="">Arizona</option>
                                        <option value="O5" data-badge="">Arizona</option>
                                        <option value="O5" data-badge="">Arizona</option>
                                        <option value="O5" data-badge="">Arizona</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-xs-12">
                                <div className="form-group">
                                    <label>County:*</label>
                                    <select className="js-select2 form-control" multiple="multiple" placeholder="Select County">
                                        <option value="O1" data-badge="">Alaska</option>
                                        <option value="O2" data-badge="">California</option>
                                        <option value="O3" data-badge="">Alameda</option>
                                        <option value="O4" data-badge="">American Samoa</option>
                                        <option value="O5" data-badge="">Cherryland</option>
                                        <option value="O5" data-badge="">Union City</option>
                                        <option value="O5" data-badge="">Castro Valley</option>
                                        <option value="O5" data-badge="">Hayward</option>
                                        <option value="O5" data-badge="">Arizona</option>
                                        <option value="O5" data-badge="">Arizona</option>
                                        <option value="O5" data-badge="">Arizona</option>
                                    </select>
                                </div>
                            </div--> */}
                            <div className="col-lg-4 col-md-6 col-xs-12">
                                <div className="form-group">
                                    <label>Active</label>
                                    <div className="day-radiobtn">
                                        {/* <!-- <label>
                                            <input type="radio" name="selectdayradio">
                                            <span>Yes</span>
                                        </label>
                                        <label>
                                            <input type="radio" name="selectdayradio">
                                            <span className="title">No</span>
                                        </label> --> */}
                                        <div className="custom-radio">
                                            <div className="radio-group">
                                                <input type="radio" id="test1" name="radio-group" checked/>
                                                <label for="test1">Yes</label>
                                            </div>
                                            <div className="radio-group">
                                                <input type="radio" id="test2" name="radio-group"/>
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
                        <button className="btn blue-btn" onClick={e=>{history.push("/coveragecompany")}}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    
    )
  }
}
export default AddCompanyComponent;
