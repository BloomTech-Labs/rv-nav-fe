import React,{useState} from "react";
import { ReactComponent as BackArrow } from "../../assets/img/back.svg";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getVehicles, deleteVehicles } from "../../store/actions";
import { selectVehicle } from "../../store/actions/selectVehicle.js";
import {ReactComponent as Exit} from "../../assets/img/Exit.svg";
import {ReactComponent as Trash} from "../../assets/img/trash.svg";
import {ReactComponent as Edit} from "../../assets/img/darkIcons/edit.svg";
import VehicleFormDropDown from "./VehicleFormDropDown.js";
import Button from "react-bootstrap/Button";
import "./Vehicles.css";

class Vehicles extends React.Component {
  state = {
    id: null,
    editing: false,
    on:false,
    edit:false,
  };

  componentDidMount() {
    this.props.getVehicles();
  }

  //checks if the edit button on a vehicle has been clicked
  editVehicleToggle = id => {
    this.setState({
      id,
      editing: !this.state.editing
    });
  };

  clearForm = () => {
    this.setState({
      id: null,
      editing: false
    });
  };

  // selected = id => {
  //   //Google analytics tracking
  //   window.gtag("event", "select vehicle", {
  //     event_category: "select",
  //     event_label: "select vehicle"
  //   });
  //   this.props.selectVehicle(id);
  // };
  // deselect = () => {
  //   //Google analytics tracking
  //   window.gtag("event", "deselect vehicle", {
  //     event_category: "select",
  //     event_label: "deselect vehicle"
  //   });
  //   this.props.selectVehicle(null);
  // };

  

toggle = () =>{
    this.setState({
        on:!this.state.on
    })
}

toggleEdit = () =>{
  this.setState({
      edit:!this.state.edit
  })
}

  render() {
    console.log("vehiclejs props", this.props);
    return (
      <>
      <div className="toggle-parent-vehicle">
            {this.state.on && 
                <VehicleFormDropDown  toggle={this.toggle}/>
            }
        </div>
      <div className="menu-vehicle">
        <div  id="dropdown-split-basic-vehicle" className="hamcolor-vehicle">
                  <div className='hamend-vehicle'>RV WAY </div>
                  <div className="Exit-vehicles" onClick={this.props.toggle}><Exit/></div>
              </div>
        <div className="back-vehicle">
            <BackArrow />

            <p
              className="vehicleFormBackContainer-vehicle"
              id="routing-vehicle"
              onClick={this.props.toggle}
            >
              Back
            </p>

            <p className="back-label-vehicle">My Vehicles</p>
          </div>
          <div className="add-delete-vehicles">
              <span className="button-style-one-vehicle" onClick={this.toggle}>ADD</span>
              <span className="button-style-two-vehicle" onClick={this.toggleEdit}>EDIT</span>
          </div>
          <div className="form-wrapper-vehicle">
            {this.props.vehicles.vehicles &&
            this.props.vehicles.vehicles.map(e => {
              
              if(this.state.edit === false){
                return <div className="vehicle-layout">
                  <p className="vehicle-name">{e.name}</p>
                </div>
              }else if(this.state.edit === true){
                return <div className="vehicle-layout">
                  <div className="name-parent">
                    <p className="vehicle-name">{e.name}</p>
                  </div>
                  
                  <div className="delete-edit">
                    <Trash onClick={() => this.props.deleteVehicles(e.id)} className="deleteSVG"/>
                    <Edit/>
                  </div>
                  
                </div>
              }
              
  })}
          </div>
        </div>
        </>
      
    );
  }
  
}
 
const mapStateToProps = state => ({
  vehicles: state.vehicles,
  selected_id: state.selected_id
});

export default withRouter(
  connect(mapStateToProps, { getVehicles, deleteVehicles, selectVehicle })(
    Vehicles
  )
);
