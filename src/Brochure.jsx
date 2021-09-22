import React from 'react'

import animatour from './animatour'
import shout from './utils/shout'
import _getLocation from './utils/getLocation'
import _createSteps from './utils/createSteps'
import _defaultSettings from './utils/defaultSettings'
import _scrollToElement from './utils/scrollToElement'

import Collection from './ui/Collection'
import Tour from './classes/Tour'
import DataList from './ui/DataList'




class Main extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      /// default
      globalSettings: _defaultSettings,

      /// global scoped state
      requestRef: React.createRef(),
      apHandle: React.createRef(),
      apValue: 0,
      apActive: false,
      perf: 'X',
      debug: true,
      mainProps: props,
      modal: null,
      activeTour: false,
      activeStepData: false,
      guideOpen: false,
      location: false,

      list:[]
    }

    this.updateLocation = this.updateLocation.bind(this);
  }






  //= Utilities
  //= ======================================================================================================================================

  //----------------------------------------------------------------------------------------------------------------------------------------
  useTourOrActive (tourId){
    /// if tour exists
    if(tourId){
      if(!this.state.list.find(x=>x.id === tourId)){
        // shout.warn(`useTourOrActive() | No tour was found as '${tourId}'. Using currently active tour instead`)
        if(this.state.activeTour){
          return this.state.activeTour
        }else{
          // shout.warn(`useTourOrActive() | No tour was found as '${tourId}' and no active tour to use`)
        }
      }else{
        return tourId
      }
    }
    /// no tour was found
    else{
      if(this.state.activeTour){
        // shout.warn(`useTourOrActive() | No tour was supplied. Using currently active tour instead`)
        return this.state.activeTour
      }else{
        // shout.error(`useTourOrActive() | No tour was found and no active tour to use!`)
        return false
      }
    }
  }

  //----------------------------------------------------------------------------------------------------------------------------------------
  verifyTourExists (tourId){
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
  //----------------------------------------------------------------------------------------------------------------------------------------

  enableAutoProgression (){
    clearTimeout(this.state.apHandle)
    this.setState({apActive: true})

    let ASD = this.state.activeStepData
    let APTI = this.state.globalSettings.autoProgressionTimingIncrement
    console.log(`EAP | stepDuration: ${ASD.stepDuration}, apValue: ${this.state.apValue}`)

      const updateApValue = () => {
        clearTimeout(this.state.apHandle)
        this.state.apHandle = setTimeout(() => {
          if(this.state.apValue < APTI){
            this.setState({apValue: 0})
            this.next()
          }else{
            this.setState({apValue: this.state.apValue - APTI}, ()=> updateApValue())
          }
        }, APTI);
      }

    if(ASD && ASD.stepDuration !== 0){
      if(this.state.apValue === 0){
        this.setState({apValue: ASD.stepDuration}, ()=> updateApValue())
      }else{
        updateApValue()
      }
    }
  }

  //----------------------------------------------------------------------------------------------------------------------------------------
  disableAutoProgression (){
    clearTimeout(this.state.apHandle)
    this.setState({apActive: false})
    // this.state.apValue = 0
  }

  //----------------------------------------------------------------------------------------------------------------------------------------
  getStepData (STEP){
    let D = {}
    
    if(!this.state.activeTour || this.state.activeTour == false || this.state.activeTour == null || this.state.activeTour === '' || !this.useTourOrActive()){
      // console.log('getStepData() | active tour is false or null! (1)')
      return false
    }

    D.tour = this.state.activeTour
    // console.log(`getStepData() | active tour: ${D.tour}`)


    D.totalSteps = this.state.list.find(x=>x.id === D.tour)?.steps?.length - 1 || 0
    
    /// if step is not specified - find the current step
    if(typeof STEP === 'number' && STEP >= 0 && STEP <= D.totalSteps){
      D.step = STEP
    }else{
      D.step = this.state.list.find(x=>x.id === D.tour).currentStep
    }
    


    const findStep = (t, s) => this.state.list.find(x=>x.id === t)?.steps[s]


    D.element                 = findStep(D.tour, D.step)?.element
    D.margin                  = findStep(D.tour, D.step)?.margin                      //|| this.state.globalSettings.ringMargin
    D.ringColor               = findStep(D.tour, D.step)?.ringColor                   //|| this.state.globalSettings.ringColor
    D.ringWidth               = findStep(D.tour, D.step)?.ringWidth                   //|| this.state.globalSettings.ringWidth

    D.closeLabel              = findStep(D.tour, D.step)?.closeLabel                  //|| this.state.globalSettings.closeLabel
    D.nextLabel               = findStep(D.tour, D.step)?.nextLabel                   //|| this.state.globalSettings.nextLabel
    D.prevLabel               = findStep(D.tour, D.step)?.prevLabel                   //|| this.state.globalSettings.prevLabel


    D.stepDuration            = findStep(D.tour, D.step)?.stepDuration                //|| this.state.globalSettings.stepDuration
    D.transitionDuration      = findStep(D.tour, D.step)?.transitionDuration          //|| this.state.globalSettings.transitionDuration

    D.title                   = findStep(D.tour, D.step)?.title                       //|| `Step ${D.step}`
    D.content                 = findStep(D.tour, D.step)?.content                     //|| ``


    return D
  }

  //----------------------------------------------------------------------------------------------------------------------------------------
  updateLocation (){
    const t0 = performance.now()
    this.setState({
      location: _getLocation(
        this.getStepData(), 
        this.state.guideOpen, 
        this.state.defaultLocation, 
        this.state.exitLocation
        )
    })
    const t1 = performance.now()
    this.setState({perf: t1 - t0})

    if(this.state.guideOpen){
      this.state.requestRef.current = requestAnimationFrame(this.updateLocation);
    }else{
      this.setState({perf:'X'})
      cancelAnimationFrame(this.state.requestRef.current);
    }
  }

  //----------------------------------------------------------------------------------------------------------------------------------------
  init (){
    this.setState({
      activeStepData: this.getStepData(), 
      location: _getLocation(null, this.state.guideOpen, this.state.defaultLocation, this.state.exitLocation)
    }, ()=> console.log('INIT',this.state))
  }
  
  //----------------------------------------------------------------------------------------------------------------------------------------
  run (){
    console.log(`RUN`)

    this.setState({
      guideOpen: true,
      activeTour: this.useTourOrActive(),
      activeStepData: this.getStepData(),
    }, ()=>{
      _scrollToElement(this.activeStepData && this.activeStepData.element)
      this.enableAutoProgression()
      this.setState(prevState => {
        prevState.apValue = this.state.activeStepData.stepDuration
        // pull the modal from the active tour
        prevState.modal = this.state.list.find(x=>x.id === this.state.activeTour).modal
        return prevState
      })
      this.state.requestRef.current = requestAnimationFrame(this.updateLocation);
    })
  }

    
  
  

  //= Tours
  //= ======================================================================================================================================

  //----------------------------------------------------------------------------------------------------------------------------------------

  newTour (tourId, config){
    if(this.verifyTourExists(tourId)){
      shout.error(`newTour() \n A tour with the id '${tourId}' already exists`)
      return false
    }
    let LIST = this.state.list
    // create a new Tour and push to list => requires tour id, tour config and current state
    LIST.push( new Tour(tourId, config, this.state) )
    this.setState({list: LIST, activeTour: tourId})
    // console.log(`tour added: ${tourId}`, LIST)
    // console.log(`tour modal:`, config.modal)
  }

  //----------------------------------------------------------------------------------------------------------------------------------------
  getAllTours (){
    return this.state.list
  }
  
  //----------------------------------------------------------------------------------------------------------------------------------------
  getTour (tourId){
    let useTour = this.useTourOrActive(tourId)
    let TOUR = this.state.list.find(x => x.id === useTour)
    if(!TOUR){
      shout.error(`No tour found for '${useTour}'`)
    }else{
      console.log(`getTour(${useTour})`)
      return TOUR
    }
  }







  //= Steps 
  //= ======================================================================================================================================

  //----------------------------------------------------------------------------------------------------------------------------------------
  addSteps (tourId, newSteps){
    console.log(`ADD STEPS ${tourId}`)

    STEPS = _createSteps(newSteps, this.state.list.find(x=>x.id===tourId).steps ) 
    
    this.setState(prevState => {
      return prevState.list.find(x => x.id === tourId).steps = STEPS
    })
  }
  
  //----------------------------------------------------------------------------------------------------------------------------------------
  next (tourId){
    console.log(`NEXT ${tourId}`)

    let useTour = this.useTourOrActive(tourId)
    if(!useTour){
      shout.error(`next() | Unable to advance a tour to the next step without an active tour available.`,`Set an active tour with animatour.start('My Tour')`)
      return false
    }
    
    let STEP      = this.state.list.find(x => x.id === useTour).currentStep
    let LENGTH    = this.state.list.find(x => x.id === useTour).steps.length - 1
    
    
    if(STEP < LENGTH){
      STEP = STEP + 1
    }else{
      STEP = 0
    }
    
    let ELEMENT = this.state.list.find(x => x.id === useTour).steps[STEP].element
    _scrollToElement(ELEMENT)
    
    let ASD = this.getStepData(STEP)
    console.log(`Brochure | next() - transitionDuration: ${ASD.transitionDuration}`)
    // console.log('ASD + location', ASD, this.state.location)

    if(this.state.globalSettings.enableAutoProgressionOnNext){
      this.enableAutoProgression()
    }else{
      this.disableAutoProgression()
    }
    
    this.setState(prevState => {
      prevState.list.find(x => x.id === useTour).currentStep = STEP
      prevState.activeStepData = ASD
      prevState.apValue = ASD.stepDuration || 0

      return prevState
    })
    

  }

  //----------------------------------------------------------------------------------------------------------------------------------------
  prev (tourId){
    console.log(`PREV ${tourId}`)

    let useTour = this.useTourOrActive(tourId)
    if(!useTour){
      shout.error(
        `prev() | Unable to advance a tour to the previous step without an active tour available.`,
        `Set an active tour with animatour.start('My Tour')`
        )
      return false
    }

    let STEP =    this.state.list.find(x => x.id === useTour).currentStep
    let LENGTH =  this.state.list.find(x => x.id === useTour).steps.length - 1
    
    if(STEP >= 1){
      STEP = STEP - 1
    }else{
      STEP = LENGTH
    }

    let ELEMENT   = this.state.list.find(x => x.id === useTour).steps[STEP].element

    // console.log(`prev | step: ${STEP}`)
    let ASD = this.getStepData(STEP)
    // console.log('ASD + location', ASD, this.state.location)

    if(this.state.globalSettings.enableAutoProgressionOnPrev){
      this.enableAutoProgression(ASD)
    }else{
      this.disableAutoProgression()
    }



    this.setState(prevState => {
      prevState.list.find(x => x.id === useTour).currentStep = STEP
      prevState.activeStepData = ASD
      prevState.apValue = ASD.stepDuration || 0
      /// prevState.guideLocation = this._findGuide(ELEMENT)
      return prevState
    })
    _scrollToElement(ELEMENT)

  }
  
  //----------------------------------------------------------------------------------------------------------------------------------------
  reset (tourId){
    console.log(`RESET ${tourId}`)
    
    let useTour = this.useTourOrActive(tourId)
    console.log(`reset | tour: ${tourId} - ${useTour}`)

    if(!useTour){
      shout.error(`Unable to reset a tour without starting a tour first. Tours will automatically start from step 0 unless 'currentStep' is set at tour creation.`)
      return false
    }

    let ELEMENT   = this.state.list.find(x => x.id === useTour).steps[this.state.list.find(x => x.id === useTour).currentStep].element

    this.setState(prevState => {
      prevState.list.find(x => x.id === useTour).currentStep = 0
      prevState.activeStepData = this.getStepData()
      return prevState
    })
    _scrollToElement(ELEMENT)

  }

  //----------------------------------------------------------------------------------------------------------------------------------------
  start (tourId){
    console.log(`START ${tourId}`)

     let useTour = this.useTourOrActive(tourId)
     
    //  const setActiveStepData = () => {
    //    let ASD = 'not defined yet'
    //    ASD = this.getStepData()
    //    _scrollToElement(ASD.element)
    //   //  this.updateLocation()
    //   this.run()
    //  }

     if(!useTour){
      shout.error(
        'Not able to start a tour - starting a tour first.',
        'Use animatour.start("My Tour") to start a tour and open the guide)'
      )
      return false
    }else{
      this.setState({activeTour: useTour}, () => this.run())
    }
  }

  //----------------------------------------------------------------------------------------------------------------------------------------
  play(){
    console.log('PLAY')

    this.enableAutoProgression()
  }

  //----------------------------------------------------------------------------------------------------------------------------------------
  pause(){
    console.log('PAUSE')

    this.disableAutoProgression()
  }







  //= Brochure 
  //= ======================================================================================================================================
  //----------------------------------------------------------------------------------------------------------------------------------------
  open (){
    console.log('OPEN')
    this.run()
    // used as callback for setState function
    // let useTour = this.useTourOrActive()
    // // console.log(`open('${useTour}')`)

    // if(!useTour){
    //   shout.error('Not able to open guide without starting a tour first.','Use animatour.start("My Tour") to start a tour and open the guide)')
    //   return false
    // }
    
    // const setActiveStepData = () => {
    //   let ASD = 'not defined yet'
    //   ASD = this.getStepData()
      
    //   // console.log(`open(id:${tourId}, useTour:${useTour}) - ASD`, ASD) 
    //   this.setState({ activeStepData: ASD })
    //   // this.init()
    //   // console.log(`active tour: ${this.state.activeTour}`)
    // }
    
    // if(useTour){
    //   this.setState({guideOpen: true, activeTour: useTour}, () => setActiveStepData())
    // }
    
  }

  //----------------------------------------------------------------------------------------------------------------------------------------
  close (){
    console.log('CLOSE')

    this.setState({guideOpen: false})
    this.disableAutoProgression()
  }








  componentDidMount(){
    this.init()
  }

  componentWillUnmount(){
    cancelAnimationFrame(this.state.requestRef.current);
  }

  render(){
    return(
      <>

      <div style={{position: 'fixed', top: '0', left: '0', background: '#9f9', padding: '5px', width: '2rem', zIndex: '9999999'}}>{this.state.perf}</div>
      <DataList data={this.state} />
        <Collection
          state={this.state}
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