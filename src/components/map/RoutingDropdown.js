import React from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { getVehicles, deleteVehicles } from "../../store/actions";
import { selectVehicle } from "../../store/actions/selectVehicle.js";
import "../sidebar/sidebar.css"

const RoutingDropdown = (props) => {

    const selected = (id) => {
        props.selectVehicle(id)
    }

    // const deselect = () => {
    //     props.selectVehicle(null)
    // }

    console.log('props.vehicles.vehicles from RoutingDropdown', props.vehicles.vehicles)
    return (
        <div className="dropdown-menu-class">
          <span className="what-vehcile-are-you-routing-with">What vehicle are you routing with?</span>
          <select className="selected-vehicle-dropdown-menu">
            <option className="selected-vehicle-dropdown-option"></option>
            <option style={{color: "#00B2D9"}}>+ Add a vehicle...</option>
            {props.vehicles.vehicles && props.vehicles.vehicles.map(rv => <option className="selected-vehicle-dropdown-option" onClick={selected(rv.id)}>{rv.name}</option>)}
          </select>
        </div>
    )
}

const mapStateToProps = state => ({
    vehicles: state.vehicles,
    selected_id: state.selected_id
  })

export default (connect(mapStateToProps, { getVehicles, selectVehicle }))(RoutingDropdown)