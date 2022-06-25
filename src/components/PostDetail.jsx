import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const PostDetail = () => {
    const [post, setPost] = useState({});

    let { id } = useParams()

    useEffect(() => {
        getPostById(id)
    }, [])

    function getPostById(id) {
        axios.get(`http://localhost:8080/post/${id}`)
            .then(response => {
                setPost(response.data)
                console.log(response.data)

            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <div className="post-details">
            <h1>{post.title}</h1>
            <p>{post.text_post}</p>
        </div>
    )
}

export default PostDetail
