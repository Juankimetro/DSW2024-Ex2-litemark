const Component = require('./component')

class Container extends Component {
  #components = []

  getComponents () {
    return this.#components
  }

  addComponents (...component) {
    component.forEach((e) => {
      if (e instanceof Component) {
        this.#components.push(e)
      }
    })
  }

  countWords () {
    let total
    if (this.#components.length === 0) {
      return 0
    } else {
      this.#components.forEach((e) => {
        total += e.countWords()
      })
    }
    return total
  }
}

module.exports = Container
