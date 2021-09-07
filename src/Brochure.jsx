import React, {useEffect, useState} from 'react'

import animatour from './animatour'
import Collection from './ui/Collection'


import Tour from './classes/Tour'
import shout from './utils/shout'
import _getLocation from './utils/getLocation'
import _scrollToElement from './utils/scrollToElement'
import _createSteps from './utils/createSteps'


const ogDefaultSettings = {
  ringColor: '#f00',
  ringWidth: '1px',
  ringRadius: '0px',
  ringMargin: '10px',
  ringShadowColor: 'rgba(150,150,150,.8)',
  ringShadowWidth: '10000px',

  brochureType: 0, //? 'flat', 'simple', 'custom' ???
  
  stepDuration: 0, /// (ms) 0 means do not auto progress to next step 
  exitLabel: 'Exit',
  nextLabel: '>',
  prevLabel: '<',
}


class Main extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      defaultSettings: {
        ringColor: '#f00',
        ringWidth: '1px',
        ringRadius: '0px',
        ringMargin: '10px',
        ringShadowColor: 'rgba(150,150,150,.8)',
        ringShadowWidth: '10000px',
        brochureType: 0,
        stepDuration:0,
        exitLabel: 'Exit',
        nextLabel: '>',
        prevLabel: '<',
      },
      mainProps: props,
      activeTour: 'Default Tour',
      activeStepData: {},
      guideOpen: false,
      location: null,
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
                content: 'start page - no element (index 0)',
                stepDuration: 1000,
              },
              {
                title: 'STEP 1',
                element: '.step-1-element',
                content: 'Step One content (index 1)',
                margin: 0,
                ringColor: '#ffa',
                stepDuration: 1000,
              },
              {
                title: 'STEP 2',
                element: '.step-2-element',
                content: 'Step Two Content (index 2)',
                margin: 10,
                ringColor: 'green',
                ringWidth: '8px',
                stepDuration: 1000,

              },
              {
                title: 'STEP 3',
                element: '.step-3-element',
                content: 'Step Three Content (index 3)',
                margin: 20,
                ringColor: 'blue',
                stepDuration: 1000,

              },
              {
                title: 'STEP 4',
                element: '.step-4-element',
                content: 'Step Four Content (index 4)',
                stepDuration: 1000,

              },
              {
                title: 'STEP 5',
                element: '.step-5-element',
                content: 'Step Five Content (index 5)',
                ringWidth: '15px',
                stepDuration: 1000,

              },
              {
                title: 'STEP 6',
                element: '.step-6-element',
                content: 'Step Six Content (index 6)',
                stepDuration: 1000,

              },
              {
                title: 'END',
                element: '',
                content: 'end page - no element (index 4)',
                stepDuration: 1000,

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
    
    let ELEMENT = this.state.list.find(x => x.id === TOUR).steps[STEP].element
    
    let ASD = this.getStepData(STEP)

    //? This needs to check if active step is still the same as when it was called to prevent a different step from auto-progressing
    if(ASD.stepDuration !== 0){
      setTimeout(() => {
        this.next()
      }, ASD.stepDuration);
    }
    
    this.setState(prevState => {
      prevState.list.find(x => x.id === TOUR).currentStep = STEP
      prevState.activeStepData = ASD
      //  prevState.guideLocation = this._findGuide(ELEMENT)
      return prevState
    })
    
    _scrollToElement(ELEMENT)

  }

  prev (tourId){////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    let TOUR = this.useTourOrActive(tourId)

    let STEP =    this.state.list.find(x => x.id === TOUR).currentStep
    let LENGTH =  this.state.list.find(x => x.id === TOUR).steps.length - 1
    
    if(STEP >= 1){
      STEP = STEP - 1
    }else{
      STEP = LENGTH
    }

    let ELEMENT   = this.state.list.find(x => x.id === TOUR).steps[STEP].element

    console.log(`prev | step: ${STEP}`)
    let ASD = this.getStepData(STEP)

    this.setState(prevState => {
      prevState.list.find(x => x.id === TOUR).currentStep = STEP
      prevState.activeStepData = ASD
      /// prevState.guideLocation = this._findGuide(ELEMENT)
      return prevState
    })
    _scrollToElement(ELEMENT)

  }
  
  //- Brochure -----------------------------------------------------------------------------------------------------------------------------
  open (tourId){////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    let useTour = this.useTourOrActive(tourId)
    this.setState({guideOpen: true, activeTour: useTour})
  }

  close (){/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    this.setState({guideOpen: false})
  }

  //- Guide --------------------------------------------------------------------------------------------------------------------------------
  /** Get all data for active or given step
   * 
   * ***
   * this function handles setting a state object that contains all given step data or defaults if not provided.
   */

  getStepData(STEP){
    let D = {}
    D.tour = this.state.activeTour
    D.totalSteps = this.state.list.find(x=>x.id === D.tour).steps.length

    /// if step is not specified - find the current step
    if(typeof STEP === 'number' && STEP >= 0 && STEP <= D.totalSteps){
      D.step = STEP
    }else{
      D.step = this.state.list.find(x=>x.id === D.tour).currentStep
    }


    D.element = this.state.list.find(x=>x.id === D.tour).steps[D.step].element
    D.margin = this.state.list.find(x=>x.id === D.tour).steps[D.step].margin                  || this.state.defaultSettings.guideMargin
    D.ringColor = this.state.list.find(x=>x.id === D.tour).steps[D.step].ringColor            || this.state.defaultSettings.ringColor
    D.ringWidth = this.state.list.find(x=>x.id === D.tour).steps[D.step].ringWidth            || this.state.defaultSettings.ringWidth

    D.exitLabel = this.state.list.find(x=>x.id === D.tour).steps[D.step].exitLabel            || this.state.defaultSettings.exitLabel
    D.nextLabel = this.state.list.find(x=>x.id === D.tour).steps[D.step].nextLabel            || this.state.defaultSettings.nextLabel
    D.prevLabel = this.state.list.find(x=>x.id === D.tour).steps[D.step].prevLabel            || this.state.defaultSettings.prevLabel


    D.brochureType = this.state.list.find(x=>x.id === D.tour).steps[D.step].brochureType      || this.state.defaultSettings.brochureType
    D.stepDuration = this.state.list.find(x=>x.id === D.tour).steps[D.step].stepDuration      || this.state.defaultSettings.stepDuration


    D.title = this.state.list.find(x=>x.id === D.tour).steps[D.step].title                    || `Step ${D.step}`
    D.content = this.state.list.find(x=>x.id === D.tour).steps[D.step].title                  || ``



    return D
  }



  repeatUpdateGuideLocation(){
    let newD = null
    let ASD = null

    const loop = () => {
      ASD = this.getStepData()
      newD = _getLocation(ASD)



      this.setState(prevState => {
        prevState.location = newD
        return prevState
      })
    



      setTimeout(() => {
        loop()
      }, 50);
    }
    loop()
  }


















  componentDidMount(){
    this.repeatUpdateGuideLocation()
    this.setState({activeStepData: this.getStepData()})
  }



    
  // Rest of the component's code
  render(){
    return(
      <Collection
      data={this.state.activeStepData}
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