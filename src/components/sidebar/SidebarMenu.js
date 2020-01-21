import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import { NavLink } from 'react-router-dom'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import './sidebarMenu.css';
import { ReactComponent as HamMenu } from '../../assets/img/hamburger.svg'
import { ReactComponent as OutIcon } from '../../assets/img/log-out.svg'
import { logout } from '../../store/actions/'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


const SidebarMenu = (props) => {
    return (
        <Dropdown as={ButtonGroup} className='dropdown'>

            <Dropdown.Toggle split variant="success" id="dropdown-split-basic" className="hamcolor">
                <div className='hamend'>RV WAY </div>
                <HamMenu className='hammenu' />
            </Dropdown.Toggle>

            <Dropdown.Menu className='dropdownmenu'>
                {/* <div className='dropdownitem1' to="/"> */}
                    <div className="hamburger-options-parent">
                        <div className='navlinkclass'>
                           
                             <h5>Map Views</h5>
                        </div>
                        <div className='navlinkclass'>
                            <OutIcon className='logoutclass' />              {/* Below is a callback function to logout from firebase & local user and push to /login -Noor */}
                            <Dropdown.Item className='dropdownitem1'> Satellite</Dropdown.Item>
                        </div>
                        <div className='navlinkclass'>
                            <OutIcon className='logoutclass' />              {/* Below is a callback function to logout from firebase & local user and push to /login -Noor */}
                            <Dropdown.Item className='dropdownitem1' > Terrain</Dropdown.Item>
                        </div>
                        <div className='navlinkclass'>
                            <OutIcon className='logoutclass' />              {/* Below is a callback function to logout from firebase & local user and push to /login -Noor */}
                            <h5>Routing Preferences</h5>
                        </div>
                        <div className='navlinkclass'>
                            <OutIcon className='logoutclass' />              {/* Below is a callback function to logout from firebase & local user and push to /login -Noor */}
                            <Dropdown.Item className='dropdownitem1' > My Vehicles</Dropdown.Item>
                        </div>
                        <div className='navlinkclass'>
                            <OutIcon className='logoutclass' />              {/* Below is a callback function to logout from firebase & local user and push to /login -Noor */}
                            <Dropdown.Item className='dropdownitem1' > Saved Routes</Dropdown.Item>
                        </div>
                        <div className='navlinkclass'>
                            <OutIcon className='logoutclass' />              {/* Below is a callback function to logout from firebase & local user and push to /login -Noor */}
                            <Dropdown.Item className='dropdownitem1' > Routing Options</Dropdown.Item>
                        </div>
                        <div className='navlinkclass'>
                            <OutIcon className='logoutclass' />              {/* Below is a callback function to logout from firebase & local user and push to /login -Noor */}
                            <Dropdown.Item className='dropdownitem1' onClick={() => { props.logout(); props.history.push('/login') }} > Logout</Dropdown.Item>
                        </div>
                    </div>
                {/* </div> */}
            </Dropdown.Menu>
        </Dropdown>
    )
}

const mapStateToProps = state => ({})

export default withRouter(connect(
    mapStateToProps, { logout }
)(SidebarMenu))

// export default SidebarMenu