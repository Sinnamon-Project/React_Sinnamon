import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import one from '../assets/1.jpg';
//${props.post.post_id}



const Posts = (props) => {
  return (
    <Card style={{ width: '75rem' }}>
    <Card.Img variant="top" src= {one} />
    {/* <Card.Img variant="top" src={require(`../assets/${props.post.post_id}.jpg`)} /> */}
      <Card.Body>  
        <Card.Title>{props.post.title}</Card.Title>
          <Card.Text>
          {props.post.text_post}.
          </Card.Text>
          <Button variant="primary" as={NavLink} to={'/post/'+props.post.text_post}>View Post</Button>
       </Card.Body>
    </Card>
  )
}

export default Posts

