import React from 'react';
import { connect } from 'react-redux'
import RoutingForm from '../map/routingForm.js'
import "./VehicleForm.css";
import { 
  addVehicle, 
  updateVehicle,
} from '../../store/actions/index.js'

class VehicleForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
      //these specifications are in their own object so that specifications can be sent direvtly to the BE
      //this is the object that will be sent to the BE
      specifications: {
          name: '',
          heightFeet: '', // value that stores the user entry of height in feet
          heightInches: '', // value that stores the user entry of height in inches
          widthFeet: '',
          widthInches: '',
          lengthFeet: '',
          lengthInches: '',
          weight: '', //this will be sent in pounds? check BE docs
          axel_count: '', //integer, unit implied
          class_name: '', //controlled input of one letter
          dual_tires: false, //Bool, checkbox
          trailer: false, //Bool, checkbox
          routing: "off"
        }
      }
    }
//handles input of numbers and converts into the right data type of int
handleChange = (event) => {
    this.setState({
        specifications: {
          ...this.state.specifications,
          [event.target.name]: parseInt(event.target.value)         
        }
    })
  }

  //handles text only input
  handleText = (event) => {
    this.setState({
        specifications: {
          ...this.state.specifications,
          [event.target.name]: event.target.value      
        }
    })
  }

  //assigns state to a value based on whether a box is checked
  handleCheck = (event) => {
    //const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    this.setState({
     specifications: {
      ...this.state.specifications,       
      [event.target.name]: event.target.checked
     }
    }) 
  }

  //assigns state to a value based on which radio button has been clicked
  handleRadio = (event) => {
    //const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    this.setState({
     specifications: {
      ...this.state.specifications,       
      class_name: event.target.value
     }
    }) 
  }

  //occurs when the submit button is clicked
  //converts inputs from user to correct values to send to the backend, then send them
  
//    buttonSelect = (event) => {
//     console.log("event", event.target);
//     if(this.state.specifications.routing === "off"){
//       this.setState({
//       specifications: {
//         name: '',
//       // height: 0, // value that gets sent to the backend, after combinining heightFeet and heightInches into one unit
//        heightFeet: '', // value that stores the user entry of height in feet
//        heightInches: '', // value that stores the user entry of height in inches
//      //  width: 0, // these 3 width values follow the same structure as height
//        widthFeet: '',
//        widthInches: '',
//     //   length: 0, // these 3 length values follow the same structure as height
//        lengthFeet: '', 
//        lengthInches: '',
//        weight: '',  //this will be sent in pounds? check BE docs
//        axel_count: '', //integer, unit implied
//        class_name: '', //controlled input of one letter
//        //created_at: '', //check BE for format, generate date with js
//        dual_tires: false, //Bool, checkbox
//        trailer: false,  //Bool, checkbox
//        routing: "on"
//       }
//     })
//   }else{
    
//     this.setState({
//         vehicleForm: "on",
//         routing: "off",
//         vehicles: "off",
//         directions: "off"
//     })
//   }
// }

closeVehicleForm = () => this.setState({ vehicleForm: "off", routing: "on" })

  vehicleSubmit = (event) => {
    
    event.preventDefault();
    //Google analytics tracking
    window.gtag("event", "create vehicle", {
      event_category: "submit",
      event_label: "create vehicle"
    });
    
    let height = this.combineDistanceUnits(this.state.specifications.heightInches, this.state.specifications.heightFeet);
    let width = this.combineDistanceUnits(this.state.specifications.widthInches, this.state.specifications.widthFeet);
    let length = this.combineDistanceUnits(this.state.specifications.lengthInches, this.state.specifications.lengthFeet);
    let weight =  this.state.specifications.weight;
    let axel_count = this.state.specifications.axel_count;
    let vehicle_class = this.state.specifications.class_name;
    let trailer = this.state.specifications.trailer;
    if(vehicle_class === "Trailer"){
      vehicle_class = "";
      trailer = true;
    }
    if(weight === ""){
      weight = 0;
    } 
    if(axel_count === ""){
      axel_count = 0;
    } 
    //make sure all values entered are sent as the correct data type to the back end
    parseFloat(height);
    parseFloat(length);
    parseFloat(width);
    parseFloat(weight);
    parseInt(axel_count);
    
    //send is the object that is sent to the web backend to be stored
    //it is made using values from the form, some of which are processed and converted before being assigned to the keys here
    let send = {
      name: this.state.specifications.name,
      height: height,
      width: width,
      length: length,
      weight: weight,
      axel_count: axel_count,
      vehicle_class: vehicle_class,
      trailer: trailer,
      dual_tires: this.state.specifications.dual_tires
    }
    console.log("sent", send);
    if(this.props.editing){
      this.props.updateVehicle(send, this.props.id);
      this.props.editVehicleToggle(this.props.id);
    } else {
      this.props.addVehicle(send);
      this.closeVehicleForm();
    }
    this.setState({
      specifications: {
        name: '',
        heightFeet: '',
        heightInches: '',
        widthFeet: '',
        widthInches: '',
        lengthFeet: '',
        lengthInches: '',
        weight: '',
        axel_count: '',
        class_name: '',
        dual_tires: false,
        trailer: false,
       
    
      }
    })
  }

//   sidebarAnchor = () => {
//     let sidebar = document.getElementById('overlayNav')
//     sidebar.style.height = '100%'
//     sidebar.style.margin = '0'
//     sidebar.style.width = '23.4375rem'
//     document.getElementsByClassName('navbar')[0].style.display = 'none'
//     document.getElementsByClassName('overlay-Nav')[0].style.height = '650px'
//     document.getElementsByClassName('vehicle-form')[0].style.height = '650px'

//     // let navBar = document.getElementsByClassName('navbar')
//     // navBar.style.display = 'none'
// }


  //combines feet and inch units into feet only, to be sent to the backend
  combineDistanceUnits = (inchesIn, feetIn) => {
    let inches = inchesIn;
    let feet = feetIn;
    if(feet === ""){
      feet = 0;
    } if (inches === ""){
      inches = 0;
    }
    const inchesCombined = feet + (inches / 12);
    return inchesCombined;
  }

    render(){
        console.log("****VEHICLE FORM PROPS", this.props);
        console.log('ROUTING', this.state.specifications.routing)
        console.log("form props", this.props)
        return(
          this.props.state.vehicleForm === 'on' ?
            <div className = "vehicleForm-container"  onSubmit={this.vehicleSubmit}>
                 <div className="back 1">
                        <p className='off'/*{`backButton ${this.state.specifications.routing === `on` ? `selected` : `sidebar-tab`} `}*/
                                   id="routing"
                                   onClick={this.props.buttonSelect}>Back
                        </p>
                        <p className="back-label">| Add Vehicle</p>
                  </div>
                 <p id='vehicleAddTitle'>Add a Vehicle</p>
                 <p className="name-label">Name (required)</p>
                     <input className = "vehicleName"
                         type="string"
                         required
                         name='name'
                         placeholder="The Mystery Machine"
                         value={this.state.specifications.name}
                         onChange={this.handleText}
                      >
                     </input>
                 <div className = "row1">
                 <p className="vehicle-spec-label">Height</p>
                 <p className="vehicle-spec-label width-label">Width</p> 
                 </div>
               <div className="row2">  
                <div className = "row2-block1">
                 <div className="measurements">
                    <div className="measurements-input">
                     <p className="box1">Feet</p>
                       <input        
                       type="number"
                       min="0"
                       max="100"
                       name='heightFeet'
                       placeholder="0"
                       value={this.state.specifications.heightFeet}
                       onChange={this.handleChange}
                        >
                    </input>
                    </div>
                 </div>
                 <div className='plus'>+</div>
                 <div className="measurements">
                 <div className="measurements-input">
                    <p className="box2">Inches</p>
                       <input       
                       type="number"
                       min="0"
                       max="100"
                       name='heightInches'
                       placeholder="0"
                       value={this.state.specifications.heightInches}
                       onChange={this.handleChange}
                        >
                    </input>
                   </div>
                    </div>
                 </div>
                 <div className = "row2-block2"> 
                 <div className="measurements">
                 <div className="measurements-input"> 
                    <p className="box3">Feet</p>
                       <input        
                       type="number"
                       min="0"
                       max="100"
                       name='widthFeet'
                       placeholder="0"
                       value={this.state.specifications.widthFeet}
                       onChange={this.handleChange}
                        >
                    </input>
                 </div>
                 </div>
                 <div className='plus'>+</div>
                 <div className="measurements">
                 <div className="measurements-input">
                    <p className="box4">Inches</p>
                       <input       
                       type="number"
                       min="0"
                       max="100"
                       name='widthInches'
                       placeholder="0"
                       value={this.state.specifications.widthInches}
                       onChange={this.handleChange}
                        >
                    </input>
                   </div>
                  </div>
                </div> 
               </div>          
               <div className = "row3">                
                 <p className="vehicle-spec-label">Length</p>
                 <p className="vehicle-spec-label weight-label">Weight</p> 
                 </div>
               <div className= "row4">
               <div className = "row4-block1">
               <div className="measurements">
                 <div className="measurements-input">
                     <p className="box5">Feet</p>
                       <input        
                       type="number"
                       min="0"
                       max="100"
                       name='lengthFeet'
                       placeholder="0"
                       value={this.state.specifications.lengthFeet}
                       onChange={this.handleChange}
                        >
                    </input>
                    </div>
                 </div>
                 <div className='plus'>+</div>
                 <div className="measurements">
                 <div className="measurements-input">
                    <p className="box6">Inches</p>
                       <input       
                       type="number"
                       min="0"
                       max="100"
                       name='lengthInches'
                       placeholder="0"
                       value={this.state.specifications.lengthInches}
                       onChange={this.handleChange}
                        >
                      </input>
                     </div>
                    </div>
                    <div className = "row4-block2">
                    <div className="measurements">
                 <div className="measurements-input">
                     <p className="box7">Pounds</p>
                       <input  className= "pounds"      
                       type="number"
                       min="0"
                       max="100"
                       name='pounds'
                       placeholder="0"
                       value={this.state.specifications.pounds}
                       onChange={this.handleChange}
                        >
                    </input>
                    </div>
                    </div>
                 </div>
              </div>
              </div>
              <div className="row6">
                 <p className="vehicle-spec-label">Axle Count</p>
                 <p className="vehicle-spec-label">Class</p> 
              </div>
                  <div className="row7">
                  <div className = "row7-block1">
               <div className="measurements">
                 <div className="measurements-input">               
                <input        
                  type="number"
                  min="0"
                  max="10"
                  name='axel_count'
                  placeholder="0"
                  value={this.state.specifications.axel_count}
                  onChange={this.handleChange}
                >
                </input>
                  </div>
               </div>
               </div>
               <div className = "row7-block2">
               <div className="vehicle-class">         
              <div className="class-radios">
                <input className="v-class" type="radio" id={`inline-text-1`} 
                value= "A"
                checked={this.state.specifications.class_name === "A"} onChange={this.handleRadio}
                />
                <p className="radio-label">A</p>
                <input className="v-class"  type="radio" id={`inline-text-2`} 
                value= "B"
                checked={this.state.specifications.class_name === "B"} onChange={this.handleRadio}
                />
                <p className="radio-label">B</p>
                <input className="v-class"  type="radio" id={`inline-text-2`} 
                value= "C"
                checked={this.state.specifications.class_name === "C"} onChange={this.handleRadio}
                />
                <p className="radio-label">C</p>
              </div>
            </div>
          </div> {/* End of Vehicle Class Div */}
          <div>
          </div>
           </div>    
          <div className="row8">
           <p className="vehicle-spec-label">Tires</p>
      <div className="measurements">
      <div className="dual-wheel">
          <input className="tires-box"
          name="dual_tires" 
          type="checkbox"
          checked={this.state.specifications.dual_tires}
          onChange={this.handleCheck}
          label="I have a dual wheel vehicle" 
          id={`inline-text-2`} 
          />
          <p className="tires">I have a dual wheel vehicle</p>
          </div>
        </div>
     </div>
          <button className='addVehicle' type="submit" variant="warning" onClick={this.vehicleSubmit}>Add Vehicle</button>
 </div>
 :
<RoutingForm />
           )
        }
    }
 const mapStateToProps = state => ({})
        
    export default (connect(mapStateToProps, {addVehicle, updateVehicle}))(VehicleForm)
       
