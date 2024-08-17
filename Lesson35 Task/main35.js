////TASK 1

let fullName = "Murad Nerimanli Kamran"
for (let i of fullName) {
    console.log(i)
}



////TASK 2
//var person ={Fname: "Murad", Lname: "Nerimanli", fatherName: "Kamran"}
var nameArr = ["Murad", "Nerimanli", "Kamran"]

var changePosition = nameArr.splice(0,0, nameArr.splice(1,1)[0])

console.log(nameArr)



//Another way
//var temp = arr[0];
//arr[0] = arr[1];
//arr[1] = temp;

//console.log(arr); // ["Nerimanli", "Murad", "Kamran"]



////FOR NUMBERS ARRAYS

//var array = [1, 2, 3, 4, 5];
//// Move the element at index 2 to index 1
//var removedElement = array.splice(1, 0, array.splice(2, 1)[0]);
//console.log(array); // [1, 3, 2, 4, 5]



////TASK 3
nameArr.toString()



////TASK4

let arr = [4,5,2,1,5,2,5,3,5,6,2,1,6,2,6,2,5,3,2,7,4,6,4,5,6,2,5,6,3,7,3,7]
let equalFive = 5
let count = 0
for (let numb of arr) {
    if(numb == equalFive){
        count++
    }
}
console.log(count)

////TASK 5

let sumOfElements = 0
for (let index = 0; index < arr.length; index++) {
   sumOfElements += arr[index]
}
console.log(sumOfElements)

////TASK 6

function findRepeatingNumbers(array) {
    let repeatingNumbers = [];
    let numberCount = {};

    // Count occurrences of each number in the array
    for (let number of array) {
        numberCount[number] = (numberCount[number] || 0) + 1;
    }

    // Add repeating numbers to the result array
    for (let number in numberCount) {
        if (numberCount[number] > 1) {
            repeatingNumbers.push(Number(number));
        }
    }

    return repeatingNumbers;
}

// Example usage:
let myArray = [4,5,2,1,5,2,5,3,5,6,2,1,6,2,6,2,5,3,2,7,4,6,4,5,6,2,5,6,3,7,3,7];
let result = findRepeatingNumbers(myArray);

console.log("Repeating numbers in the array:", result);

////TASK 7

let maxNumber = arr[0]
let countOfMaxNumber =0
for (var item of arr) {
    if(item>maxNumber)
    {
        maxNumber = item
        if(maxNumber == item)
        {
            countOfMaxNumber++
        }
    }
}
console.log("The max number: " + maxNumber, "the count of max number: " + countOfMaxNumber)

////TASK 8

let newArr = [1,2,3,4,5,9,10]

function GetTheNumberInArray(number, arr)
{
    let IsTrue = true
    for (let item of arr) {
        if(number == item)
        {
            IsTrue
            console.log("YES, " + number + " is in the given array")
        }
        else
        {
            IsTrue = false
            console.log("No, " + number + " is not in the given array")
        }
    }
}

GetTheNumberInArray(6, newArr)

////TASK 9

//yoxlama uchun yazilib
var personName = "Nigar"
var countOfLetter = 0
for (var item of personName) {
    countOfLetter ++
}
console.log(countOfLetter)

// indi de function a cixaraq 
function FindLetterCount(str)
{
    var countLetter = 0
    for (var item of str) {
        countLetter++
    }
    return(countLetter)
}

GetTheNumberInArray(FindLetterCount("Suleyman"), newArr)

//it worked


//// TASK 10

var Numbers = [12,9,46,73,61,63,59,96,32,75,65,50]
for (var index = 0; index <= Numbers.length; index++) {
    if(Numbers[index] % 3 == 2)
    {
        console.log("The first number we are looking for: " + Numbers[index])
        console.log("And its index is: " + index)
        break
    }
}

//// TASK 11

var keyofMaxNumber = 0
var maxNumberofArray = Numbers[0]
for (var key in Numbers) {
    if(Numbers[key]>maxNumberofArray)
    {
        maxNumberofArray = Numbers[key]
        keyofMaxNumber = key
    }
}
console.log("The max number is : " + maxNumberofArray)
console.log("The index of the max number is : " + keyofMaxNumber)


//// TASK 12

var findFour = 4
var showIndexFour = []
for (var index = 0; index < arr.length; index++) {
    if(findFour == arr[index])
    {
        showIndexFour.push(index)
    }
}
console.log("Indexes of Number 4 is: (" + showIndexFour + ")")

//// TASK 13

var findFive = 5
var showIndexFive = []
for (var index = 0; index < arr.length; index++) {
    if(findFive == arr[index])
    {
        showIndexFive.push(index)
    }
}
console.log(showIndexFive) // sadece indexleri gosterir bir arrayde
var maxIndex = showIndexFive[0]
var minIndex = showIndexFive[showIndexFive.length-1]       
for (var i = 0; i < showIndexFive.length; i++) {         
    if(showIndexFive[i]>maxIndex)      
    {      
        maxIndex = showIndexFive[i]  
    }      
    if(showIndexFive[i]<minIndex)     
    {       
        minIndex = showIndexFive[i]  
    }
        
}
console.log("Max index of Number 5 is: " + maxIndex)
console.log("Min index of Number 5 is: " + minIndex)


//// TASK 14

var arr2 = []
for (var item of arr) {
    if(item>2)
    {
        arr2.push(item)
    }
}
var lengthofArr = 0
for (let index = 0; index < arr.length; index++) {
    lengthofArr++
}

var lengthofArr2 = 0
for (let index = 0; index < arr2.length; index++) {
    lengthofArr2++
}

var difference = lengthofArr - lengthofArr2
console.log("Difference between new array and and array is: " + difference)

//// TASK 15

var findSeven = 7
var showIndexSeven = []
for (var index = 0; index < arr.length; index++) {
    if(findSeven == arr[index])
    {
        showIndexSeven.push(index)
    }
}
console.log(showIndexSeven)
var sumOfSeven =0
for (var item of showIndexSeven) {
    sumOfSeven+=item
}
console.log("Sum of indexes of the number 7 is : " + sumOfSeven)