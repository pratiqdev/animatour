import Step from './Step'

const createSteps = (steps, oldSteps) => {

    let stepsArray = Array.isArray(oldSteps) ? oldSteps : [oldSteps]                         /// create a temporary array to hold steps during parse

    Array.isArray(steps)                        /// if array of steps was passed - iterate and push to temp array
        ? steps.forEach(x=> {
            stepsArray.push(new Step(x))
        })
        : stepsArray.push(new Step(steps))      /// else push single step to temp array

    return stepsArray                           /// return the temp array
}

export default createSteps