let x = null

/** Verify access to the window and main component */
const w = (func) => {
  if(window && typeof window !== 'undefined' && window.main && typeof window.main !== 'undefined'){
    if(!x){
      x = window.main
    }
    return true
  }else{
    console.log(`You cannot call '${func}' without a guide component`)
    return false
  }
}



const animatour = {
  getAllTours:  () =>         {return  w('getAllTours')         && x.getAllTours() },
  getTour:      (a) =>        {return  w('getTour')             && x.getTour(a) },
  // toggle the guide
  showGuide:    () =>         { w('showGuide')                  && x.showGuide() },
  hideGuide:    () =>         { w('hideGuide')                  && x.hideGuide() },

  // add steps
  addSteps:     (a, b) =>     { w('addSteps')                   && x.addSteps(a, b) },
  newTour:      (a, b) =>     { w('newTour')                    && x.newTour(a, b) },

  // control the steps
  next:         (a) =>        { w('next')                       && x.next(a) },
  prev:         (a) =>        { w('prev')                       && x.prev(a) },
  close:        () =>         { w('close')                      && x.close() },
  open:         (a) =>        { w('close')                      && x.open(a) },
}
  
export default animatour