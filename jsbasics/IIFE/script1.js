(function(global) {

    let adhithya = {}

    adhithya.name = "Adhithya"

    let greeting = "Hello"
    adhithya.sayHi = function() {
        console.log(greeting + " " + adhithya.name)
    }

    global.adhithya = adhithya;

})(window);