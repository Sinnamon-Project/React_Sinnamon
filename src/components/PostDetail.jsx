import axios from 'axios';
import { Card } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const PostDetail = () => {
    const [post, setPost] = useState({});

    let { id } = useParams()

    useEffect(() => {
        getPostById(id)
    }, [id])

    function getPostById(id) {
        axios.get(`http://localhost:8080/posts/${id}`)
            .then(response => {
                if (!!response && !!response.data && response.data.length !== undefined && response.data.length > 0) {
                    setPost(response.data[0]);
                }
                console.log(response.data)

            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <div className="post-details m-3 p-3">
            <h1>{post.title}</h1>
            <p>{post.text_post}</p>
            {post.picture && <Card.Img variant="top" src={require(`../assets/${post.picture}.jpg`)} />}
        </div>
    )
}

export default PostDetail
