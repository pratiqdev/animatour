let x = null

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
  getSteps: (tourId) =>   {return  w('get steps')       && x.getSteps(tourId)  },
  // toggle the guide
  showGuide: () =>        { w('show guide')             && x.showGuide()  },
  hideGuide: () =>        { w('show guide')             && x.hideGuide()  },

  // add steps
  addSteps: (tourId, newSteps) => { w('show guide')     && x.addSteps(tourId, newSteps) },

  // control the steps
  next: (tourId) =>             { w('next step')              && x.next(tourId)  },
  prev: (tourId) =>             { w('prev step')              && x.prev(tourId)  },
  exit: (tourId) =>             { w('prev step')              && x.exit(tourId)  },
}
  
export default animatour