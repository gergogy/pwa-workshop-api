import plainObjectBuilder from '../misc/plainObjectBuilder'

class BaseModel {
  constructor() {
    if (typeof arguments[0] === 'object') {
      Object.keys(arguments[0]).forEach(property => {
        this[property] = arguments[0][property]
      })
    } else {
      this.hydrate(arguments)
    }
  }

  hydrate(...props) {
    throw "'hydrate' method not implemented... "
      + "Implement in your model"
  }

  get toObject() {
    return plainObjectBuilder(this)
  }
}

export default BaseModel