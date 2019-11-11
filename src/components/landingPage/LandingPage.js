import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import icon from "../../assets/img/rvnav.png";
import "./LandingPage.scss";
import { connect } from "react-redux";
import { logout } from "../../store/actions";
import {ReactComponent as Heroback} from '../../assets/img/heroback.svg';
import {ReactComponent as MapLocation} from '../../assets/img/Map-Location.svg';
import {ReactComponent as Vehicles} from '../../assets/img/Vehicles.svg';
import {ReactComponent as OffRoad} from '../../assets/img/Off-Road.svg';
import {ReactComponent as Map} from '../../assets/img/Map.svg';
import {ReactComponent as Navigation2} from '../../assets/img/navigation2.svg';

class LandingPage extends Component {
  componentDidMount() {
    this.props.logout(); //destroys user creds when this page is loaded, this is where the logout button links to
  }

  render() {
    return (
      <div>
        <div className="hero">
          <div id="hero-back">
              <Heroback />
          </div>
          <div className="hero-content">
              <div id="login">
                  <Link to='auth'><button className="btn outline">Login</button></Link>
              </div>
              <div class="uvp">
                  <h1 id="rvway">RV WAY</h1>
                  <p id="blurb">Home is all around you</p>
                  <div id="signup">
                      <a href="#"><button className="btn solid">Get Started</button></a>
                  </div> 
              </div>
          </div> 
        </div>
          <div>
          <div>
              <div className="left">
                  <div className="image">
                      <MapLocation />
                  </div>
                  <div className="text">
                      <h2>Low Clearance Routing</h2>
                      <p>Low bridges got you down? RV Way automatically routes around bridges and tunnels with low clearances.</p>
                  </div>
              </div>
              <div className="right">
                  <div className="image">
                      <Vehicles />
                  </div>
                  <div class="text">
                      <h2>Vehicle Profiles</h2>
                      <p>People are unique, and RV’s are no different! Create a profile for your vehicle to get customized routing.</p>
                  </div>
              </div>
              <div className="left">
                  <div className="image">
                    <OffRoad />
                  </div>
                  <div className="text">
                      <h2>Dirt Road Warnings</h2>
                      <p>Dirt roads leaving you in the dust? We’ll warn you when there’s more than 2 miles of dirt roads on your route.</p>
                  </div>
              </div>
          </div>
          <div className="cta">
              <div className="image">
                  <Map />
              </div>
              <div className="text">
                  <h1>Adventure awaits.</h1>
                  <div className="letsgo">
                      <Navigation2 />
                      <a href="">Let's Go!</a>                
                  </div>
              </div>
          </div>
      </div>
      <div>
          <div className="copyright">
              <p>© 2019 RV Way</p>
          </div>
          <div className="info">
              <p>A Lambda School student project.</p>
              <p>Want to learn more? <span className="bold">Meet our team</span></p>
          </div>   
      </div> 
    </div>
    );
  }
}
const mapStateToProps = state => {
return{
  selected_id: state.selected_id,
  vehicles: state.vehicles}
}

export default connect(
mapStateToProps, {logout}
)(LandingPage)

//Old stuff testing joanne's stuff out
  // <div className="landing-page-wrapper">
  //   <div className="button-container">
  //     {/* <Link to="/map" >
  //       <Button variant="light">Use as guest</Button>
  //     </Link> */}
  //     <Link to="/auth">
  //       <Button variant="warning">Login / Register</Button>
  //     </Link>
  //   </div>
  //   <div className="intro">
  //     <img className="intro-logo" src={icon} alt="logo" />
  //   </div>
  //   <a href = "/aboutus.html" className="about" target = "_blank" rel = "noopener noreferrer nofollow">
  //     About the team
  //   </a>
  // </div>