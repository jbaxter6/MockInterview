function sortString(original){
// split abc into array
// [a, b, c]
// Get Array.length
// for loop have i set to Array.length, then while i >= 0, decrement i

let arr = original.split("")
let leng = arr.length - 1
let newArr = []

for(i = leng; i >= 0; i --){
    console.log(arr[i]);
    newArr.push(arr[i]);
}
return newArr.join("")
}



const test1 = sortString("abc") == "cba"
const test2 = sortString("abcd") == "dcba"


const testArray = [test1, test2]








// DON'T WORRY ABOUT THIS STUFF

document.addEventListener("DOMContentLoaded", (e) => {
    const testUl = document.getElementById("test-container")
    
    const renderTest = (test) => {
        const testLi = document.createElement("li")
        if(test){
            testLi.innerText = "Success"
        }
        else{
            testLi.innerText = "Fail: Try console.log for more details."
        }

        testUl.appendChild(testLi)
    }

    testArray.forEach(test => {
        renderTest(test)
    })
})