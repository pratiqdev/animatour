//? Tried to create a brochure that can be used as separate instances
//- you lose access to the inner functions from controller
//- instances can not use inner functions either

import React, {useEffect, useState, useImperativeHandle} from 'react'

import animatour from './animatour'
import * as B from './brochure'

import createSteps from './utils/createSteps'
import Tour from './utils/Tour'
import shout from './utils/shout'


class Brochure extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      testVal: props.testVal,
      props: props,
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
    // let STEPS = this.state.list.find(x => x.id === tourId).steps
    // if(!STEPS){
    //   shout('error', `No steps found for '${tourId}'`)
    // }else{
    //   return STEPS
    // }
    return this.state.steps
  }
  
  next (tourId){////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if(!tourId){
      shout('error', `Must specify a tour when calling nextStep()`); 
      return false
    }else{
      console.log(`tour: ${tourId} - ${this.state.list.find(x => x.id === tourId).currentStep} - next`)
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








  
  render(){
    return <div>render() {this.state.testVal}</div>
  }
};



  
export default Brochure