import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { getVehicles, deleteVehicles } from "../../store/actions";
import { selectVehicle } from "../../store/actions/selectVehicle.js";
import "../map/routingForm.css"
import VehicleForm from '../vehicleForm/VehicleForm.js'
import './routingDropdown.scss'
import { ReactComponent as GreyTruck } from '../../assets/img/gray-car.svg'

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
      <div className='dropdownContainer'>
        {props.state.routing === 'on' ?
        <div className="dropdown-menu-class">
          {/* <select className="selected-vehicle-dropdown-menu" onClick={addAVehicle}>
            <option className="selected-vehicle-dropdown-option"></option>
            <option style={{color: "#00B2D9"}} value='addVehicle'>+ Add a vehicle...</option>
            {props.vehicles.vehicles && props.vehicles.vehicles.map(rv => <option className="selected-vehicle-dropdown-option" onClick={selected(rv.id)}>{rv.name}</option>)}
          </select> */}
        <span className="what-vehcile-are-you-routing-with">What vehicle are you routing with?</span>
        <div className="dd-wrapper">
          <div className="dd-header">
          <div className="dd-header-title"></div>
          </div>
          <ul className="dd-list">
            <div className='addAVehicleTitle'>
              {/* <GreyTruck /> */}
              {/* <div className="dd-list-item" onClick={addAVehicle}></div> */}
              <p onClick={dropdownToggle}>V</p>
            </div>
            <div className='vehiclesListContainer'>
              {state.dropdown === true ? 
              <div className='vehiclesList'>
                <section>
                <p onClick={addAVehicle}>Add a vehicle...</p>
                </section>
                {props.vehicles.vehicles && props.vehicles.vehicles.map(rv => <li onClick={() => {selected(rv.id)}}>{rv.name}</li>)}
              </div>
                : null
            }
            </div>
          </ul>
          </div>
        </div>
        :
        <VehicleForm />
        }
      </div>
    )
}

const mapStateToProps = state => ({
    vehicles: state.vehicles,
    selected_id: state.selected_id
  })
  

export default (connect(mapStateToProps, { getVehicles, selectVehicle }))(RoutingDropdown)