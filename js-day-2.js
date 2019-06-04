var groceryList2 = ["chips", "dip","coockies"]

groceryList2.push("soda")
console.log(groceryList2);

var numbers2 = [2, 4, 6, 8, 10]

numbers2.unshift(0)

console.log(numbers2);

var groceryList1 = ["apples", "carrots", "oatmeal"]

console.log(groceryList1.concat("granola"))
console.log(groceryList1);

var numbers1 = [1,2,3,4,5]
var numOne = [0]

var testing = numOne.concat(numbers1)
console.log(testing);
console.log("numbers1 array : " + numbers1);

var numbers3 = [2, 13, 6, 8, 4, 2]

console.log(numbers3.indexOf(2));
console.log(numbers3.lastIndexOf(2));

var chars = ["y", "a", "r", "r", "a"]

var stringChars = chars.join("")

var reversedChards = chars.reverse()

console.log(reversedChards);
console.log(reversedChards.join("-"));

var sibNames =["Lior", "Tal", "Atest"]
console.log(sibNames.sort());
var parName = ["Patricia" , "Efraim", "Btests", "Atest" ,"Ztest"]

console.log(parName.sort().reverse());
var allNames = sibNames.concat(parName)

console.log(allNames.sort());
console.log(allNames.sort().reverse());
