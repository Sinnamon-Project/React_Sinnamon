import './App.css';
import AllPosts from './components/AllPosts';
import PostForm from './components/PostForm';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import PostDetail from './components/PostDetail';
import AboutUs from './components/AboutUs';
import axios from 'axios';



function App() {

  const addPost = (post) => { //make sure you are displaying right.gte all depts, make sure in sync
    axios.post('http://localhost:8080/posts', post)
      .then(response => {
        console.log(addPost)//rather than  modify what alreayd have, fetch again
      })
      .catch(error => {
        console.log(error);
      })
  }

  return (
    <BrowserRouter>

      <Navbar bg="light" expand="lg">
        <Container>
          <Nav.Link as={NavLink} to="/Home">Home</Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">Posts</Nav.Link>
              <Nav.Link as={NavLink} to="/AboutUs">AboutUs</Nav.Link>
              <Nav.Link as={NavLink} to="/write">Create</Nav.Link>

              {/* <Nav.Link as={Link} to="/welcome">Welcome</Nav.Link>
              <Nav.Link as={Link} to="/counter">Counter</Nav.Link> */}

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/Home' element={<AllPosts />} />
        <Route path='/' exact element={<AllPosts />} />
        <Route path='posts/:id' element={<PostDetail />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path="/write" element={<PostForm submitForm={addPost} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
