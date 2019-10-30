import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import './sidebar.css';

const SidebarMenu = () => {
    return (
        <Dropdown className='dropdown'>

            <Dropdown.Toggle variant="success" id="dropdown-basic" className="hamcolor">
                RV Way
            </Dropdown.Toggle>

            <Dropdown.Menu className='dropdownmenu'>
                <Dropdown.Item className='dropdownitem' href="#/action-1">Satelite</Dropdown.Item>
                <Dropdown.Item className='dropdownitem1' href="#/action-2">Terrain</Dropdown.Item>
                <Dropdown.Item className='dropdownitem1' href="#/action-3">My vehicles</Dropdown.Item>
                <Dropdown.Item className='dropdownitem1' href="#/action-4">Saved Routes</Dropdown.Item>
                <Dropdown.Item className='dropdownitem1' href="#/action-5">Settings</Dropdown.Item>
                <Dropdown.Item className='dropdownitem1' href="#/action-6">Logout</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default SidebarMenu