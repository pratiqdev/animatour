import React, {useEffect, useState, useImperativeHandle} from 'react'

import animatour from './animatour'
import * as B from './brochure'

import createSteps from './utils/createSteps'
import Tour from './utils/Tour'
import shout from './utils/shout'


class Main extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      mainProps: props,
      activeTour: 'Default Tour',
      list:[
        {
          id: 'Default Tour',
          currentStep: 0,
          steps:[
              {
                title: 'STEP 0',
                element: '.step-0-element',
                content: 'Step Zero Content'
              },
              {
                title: 'STEP 1',
                element: '.step-1-element',
                content: 'Step One Content'
              },
              {
                title: 'STEP 2',
                element: '.step-2-element',
                content: 'Step Two Content'
            }
          ]
        },
        {
          id: 'Tour Two',
          currentStep: 0,
          steps:[
              {
                title: 'STEP 0',
                element: '.step-0-element',
                content: 'Step Zero Content'
              },
              {
                title: 'STEP 1',
                element: '.step-1-element',
                content: 'Step One Content'
              },
              {
                title: 'STEP 2',
                element: '.step-2-element',
                content: 'Step Two Content'
            }
          ]
        },
        
      ]
    }
  }
  
  
  newTour(tourId, config){///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    let LIST = this.state.list.push( new Tour(tourId, config) )
    this.setState({list: LIST})
  }

  addSteps(tourId, newSteps){///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    STEPS = createSteps(newSteps, this.state.list.find(x=>x.id===tourId).steps ) 
    
    this.setState(prevState => {
      return prevState.list.find(x => x.id === tourId).steps = STEPS
    })
  }

  getSteps(tourId){ ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    let STEPS = this.state.list.find(x => x.id === tourId).steps
    if(!STEPS){
      shout('error', `No steps found for '${tourId}'`)
    }else{
      return STEPS
    }
  }
  
  next (tourId){////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //- call next on the active tour unless a different tour is specified
    if(!tourId){
      shout('error', `Must specify a tour when calling nextStep()`); 
      return false
    }

    let STEP = this.state.list.find(x => x.id === tourId).currentStep
    let LENGTH = this.state.list.find(x=>x.id===tourId).steps.length - 1
    if(STEP < LENGTH){
      STEP = STEP + 1
    }else{
      STEP = 0
    }

    this.setState(prevState => {
       return prevState.list.find(x => x.id === tourId).currentStep = STEP
    })

    console.log(`${tourId} - ${this.state.list.find(x => x.id === tourId).currentStep}`)


  }

  prev (tourId){////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if(!tourId){
      shout('error', `Must specify a tour when calling prevStep()`); 
      return false
    }else{
      console.log(`tour: ${tourId} - prev`)
    }

    let STEP = this.state.list.find(x => x.id === tourId).currentStep
    let LENGTH = this.state.list.find(x=>x.id===tourId).steps.length - 1
    if(STEP > 0){
      STEP = STEP - 1
    }else{
      STEP = LENGTH
    }

    this.setState(prevState => {
       return prevState.list.find(x => x.id === tourId).currentStep = STEP
    })
  }

  exit (tourId){////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    let tour = this.list.find(x => x.id === tourId)
    this.setState({step: this.state.step + 1})
    console.log(`next step! ${this.state.step}`)
  }






    
    // Rest of the component's code
    render(){
      return <B.B1 tour={this.state.list.find(x=>x.id===this.state.activeTour)}/>
      // switch(this.state.brochureType){
      //   case 1: return <B.B1 {...this.state} {...this.state.mainProps}/>;
      //   default: return <B.B2 {...this.state} {...this.state.mainProps}/>;
      // }
    }
};

const Brochure = (props) => {
  return(
    <Main ref={(component) => window.main = component } {...props}/>
  )
}

  
export default Brochure