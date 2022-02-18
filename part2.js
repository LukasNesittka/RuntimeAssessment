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

//The space complexity of this function is O(n^2) because the function loops twice through an array of undefined length, making its runtime grow exponentially as the array grows.

const hasUniqueChars = (str) => {
    return new Set(str).size == str.length;
}
console.log(hasUniqueChars("Monday"))
console.log(hasUniqueChars("Moonday"))
console.log('\n')

//The space complexity of this function is O(1). It is a simple truthy request, and doesn't change runtime based on the length of the string, as it is merely checking for the first of each value.

const isPangram = (str) => {
    const hasAlpha = /([a-z])(?!.*\1)/g;
    return (str.match(hasAlpha) || []).length === 26;
}
console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
console.log(isPangram("I like cats, but not mice"))
console.log('\n')

//The space complexity of this function is O(1). Once again, it is a simply truthy statement, and there are only so many letters in the alphabet to check against.

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

//The space complexity of this function is O(n). Since we are relying on an array, the runtime increases as the array grows, linearly.