import Step from '../classes/Step'

const _createSteps = (data) => {
    const {oldSteps, newSteps, tourSettings} = data
    // console.log('createSteps | data: ', data)

    if(!newSteps){
        if(!oldSteps){
            return []
        }else{
            return oldSteps
        }
    }

    let stepsArray = []

    if(Array.isArray(oldSteps)){
        oldSteps.forEach(step_x=> {
            step_x && stepsArray.push(step_x)
        })
    }else{
        oldSteps && stepsArray.push(oldSteps) 
    }


    if(Array.isArray(newSteps)){
        newSteps.forEach(step_x=> {
            step_x && stepsArray.push( new Step({step: step_x, tourSettings}) )
        })
    }else{
        newSteps && stepsArray.push(steps) 
    }

    return stepsArray 
}

export default _createSteps