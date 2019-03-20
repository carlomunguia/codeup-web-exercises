const $ = require('jquery');

const sayHello = () => {
    console.log("Howdy!");
}

sayHello();

$("body").append("<h2>jQuery Successfully installed!</h2>");