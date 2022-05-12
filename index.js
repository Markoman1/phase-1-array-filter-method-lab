// Code your solution here
function findMatching(drivers, name) {
   const matching = (drivers.filter(driver => driver.toLowerCase() === name.toLowerCase()))
    // console.log(matching)
    return matching
}



function fuzzyMatch(arrayOfDrivers, firstLetters) {
    const length = firstLetters.length
    console.log(length)
    const lettersMatch = arrayOfDrivers.filter(driver => driver.slice(0, length)=== firstLetters)
    return lettersMatch        
}  







function matchName(arrayOfObjects, string) {
     
    return arrayOfObjects.filter((driver)=>driver.name === string)
    
}