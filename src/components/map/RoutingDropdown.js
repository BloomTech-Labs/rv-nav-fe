import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { getVehicles, deleteVehicles } from "../../store/actions";
import { selectVehicle } from "../../store/actions/selectVehicle.js";
import "../map/routingForm.css"
import VehicleForm from '../vehicleForm/VehicleForm.js'
import './routingDropdown.scss'

const RoutingDropdown = (props) => {

  const [state, setState] = useState({
    dropdown: false,
  })

    const selected = (id) => {
        props.selectVehicle(id)
    }

    const addAVehicle = () => {
      props.setState({...props.state, vehicleForm: 'on', routing: 'off'})
    }

    const dropdownToggle = () => {
      setState({...state, dropdown: !state.dropdown})
    }

    console.log('props.vehicles.vehicles from RoutingDropdown', props.vehicles.vehicles)
    console.log('ROUTING DROPDOWN VEHICLE', props.selected_id)
    console.log('ROUTING DROPDOWN VEHICLE***', props)
    return (
      <>
        {props.state.routing === 'on' ?
        <div className="dropdown-menu-class">
          <span className="what-vehcile-are-you-routing-with">What vehicle are you routing with?</span>
          {/* <select className="selected-vehicle-dropdown-menu" onClick={addAVehicle}>
            <option className="selected-vehicle-dropdown-option"></option>
            <option style={{color: "#00B2D9"}} value='addVehicle'>+ Add a vehicle...</option>
            {props.vehicles.vehicles && props.vehicles.vehicles.map(rv => <option className="selected-vehicle-dropdown-option" onClick={selected(rv.id)}>{rv.name}</option>)}
          </select> */}
        <div className="dd-wrapper">
        <div className="dd-header">
          <div className="dd-header-title"></div>
        </div>
        <ul className="dd-list">
          <div className='addAVehicleTitle'>
            <li className="dd-list-item" onClick={addAVehicle}>+ Add a Vehicle...</li>
            <p onClick={dropdownToggle}>V</p>
          </div>
          <div className='vehiclesList'>
            {state.dropdown === true ? 
            props.vehicles.vehicles && props.vehicles.vehicles.map(rv => <li onClick={() => {selected(rv.id)}}>{rv.name}</li>)
            : null
          }
          </div>
        </ul>
        </div>
        </div>
        :
        <VehicleForm />
        }
      </>
    )
}

const mapStateToProps = state => ({
    vehicles: state.vehicles,
    selected_id: state.selected_id
  })
  

export default (connect(mapStateToProps, { getVehicles, selectVehicle }))(RoutingDropdown)