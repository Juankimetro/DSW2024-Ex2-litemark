const Component = require('./component')
const Document = require('./document')

class SeparatorLine extends Component {
  separator
  length
  constructor (separator = '-', length = 40) {
    super()
    this.separator = separator
    this.length = length
  }

  print () {
    var aux = this.separator
    for (let i = 1; i < this.length; i++) {
      aux += this.separator
    }
    return aux + Document.linebreak
  }
}

module.exports = SeparatorLine
