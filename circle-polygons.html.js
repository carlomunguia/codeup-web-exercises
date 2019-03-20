function power(base, exponent){
    let sum = 0;
    for (var i = 0; i < base; i++){
        sum += exponent;
    }
    return sum;
}

import {awesomeMessage} from"./src/say-hello.js"

console.log(awesomeMessage());

const niceMessage = () => {
    return "Nice Message Yo";
}