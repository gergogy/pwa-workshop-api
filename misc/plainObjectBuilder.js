export default (object, ignoreKeys = []) => {
  let plainObject = {};

  Object.keys(object).filter(key => {
    return ignoreKeys.indexOf(key) === -1
  }).forEach(key => {
    plainObject[key] = object[key]
  })

  return plainObject
}