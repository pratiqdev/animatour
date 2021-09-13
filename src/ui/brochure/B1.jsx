import React, {useEffect, useRef, useState} from 'react'
import animatour from '../../animatour'
import shout from '../../utils/shout'

const B1 = React.forwardRef((props, ref) => {


  const S = props.S
  const LOC = S.location
  const ASD = S.activeStepData



  const theme = {
    text:'#222',
    background:'#eee',
    primary:'#99f',
    secondary:'#aaa',
    tertiary:'',
    spacing:['0', '.2em', '.4em', '.8em', '1.6em'],
    fontSize:['.6em', '.8em', '1em', '1.2em', '1.4em'],
    maxWidth: '80vw',
    minWidth: '10rem',
    width: '20rem',
  }
  const border = {
    primary:{
      type:'',
      color:'',
    },
    secondary:{
      type:'1px solid',
      color:theme.secondary,
    }
  }
  const s = {
    container:{
      ...props.pass_style,
      boxSizing: 'border-box',
      zIndex: '10001',
      // margin: theme.spacing[3],
      background: theme.background,
      // color: theme.text,
      // maxWidth: theme.maxWidth,
      // minWidth: theme.minWidth,
      // fontSize:theme.fontSize[1],
      position: LOC.E ? 'absolute' : 'fixed', //! if using 'fixed' - remove SCROLL_TOP from _getLocation()
      // transition: '.5s', /// causes popper to start from 0,0 and animate to position
      opacity: S.guideOpen ? '1' : '.2', 
      transition: 'opacity .5s'
    },
    header:{
      fontSize:theme.fontSize[2],
      borderBottom: border.secondary.type,
      borderColor: border.secondary.color,
      padding:theme.spacing[2],
    },
    content:{
      fontSize:theme.fontSize[1],
      padding:theme.spacing[2]
    },
    footer:{
      padding:theme.spacing[2],
      display:'flex',
      justifyContent: 'space-between',

    },
    exitButton:{
      color: 'red'
    }
  }







  


  return(
    <div ref={ref} key={ASD.step} style={s.container} className='brochure1' id='BROCHURE'>
      <div style={s.header} className='header'>{ASD.step} - {ASD.title}</div>
      <div style={s.content} className='content'>
        guide open: {S.guideOpen ? 'open' : 'closed'}<br/>
        {ASD.content}
      </div>
      <div style={s.footer} className='footer'>
        <button style={s.exitButton} onClick={()=>animatour.close()}>{ASD.exitLabel}</button>
        <div>
          <button style={s.prevButton} onClick={()=>animatour.prev(ASD.tour)}>{ASD.prevLabel}</button>
          <button style={s.nextButton} onClick={()=>animatour.next(ASD.tour)}>{ASD.nextLabel}</button>
        </div>
      </div>
      {props.children}
    </div>
  )
})

export default B1