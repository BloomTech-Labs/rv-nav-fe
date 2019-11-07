import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import VehicleForm from '../vehicleForm/VehicleForm.js';
import Vehicles from '../vehicleForm/Vehicles';
import RoutingForm from '../map/routingForm';
import './sidebar.css';
import RoutingSidebar from './sidebar-routing/sidebar-routing';
import SidebarMenu from './SidebarMenu';
import MapHeader from "../header/MapHeader.js"

const Sidebar = (props) => {
    const [state, setState] = useState({
        vehicleForm: "off",
        routing: "on",
        vehicles: "off",
        directions: "off" //<-- for routing side bar component -Jerry
    })
    // console.log('props on Sidebar', props)

   
    // const closeVehicleForm = () => setState({ ...state, vehicleForm: "off", routing: "on" })

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
            if(state.directions === 'on'){
                
                let sidebar = document.querySelector('#overlayNav.overlay.open')
                    sidebar.style.height = '400px'
                    sidebar.style.margin = '23px 25px 25px 20px'
                    sidebar.style.width = '375px'
        
                    document.getElementsByClassName('dropdown dropdown btn-group')[0].style.display = 'none'
    
                let overlayContent = document.getElementById('overlayNav')
                overlayContent.style.height = '400px'
                overlayContent.style.margin = '23px 25px 25px 20px'
                overlayContent.style.width = '375px'
    
                let on = document.getElementsByClassName('on')[0]
                on.style.margin = '23px 25px 25px 20px'
                on.style.height = '400px'
                on.style.width = '375px'

            } else {

                let sidebar = document.querySelector('#overlayNav.overlay.open')
                    sidebar.style.height = '400px'
                    sidebar.style.margin = '23px 25px 25px 20px'
                    sidebar.style.width = '375px'
        
                // document.getElementsByClassName('dropdown dropdown btn-group')[0].style.display = 'block'
    
                let overlayContent = document.getElementById('overlayNav')
                overlayContent.style.height = '400px'
                overlayContent.style.margin = '23px 25px 25px 20px'
                overlayContent.style.width = '375px'
    
                let on = document.getElementsByClassName('on')[0]
                on.style.height = '400px'
                on.style.width = '375px'

            }

           
    }

    const selectVehicles = () => {
        // console.log("event", event.target);
        setState({
            ...state, 
            vehicleForm: "off",
            routing: "off",
            vehicles: "on",
            directions: "off", //<-- for routing side bar component -Jerry
        })
    }

    const dynamicSidebar = () => {
        setState({
            ...state,
            vehicleForm: "on",
            routing: "off",
            vehicles: "off",
            directions: "off", 
        })
        
       
        let sidebar = document.querySelector('#overlayNav.overlay.open')
        sidebar.style.height = '620px'
        sidebar.style.margin = '23px 25px 25px 20px'
        sidebar.style.width = '375px'
        // document.getElementsByClassName('navbar')[0].style.display = 'none'

        let overlayContent = document.getElementById('overlayNav')
        overlayContent.style.margin = 0
        overlayContent.style.height = '100%'

        let on = document.getElementsByClassName('on')[0]
        on.style.margin = 0
        on.style.height = '100%'

        // let vehicleForm = document.getElementsByClassName('vehicleForm-container')[0]
        // vehicleForm.style.height = '620px'

        // let formContainer = document.getElementsByClassName('FormContainer')[0]
        // formContainer.style.height = '620px'
    } 

    return (
        <div id='overlayNav' className={`overlay ${props.sidebarOpen ? 'open' : 'close'}`}>
            {/* <div>
                <i className="fas fa-arrow-circle-left" onClick={props.toggleSidebar}></i>
            </div> */}

            <SidebarMenu />
            {/* <div className="navbar" > //--Matt T commented out to replace with SidebarMenu component
                <a class="rv-way-text">RV WAY</a>
                <a><i className="menu-icon"></i></a>
            </div> */}

            <div className='overlay-content'>

                {/* <div> */}
                    <div className="sidebar-tabs">
                         {/* <p className={` route-tab ${state.routing === `on` ? `selected` : `sidebar-tab`} `}
                            id="routing"
                            onClick={buttonSelect}>Route</p>  */}

                         {/* <p className={`${state.vehicles === `on` ? `selected` : `sidebar-tab`}   `}
                            id="vehicles"
                            onClick={selectVehicles}
                            // style={{marginRight: "20px"}}
                            >Vehicles
                            </p>  */}

                         {/* <p className={`${state.vehicleForm === `on` ? `selected` : `sidebar-tab`}   `}
                            id="vehicleForm"
                            onClick={dynamicSidebar}>Add a Vehicle</p>  */}
                    </div>
                    <div className={`${state.routing}`}>
                        <RoutingForm
                            dynamicSidebar={dynamicSidebar}
                            state={state}
                            setState={setState}
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
                        <VehicleForm 
                        state={state} 
                        setState={setState} 
                        // closeVehicleForm={closeVehicleForm} 
                        buttonSelect={buttonSelect} />
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
            </div>  */}
        </div>
    )
}



export default Sidebar;