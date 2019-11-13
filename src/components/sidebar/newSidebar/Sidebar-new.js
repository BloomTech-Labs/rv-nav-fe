import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import VehicleForm from '../../vehicleForm/VehicleForm.js';
import Vehicles from '../../vehicleForm/Vehicles';
import RoutingForm from '../../map/routingForm.js';
// import '../sidebar.css';
import RoutingSidebar from '../sidebar-routing/sidebar-routing';
import SidebarMenu from '../SidebarMenu';

//SCSS Styles
import './Sidebar-new.scss'

const Sidebar = (props) => {
    const [state, setState] = useState({
        vehicleForm: "off",
        routing: "on",
        vehicles: "off",
        directions: "off" //<-- for routing side bar component -Jerry
    })
    console.log('props on Sidebar', props)


    const buttonSelect = (event) => {
        console.log("event", event.target);
        setState({
            ...state,
            vehicleForm: "off",
            routing: "off",
            vehicles: "off",
            directions: "on",
            [event.target.id]: "on"
        })
        
        let div = document.getElementsByClassName('mainSidebarContainer')[0]
        div.style.height = '100%'
        div.style.margin = '0px'

    }

    const selectVehicles = () => { //This have the user able to return from vehicle form to the initial form
        setState({
            ...state, 
            vehicleForm: "off",
            routing: "on",
            vehicles: "off",
            directions: "off", 
        })

        let div = document.getElementsByClassName('mainSidebarContainer')[0]
            div.style.margin = '25px';
            div.style.height =  '400px';

        let menu = document.querySelector('.btn-group-vertical > .btn, .btn-group > .btn')
        menu.style.backgroundColor = 'white'
    }

    const addAVehicleForm = () => { //This have the user able to go the form to add their vehicle
        setState({
            ...state,
            vehicleForm: "on",
            routing: "off",
            vehicles: "off",
            directions: "off", 
        })

        let div = document.getElementsByClassName('mainSidebarContainer')[0]
            div.style.margin = '0px';
            div.style.height =  '100%';
        
        let menu = document.querySelector('.btn-group-vertical > .btn, .btn-group > .btn')
        menu.style.backgroundColor = '#2A2E43'

    } 

    return (
        <div className='mainSidebarContainer'>
            <SidebarMenu />
            {state.routing === 'on' ?  //List of vehicles
                <RoutingForm
                    addAVehicleForm={addAVehicleForm}
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
                : null
            }

            {state.vehicles === 'on' ?  //List of vehicles
                <Vehicles /> : null
            }

            {state.vehicleForm === 'on' ?
                <VehicleForm 
                    selectVehicles={selectVehicles}
                    state={state} 
                    setState={setState} 
                    buttonSelect={buttonSelect} 
                />
                : null
            }

            {/* vv Neccesary to render routing sidebar for directions vv -Jerry */}
            {state.directions === 'on' ?
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
                : null
            }
        </div>

    )
}



export default Sidebar;