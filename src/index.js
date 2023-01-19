import React from 'react'
import ReactDOM from 'react-dom/client'

// Topic: create booklist similar to the UI from Amazon Page (check URL below)
// https://www.amazon.com/stores/Stephen-King/author/B000AQ0842

const BookList = () => {
  return (
    <section>
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => (
  <img
    src='https://m.media-amazon.com/images/I/51ECRZXoGyL.jpg'
    alt='Fairy Tale'
  />
)

const Title = () => <h2>Fairy Tale</h2>

const Author = () => {
  return <h4>Stephen King</h4>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
