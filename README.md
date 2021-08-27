# Animatour 

A react-based component tour-guide with a focus on easy to follow animations and highlighting

> Peer dependancies
>
> - react >=16.8
> - react-dom >=16.8

## Usage

```js
import { tours, Guide } from 'animatour'

tours.newTour('My Tour', {
    ...config
    steps: [
        {
            title: 'Step One'
            element: '.tour-step-1',
            content: 'This is element one',
            // ...step config
        }
        ]
})
return(
    <div>
        // ...components
        <Guide tour='My Tour'>
        <button onClick={() => tours.start('My Tour')}>
    </div>
)
```




## Animatour options

### Config options

| Name | Type | Default | Description |
|:--|:--|:--|:--|
| ?tourId           | string        | ''                        | A unique id used to control the tour
| steps             | array         | []                        | The array of steps for the tour
| modalTemplate     | JSX           | <Component/>              | The modal used to explain and walk through steps. Pass the logic object to the modal to access data about steps.
| ringColor         | css           | '#fff'                    | The border color of the guide
| ringWidth         | css           | '.5rem'                   | The width of the ring of the guide, used to outline the selected element
| ringRadius        | css / array   | '.2rem' / ['','','','']   | The border radius of the 
| ringShadowColor   | css           | 'rgba(150,150,150, .8)'   | The shadow color of the guide, used to fade unrelated content
| ringShadowWidth   | css           | '10000px'                 | The length of the shadow of the guide
| ringOffset        | css / array   | '.5rem' / ['','','','']   | The offset of the ring from the element, if an array is used the order of values is `[left, top, right, bottom]`
| modalAlignment    | string / array| 'top-center'              | The alignment of the modal next to the guide.
| stepDuration      | int           | 0                         | The duration of steps. Used to automatically progress to the next step. 0 means no automatic progression
| ringDelay         | int           | 0                         | The time to wait before moving the ring to the next element. 0 means no delay.
| ringTransition    | int           | 500                       | The time, in milliseconds, of the transition between locations.
| ringEase          | ease          | 'ease-in-out'             | The ease type of the ring transition
| modalDelay        | int           | 0                         | The time to wait before moving the modal the the next location. 0 means no delay.
| modalTransition   | int           | 500                       | The time, in milliseconds, of the transition between locations.
| modalEase         | ease          | 'ease-in-out'             | The ease type of the modal transition
| scrollElement     | selector      | element.parent            | The element to scroll if the next element is offscreen. Default is the direct parent of the current element
| scrollDelay       | int           | 0                         | The time, in milliseconds, to wait before scrolling to the next element
| scrollTransition  | int           | 500                       | The time, in milliseconds, of the scroll transition
| scrollEase        | ease          | 'ease-in-out'             | The ease type of the scroll transition


### Config example

```js
let myTour = new Animatour({
    modalTemplate: <MyModal logic={logic} />,
    guideRingWidth: '10px',
    guideRingColor: 'red',
    guideOffset: '10px',
    modalAlignment: 'right-top',
    onStep: () => console.log('Called at the start of each step')
    // ...
})
```

















### Modal props

| Name | Type | Default | Description |
|:--|:--|:--|:--|
| logic             | object        |                           | The object containing all data about the steps and config
| title             | string        |                           | The title of the current step passed from the array of steps
| content           | JSX / string  |                           | The text or content used to explain the current step
| currentStep       | int           |                           | The current step of the tour
| totalSteps        | int           |                           | The total steps in the tour
| nextLabel         | string        | 'Next'                    | The label for the button used to progress to the next step. Used to customize the default modal
| prevLabel         | string        | 'Back'                    | The label for the button used to go bach to the previous step. Used to customize the default modal
| exitLabel         | string        | 'Exit'                    | The label for the button used to cancel the tour. Used to customize the default modal
| next              | function      |                           | Access to the function that triggers the next step
| prev              | function      |                           | Access to the function that triggers the previous step
| cancel            | function      |                           | Access to the function that cancels the tour


### Modal example

```js
const MyModal = props => {
    let { title, content, currentStep, next, prev } = props.logic
    return(
        <div {...props}>
            <h3>{currentStep} - {title}</h3>
            <p>{content}</p>
            <button onClick={next}>Next</button>
            <button onClick={prev}>Back</button>
            <button onClick={cancel}>Exit</button>
        </div>
    )
}
```


















### Step options

Options defined for an individual step will override the default config


| Name | Type | Default | Description |
|:--|:--|:--|:--|
| element           | string        |                           | The element to focus on
| title             | string        |                           | The title that will appear on the guide modal
| content           | string        |                           | The description that will appear in the body of the modal
| guideRingColor    | css           | '#fff'                    | The border color of the guide
| guideRingWidth    | css           | '.5rem'                   | The width of the ring of the guide, used to outline the selected element
| guideRingRadius   | css / array   | '.2rem' / ['','','','']   | The border radius of the 
| guideShadowColor  | css           | 'rgba(150,150,150, .8)'   | The shadow color of the guide, used to fade unrelated content
| guideShadowWidth  | css           | '10000px'                 | The length of the shadow of the guide
| guideOffset       | css / array   | '.5rem' / ['','','','']   | The offset of the ring from the element, if an array is used the order of values is `[left, top, right, bottom]`
| defaultDelay      | int           | 0                         | The delay between steps. Used to automatically progress to the next step. 0 means no automatic progression
| ringTransition    | int           | 500                       | The time, in milliseconds, of the transition between locations.
| ringDelay         | int           | 0                         | The time to wait before moving the ring to the next element. 0 means no delay.
| ringEase          | ease          | 'ease-in-out'             | The ease type of the ring transition
| modalTemplate     | JSX           | <Component />             | The modal used to explain and walk through steps. Pass the logic object to the modal to access data about steps.
| modalAlignment    | string / array| 'top-center'              | The alignment of the modal next to the guide.
| modalTransition   | int           | 500                       | The time, in milliseconds, of the transition between locations.
| modalDelay        | int           | 0                         | The time to wait before moving the modal the the next location. 0 means no delay.
| modalEase         | ease          | 'ease-in-out'             | The ease type of the modal transition
| scrollElement     | selector      | element.parent            | The element to scroll if the next element is offscreen. Default is the direct parent of the current element
| scrollDelay       | int           | 0                         | The time, in milliseconds, to wait before scrolling to the next element
| scrollTransition  | int           | 500                       | The time, in milliseconds, of the scroll transition
| scrollEase        | ease          | 'ease-in-out'             | The ease type of the scroll transition
| onStepStart       | function      |                           | The function to call at the beginning of the step. <!--wait for promise to resolve?-->
| onStepStartDelay  | int           | 0                         | The delay to wait before calling the onStepStart function
| onStepEnd         | function      |                           | The function to call at the end of the step <!--wait for promise to resolve?-->
| onStepEndDelay    | int           | 0                         | The delay to wait before calling the onStepEnd function




### Step example

```js
Animatour.addSteps({

})
// or 
Animatour.addSteps([
    {

    },
    {

    },
    {

    }
])
```






















## Functions 


```js
start(tour, step)
// start()
// start('My Tour')
// start(null, 7)
// start(null, 'step eight')
```

| Argument | Type | Required | Default | Description |
|:--|:--|:--|:--|:--|
| tour  | string        | false | 0     | The name of the tour to start. If no argument is provided the first tour defined will be started (index 0)
| step  | int/string  | false | 0     | The step at which to start the tour. If a number is used the tour will start at the index of the step. If a string is used the tour will start at the first occurrence of the string provided or step 0 if no match is found. String matches are case-insensitive







```js
setStep(step)
// setStep(7)
// setStep('step eight')
```

| Argument | Type | Required | Default | Description |
|:--|:--|:--|:--|:--|
| step  | int/string | true   | 0     | Set the current step of the tour. If a number is used the tour will advance to the index of the step. If a string is used the tour will advance to the first occurrence of the string provided or do nothing if no match is found. String matches are case-insensitive






```js
end(tour)
// end()
// end('My Tour')
```

| Argument | Type | Required | Default | Description |
|:--|:--|:--|:--|:--|
| step  | int/string | true   | 0     | Set the current step of the tour. If a number is used the tour will advance to the index of the step. If a string is used the tour will advance to the first occurrence of the string provided or do nothing if no match is found. String matches are case-insensitive












## Option details

### Modal alignment

The modal will attempt to use the locations in the array in order, unless they overlap the edge of the screen. 
The first part specifies the location of the modal related to the guide ring (top, bottom, left, right). 
The second part specifies the alignment of the modal related to the edge of the guide ring (left, top, right, bottom, center). 
Omit this value completely to center the modal on the screen.