const compare = (appV, newV) => {
  const newArr = appV.split('.')
  const appArr = newV.split('.')
  if (newArr[0] > appArr[0]) {
    return true
  }
  if (newArr[0] == appArr[0] && newArr[1] > appArr[1]) {
    return true
  }
  if (newArr[0] == appArr[0] && newArr[1] == appArr[1] && newArr[2] > appArr[2]) {
    return true
  }
  return false
}

const compare = (appV, newV) => {
  const appArr = appV.split('.')
  const newArr = newV.split('.')
  if (newArr[0] > appArr[0]) {
    return true
  }
  if (newArr[0] == appArr[0] && newArr[1] > appArr[1]) {
    return true
  }
  if (newArr[0] == appArr[0] && newArr[1] == appArr[1] && newArr[2] > appArr[2]) {
    return true
  }
  return false
}

const userV = '2.1.1'
const setV = 'v2.2.0'

const result = compare(userV, setV)

console.log(result)