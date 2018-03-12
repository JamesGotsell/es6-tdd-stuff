import fetch from 'node-fetch'

class Stuff {

  constructor() {
  }
  hello() {
    let str = 'hello world'
    return str
  }
  reverse(str) {
    let reversed = str;
    return reversed.split('').reverse().join("");
  }
  apiRequest(url) {
    let rootUrl = url
    let returnedData = fetch(url)
      .then(res => res.json())
      .then(data => {
        return data
      })
    let data = returnedData.then(function (result) {
      return Promise.resolve(result)
    })
    return data
  }
  addToArray(data) {
    let array1 = []
    array1.push(data)
    return array1
  }
  digitalRoot(num) {
    let numArr = []
    let numStirng = num.toString();
    let arr = [...numStirng]
    for (let i = 0; i < arr.length; i++) {
      let arrItem = arr[i]
      let toNum = parseInt(arrItem)
      numArr.push(toNum)
    }
    let reducedTotal = numArr.reduce((a, b) => a + b, 0)
    return reducedTotal
  }
  factorize(num) {
    if (num === 0) {
      return 1
    } else {
      return num * this.factorize(num - 1)
    }
  }
  panlindromCheck(str) {
    let originalString = str.toLowerCase()
    let checkString = str.toLowerCase().split('').reverse().join('');

    if (originalString === checkString) {
      return true
    } else {
      return false
    }
  }
  longestWord(str) {
    let words = str.split(' ')
    let maxLength = 0
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
      }
    }
    return maxLength
  }
  captailize(str) {
    let words = str.toLowerCase().split(' ')

    let result = words.map((val) => {
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase())
    })

    console.log(result)
    return result.join(' ')
  }
  helloWorld() {
    return 'hello world'
  }
  greeting(name) {
    return `hello ${name}`
  }
  arrayUpToNthNum(num) {
    let numArry = []
    for (let i = 0; i < num; i++) {
      numArry.push(i + 1)
    }
    console.log(numArry)
    let stuff = [...numArry]
    return stuff
  }
  arrayUpToNthNumTimes(num) {
    let arr = []
    for (let i = 0; i < num; i++) {
      debugger
      let numTimesNum = num * (i % num === 0)
      arr.push(numTimesNum)
      debugger
    }
    return arr
  }
}

module.exports = Stuff;
