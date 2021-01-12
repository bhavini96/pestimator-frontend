import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import _ from 'lodash'
import getCountyAction from "../../../actions/stateManagment/getCountyAction";

class CountyListComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            stateID : _.get(this,'props.match.params.stateid'),
            skip:0,
            limit:10,
            sort_key:'county_name',
            sort_type:1
        }
    }
    componentDidMount(){
        const {stateID,skip,limit,sort_key,sort_type}=this.state
        var urlParameters ='?state_id=' +stateID+'&skip='+skip+'&limit='+limit+'&sort_key='+sort_key+'&sort_type='+sort_type
        this.props.getCountyAction(urlParameters)
    }
    render() {
        let countylist = _.get(this,['props','state','stateManagmentReducer','countyData','data'],[])
        return (
            <>
                <section className="page-wrapper">
                    <div className="container-fluid">
                        <div className="custom-panel">
                            <div className="panel-head">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/state">State: { _.get(this,'props.match.params.statename')}</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Counties</li>
                                    </ol>
                                </nav>
                            </div>
                            <div className="tool-box">
                                <div className="tool-list">
                                    {/* <!-- <a href="createcompany.html" className="btn add-button"><i className="icon-plus-icon"></i></a> --> */}
                                </div>
                                <div className="search-box">
                                    <div className="search"><input type="search" name="" id="searchbox" placeholder="Search" />
                                        <button className="btn"><i className="icon-search"></i></button></div>
                                </div>
                            </div>
                            {countylist.length?
                            <div className="panel-body">
                                <div className="comman-datatable">
                               
                                 <table id="customize-datatable" className="table table-striped " style={{ "width": "100%" }}>
                                 <thead>
                                     <tr>
                                         <th> <span className="thead-data">Action</span></th>
                                         <th><span className="thead-data">County</span></th>
                                         <th className="test"><span className="thead-data">County Tax Rate</span></th>
                                     </tr>
                                 </thead>
                                 <tbody>
                                     {countylist.map((value,key)=>{
                                         return(
                                            <tr key={key}>
                                            <td>
                                                <ul className="action">
                                                    <li className="box edit"><a data-toggle="modal" href=".right-modal"><i className="icon-edit"></i></a></li>
                                                    <li className="icon"><Link to={"/zip/"+value.state_docs.state_name+"/"+value.county_name}><i className="icon-location-marker"></i></Link></li>
                                                </ul>
                                            </td>
                                            <td>{value.county_name}</td>
                                            <td>{value.county_tax_rate}%</td>
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
                <div className="modal fade comman-modal right-modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Alameda County</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body scroll-bar-style">
                                <div className="form-group">
                                    <label>County Tax Rate</label>
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
     return { state }
   }
const actionCreators = {
    getCountyAction: getCountyAction,
   }
export default connect(mapStateToProps, actionCreators)(CountyListComponent)

