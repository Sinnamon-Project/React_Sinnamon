import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';

const PostForm = (props) => {
  const [postTitle, setPostTitle] = useState('');
  const [text, setTextEdit] = useState('');


  const addPost = (e) => {
    e.preventDefault();
    let post = {
      "title": postTitle,
      "text_post": text
    }
    console.log(post);
    props.submitHandler(post);
  }



  return (
    <Form onSubmit={addPost}>
      <Form.Group className="mb-3" controlId="formPostTitle">
        <Form.Label>Post Title</Form.Label>
        <Form.Control type="text" placeholder="Enter post title" value={postTitle}
          onChange={event => setPostTitle(event.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formText">
        <Form.Label>Text</Form.Label>
        <Form.Control type="text" placeholder="Enter text" value={text}
          onChange={event => setTextEdit(event.target.value)} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default PostForm