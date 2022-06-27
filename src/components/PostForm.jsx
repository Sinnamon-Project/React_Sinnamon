import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { Editor, EditorState, convertToRaw } from 'draft-js';
import 'draft-js/dist/Draft.css';

const PostForm = (props) => {
  const [postTitle, setPostTitle] = useState('');
  const [authorId, setAuthorId] = useState('');
  const [pic, setPic] = useState('');
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

  const editor = React.useRef(null);
  function focusEditor() {
    editor.current.focus();
  }

  const getTextInEditor = () => {
    const blocks = convertToRaw(editorState.getCurrentContent()).blocks;
    const mappedBlocks = blocks.map(
      block => (!block.text.trim() && "\n") || block.text
    );

    let newText = "";
    for (let i = 0; i < mappedBlocks.length; i++) {
      const block = mappedBlocks[i];

      // handle last block
      if (i === mappedBlocks.length - 1) {
        newText += block;
      } else {
        // otherwise we join with \n, except if the block is already a \n
        if (block === "\n") newText += block;
        else newText += block + "\n";
      }
    }

    return newText;
  }

  const addPost = (e) => {
    e.preventDefault();
    let post = {
      "title": postTitle,
      "text_post": getTextInEditor(),
      "author": authorId,
      "picture": pic
    }
    console.log(post);
    props.submitForm(post);
  }

  return (
    <div className='m-2 p-2 blogCreateForm'>
      <Form onSubmit={addPost}>
        <Form.Group className="mb-3" controlId="formPostTitle">
          <Form.Control type="text" placeholder="Enter post title" value={postTitle}
            onChange={event => setPostTitle(event.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formText">
          <div className="pt-2 px-2"
            style={{ border: "1px solid rgba(0,0,0,.125)", minHeight: "6em", cursor: "text" }}
            onClick={focusEditor}
          >
            <Editor
              ref={editor}
              editorState={editorState}
              onChange={setEditorState}
              placeholder="Write blog description here!"
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAuthorId">
          <Form.Control type="text" placeholder="Enter Author Id" value={authorId}
            onChange={event => setAuthorId(event.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="select">
          <Form.Control as="select" value={pic}
            onChange={event => setPic(event.target.value)} >
            <option>--Select picture--</option>
            <option>France</option>
            <option>Egypt</option>
            <option>Ireland</option>
            <option>Giza</option>
          </Form.Control>
        </Form.Group>

        <Button className="mt-2" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default PostForm