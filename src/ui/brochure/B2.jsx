import React, {useEffect} from 'react'
import animatour from '../../animatour'
import shout from '../../utils/shout'

const B2 = (props) => {

  const {tour} = props


  const theme = {
    text:'#fff',
    background:'#222',
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
      margin: theme.spacing[3],
      background: theme.background,
      color: theme.text,
      // color: theme.text,
      maxWidth: theme.maxWidth,
      minWidth: theme.minWidth,
      width: theme.width,
      fontSize:theme.fontSize[2]
    },
    header:{
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
    <div style={s.container} className='brochure' id='B1'>
      <div style={s.header} className='header'>({tour.id}-{tour.currentStep}) Step Title (B2)</div>
      <div style={s.content} className='content'>
        guide open: {props.open ? 'open' : 'closed'}<br/>
        {tour.steps[tour.currentStep].content}
      </div>
      <div style={s.footer} className='footer'>
        <button style={s.exitButton} onClick={()=>animatour.close()}>exit</button>
        <div>
          <button style={s.prevButton} onClick={()=>animatour.prev(tour.id)}>{'<'}</button>
          <button style={s.nextButton} onClick={()=>animatour.next(tour.id)}>{'>'}</button>
        </div>
      </div>
    </div>
  )
}
export default B2