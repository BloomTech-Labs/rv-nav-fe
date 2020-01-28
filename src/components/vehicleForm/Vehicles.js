import React,{useState} from "react";
import { ReactComponent as BackArrow } from "../../assets/img/back.svg";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getVehicles, deleteVehicles } from "../../store/actions";
import { selectVehicle } from "../../store/actions/selectVehicle.js";
import {ReactComponent as Exit} from "../../assets/img/Exit.svg";
import VehicleFormDropDown from "./VehicleFormDropDown.js";
import Button from "react-bootstrap/Button";
import "./Vehicles.css";

class Vehicles extends React.Component {
  state = {
    id: null,
    editing: false,
    on:false,
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
              onClick={this.props.selectVehicles}
            >
              Back
            </p>

            <p className="back-label-vehicle">My Vehicles</p>
          </div>
          <div className="add-delete-vehicles">
              <span className="button-style-one-vehicle" onClick={this.toggle}>ADD</span>
              <span className="button-style-two-vehicle">EDIT</span>
          </div>
          <div className="form-wrapper-vehicle">
            {this.props.vehicles.vehicles &&
            this.props.vehicles.vehicles.map(e => (
              <div className="vehicle-layout">
                <p className="vehicle-name">{e.name}</p>
              </div>
            ))}
          </div>
        </div>
        </>
      // <div>
      //   {this.props.vehicles.vehicles &&
      //     this.props.vehicles.vehicles.map((e, i) => {
      //       //console.log("vehicle e", e)
      //       return (
      //         <div
      //           key={i}
      //           className={`vehicle-tabs`}
      //         >
      //           {/* CLASSNAME AFTER VEHICLE ${e.id === this.props.selected_id &&
      //             `highlight`}` */}


      //           {/* {e.id === this.props.selected_id ? (
      //             <>
      //               {" "}
      //               <p className="select-text">selected for routing</p>{" "}
      //               <Button
      //                 className="select-btn"
      //                 variant="warning"
      //                 onClick={() => {
      //                   this.deselect(e.id);
      //                 }}
      //               >
      //                 Deselect
      //               </Button>{" "}
      //             </>
      //           ) : (
      //             <Button
      //               className="select-btn"
      //               variant="warning"
      //               onClick={() => {
      //                 this.selected(e.id);
      //               }}
      //             >
      //               Select
      //             </Button>
      //           )} */}

      //           <div className="vehicle-txt">
      //             <p className="vehicle-information">Vehicle Information</p>
      //             <p className="vehicle-name">name - {e.name}</p>
      //             {/* <p className="vehicle-name">
      //               {e.height > 0 ? `height - ${e.height} feet` : null}
      //             </p>
      //             <p className="vehicle-name">
      //               {e.width > 0 ? `width - ${e.width} feet` : null}
      //             </p>
      //             <p className="vehicle-name">
      //               {e.length > 0 ? `length - ${e.length} feet` : null}
      //             </p>
      //             <p className="vehicle-name">
      //               {" "}
      //               {e.weight > 0 ? `weight - ${e.weight} pounds` : null}
      //             </p>
      //             <p className="vehicle-name">
      //               {" "}
      //               {e.vehicle_class !== ""
      //                 ? `class - ${e.vehicle_class}`
      //                 : null}
      //             </p>
      //             <p className="vehicle-name">
      //               {" "}
      //               {e.dual_tires === true ? `tires - dually` : null}
      //             </p>
      //             <p className="vehicle-name">
      //               {" "}
      //               {e.axel_count > 0 ? `axels - ${e.axel_count}` : null}
      //             </p> */}
      //           </div>
      //           <div className="edit-delete">
      //             <Button
      //               className="vehicle-btn"
      //               onClick={() => {
      //                 this.props.deleteVehicles(e.id);
      //               }}
      //               variant="warning"
      //             >
      //               Delete
      //             </Button>
      //             <Button
      //               className="vehicle-btn"
      //               onClick={() => {
      //                 this.editVehicleToggle(e.id);
      //               }}
      //               variant="warning"
      //             >
      //               Update
      //             </Button>
      //           </div>
      //           {this.state.editing && this.state.id === e.id && (
      //             <VehicleForm
      //               currentVehicle={e}
      //               id={this.state.id}
      //               clearForm={this.clearForm}
      //               editing={this.state.editing}
      //               editVehicleToggle={this.editVehicleToggle}
      //             />
      //           )}
      //         </div>
      //       );
      //     })}
      // </div>
     
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
