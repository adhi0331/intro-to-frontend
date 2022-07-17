var foods = ["Apple", "Pizza", "Noodles", "Bread"];

foods.push("Orange")
console.log(foods)
foods.pop()
console.log(foods)
console.log(foods.indexOf("Apple"))

var newfoods = foods.map(x => x + " is yummy")
console.log(newfoods)

/* create a new array that multiples all elements in nums by 3 using the map function*/

var nums = [1, 2, 3, 4, 5]
var newnums = nums.map(x => x * 3)
