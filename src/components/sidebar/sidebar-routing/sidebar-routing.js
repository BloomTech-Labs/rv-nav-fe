import React, { useState } from 'react'; 
import SidebarMenu from '../SidebarMenu.js'
import {ReactComponent as ToggleShowArrow} from './icons/show-sidebar.svg'
import {ReactComponent as ToggleHideArrow} from './icons/hide-sidebar.svg'
import { NavLink } from 'react-router-dom';

//SCSS Styles
import './sidebar-routing.scss'

const RoutingSidebar = (props) => {

    const [state, setState] = useState({
        sidebar: true
    })

    const toggleSidebar = () => {
        setState({...state, sidebar: !state.sidebar})

        if(state.sidebar == false){
            let div = document.getElementsByClassName('mainSidebarContainer')[0]
            div.style.animation = 'slideRight .5s';
            div.style.right = '370px';
            
        } 
        else {
            let div = document.getElementsByClassName('mainSidebarContainer')[0]
            div.style.animation = 'slideLeft .5s'
            div.style.right = '745px';
        }
        
    }

    console.log('SIDEBAR STATE', state.sidebar)

//function that dynamically changes the sidebar styles
    const sidebarAnchor = () => {

        // document.getElementsByClassName('mainSidebarContainer')[0].style.visibility =

//         if(props.state.directions === 'on'){
//             let sidebar = document.querySelector('#overlayNav.overlay.open')
//             sidebar.style.height = '100%'
//             sidebar.style.margin = '0px'
//             sidebar.style.width = '420px'
//             sidebar.style.background = 'transparent'
            
//             let dropdown = document.getElementsByClassName('dropdown dropdown btn-group')[0]
//             dropdown.style.display = 'none'

//             let overlayContent = document.getElementsByClassName('overlay-content')[0]
//             overlayContent.style.margin = 0
//             overlayContent.style.height = '100%'

//             let on = document.getElementsByClassName('on')[0]
//             on.style.margin = '0px'
//             on.style.height = '100%'
//             sidebar.style.width = '420px'
// //revert sidebar style changes back to the original
//         } else {

//             let overlayOpen = document.querySelector('#overlayNav.overlay.open')
//             overlayOpen.style.height = '100%'
//             overlayOpen.style.margin = '0px'
//             overlayOpen.style.width = '375px'
//             overlayOpen.style.background = '#2A2E43'

//             let sidebar = document.querySelector('#overlayNav')
//             sidebar.style.height = '100%'
//             // sidebar.style.margin = '25px'
//             sidebar.style.width = '375px'
//             sidebar.style.background = '#2A2E43'

//             document.getElementsByClassName('dropdown dropdown btn-group')[0].style.display = 'block'

//             let overlayContent = document.getElementsByClassName('overlay-content')[0]
//             // overlayContent.style.marginTop = '25px'
//             overlayContent.style.height = '100%'
//             sidebar.style.background = '#2A2E43'

//             let on = document.getElementsByClassName('on')[0]
//             on.style.height = '100%'
//             sidebar.style.background = '#2A2E43'

//         }
    }
//toggles state back to render the initial sidebar form
    const revertChanges = () => {
        props.setState({
            ...props.state,
            vehicleForm: "off",
            routing: "on",
            vehicles: "off",
            directions: "off", 
        })
    }

    return (
        !localStorage.token ? //Checks if there's a token,if there's one, renders form, if not renders message. -Jerry
            <NavLink to='/auth'>
            <p>Sign in or create an account to be able to create a route.</p>
            </NavLink>
        :
        <div className='containerWithArrow'>
            {props.loading !== 'Routing successful' ? <p className="route-loading">{props.loading}</p> :
                
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
                                {props.textDirections.map((e, i) => {
                                    return (
                                        <p key={i} className="instruction">{e}</p>
                                        )
                                    })}
                                {sidebarAnchor()}
                            </div>
                        <div className='sidebarFooterContainer'>
                            <p id='sidebarFooter'>These directions are for planning purposes only. You may find that construction projects, traffic, weather, or other events may cause conditions to differ from the map results, and you should plan your route accordingly. You must obey all signs or notices regarding your route.</p>
                        </div>
                    </div>
                </>
            }
        </div>
    )
};

export default RoutingSidebar;