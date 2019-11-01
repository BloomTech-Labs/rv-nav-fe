import React from 'react'; 
import './sidebar-routing.scss'
import SidebarMenu from '../SidebarMenu.js'

const RoutingSidebar = (props) => {

    const sidebarAnchor = () => {
        if(props.state.directions === 'on'){
            let sidebar = document.querySelector('#overlayNav.overlay.open')
            sidebar.style.height = '100%'
            sidebar.style.margin = '0'
            sidebar.style.width = '375px'
            document.getElementsByClassName('navbar')[0].style.display = 'none'

            let overlayContent = document.getElementsByClassName('overlay-content')[0]
            overlayContent.style.margin = 0
            overlayContent.style.height = '100%'

            let on = document.getElementsByClassName('on')[0]
            on.style.margin = 0
            on.style.height = '100%'
        } else {
            let sidebar = document.querySelector('#overlayNav.overlay.open')
            sidebar.style.height = '370px'
            sidebar.style.margin = '25px'
            sidebar.style.width = '375px'
            document.getElementsByClassName('navbar')[0].style.display = 'block'
            document.getElementsByClassName('overlay-content')[0].style.marginTop = '25px'
        }
    }

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
        <>
            {props.loading !== 'routing successful' ? <p className="route-loading">{props.loading}</p> :
                <div className='sidebarContainer'>
                    <SidebarMenu />
                        <div className='backbuttonContainer'>
                            <h6 
                            className='routingBackButton'
                            onClick={revertChanges}
                            >Back</h6>
                        </div>
                        <div className='startEndContainer'>
                            <h3 id='estimatedTime'>17 mins (4 miles)</h3>
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
                            <p>This route avoids</p>
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
            }
        </>
    )
};

export default RoutingSidebar;