import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

// Topic: create booklist similar to the UI from Amazon Page (check URL below)
// https://www.amazon.com/stores/Stephen-King/author/B000AQ0842

const BookList = () => {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => <img src='./images/fairy-tale.jpeg' alt='Fairy Tale' />

const Title = () => <h2>Fairy Tale</h2>

const Author = () => {
  const inlineHeadingStyles = {
    color: '#617d98',
    fontSize: '0.75rem',
    marginTop: '0.5rem',
  }
  return <h4 style={inlineHeadingStyles}>Stephen King</h4>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
