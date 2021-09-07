/**
 * Post a branded message to the console
 * 
 * ---
 * use built-in types warn, error, success and log
 * 
 * @param {string|string-array} - the message to post under the branded heading
 * @returns void
 */
export const shout = {

    warn: (msg) => {
        console.warn(
            `%cAnimatour - WARNING\n`,
            "color:yellow;font-family:Verdana, sans-serif;font-size:1rem;-webkit-text-stroke: 1px black;font-weight:bold",
            Array.isArray(msg) ? msg.join('\n') : msg
        )   
    },

    error: (msg) => {
        console.error(
            `%cAnimatour - ERROR\n`,
            "color:red;font-family:Verdana, sans-serif;font-size:1rem;-webkit-text-stroke: 1px black;font-weight:bold",
            Array.isArray(msg) ? msg.join('\n') : msg
        )   
    },

    success: (msg) => {
        console.log(
            `%cAnimatour - SUCCESS\n`,
            "color:green;font-family:Verdana, sans-serif;font-size:1rem;-webkit-text-stroke: 1px black;font-weight:bold",
            '%c'+_Array.isArray(msg) ? msg.join('\n') : msg, "color:green"
        )   
    },

    log: (msg) => {
        console.log(
            '%c'+_Array.isArray(msg) ? msg.join('\n') : msg, "color:blue"
        )   
    }
}
export default shout