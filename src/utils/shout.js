const alert = (type, msg) => {
    switch(type){

        case 'error': console.warn(
            `%cAnimatour - ${type.toUpperCase()}\n`,
            "color:yellow;font-family:Verdana, sans-serif;font-size:1rem;-webkit-text-stroke: 1px black;font-weight:bold",
            msg || type
        ); break;
        case 'success': console.log(
            `%cAnimatour - ${type.toUpperCase()}\n`,
            "color:green;font-family:Verdana, sans-serif;font-size:1rem;-webkit-text-stroke: 1px black;font-weight:bold",
            msg || type
        ); break;
        default: console.log(msg)

    }
}
export default alert