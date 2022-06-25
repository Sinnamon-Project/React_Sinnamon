import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';

const PostForm = (props) => {
  const [postTitle, setPostTitle] = useState('');
  const [text, setTextEdit] = useState('');
  const [authorId, setAuthorId] = useState('');
  const [pic, setPic] = useState('');


  const addPost = (e) => {
    e.preventDefault();
    let post = {
      "title": postTitle,
      "text_post": text,
      "author": authorId,
      "picture": pic
    }
    console.log(post);
    props.submitForm(post);
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

      <Form.Group className="mb-3" controlId="formAuthorId">
        <Form.Label>AuthorId</Form.Label>
        <Form.Control type="text" placeholder="Enter Id" value={authorId}
          onChange={event => setAuthorId(event.target.value)} />
      </Form.Group>

      {/* <Form.Group className="mb-3" controlId="formPic">
        <Form.Label>Pic</Form.Label> */}
        {/* <Form.Control type="text" placeholder="Enter picture" value={pic}
          onChange={event => setPic(event.target.value)} />
      </Form.Group> */}

      <Form.Group controlId="select">
      <Form.Label>Dropdown Pic Select</Form.Label>
          <Form.Control as="select" value={pic}
          onChange={event => setPic(event.target.value)} >
            <option>France</option>
            <option>Egypt</option>
            <option>Ireland</option>
            <option>Giza</option>
          </Form.Control>
        </Form.Group>


      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

  )
}

export default PostForm