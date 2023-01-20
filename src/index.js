import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// Topic: create booklist similar to the UI from Amazon Page (check URL below)
// https://www.amazon.com/stores/Stephen-King/author/B000AQ0842

const author = 'Stephen King'
const title = 'Fairy Tale'
const img = './images/fairy-tale.jpeg'

const someFunc = (param1, param2) => {
  console.log(param1, param2)
}

someFunc('job', 'developer')

const BookList = () => {
  return (
    <section className='booklist'>
      <Book author={author} title={title} img={img}>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
          facilis nulla in excepturi reprehenderit accusamus, eveniet voluptatem
          dolores voluptates reiciendis sunt repellendus sit nisi aspernatur
          necessitatibus cum? Illo, in voluptates?
        </p>
        <button>click me</button>
      </Book>
      <Book
        author='J.K.Rowling'
        title='Harry Potter and the Philosopher’s Stone'
        img={img}
      />
    </section>
  )
}

const Book = (props) => {
  const { img, title, author, children } = props
  console.log(props)
  return (
    <article className='book'>
      <img src={img} alt='Fairy Tale' />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  )
}

const Image = () => <img src={img} alt='Fairy Tale' />

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
