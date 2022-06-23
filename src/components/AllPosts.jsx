import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Posts from './Posts'
import PostForm from './PostForm'


const AllPosts = () => {

    const posts = [{"post_id":4,"title":"Paris is a beautiful place","text_post":"Nancy had a great time visiting Paris"},
    {"post_id":5,"title":"Egypt has many historical sites","text_post":"Sandra loved visiting Giza"},
    {"post_id":6,"title":"Dublin","text_post":"Mamta enjoyed visiting the Phoenix Park"},
    {"post_id":7,"title":"Kildare","text_post":"Neeraja had a great time in Kildare"},

    ]
    
    let postList = posts.map(post => 
            <div key={post.post_id}>
                <Posts post = {post}/>
            </div>)

    const addPost = (post)=>{
        posts.push(posts);
        console.log(posts);
    }


    return (
        <>
        <h1>AllPosts: </h1>
        <Container>
            <Row>
            <Col>{postList}</Col>
            {<Col><PostForm submitHandler = {addPost} /></Col>} 
            </Row>
        </Container>
       
        </>
    )
}

export default AllPosts