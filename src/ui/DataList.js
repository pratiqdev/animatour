import React from 'react'
import '../style/datalist.css'
import animatour from '../animatour'

const DataList = ({data}) => {

    // let dataset = []

    // for (const [key, value] of Object.entries(data)) {
    //     if(key !== 'defaultSettings' && key !== 'mainProps'){
    //         dataset.push(`${key}: ${value}`)
    //     }
    // }

    return(

        <div className='datalist'>
            <button onClick={()=>animatour.start()}>Start</button>
            <button onClick={()=>animatour.open()}>Open</button>
            <button onClick={()=>animatour.close()}>Close</button>
            <button onClick={()=>animatour.next()}>Next</button>
            <button onClick={()=>animatour.prev()}>Prev</button>
            <button onClick={()=>animatour.reset()}>Reset</button>
            <br />
            <button onClick={()=>console.log(animatour.getTour('Default Tour'))}>Get Tour ('Default Tour')</button>


            {data.activeStepData ?
            <>
            <h4>Active Step Data</h4>
            <br />
            <table>
                <tbody>
                <tr>
                    <td>Tour</td>
                    <td>{data.activeStepData.tour}</td>
                </tr>

                <tr>
                    <td>Step</td>
                    <td>{data.activeStepData.step}</td>
                </tr>

                <tr>
                    <td>element</td>
                    <td>{data.activeStepData.element}</td>
                </tr>
                </tbody>
            </table>
            </>
            :
            <h4>No Active Step Data</h4>
            }
            <hr />
            <h4>State</h4>
            <p>Active Tour: {data.activeTour}</p>
            <p>Guide open: {data.guideOpen ? 'true' : 'false'}</p>
            <p>T: {data.location ? data.location.T : 'none'}</p>
            <p>L: {data.location ? data.location.L : 'none'}</p>
            {/* <br /> */}
            {/* {dataset.map(x=><div>{x}</div>)} */}

        </div>
    )
}
export default DataList