import React, { useState } from 'react'
import styled from 'styled-components';
// import { NavLink } from 'react-router-dom'

const Header = styled.div`
  height: 80px;
  width: auto
  background: #2A2E43;
`
const Text = styled.span`
  position: absolute;
  left: 0.74%;
  // right: 90.31%;
  top: 1.25%;
  bottom: 12.5%;
  color: rgba(53, 195, 226, 0.95);
  font-size: 36px;
  font-weight: bold;
  font-family: Heebo;
`

const MapHeader = () => {

  // const [sidebar, setSidebar] = useState(true)

  // const toggleSidebar = () => {
  //     //Google analytics tracking
  //     window.gtag("event", "sidebar toggle", {
  //       event_category: "sidebar",
  //       event_label: "sidebar toggle"
  //     });
  //     setSidebar(false)
  //   }



  return (
    <>
      <Header className="rv-way-header">
        <Text className="rv-way-header-text">RV WAY</Text>
      </Header>
    </>
    // <div>
    // {/* <Nav /> */}
    // <div className="open-button-wrap">
    //   <i className="fas fa-arrow-circle-right" onClick={toggleSidebar}   ></i>
    //   <NavLink  to="/">
    //     <Button 
    //       className="logout-btn"
    //       variant="warning">{localStorage.token ? `Log Out` : `Login / Signup`}
    //     </Button>
    //   </NavLink>
    // </div>
    // </div>

  )
}

export default MapHeader