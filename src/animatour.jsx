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
  test: (arg) =>    { w(`objTest(${arg})`)        && x.test(arg)    },
  showGuide: () =>  { w('show guide')             && x.showGuide()  },
  next: () =>       { w('next step')              && x.next()  },
  getTours: () =>   { w('get tours')              && x.getTours()  },
}
  
export default animatour