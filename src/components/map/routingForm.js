import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { connect } from "react-redux";
import "../sidebar/sidebar.css"

const RoutingForm = (props) => {
  //changes "you are routing with" message at the top of the routing form

  {/* Below code commented out because due to the re-design -Noor */ }

  // let name = "no vehicle";
  // props.vehicles.vehicles && props.vehicles.vehicles.map( e => {
  //   if(e.id === props.selected_id){
  //      name = e.name;
  //   }
  //   return name;
  // })

  console.log('props on RoutingForm', props)

  return (
    <div>
      <>

        {/* Below code commented out because due to the re-design -Noor */}

        {/* <div className="routing-with">
        <p>You are routing with</p>
        <span>{`${name}`}</span>
        </div> */}
        <div className="selected-vehicle">
          <i className="selected-vehicle-truck-icon"></i>
          <p className="selected-vehicle-text">Class B</p>
          <i className="selected-vehicle-pencil-icon"></i>
        </div>
        <div className="dropdown-menu-class">
          <span className="what-vehcile-are-you-routing-with">What vehcile are you routing with?</span>
          <select className="selected-vehicle-dropdown-menu">
            <option className="selected-vehicle-dropdown-option"></option>
            <option style={{color: "#00B2D9"}}>+ Add a vehicle...</option>
          </select>
        </div>
        <form className="route-form" onSubmit={(event) => {
          event.preventDefault()
          props.onChangeHandler()
        }}>

          <div className="start-input-div">
            <span className="choose-a-starting-point">Choose a starting point...</span>
            <input
              // autoFocus={true}
              className="route-input"
              id="start"
              required
              type="text"
              placeholder=""
              name="start"
              value={props.start}
              onChange={props.routeChangeHandler}
            />
            {/* <input class="form-control" id="email" name="email" type="text" /> */}
          </div>
          <div className="end-input-div">
            <span className="where-are-you-going">Where are you going?</span>
            <input
              className="route-input"
              id="end" required
              type="text"
              placeholder=""
              name="end"
              value={props.end}
              onChange={props.routeChangeHandler}
            />
          </div>
          {/* <Accordion className="POI-accordion">
            <Accordion.Toggle className="POI-dropdown" as={Card.Header} eventKey="2">
              <p>Search destination points of interest</p>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <div className="point-of-interest-options">
                <Form.Group className="search-distance-input">
                  <Form.Label className="search-distance-label">distance, miles</Form.Label>
                  <Form.Control
                    className="point-interest-input"
                    type="number"
                    name='pointOfInterestDistance'
                    placeholder="0"
                    value={props.pointOfInterestDistance}
                    onChange={props.routeChangeHandler}>
                  </Form.Control>
                </Form.Group>
                <Button variant="secondary"
                  className={props.walmartSelected === true ? "highlight point-interest-btn" : "point-interest-btn"}
                  onClick={(e) => {
                    e.preventDefault()
                    props.toggle("walmartSelected")
                  }}>Walmarts
              </Button>
                <Button variant="secondary"
                  className={props.campsiteSelected === true ? "highlight point-interest-btn" : "point-interest-btn"}
                  onClick={(e) => {
                    e.preventDefault()
                    props.toggle("campsiteSelected")
                  }}>Campsites
              </Button>
              </div>
            </Accordion.Collapse>
          </Accordion>*/}
          <Button variant="warning" id="route-button" type="submit" onClick={props.buttonSelect}>Get Directions</Button>
        </form>
      </>
      {/* <p className="route-loading">{props.loading}</p>
      <div className="directions">
        <p>Directions</p>
        {props.textDirections.map(e => {
          return (
            <p className="instruction">- {e}</p>
          )
        })
        }
      </div> */}
    </div>
  )
}

const mapStateToProps = state => {
  console.log("state in route form", state)
  return {
    selected_id: state.selected_id,
    vehicles: state.vehicles
  }
}

export default connect(
  mapStateToProps
)(RoutingForm)
