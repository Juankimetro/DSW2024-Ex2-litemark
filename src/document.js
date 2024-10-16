class Document {
  title
  #author
  #date = new Date()
  #component
  static linebreak = '\n'

  constructor (title, author = 'Anónimo') {
    this.title = title
    if (author.replaceAll(' ', '').length > 3) {
      this.#author = author
    } else {
      this.#author = 'Anónimo'
    }
    this.#date = new Intl.DateTimeFormat('es', {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    }).format(new Date())
  }

  get date () {
    return this.#date
  }

  get author () {
    return this.#author
  }

  set author (author) {
    if (author.replaceAll(' ', '').length > 3) {
      this.#author = author
      return this.#author
    }
  }

  print () {
    return 'Título: ' + this.title + Document.linebreak + 'Autor: ' + this.#author + Document.linebreak + 'Fecha: ' + this.#date + Document.linebreak
  }
}

module.exports = Document
