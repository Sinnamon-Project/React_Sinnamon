import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Posts = (props) => {
  return (
    <Col key={props.post.post_id}>
      <Card className='pt-1' style={{ textAlign: "center" }}>
        <div>
          {props.post.picture && <Card.Img style={{ width: "75%" }} variant="top" src={require(`../assets/${props.post.picture}.jpg`)} />}
        </div>
        <Card.Body>
          <Card.Title>{props.post.title}</Card.Title>
          <Card.Text>
            Created on {props.post.date_time}
          </Card.Text>
          <Button variant="primary" as={NavLink} to={'/posts/' + props.post.post_id}>View Post</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Posts

