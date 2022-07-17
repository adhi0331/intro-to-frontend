(function(global) {

    let arnav = {}

    arnav.name = "Arnav"

    let greeting = "Hi"
    arnav.sayHi = function() {
        console.log(greeting + " " + arnav.name)
    }

    global.arnav = arnav;

})(window);