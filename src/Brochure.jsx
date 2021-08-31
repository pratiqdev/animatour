import React, {useEffect, useState, useImperativeHandle} from 'react'

import animatour from './animatour'

const B_1 = (props) => {
  return(
    <div >
      B_1
      <button onClick={() => animatour.test('button')}>test</button>
      {props.thing}
      <br/>
      {props.step}
      <br/>
      {props.tour}
      <br/>
    </div>
  )
}

const B_2 = (props) => {
  return(
    <div >
      B_2
      <button onClick={() => animatour.test('button')}>test</button>
      {props.thing}
      <br/>
      {props.step}
      <br/>
      {props.tour}
      <br/>
    </div>
  )
}

class Main extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      thing: 'hide guide',
      step: 0,
      tour: props.tour ? props.tour : 'no-tour',
      brochureType: 0,
    }
  }
  
  test(arg){
    console.log(`test: ${arg}`)
  }

  next (){
    this.setState({step: this.state.step + 1})
    console.log(`next step! ${this.state.step}`)
  }

  showGuide(){
    this.setState({thing: 'show guide!'})
  }

  getTours(){
    console.log('getting all state data', this.state)
    return this.state
  }
        
  
    
    // Rest of the component's code
    render(){
      switch(this.state.brochureType){
        case 1: return <B_1 {...this.state}/>;
        default: return <B_2 {...this.state}/>;
      }
    }
};

const Brochure = (props) => {
  return(
    <Main ref={(component) => window.main = component } {...props}/>
  )
}

  
export default Brochure