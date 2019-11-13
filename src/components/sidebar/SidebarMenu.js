import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import { NavLink } from 'react-router-dom'
import DropdownButton from 'react-bootstrap/DropdownButton'
import SplitButton from 'react-bootstrap/SplitButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import './sidebarMenu.css';
import { ReactComponent as HamMenu } from '../../assets/img/hamburger.svg'
import { ReactComponent as OutIcon } from '../../assets/img/log-out.svg'
import { logout } from '../../store/actions/'
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';


const SidebarMenu = (props) => {
    return (
        <Dropdown as={ButtonGroup} className='dropdown'>

            <Dropdown.Toggle split variant="success" id="dropdown-split-basic" className="hamcolor">
                <div className='hamend'>RV WAY </div>
                <HamMenu className='hammenu' />
            </Dropdown.Toggle>

            <Dropdown.Menu className='dropdownmenu'>
                {/* <Dropdown.Item className='dropdownitem' href="#/action-1">Satelite</Dropdown.Item>
                <Dropdown.Item className='dropdownitem1' href="#/action-2">Terrain</Dropdown.Item>
                <Dropdown.Item className='dropdownitem1' href="#/action-3">My vehicles</Dropdown.Item>
                <Dropdown.Item className='dropdownitem1' href="#/action-4">Saved Routes</Dropdown.Item>
                <Dropdown.Item className='dropdownitem1' href="#/action-5">Settings</Dropdown.Item> */}
                <NavLink className='dropdownitem1' to="/">
                    <div className='navlinkclass'>
                        <OutIcon className='logoutclass' />              {/* Below is a callback function to logout from firebase & local user and push to /login -Noor */}
                        <Dropdown.Item className='dropdownitem1' onClick={() => { props.logout(); props.history.push('/login') }} > Logout</Dropdown.Item>
                    </div>
                </NavLink>
            </Dropdown.Menu>
        </Dropdown>
    )
}

const mapStateToProps = state => ({})

export default withRouter(connect(
    mapStateToProps, { logout }
)(SidebarMenu))

// export default SidebarMenu