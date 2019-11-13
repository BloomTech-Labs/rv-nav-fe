import React, { useState } from 'react';
import SidebarMenu from '../SidebarMenu.js'
import { ReactComponent as ToggleShowArrow } from './icons/show-sidebar.svg'
import { ReactComponent as ToggleHideArrow } from './icons/hide-sidebar.svg'
import { NavLink } from 'react-router-dom';
import firebase from 'firebase'

//SCSS Styles
import './sidebar-routing.scss'

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

    console.log('SIDEBAR STATE', state.sidebar)

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
        // div.style.bottom =  '260px';

        // let loading = document.getElementsByClassName('route-loading')[0]
        //     loading.style.marginTop = '25px';
        //     loading.style.display = 'flex';
        //     loading.style.alignItems = 'center';
        //     loading.style.justifyContent = 'center';
        //     loading.style.right = '38px';
        //     loading.style.position = 'relative';


        props.setState({
            ...props.state,
            vehicleForm: "off",
            routing: "on",
            vehicles: "off",
            directions: "off",
        })
    }

    return (
        console.log('c%EMAIL FROM FIREBASE', 'font-size: 16px ; color: green;', firebase.auth().currentUser.email)
            (!localStorage.getItem('token') || !firebase.auth().currentUser.email) ? //Checks if there's a token,if there's one, renders form, if not renders message. -Jerry
            <NavLink to='/login'>
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