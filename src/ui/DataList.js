import React from 'react'
import '../style/datalist.css'


const DataList = ({data}) => {

    let dataset = []

    for (const [key, value] of Object.entries(data)) {
        if(key !== 'defaultSettings' && key !== 'mainProps'){
            dataset.push(`${key}: ${value}`)
        }
    }

    return(

        <div className='datalist'>
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
                    <td>Step</td>
                    <td>{data.activeStepData.step}</td>
                </tr>
                </tbody>
            </table>
            </>
            :
            <h4>No Active Step Data</h4>
            }
            <hr />
            <h4>State</h4>
            <br />
            {dataset.map(x=><div>{x}</div>)}

        </div>
    )
}
export default DataList