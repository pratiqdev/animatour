const alert = (type, msg) => {
    switch(type){
        case null: console.log(msg); break;

        default: console.warn(
            `%cAnimatour - ${type.toUpperCase()}\n`,
            "color:yellow;font-family:Verdana, sans-serif;font-size:1rem;-webkit-text-stroke: 1px black;font-weight:bold",
            msg || type
        );
    }
}
export default alert