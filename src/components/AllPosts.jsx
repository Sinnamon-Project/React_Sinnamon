import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import Posts from './Posts'

const AllPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts()
  }, [])

  function getAllPosts() {
    axios.get('http://localhost:8080/posts')
      .then(response => {
        setPosts(response.data)
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <Container className="All-Posts">
      <Row xs={3} md={3} className='g-4'>
        {Array.from({ length: 1 }).map((_, idx) => (
          posts.map(post =>
            <Posts key={"post" + post.post_id} post={post} />
          ) 
        ))}
      </Row>
    </Container>

  )
}
export default AllPosts