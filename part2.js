const addToZero = (arr) => {
    sumsArr = []
    if(arr[1]){
        for(i = 0; i < arr.length; i++){
            for(j = 0; j < arr.length; j++){
                sumsArr.push(arr[i] + arr[j])
            }
        }
    } else {
        return false
    }
    for(i = 0; i < sumsArr.length; i++){
        if(sumsArr[i] == 0){
            return true
        }
    }
    return false
}
console.log(addToZero([]))
console.log(addToZero([1]))
console.log(addToZero([1, 2, 3]))
console.log(addToZero([1, 2, 3, -2]))
console.log('\n')

const hasUniqueChars = (str) => {
    return new Set(str).size == str.length;
}
console.log(hasUniqueChars("Monday"))
console.log(hasUniqueChars("Moonday"))
console.log('\n')

const isPangram = (str) => {
    const hasAlpha = /([a-z])(?!.*\1)/g;
    return (str.match(hasAlpha) || []).length === 26;
}
console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
console.log(isPangram("I like cats, but not mice"))
console.log('\n')

const findLongestWord = (arr) => {
    let longestWord = 0
    for(i = 0; i < arr.length; i++){
        strArr = arr[i].trim().split('')
        if(strArr.length > longestWord){
            longestWord = strArr.length
        }
    }
    return longestWord
}
console.log(findLongestWord(["hi", "hello"]))