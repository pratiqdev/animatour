import React, {useEffect, useState} from 'react'

import animatour from './animatour'
import Collection from './ui/Collection'


import Tour from './classes/Tour'
import shout from './utils/shout'
import _getLocation from './utils/getLocation'
import _scrollToElement from './utils/scrollToElement'
import _createSteps from './utils/createSteps'

import DataList from './ui/DataList'

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

  duration: '.8s', /// time it takes to move the ring
}


class Main extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      perf: 0,
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
        duration: .8,
      },
      mainProps: props,
      activeTour: false,
      activeStepData: false,
      guideOpen: false,
      location: false,
      brochureAlignment: ['top-left', 'left-top'],

      list:[]
    }
  }

  //- Utilities ----------------------------------------------------------------------------------------------------------------------------
  useTourOrActive(tourId){
    if(tourId){
      if(!this.state.list.find(x=>x.id === tourId)){
        shout.warn(`useTourOrActive() | No tour was found as '${tourId}'. Using currently active tour instead`)
        if(this.state.activeTour){
          return this.state.activeTour
        }else{
          shout.warn(`useTourOrActive() | No tour was found as '${tourId}' and no active tour to use`)
        }
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
        shout.warn( `verifyTourExists() | No tour was found as '${tourId}'`)
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
    console.log(`tour added: ${tourId}`, LIST)
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
    // if(ASD.stepDuration !== 0){
    //   setTimeout(() => {
    //     this.next()
    //   }, ASD.stepDuration);
    // }
    
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
    console.log(`open('${useTour}')`)

    /// used as callback for setState function
    const setActiveStepData = () => {
      let ASD = this.getStepData()
      console.log('open() - ASD', ASD)
      this.setState({ activeStepData: ASD })

    }

    this.setState({guideOpen: true, activeTour: useTour}, ()=> setActiveStepData())
    
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
    
    if(this.state.activeTour == false || this.state.activeTour == null || this.state.activeTour === ''){
      // console.log(`getStepData() | no active tour found`)
      return false
    }

    D.tour = this.state.activeTour



    D.totalSteps = this.state.list.find(x=>x.id === D.tour)?.steps?.length || 0
    
    /// if step is not specified - find the current step
    if(typeof STEP === 'number' && STEP >= 0 && STEP <= D.totalSteps){
      D.step = STEP
    }else{
      D.step = this.state.list.find(x=>x.id === D.tour).currentStep
    }
    


    const findStep = (t, s) => this.state.list.find(x=>x.id === t)?.steps[s]


    D.element       = findStep(D.tour, D.step)?.element
    D.margin        = findStep(D.tour, D.step)?.margin             || this.state.defaultSettings.guideMargin
    D.ringColor     = findStep(D.tour, D.step)?.ringColor          || this.state.defaultSettings.ringColor
    D.ringWidth     = findStep(D.tour, D.step)?.ringWidth          || this.state.defaultSettings.ringWidth

    D.exitLabel     = findStep(D.tour, D.step)?.exitLabel          || this.state.defaultSettings.exitLabel
    D.nextLabel     = findStep(D.tour, D.step)?.nextLabel          || this.state.defaultSettings.nextLabel
    D.prevLabel     = findStep(D.tour, D.step)?.prevLabel          || this.state.defaultSettings.prevLabel


    D.brochureType  = findStep(D.tour, D.step)?.brochureType       || this.state.defaultSettings.brochureType
    D.stepDuration  = findStep(D.tour, D.step)?.stepDuration       || this.state.defaultSettings.stepDuration
    D.duration      = findStep(D.tour, D.step)?.duration           || this.state.defaultSettings.duration


    D.title         = findStep(D.tour, D.step)?.title              || `Step ${D.step}`
    D.content       = findStep(D.tour, D.step)?.content            || ``



    return D
  }

  



  repeatUpdateGuideLocation(){
    let newD = {}
    let ASD = null

    const loop = () => {
      const t0 = performance.now()
      ASD = this.getStepData()
      if(ASD){
        newD = _getLocation(ASD)
        this.setState(prevState => {
          prevState.location = newD
          return prevState
        })
      }

      setTimeout(() => {
        
        const t1 = performance.now()
        this.setState({perf: t1 - t0})
        loop()

      }, 10);
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
      <>

      <div style={{position: 'fixed', top: '0', left: '0', background: '#9f9', padding: '5px', width: '2rem', zIndex: '9999999'}}>{this.state.perf}</div>
      {/* <DataList data={this.state} /> */}

      <Collection
      data={this.state.activeStepData}
      open={this.state.guideOpen}
      loc={this.state.location}
      />
      </>
    )
  }
};

const Brochure = (props) => {
  return(
    <Main ref={(component) => window.main = component } {...props}/>
  )
}

  
export default Brochure