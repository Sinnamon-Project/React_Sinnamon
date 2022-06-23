import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';

const PostForm = (props) => {
    const [PostTitle, setpostTitle] = useState('');
    const [Text, settextEdit] = useState('');
    

    const addPost = (e) =>{
        e.preventDefault();
        let post = {
            "id" : 6,
            "PostTitle" : PostTitle,
            "Text" : Text
        }
        console.log(post);
        props.submitHandler(post);
    }



  return (
    <Form onSubmit={addPost}>
    <Form.Group className="mb-3" controlId="formPostTitle">
      <Form.Label>PostTitle</Form.Label>
      <Form.Control type="text" placeholder="Enter post title" value={PostTitle}
       onChange ={event=>setpostTitle(event.target.value)} />
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formtext">
      <Form.Label>Text</Form.Label>
      <Form.Control type="text" placeholder="Enter text" value={Text}
      onChange ={event=>settextEdit(event.target.value)}/>
    </Form.Group>
    
    <Button variant="primary" type="submit">
      Post
    </Button>
  </Form>
  )
}

export default PostForm