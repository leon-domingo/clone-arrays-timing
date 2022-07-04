const arr = Array(300000).fill(0)

// arr.concat()
// Array.from(arr)
// arr.map(item => item)
// arr.filter(() => true)

function timeIt(callback, numberOfExecutions = 10000) {
  const start = Date.now()
  for (let n = 1; n <= numberOfExecutions; n++) {
    callback()
  }
  return (Date.now() - start) / 1000
}

const concatTime = timeIt(() => arr.concat())
console.log(`Array.concat - ${concatTime}s`)

const fromTime = timeIt(() => Array.from(arr))
console.log(`Array.from - ${fromTime}s`)

const mapTime = timeIt(() => arr.map(item => item))
console.log(`Array.map - ${mapTime}s`)

const filterTime = timeIt(() => arr.filter(() => true))
console.log(`Array.filter - ${filterTime}s`)

