import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

//click button to go to component, call server to fetch info about dept. which dept details new route in app.js
const PostDetail = () => {
    //get hold nof no from url. use hook.
    let{id} = useParams();

    //create state
    const [post, setPost]= useState({})
    //fecth data from server
    useEffect(() => {
        getPostById(id)
    }, [])
    function getPostById(id) {
        axios.get(`http://localhost:8080/posts/${id}`)
            .then(response => {
                setPost(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <>
        {/* now has department id wish to view */}
  
        <h1>{post.post_name}</h1>
        <h2>{post.post_id}</h2>
        </>
      )
    }
    
    export default PostDetail
    
