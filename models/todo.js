import BaseModel from './base'

class TodoModel extends BaseModel {
  hydrate(...props) {
    const properties = [
      'name',
      'description',
      'done'
    ]
    props.forEach((value, index) => {
      this[properties[index]] = value
    })
  }
}

export default TodoModel