import React, { useState } from 'react'; 
import SidebarMenu from '../SidebarMenu.js'
import {ReactComponent as ToggleShowArrow} from './icons/show-sidebar.svg'
import {ReactComponent as ToggleHideArrow} from './icons/hide-sidebar.svg'
import { NavLink } from 'react-router-dom';


//SVG IMAGES FOR ROUTING
import { ReactComponent as DownArrow } from '../../../assets/img/lightIcons/arrow-downward (1).svg'
import { ReactComponent as RightArrow } from '../../../assets/img/lightIcons/arrow-forward (1).svg'
import { ReactComponent as LeftArrow } from '../../../assets/img/lightIcons/back (1).svg'
import { ReactComponent as UpArrow } from '../../../assets/img/lightIcons/arrow-up.svg'
import { ReactComponent as StartingPoint } from '../../../assets/img/lightIcons/location (1).svg'
import { ReactComponent as EndingPoint } from '../../../assets/img/lightIcons/marker (1).svg'
import { ReactComponent as NorthEast } from '../../../assets/img/lightIcons/diagonal-arrow-right-up (1).svg'

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
            div.style.animation = 'slideLeft .5s';
            div.style.left =  '0px';
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
            div.style.height =  '100%';  
    }

    //toggles state back to render the initial sidebar form
    const revertChanges = () => {
        
        let div = document.getElementsByClassName('mainSidebarContainer')[0]
        div.style.margin = '25px';
        div.style.height =  '400px';
        
        props.setState({
            ...props.state,
            vehicleForm: "off",
            routing: "on",
            vehicles: "off",
            directions: "off", 
        })
    }
    
    const routingIcons = [
        DownArrow, 
        RightArrow, 
        LeftArrow, 
        UpArrow, 
        StartingPoint, 
        EndingPoint,
        NorthEast
    ]
    console.log('SIDEBAR PICTURES', routingIcons)
    
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
                            {props.textDirections.map((string, i) => {
                                // return <p key={i} className="instruction">{string}</p>

                                let newStr = string.split(' ')

                                for(let i = 0; i < string.length; i++){
                                    if(newStr[i] === 'right'){
                                        return (
                                            <div className='instructionsContainer'>
                                                <RightArrow className='rightArrowIcon'/>
                                                <p key={i} className="instruction">{string}</p>
                                            </div>
                                        )
                                    }
                                    if(newStr[i] === 'left' || newStr[i] === 'west'){
                                        return (
                                            <div className='instructionsContainer'>
                                                <LeftArrow className='rightArrowIcon'/>
                                                <p key={i} className="instruction">{string}</p>
                                            </div>
                                        )
                                    } else if(newStr[i] === 'Keep right'){
                                            return (
                                                <div className='instructionsContainer'>
                                                    <UpArrow className='rightArrowIcon'/>
                                                    <p key={i} className="instruction">{string}</p>
                                                </div>
                                            )
                                    }
                                    if(newStr[i] === 'Start'){
                                        return (
                                            <div className='instructionsContainer'>
                                                <StartingPoint className='rightArrowIcon'/>
                                                <p key={i} className="instruction">{string}</p>
                                            </div>
                                        )
                                    }
                                    if(newStr[i] === 'NorthEast'){
                                        return (
                                            <div className='instructionsContainer'>
                                                <NorthEast className='rightArrowIcon'/>
                                                <p key={i} className="instruction">{string}</p>
                                            </div>
                                        )
                                    }
                                    if(newStr[i] === 'Finish'){
                                        return (
                                            <div className='instructionsContainer'>
                                                <EndingPoint className='rightArrowIcon'/>
                                                <p key={i} className="instruction">{string}</p>
                                            </div>
                                        )
                                    }
                                }
                                
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