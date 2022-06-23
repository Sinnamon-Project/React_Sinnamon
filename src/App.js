import logo from './logo.svg';
import './App.css';
import AllPosts from './components/AllPosts';
import PostForm from './components/PostForm';
import Posts from './components/Posts';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PostDetail from './components/PostDetail';


function App() {


  return (
    <BrowserRouter>

      <Navbar bg="light" expand="lg">
        <Container>
          <Nav.Link href="#home">Home</Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Posts</Nav.Link>
              {/* <Nav.Link as={Link} to="/welcome">Welcome</Nav.Link>
              <Nav.Link as={Link} to="/counter">Counter</Nav.Link> */}

            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<AllPosts />} />
        {/* <Route path='/welcome' element={<Welcome />} /> */}
        {/* <Route path='/counter' element={<Counter />} /> */}
        <Route path='/posts/:id' element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
