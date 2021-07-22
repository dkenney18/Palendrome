function pCheck(sentance) {
  //normalize the strings first and reverse one to check if it is the same forwards as well as backwards
  let reversed = sentance.split(" ").join("").split("").reverse().join("").toLowerCase()
  let og = sentance.split(" ").join("").split("").join("").toLowerCase()
  return og == reversed
}

console.log(pCheck("racecar""))