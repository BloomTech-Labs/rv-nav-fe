import React, { useState } from 'react';
import SidebarMenu from '../SidebarMenu.js'
import { ReactComponent as ToggleShowArrow } from './icons/show-sidebar.svg'
import { ReactComponent as ToggleHideArrow } from './icons/hide-sidebar.svg'
import { NavLink } from 'react-router-dom';
import Loader from 'react-loader-spinner';

//Brings React loaders styles
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

//SCSS Styles
import './sidebar-routing.scss'
import Directions from './Directions.js';

const RoutingSidebar = (props) => {

    const [state, setState] = useState({
        sidebar: true
    })

    const toggleSidebar = () => {
        setState({ ...state, sidebar: !state.sidebar })

        if (state.sidebar == false) {
            let div = document.getElementsByClassName('mainSidebarContainer')[0]
            div.style.animation = 'slideLeft .5s';
            div.style.left = '0px';
        }
        else {
            let div = document.getElementsByClassName('mainSidebarContainer')[0]
            div.style.animation = 'slideRight .5s'
            div.style.left = '-375px';
        }
    }

    console.log('SIDEBARROUTING STATE', props.textDirections)

    //function that dynamically changes the sidebar styles
    const sidebarAnchor = () => {
        let div = document.getElementsByClassName('mainSidebarContainer')[0]
        div.style.margin = '0px';
        div.style.height = '100%';
    }

    //toggles state back to render the initial sidebar form
    const revertChanges = () => {

        let div = document.getElementsByClassName('mainSidebarContainer')[0]
        div.style.margin = '25px';
        div.style.height = '400px';

        props.setState({
            ...props.state,
            vehicleForm: "off",
            routing: "on",
            vehicles: "off",
            directions: "off",
        })
    }

    return (// !localStorage.token ? //Checks if there's a token,if there's one, renders form, if not renders message. -Jerry
        //     <NavLink to='/auth'>
        //     <p>Sign in or create an account to be able to create a route.</p>
        //     </NavLink>
        // :
        <div className='containerWithArrow'>

            {props.loading !== 'Routing successful' ?
                <div className='loadingStatus'>
                    <p className="route-loading">{props.loading}</p>
                    <Loader
                        type="Rings"
                        color="#00B2D9"
                        height={100}
                        width={100}
                    />
                </div>
                :
                <>
                    <div className='arrowContainer' onClick={toggleSidebar}>
                        {state.sidebar === true ?
                            <ToggleHideArrow /> :
                            <ToggleShowArrow />
                        }
                    </div>
                    <div className='sidebarContainer'>
                        <SidebarMenu />
                        <div className='backbuttonContainer'>
                            <h6
                                className='routingBackButton'
                                onClick={revertChanges}
                            >Back</h6>
                        </div>
                        <div className='startEndContainer'>
                            {/* <h3 id='estimatedTime'>17 mins (4 miles)</h3> */}
                            <div id='startPointContainer'>
                                <p className='startAndEnd'>STARTING POINT</p>
                                <p>{props.start}</p>
                            </div>
                            <div id='destinationPointContainer'>
                                <p className='startAndEnd'>DESTINATION</p>
                                <p>{props.end}</p>
                            </div>
                        </div>
                        {/* <div className='sidebarOptions'>
                        <p>THIS ROUTE AVOIDS</p>
                    </div> */}
                        <h3 id='directionsTitle'>Directions</h3>
                        <div className="directions">
                            <Directions props={props.textDirections} />
                        </div>
                        <div className='sidebarFooterContainer'>
                            <p id='sidebarFooter'>These directions are for planning purposes only. You may find that construction projects, traffic, weather, or other events may cause conditions to differ from the map results, and you should plan your route accordingly. You must obey all signs or notices regarding your route.</p>
                        </div>
                    </div>
                    {sidebarAnchor()}
                </>
            }
        </div>
    )
};

export default RoutingSidebar;