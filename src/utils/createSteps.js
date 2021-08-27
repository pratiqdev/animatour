import p from './alert'

class Step{
    constructor(x){
        /// alert user of incorrect keys
        Object.keys(x).forEach(key =>{
            switch(key){
                case 'nme':
                case 'nam':
                case 'name': p('error',`addSteps | '${key}' was used... did you mean 'title' ?`) ;break;
            }
        })

        this.id =           x.id
        this.title =        x.title
        this.element =      x.element       ? x.element         : p('error', `Steps must include an element.`, `Use element selectors ('.el', '#el')`)
        this.content =      x.content       ? x.content         : p('error', `Steps must include content`)
    }
}


const createSteps = (steps, oldSteps) => {
    // console.log('steps',steps,'old', oldSteps)

    

    let stepsArray = Array.isArray(oldSteps) ? oldSteps : [oldSteps]                         /// create a temporary array to hold steps during parse

    Array.isArray(steps)                        /// if array of steps was passed - iterate and push to temp array
        ? steps.forEach(x=> {
            stepsArray.push(new Step(x))
        })
        : stepsArray.push(new Step(steps))      /// else push single step to temp array

        // console.log('new steps', stepsArray)
    return stepsArray                           /// return the temp array
}

export default createSteps