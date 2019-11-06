import React, { useState } from 'react'
import { connect } from "react-redux";
import { getVehicles, deleteVehicles } from "../../store/actions";
import { selectVehicle } from "../../store/actions/selectVehicle.js";
import VehicleForm from '../vehicleForm/VehicleForm.js'
import "../map/routingForm.css"
import './routingDropdown.scss'

const RoutingDropdown = (props) => {

  const [state, setState] = useState({
    dropdown: false,
  })

  const [currRV, setCurrRV] = useState('')

    const selected = (id) => {
        props.selectVehicle(id)
    }

    const currentRV = (id) => {
      setCurrRV(id)
    }

    const addAVehicle = () => {
      props.setState({...props.state, vehicleForm: 'on', routing: 'off'})
    }

    const dropdownToggle = () => {
      setState({...state, dropdown: !state.dropdown})
    }

    return (
      <div className='dropdownContainer'>
        {props.state.routing === 'on' ?
        <div className="dropdown-menu-class">
        <span className="what-vehcile-are-you-routing-with">What vehicle are you routing with?</span>
        <div className="dd-wrapper" onClick={dropdownToggle}>
          <div className="dd-header">
          <div className="dd-header-title"></div>
          </div>
          <ul className="dd-list">
            <div className='addAVehicleTitle'>
              {/* {props.vehicles.vehicles.forEach(vehicle => {
                
              })} */}
              <p style={{color: 'black'}}></p>
              <div id='arrowDown'>{currRV}</div>
            </div>
            <div className='vehiclesListContainer'>
              {state.dropdown === true ? 
              <div className='vehiclesList'>
                <section>
                <p onClick={props.dynamicSidebar}>Add a vehicle...</p>
                </section>
                {/* That's right Jerry two functions are being called on the same on click!! How do you like me now!? */}
                {props.vehicles.vehicles && props.vehicles.vehicles.map((rv, index) => <li key={index} onClick={() => {selected(rv.id); currentRV(rv.name)}}>{rv.name}</li>)}
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