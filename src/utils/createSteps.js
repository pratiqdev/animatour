import Step from '../classes/Step'

const _createSteps = (x) => {
    let {steps, oldSteps, state} = x

    if(!steps){
        if(oldSteps){
            return oldSteps
        }else{
            return []
        }
    }

    let stepsArray = []

    if(Array.isArray(oldSteps)){
        oldSteps.forEach(x=> {
            if(x){
                stepsArray.push(x)
            }
        })
    }else{
        if(oldSteps){
            stepsArray.push(oldSteps) 
        }
    }


    if(Array.isArray(steps)){
        steps.forEach(x=> {
            if(x){
                stepsArray.push( new Step(x, state) )
            }
        })
    }else{
        if(steps){
            stepsArray.push(steps) 
        }
    }

    return stepsArray 
}

export default _createSteps