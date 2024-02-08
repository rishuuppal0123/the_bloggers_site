import React, { useState } from 'react'
import Avatar1 from '../images/author1.jpeg'
import Avatar2 from '../images/author2.jpeg'
import Avatar3 from '../images/author3.jpeg'
import Avatar4 from '../images/author4.jpeg'
import Avatar5 from '../images/author5.jpeg'
import { Link } from 'react-router-dom'

const authorsData = [
  {id:1, avatar: Avatar1, name: 'Harvick Jenny', posts: 3},
  {id:2, avatar: Avatar2, name: 'John Milton', posts: 5},
  {id:3, avatar: Avatar3, name: 'James Chadwick', posts: 0},
  {id:4, avatar: Avatar4, name: 'Lucy Kathe', posts: 1},
  {id:5, avatar: Avatar5, name: 'Charles Darwin', posts: 2}
]
const Authors = () => {
  const [authors, setAuthors] = useState(authorsData)
  return (
    <section className='authors'>
      {
      authors.length > 0 ? <div className="container authors__container">
        {
          authors.map(({id, avatar, name, posts}) => {
            return <Link key={id} to={`/posts/users/${id}`} className='author'>
              <div className="author__avatar">
                <img src={avatar} alt={`Image of ${name}`} />
              </div>
              <div className="author__info">
                <h4>{name}</h4>
                <p>{posts}</p>
              </div>
            </Link>
          })
        }
      </div> : <h2 className='center'>No authors found! 😢 </h2>}
    </section>
  )
}

export default Authors