import React from 'react'

const theme = {
    text: '#fff',
    background: '#000',
    primary: '#20c',
    secondary: '#aaa',
    tertiary: '',
    spacing: ['0', '.2em', '.4em', '.8em', '1.6em'],
    fontSize: ['.6em', '.8em', '1em', '1.2em', '1.4em'],
    maxWidth: '80vw',
    minWidth: '10rem',
    width: '20rem',
}
const border = {
    primary: {
        type: '',
        color: '',
    },
    secondary: {
        type: '1px solid',
        color: theme.secondary,
    }
}
const style = {
    container: {
        boxSizing: 'border-box',
        zIndex: '10001',
        background: theme.background,
        color: theme.text,
        position: 'absolute', 
        opacity: .2,
        display: 'none'
    },
    header: {
        fontSize: theme.fontSize[2],
        borderBottom: border.secondary.type,
        borderColor: border.secondary.color,
        padding: theme.spacing[2],
    },
    content: {
        fontSize: theme.fontSize[1],
        padding: theme.spacing[2]
    },
    footer: {
        padding: theme.spacing[2],
        display: 'flex',
        justifyContent: 'space-between',

    },
    exitButton: {
        color: 'red'
    }
}


const B3 = (props) => {
    return(
        <>
            <div style={style.header} className='header'>{props.step} - {props.title}</div>
            <div style={style.content} className='content'>
            {/* apActive: {S.apActive ? 'playing' : 'paused'} | {S.apValue}<br /> */}
            {props.content}
            </div>
            <div style={style.footer} className='footer'>
            <button style={style.exitButton} onClick={props.close}>{props.exitLabel}</button>
            <div>
                <button style={style.prevButton} onClick={props.play}>Play</button>
                <button style={style.prevButton} onClick={props.pause}>Pause</button>
                <button style={style.prevButton} onClick={props.prev}>{props.prevLabel}</button>
                <button style={style.nextButton} onClick={props.next}>{props.nextLabel}</button>
                <button onMouseOver={()=>console.log('TEST on mouse over')} onClick={()=>console.log('TEST click')}>TEST</button>
            </div>
            </div>
            {props.children}
            {/* {props.apActive &&
            <progress id="apv" style={{width: '100%', margin:'0'}} value={props.stepDuration - props.apValue} max={props.stepDuration} />
            } */}
        </>
    )
}

export default B3