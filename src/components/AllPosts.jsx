import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Posts from './Posts'
import PostForm from './PostForm'


const AllPosts = () => {
    const [posts, setPosts] = useState([]);

    function getAllPosts() {
        axios.get("http://localhost:8080/posts")
            .then(response => {
                console.log(response);
                setPosts(response.data);
            }

            ).catch(error => {
                console.log(error);
            })

    }
    //when loaded
    useEffect(() => {
        getAllPosts()
    }, []) //pass empty array to stop it repeating over and over


    let postList = posts.map(post =>
        <div key={post.post_id}>
            <Posts post={post} />
        </div>)


    const addPost = (post) => { //make sure you are displaying right.gte all depts, make sure in sync
        axios.post('http://localhost:8080/posts', post)
            .then(response => {
                getAllPosts();//rather than  modify what alreayd have, fetch again
            })
            .catch(error => {
                console.log(error);
            })
            .then(()=>{
                console.log("Always Executed")
            })

    }



    return (
        <>
            <h1>AllPosts: </h1>
            <Container>
                <Row>
                    <Col>{postList}</Col>
                    <Col><PostForm submitHandler={addPost} /></Col>
                </Row>
            </Container>

        </>
    )
}

export default AllPosts