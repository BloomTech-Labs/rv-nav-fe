import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import { NavLink } from 'react-router-dom'
import DropdownButton from 'react-bootstrap/DropdownButton'
import SplitButton from 'react-bootstrap/SplitButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import './sidebarMenu.css';
import {ReactComponent as HamMenu} from '../../assets/img/blue-menu.svg'
import {ReactComponent as SaveIcon} from '../../assets/img/car.svg'
import {ReactComponent as OutIcon} from '../../assets/img/log-out.svg'

const SidebarMenu = () => {

    
    return (
        <Dropdown as={ButtonGroup} className='dropdown'>

            <Dropdown.Toggle split variant="success" id="dropdown-split-basic" className="hamcolor">
                <div className='hamend'>RV Way </div>
                <HamMenu className='hammenu' />
            </Dropdown.Toggle>

            <Dropdown.Menu className='dropdownmenu'>
                {/* <Dropdown.Item className='dropdownitem' href="#/action-1">Satelite</Dropdown.Item>
                <Dropdown.Item className='dropdownitem1' href="#/action-2">Terrain</Dropdown.Item>
                <Dropdown.Item className='dropdownitem1' href="#/action-3">My vehicles</Dropdown.Item>
                <Dropdown.Item className='dropdownitem1' href="#/action-4">Saved Routes</Dropdown.Item>
                <Dropdown.Item className='dropdownitem1' href="#/action-5">Settings</Dropdown.Item> */}
                <NavLink to="/">
                    <div className='navlinkclass'>
                        <div className='sidebar-menu-item'>
                            <SaveIcon className='logoutclass' />
                            <Dropdown.Item className='dropdownitem1' href="#/action-1">My Vehicles</Dropdown.Item>
                        </div>
                        <div className='sidebar-menu-item'>
                            <OutIcon className='logoutclass' />
                            <Dropdown.Item className='dropdownitem1' href="#/action-2">Logout</Dropdown.Item>
                        </div>
                    </div>
                </NavLink>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default SidebarMenu