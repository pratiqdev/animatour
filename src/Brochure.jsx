import React, {useEffect, useState} from 'react'

import animatour from './animatour'
import Collection from './ui/Collection'


import Tour from './classes/Tour'
import shout from './utils/shout'
import _getLocation from './utils/getLocation'
import _scrollToElement from './utils/scrollToElement'
import _createSteps from './utils/createSteps'


class Main extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      mainProps: props,
      activeTour: 'Default Tour',
      guideOpen: false,
      location: null,
      guideMargin:10,
      brochureAlignment: ['top-left', 'left-top'],

      list:[
        {
          id: 'Default Tour',
          currentStep: 0,
          brochureType: 1,
          steps:[
              {
                title: 'START',
                element: '',
                content: 'start page - no element (index 0)'
              },
              {
                title: 'STEP 1',
                element: '.step-1-element',
                content: 'Step One content (index 1)'
              },
              {
                title: 'STEP 2',
                element: '.step-2-element',
                content: 'Step Two Content (index 2)'
              },
              {
                title: 'STEP 3',
                element: '.step-3-element',
                content: 'Step Three Content (index 3)'
              },
              {
                title: 'STEP 4',
                element: '.step-4-element',
                content: 'Step Four Content (index 4)'
              },
              {
                title: 'STEP 5',
                element: '.step-5-element',
                content: 'Step Five Content (index 5)'
              },
              {
                title: 'STEP 6',
                element: '.step-6-element',
                content: 'Step Six Content (index 6)'
              },
              {
                title: 'END',
                element: '',
                content: 'end page - no element (index 4)'
              },
          ]
        },
        {
          id: 'Tour Two',
          currentStep: 0,
          brochureType: 1,
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

  //- Utilities ----------------------------------------------------------------------------------------------------------------------------
  useTourOrActive(tourId){
    if(tourId){
      if(this.state.list.find(x=>x.id === tourId) === false){
        shout.warn(`No tour was found as '${tourId}'. Using currently active tour instead`)
        return this.state.activeTour
      }else{
        return tourId
      }
    }else{
      return this.state.activeTour
    }
  }

  verifyTourExists(tourId){
    if(tourId){
      if(typeof this.state.list.find(x=>x.id === tourId) === 'undefined'){
        // shout.warn( `No tour was found as '${tourId}'. Using currently active tour instead`)
        return false
      }else{
        return true
      }
    }else{
      return false

    }
  }
  
  
  //- Tours --------------------------------------------------------------------------------------------------------------------------------
  newTour(tourId, config){//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if(this.verifyTourExists(tourId)){
      shout.error(`newTour() \n A tour with the id '${tourId}' already exists`)
      return false
    }
    let LIST = this.state.list
    LIST.push( new Tour(tourId, config) )
    this.setState({list: LIST})
  }

  getAllTours(){ ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    return this.state.list
  }
  
  getTour(tourId){ /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    let useTour = this.useTourOrActive(tourId)
    let TOUR = this.state.list.find(x => x.id === useTour)
    if(!TOUR){
      shout.error(`No tour found for '${useTour}'`)
    }else{
      return TOUR
    }
  }

  //- Steps --------------------------------------------------------------------------------------------------------------------------------
  addSteps(tourId, newSteps){///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    STEPS = _createSteps(newSteps, this.state.list.find(x=>x.id===tourId).steps ) 
    
    this.setState(prevState => {
      return prevState.list.find(x => x.id === tourId).steps = STEPS
    })
  }
  
  next (tourId){////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    let TOUR = this.useTourOrActive(tourId)

    let STEP      = this.state.list.find(x => x.id === TOUR).currentStep
    let LENGTH    = this.state.list.find(x => x.id === TOUR).steps.length - 1
    
    if(STEP < LENGTH){
      STEP = STEP + 1
    }else{
      STEP = 0
    }

    let ELEMENT   = this.state.list.find(x => x.id === TOUR).steps[STEP].element

    _scrollToElement(ELEMENT)

    this.setState(prevState => {
       prevState.list.find(x => x.id === TOUR).currentStep = STEP
      //  prevState.guideLocation = this._findGuide(ELEMENT)
       return prevState
    })

  }

  prev (tourId){////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    let TOUR = this.useTourOrActive(tourId)

    let STEP =    this.state.list.find(x => x.id === TOUR).currentStep
    let LENGTH =  this.state.list.find(x => x.id === TOUR).steps.length - 1
    
    if(STEP > 0){
      STEP = STEP - 1
    }else{
      STEP = LENGTH
    }

    let ELEMENT   = this.state.list.find(x => x.id === TOUR).steps[STEP].element

    _scrollToElement(ELEMENT)

    this.setState(prevState => {
      prevState.list.find(x => x.id === TOUR).currentStep = STEP
      // prevState.guideLocation = this._findGuide(ELEMENT)
      return prevState
   })
  }
  
  //- Brochure --------------------------------------------------------------------------------------------------------------------------------
  open (tourId){////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    let useTour = this.useTourOrActive(tourId)
    this.setState({guideOpen: true, activeTour: useTour})
  }

  close (){/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    this.setState({guideOpen: false})
  }

  //- Guide --------------------------------------------------------------------------------------------------------------------------------
  getActiveGuideElement(){
    let TOUR = this.state.activeTour
    let STEP = this.state.list.find(x=>x.id === TOUR).currentStep
    let EL = this.state.list.find(x=>x.id === TOUR).steps[STEP].element

    return EL
  }



  repeatUpdateGuideLocation(){
    const loop = () => {

      this.setState({location: _getLocation(this.getActiveGuideElement(), this.state.guideMargin)})



      setTimeout(() => {
        loop()
      }, 100);
    }
    loop()
  }
  
















  componentDidMount(){
    this.repeatUpdateGuideLocation()
  }



    
  // Rest of the component's code
  render(){
    return(
      <Collection
      type={this.state.list.find(x=>x.id===this.state.activeTour).brochureType}
      tour={this.state.list.find(x=>x.id===this.state.activeTour)}
      open={this.state.guideOpen}
      loc={this.state.location}
      />
    )
  }
};

const Brochure = (props) => {
  return(
    <Main ref={(component) => window.main = component } {...props}/>
  )
}

  
export default Brochure