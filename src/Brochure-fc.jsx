import React, {useState, useEffect, useRef, forwardRef, useImperativeHandle} from 'react'

import animatour from './animatour'
import shout from './utils/shout'
// import _getLocation from './utils/getLocation'
import _createSteps from './utils/createSteps'
import _defaultSettings from './utils/defaultSettings'
import _scrollToElement from './utils/scrollToElement'

import Collection from './ui/Collection'
import Tour from './classes/Tour'
import DataList from './ui/DataList'

import { usePopper } from 'react-popper';
// import * as B from './brochure'
// import Ring from  './Ring'
import gsap, {TimelineMax} from 'gsap'




const Main = forwardRef((props, ref) => {

    useImperativeHandle(ref, () => ({
        test: () => {
          // Code for collapsing everything
          console.log('testing brochure-fc')
        }
      }));


    return(
        <h1>Brochure - fc</h1>
    )

})

const Brochure = (props) => {
    return(
      <Main ref={(component) => window.main = component } {...props}/>
    )
}
export default Brochure