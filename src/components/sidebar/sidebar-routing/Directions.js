import React from 'react';

//SVG IMAGES FOR ROUTING
import { ReactComponent as DownArrow } from '../../../assets/img/lightIcons/arrow-downward (1).svg'
import { ReactComponent as RightArrow } from '../../../assets/img/lightIcons/arrow-forward (1).svg'
import { ReactComponent as LeftArrow } from '../../../assets/img/lightIcons/back (1).svg'
import { ReactComponent as UpArrow } from '../../../assets/img/lightIcons/arrow-up.svg'
import { ReactComponent as StartingPoint } from '../../../assets/img/lightIcons/location (1).svg'
import { ReactComponent as EndingPoint } from '../../../assets/img/lightIcons/marker (1).svg'
import { ReactComponent as NorthEast } from '../../../assets/img/lightIcons/diagonal-arrow-right-up (1).svg'
import { ReactComponent as NorthWest } from '../../../assets/img/lightIcons/diagonal-arrow-left-up (1).svg'
import { ReactComponent as SouthEast } from '../../../assets/img/lightIcons/diagonal-arrow-right-down (1).svg'
import { ReactComponent as SouthWest } from '../../../assets/img/lightIcons/diagonal-arrow-left-down (1).svg'
// import { ReactComponent as SharpRight } from '../../../assets/img/lightIcons/diagonal-arrow-right-up (1).svg'
// import { ReactComponent as SharpLeft } from '../../../assets/img/lightIcons/diagonal-arrow-right-up (1).svg'


const Directions = (props) => {

    console.log('FROM DIRECTIONS', props)

    return (
        <>
            {props.props.map((string, i) => {
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
                } 
                if(newStr[i] === 'forward'){
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
        </>
    )
};

export default Directions;