import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import _ from "lodash"
import $ from "jquery";
import getStateAction from "../../../actions/stateManagment/getStateAction";

class StateListComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state={
        skip:0,
        limit:10,
        sort_key:'state_name',
        sort_type:1,
        selectedState:{},
        stateTax:''
    }
  }
  
  componentDidMount(){
      const {skip,limit,sort_key,sort_type}=this.state
      var urlParameters = '?skip='+skip+'&limit='+limit+'&sort_key='+sort_key+'&sort_type='+sort_type
      this.props.getStateAction(urlParameters)
      var table = $('#customize-datatable').DataTable( {
        responsive: true,
        "pagingType": "simple_numbers",
        "lengthChange": false,
        "pageLength": 20,
        language: {
          paginate: {
          next: '>>', // or '→'
          previous: '<<' // or '←' 
          }
        }
        //searching: false
      });
      var dataTable = $('#customize-datatable').dataTable();
      $("#searchbox").keyup(function() {
        dataTable.fnFilter(this.value);
      });  
  }
  handleEditStateTaxModel=(e,selectedState)=>{
    console.log("selected state ",selectedState);
    this.setState({stateTax:selectedState.state_tax_rate,selectedState:selectedState});
  }
  handleOnchange=(e)=>{
    const {name,value}=e.target
    this.setState({[name]:value})
  }
  handleCancelModel=(e)=>{
    // window.$("#stateTaxModel").model('hide')
  }
  render() {
    let {selectedState,stateTax} = this.state
    let statelist = _.get(this,['props','state','stateManagmentReducer','stateData','data'],[])
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
                {statelist.length?
                <div className="panel-body">
                    <div className="comman-datatable">
                  
                        <table id="customize-datatable"  className="table table-striped " style={{"width":"100%"}}>
                            <thead>
                                <tr>
                                    <th>Action</th>
                                    <th>State</th>
                                    <th className="test">State Tax Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                {statelist.map((value,key)=>{
                                    return(
                                        <tr key={key}>
                                        <td>
                                            <ul className="action">
                                                <li className="box edit" onClick={e=>{this.handleEditStateTaxModel(e,value)}}><a data-toggle="modal" href=".right-modal"><i className="icon-edit"></i></a></li>
                                                <li className="icon"><Link to={"/county/"+value.state_name+"/"+value._id}><i className="icon-location-marker"></i></Link></li>
                                            </ul>
                                        </td>
                                        <td>{value.state_name}</td>
                                        <td>{value.state_tax_rate}%</td>
                                    </tr>
                                    )
                                })}
                              
                            </tbody>
                        </table>
                  
                   </div>	
                </div>
                 :
                 <div className="scroll-bar-style scroll-bar-height">
                 <div className="screen-center">

                     <p>No record found</p>
                 </div>
             </div>
                }
            </div>
        </div>
    </section>
    <div className="modal fade comman-modal right-modal" id="stateTaxModel" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  	<div className="modal-dialog modal-lg" role="document">
	    <div className="modal-content">
	      	<div className="modal-header">
		        <h5 className="modal-title" id="exampleModalLongTitle">{selectedState.state_name}</h5>
		        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={e=>{this.handleCancelModel(e)}}>
		          <span aria-hidden="true">&times;</span>
		        </button>
	      	</div>
	      	<div className="modal-body scroll-bar-style">
				<div className="form-group"> 
					<label>State Tax</label>
                     <input type="text" 
                     className="form-control" 
                     name="stateTax" 
                     value={this.state.stateTax}
                     onChange={e=>{this.handleOnchange(e)}}/>
				</div>
				
       		</div>
	       	<div className="modal-footer">
	       		<div className="action-button">
					<div className="left-list">
						<button className="btn white-line" onClick={e=>{this.handleCancelModel(e)}}>Cancel</button>
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
  
    return { state }
  }
  const actionCreators = {
    getStateAction: getStateAction,
  }
  export default connect(mapStateToProps, actionCreators)(StateListComponent)