import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// Topic: create booklist similar to the UI from Amazon Page (check URL below)
// https://www.amazon.com/stores/Stephen-King/author/B000AQ0842

const books = [
  {
    id: 1,
    author: 'Stephen King',
    title: 'Fairy Tale',
    img: './images/fairy-tale.jpeg',
  },
  {
    id: 2,
    author: 'J.K.Rowling',
    title: `Harry Potter and the Philosopher's stone`,
    img: './images/harry-potter.jpg',
  },
  {
    id: 3,
    author: 'J.R.R. Tolkien',
    title: 'The Lord of the Rings The Fellowship of the Ring',
    img: './images/lord-of-the-ring.jpg',
  },
]

// I WAY
// const BookList = () => {
//   return (
//     <section className='booklist'>
//       {books.map((book, index) => {
//         const { author, title, img } = book
//         return <Book img={img} title={title} author={author} key={index} />
//       })}
//     </section>
//   )
// }
// const Book = (props) => {
//   const { id, img, title, author } = props
//   return (
//     <article id={id} className='book'>
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author}</h4>
//     </article>
//   )
// }

// II WAY
// const BookList = () => {
//   return (
//     <section className='booklist'>
//       {books.map((book, index) => {
//         const { img, title, author, id } = book
//         return <Book book={book} key={id} />
//       })}
//     </section>
//   )
// }

// const Book = (props) => {
//   const { img, title, author } = props.book
//   console.log(props)
//   return (
//     <article className='book'>
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author}</h4>
//     </article>
//   )
// }

// III way - with spread operator (recommended)
const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book {...book} key={book.id} />
      })}
    </section>
  )
}

const Book = (props) => {
  const { img, title, author } = props
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
