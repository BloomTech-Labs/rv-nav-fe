import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import VehicleForm from '../vehicleForm/VehicleForm';
import Vehicles from '../vehicleForm/Vehicles';
import RoutingForm from '../map/routingForm';
import './sidebar.css';
import RoutingSidebar from './sidebar-routing/sidebar-routing';

const Sidebar = (props) => {
    const [state, setState] = useState({
        vehicleForm: "off",
        routing: "on",
        vehicles: "off",
        directions: "off" //<-- for routing side bar component -Jerry
    })
    // console.log('props on Sidebar', props)

   
    const closeVehicleForm = () => setState({ ...state, vehicleForm: "off", vehicles: "on" })

    //selects the tab when it is clicked on, deselects all others
    const buttonSelect = (event) => {
        console.log("event", event.target);
        setState({
            ...state,
            vehicleForm: "off",
            routing: "off",
            vehicles: "off",
            directions: "on", //<-- for routing side bar component -Jerry
            [event.target.id]: "on"
        })
    }

    return (
        <div id='overlayNav' className={`overlay ${props.sidebarOpen ? 'open' : 'close'}`}>
            {/* <div>
                <i className="fas fa-arrow-circle-left" onClick={props.toggleSidebar}></i>
            </div> */}
            <div className="navbar" >
                <a class="rv-way-text">RV WAY</a>
                <a><i className="menu-icon"></i></a>
            </div>


            <div className='overlay-content'>

                {/* <div> */}
                    <div className="sidebar-tabs">
                        <p className={` route-tab ${state.routing === `on` ? `selected` : `sidebar-tab`} `}
                            id="routing"
                            onClick={buttonSelect}>Route</p>

                        <p className={`${state.vehicles === `on` ? `selected` : `sidebar-tab`}   `}
                            id="vehicles"
                            onClick={buttonSelect}
                            style={{marginRight: "20px"}}
                            >Vehicles
                            </p>

                        <p className={`${state.vehicleForm === `on` ? `selected` : `sidebar-tab`}   `}
                            id="vehicleForm"
                            onClick={buttonSelect}>Add a Vehicle</p>
                    </div>
                    <div className={`${state.routing}`}>
                        <RoutingForm
                            buttonSelect={buttonSelect}
                            textDirections={props.textDirections}
                            toggle={props.toggle}
                            walmartSelected={props.walmartSelected}
                            campsiteSelected={props.campsiteSelected}
                            pointOfInterestDistance={props.pointOfInterestDistance}
                            loading={props.loading}
                            arcRoute={props.arcRoute}
                            onChangeHandler={props.onChangeHandler}
                            routeChangeHandler={props.routeChangeHandler}
                            start={props.start}
                            end={props.end}
                        />
                    </div>

                    {localStorage.token ? <div className={`${state.vehicles}`}>
                        <Vehicles />
                    </div> :
                        <div className={`login-to-add ${state.vehicles}`}>
                            <NavLink to="/auth" style={{ marginRight: 10 }}>
                                Login or create an account to add and view vehicle information.
                            </NavLink>
                        </div>}
                      
                    {localStorage.token ? <div className={`${state.vehicleForm}`}>
                        <VehicleForm closeVehicleForm={closeVehicleForm} buttonSelect={buttonSelect} />
                    </div> :
                        <div className={`login-to-add ${state.vehicleForm}`}>
                            <NavLink to="/auth" style={{ marginRight: 10 }}>
                                Login or create an account to add information about your vehicle.
                            </NavLink>
                        </div>}

                            {/* vv Neccesary to render routing sidebar for directions vv -Jerry */}
                    {localStorage.token ? <div className={`${state.directions}`}> 
                        <RoutingSidebar
                            state={state}
                            setState={setState}
                            toggleSidebar={props.toggleSidebar}
                            textDirections={props.textDirections}
                            toggle={props.toggle}
                            walmartSelected={props.walmartSelected}
                            campsiteSelected={props.campsiteSelected}
                            pointOfInterestDistance={props.pointOfInterestDistance}
                            loading={props.loading}
                            arcRoute={props.arcRoute}
                            onChangeHandler={props.onChangeHandler}
                            routeChangeHandler={props.routeChangeHandler}
                            start={props.start}
                            end={props.end}
                        />
                    </div> : null}
                        {/* {changeState()} */}
                {/* </div> */}
            </div>
            {/* <div id='mainsidebar'>
                <button className = 'openbtn' onClick = {props.toggleSidebar}>Options</button>
                // button to bring out sidebar
            </div> */}
        </div>
    )
}



export default Sidebar;