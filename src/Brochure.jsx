import React from 'react'

import animatour from './animatour'
import shout from './utils/shout'
// import _getLocation from './utils/getLocation'
import _createSteps from './utils/createSteps'
import _defaultSettings from './utils/defaultSettings'
import _scrollToElement from './utils/scrollToElement'

import Collection from './ui/Collection'
import Tour from './classes/Tour'
import DataList from './ui/DataList'

import gsap, {TimelineMax} from 'gsap'


// let numberOfRenders = 0

class Main extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      /// default
      globalSettings: _defaultSettings,

      /// dev config vars
      requestRef: React.createRef(),
      apHandle: React.createRef(),

      mainProps: props,
      debug: 0,
      perf: 'X',

      /// global vars
      apValue: 0,
      apActive: false,
      modal: null,
      activeTour: false,
      activeStepData: false,
      guideOpen: false,
      location: false,
      timeline: new TimelineMax(),

      list:[]
    }

    console.log('Brochure instantiated')
    this.updateLocation = this.updateLocation.bind(this);





  }






  //= Debug
  //= ======================================================================================================================================
  setDebugMode(val){
    if(typeof val === 'number' && val >= 0 && val <= 3){
      this.setState({debug: val})
    }else{
      shout.error(
        'Debug mode must be between 0 and 3. Debug levels:',
        '0 - logging disabled',
        '1 - important logs',
        '2 - important + basic logs',
        '3 - important + basic + any logs',
      )
    }
  }

  //----------------------------------------------------------------------------------------------------------------------------------------
  log(x){

      if(this.state.debug >= x.d){
        console.log('----------------------------------------')
        console.log(x.f)
        x.v && console.log(
          '%c'+x.v, "color:blue",
        )
      }

  }









  //= Startup
  //= ======================================================================================================================================
  init (){
    this.setState({
      activeStepData: this.getStepData(), 
      // location: _getLocation(null, this.state.guideOpen, this.state.defaultLocation, this.state.exitLocation)
      location: this.getLocation()
    }, ()=> this.log({
      d:1,
      f:'init()',
      v:this.state}
    ))
  }
  
  //----------------------------------------------------------------------------------------------------------------------------------------
  run (){
    this.log({
      d:1,
      f:'run()'
    })

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









  //= Utilities
  //= ======================================================================================================================================
  useTourOrActive (tourId){
    this.log({
      d: 1,
      f:'useTourOrActive()'
    })
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
  this.log({
      d:1,
      f:'verifyTourExists()',
      v: `tourId: ${tourId}`
    })

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
    this.log({
      d:1,
      f:'enableAutoProgression()'
    })

    clearTimeout(this.state.apHandle)
    this.setState({apActive: true})

    let ASD = this.state.activeStepData
    let APTI = this.state.globalSettings.autoProgressionTimingIncrement
    this.log({
      d:2,
      f: 'enableAutoProgression()',
      v:`EAP | stepDuration: ${ASD.stepDuration}, apValue: ${this.state.apValue}`
    })

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
    this.log({
      d:1,
      f:'disableAutoProgression()'
    })
    clearTimeout(this.state.apHandle)
    this.setState({apActive: false})
    // this.state.apValue = 0
  }

  //----------------------------------------------------------------------------------------------------------------------------------------
  getStepData (STEP){
    this.log({
      d:1,
      f:'getStepData()'
    })
    let D = {}
    
    if(!this.useTourOrActive()){
      // console.log('getStepData() | active tour is false or null! (1)')
      return false
    }

    D.tour = this.state.activeTour

    D.totalSteps = this.state.list.find(x=>x.id === D.tour)?.steps?.length === 0 ? 0 : this.state.list.find(x=>x.id === D.tour)?.steps?.length - 1

    
    /// if step is not specified - find the current step
    if(typeof STEP === 'number' && STEP >= 0 && STEP <= D.totalSteps){
      D.step = STEP
    }else{
      D.step = this.state.list.find(x=>x.id === D.tour).currentStep ?? 0
    }
    


    const findStep = (t, s) => this.state.list.find(x=>x.id === t)?.steps[s]


    D.element                 = findStep(D.tour, D.step)?.element
    D.ringMargin              = findStep(D.tour, D.step)?.ringMargin                      //|| this.state.globalSettings.ringMargin
    D.ringColor               = findStep(D.tour, D.step)?.ringColor                   //|| this.state.globalSettings.ringColor
    D.ringWidth               = findStep(D.tour, D.step)?.ringWidth                   //|| this.state.globalSettings.ringWidth

    D.closeLabel              = findStep(D.tour, D.step)?.closeLabel                  //|| this.state.globalSettings.closeLabel
    D.nextLabel               = findStep(D.tour, D.step)?.nextLabel                   //|| this.state.globalSettings.nextLabel
    D.prevLabel               = findStep(D.tour, D.step)?.prevLabel                   //|| this.state.globalSettings.prevLabel


    D.stepDuration            = findStep(D.tour, D.step)?.stepDuration                //|| this.state.globalSettings.stepDuration
    D.transitionDuration      = findStep(D.tour, D.step)?.transitionDuration          //|| this.state.globalSettings.transitionDuration

    D.title                   = findStep(D.tour, D.step)?.title                       //|| `Step ${D.step}`
    D.content                 = findStep(D.tour, D.step)?.content                     //|| ``

    this.log({
      d:2,
      f:`getStepData(${D.step}) - activeTour: ${D.tour}`,
      v: D
    })
      
    return D
  }

  //----------------------------------------------------------------------------------------------------------------------------------------
  updateLocation (){
    
    // this.log({
    //   d:3,
    //   f: `updateLocation(${this.state.activeStepData.element})`,
    //   v:loc
    // })
    

    const t0 = performance.now()
    let loc = this.getLocation()
    const t1 = performance.now()

    if(this.state.guideOpen){
      this.setState({
        location: loc,
        perf: t1-t0
      })
      this.state.requestRef.current = requestAnimationFrame(this.updateLocation);

    }else{
      this.setState({
        perf:'X', 
        location: loc
      })
      cancelAnimationFrame(this.state.requestRef.current);
    }
  }

  //----------------------------------------------------------------------------------------------------------------------------------------
  getLocation(){
    
    let ASD = this.state.activeStepData
    // this.log({
    //   d:3,
    //   f: `getLocation(${ASD.element})`,
    //   v:ASD
    // })
    
    let LOC = {

      /** Scroll Top */
      ST: window.pageYOffset || (document.body.parentNode || document.body).scrollTop,
      /** Window Width */
      WW: Math.floor(window.innerWidth || 0),
      /** Window Height */
      WH: Math.floor(window.innerHeight || 0),
      /** Element Exists */
      E: null,
      /** Height */
      H: null,
      /** Width */
      W: null,
      /** Top Offset */
      T: null,
      /** Left Offset */
      L: null,
    }


    const setDefaultLoc = () => {
      // console.log('set default location')
      LOC.E = false
      LOC.H = 0
      LOC.W = 0
      LOC.T = LOC.WH / 2;
      LOC.L = LOC.WW / 2;
    }

    if(ASD && ASD.element !== '' && typeof ASD.element !== 'null'){
        let EL = document.querySelector( ASD.element ) || null
      // element could not be found
      if(!EL){
        setDefaultLoc()
        return LOC
      }else{
        const EL_RECT = EL.getBoundingClientRect();
        LOC.E = true
        LOC.L = Math.floor(EL_RECT.left - ASD.ringMargin)
        LOC.T = Math.floor(EL_RECT.top + LOC.ST - ASD.ringMargin) 
        LOC.H = Math.floor(EL_RECT.height + (ASD.ringMargin * 2))
        LOC.W = Math.floor(EL_RECT.width + (ASD.ringMargin * 2))
        return LOC
      }
    }
    // no ASD or element is null
    else{ 
      setDefaultLoc()
      return LOC
    }
    
  }

  //----------------------------------------------------------------------------------------------------------------------------------------
  scroll(){
    let ELEMENT = null

    let BEHAVIOR =  this.state.activeStepData.scrollBehavior
    let V_ALIGN =   this.state.activeStepData.scrollAlignmentVertical
    let H_ALIGN =   this.state.activeStepData.scrollAlignmentHorizontal


    const alignmentShout = () => {
      shout.warn(
        `Scroll alignment must be a hyphenated combitaion of values 'start, end, center or nearest'`, 
        'The first value defines vertical alignment, the second value defines horizontal alignment',
        `eg: 'start-center', 'end-end'`,
        `Defaulting to 'center-center'`
      )
    }

    const behaviorShout = () => {
      shout.warn(
        `Scroll behavior must be either 'smooth' or 'auto'.`,
        `Defaulting to 'smooth'`)
    }

    const selectorShout = () => {
      shout.warn(
        `Scrolling requires a selector that must be a string of the elements className or id`,
        `eg: '.my-element', '#other-element'` 
      )
    }


    /// confirm the selector is valid and the element exists
    if(selector && typeof selector === 'string' && selector !== ''){
        ELEMENT = document.querySelector( selector ) || null
        if(!ELEMENT){
          shout.warn(
            `No element was found by the selector ${selector}`,
          )
          return false
        }
    }else{
      return false
    }

    /// determine the intended scroll behavior
    if(behavior && typeof behavior === 'string'){
      switch(behavior){
        case 'auto': BEHAVIOR = 'auto'; break;
        case 'smooth': BEHAVIOR = 'smooth'; break;
        default: {
          BEHAVIOR = 'smooth'; 
        }
      }
    }else{
      BEHAVIOR = 'smooth';
       // behaviorShout()
    }

    /// determine the intended vertical/horizontal alignment
    if(alignment && typeof alignment === 'string'){
      switch(alignment.split('-')[0]){
        case 'start': V_ALIGN = 'start'; break;
        case 'end': V_ALIGN = 'end'; break;
        case 'center': V_ALIGN = 'smooth'; break;
        case 'near':
        case 'nearest': V_ALIGN = 'nearest'; break;
        default: {
          V_ALIGN = 'center';
        }
      }
      
      switch(alignment.split('-')[1]){
        case 'start': H_ALIGN = 'start'; break;
        case 'end': H_ALIGN = 'end'; break;
        case 'mid':
        case 'middle':
        case 'center': H_ALIGN = 'smooth'; break;
        case 'near':
        case 'nearest': H_ALIGN = 'nearest'; break;
        default: {
          H_ALIGN = 'center'; 
        }
      }
    }else{
      H_ALIGN = 'center';
      V_ALIGN = 'center'; 
      // alignmentShout()
    }





  //   function getScrollParent(node) {
  //     const isElement = node instanceof HTMLElement;
  //     const overflowY = isElement && window.getComputedStyle(node).overflowY;
  //     const isScrollable = overflowY !== 'visible' && overflowY !== 'hidden';
    
  //     if (!node) {
  //       return null;
  //     } else if (isScrollable && node.scrollHeight >= node.clientHeight) {
  //       return node;
  //     }
    
  //     return getScrollParent(node.parentNode) || document.body;
  //   }



  // function isInViewport(element) {
  //   const rect = element.getBoundingClientRect();
  //   return (
  //       rect.top >= 0 &&
  //       rect.left >= 0 &&
  //       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  //       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  //   );
  // }



    


  ELEMENT.scrollIntoView({behavior: BEHAVIOR, block: V_ALIGN, inline: H_ALIGN})

  }

    

    



  //= Validation
  //= ======================================================================================================================================
  handleConfigValidation(config){
    
  }

  validate({value, valid, error}){
    let useValue = null
    if(valid.includes(value)){
      useValue = value
    }else{
      useValue = Array.isArray(valid) ? valid[0] : valid
      if(error){
        console.log(error, `\nUsing default value: ${useValue}`)
      }else{
        console.log(`ERROR: Value is not valid. \nUsing default value: ${useValue}`)
      }
    }
    return useValue
  }


  
  

  //= Tours
  //= ======================================================================================================================================
  newTour (tourId, config){
    this.log({
      d:1,
      f:`newTour(${tourId})`, 
      v:config
    })
      
    if(this.verifyTourExists(tourId)){
      shout.error(`newTour() \n A tour with the id '${tourId}' already exists`)
      return false
    }
    let LIST = this.state.list
    // create a new Tour and push to list => requires tour id, tour config and current state
    LIST.push( 
        new Tour({
          tourId, 
          config, 
          globalSettings: this.state.globalSettings
        }) 
    )
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
      this.log({
        d:1,
        f:`getTour(${tourId})`, 
      })
      
      return TOUR
    }
  }










  //= Steps 
  //= ======================================================================================================================================
  addSteps (tourId, newSteps){
    this.log({
      d:1,
      f:`addSteps(${tourId})`, 
      v: newSteps
    })

    STEPS = _createSteps(newSteps, this.state.list.find(x=>x.id===tourId).steps ) 
    
    this.setState(prevState => {
      return prevState.list.find(x => x.id === tourId).steps = STEPS
    })
  }
  
  //----------------------------------------------------------------------------------------------------------------------------------------
  next (tourId){
    this.log({
      d:1,
      f:`next(${tourId})`, 
    })
    

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
    // this.log(`Brochure | next() - transitionDuration: ${ASD.transitionDuration}`)
    // this.log('ASD + location', ASD, this.state.location)

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
    this.log({
      d:1,
      f:`prev(${tourId})`
    })

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

    // this.log(`prev | step: ${STEP}`)
    let ASD = this.getStepData(STEP)
    // this.log('ASD + location', ASD, this.state.location)

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
    
    let useTour = this.useTourOrActive(tourId)
    this.log({
      d:1,
      f:`reset(${tourId}) - useTour: ${useTour}`
    })

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
    
    let useTour = this.useTourOrActive(tourId)
    this.log({
      d:1,
      f:`start(${tourId}) - useTour: ${useTour}`
    })
     
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
    this.log({
      d:1,
      f:'play()'
    })

    this.enableAutoProgression()
  }

  //----------------------------------------------------------------------------------------------------------------------------------------
  pause(){
    this.log({
      d:1,
      f:'pause()'
    })

    this.disableAutoProgression()
  }













  //= Brochure 
  //= ======================================================================================================================================
  open (){
    this.log({
      d:1,
      f:'open()'
    })
    this.run()
  }

  //----------------------------------------------------------------------------------------------------------------------------------------
  close (){
    this.log({
      d:1,
      f:'close()'
    })

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
    // numberOfRenders++
    // console.log(`Main | render() - ${numberOfRenders} - frames: ${this.state.requestRef.current}`)
    return(
      <>
      <div style={{position: 'fixed', top: '0', left: '0', background: '#f66', padding: '5px', width: '2rem', zIndex: '9999999'}}>{this.state.perf}</div>
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