import React from 'react'
import { Navbar, Form, FormControl, Button, Nav } from "react-bootstrap"

const Navigation = ({ searchByKeyword, getPopularMovies, getUpcomingMovies, getTopRatedMovies }) => {
    let keyword = ""
    return (
        <div>
            <Navbar bg="primary" expand="md" variant="dark">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#popular" onClick={() => getPopularMovies()}>Popular</Nav.Link>
                        <Nav.Link href="#upcoming" onClick={() => getUpcomingMovies()}>Upcoming</Nav.Link>
                        <Nav.Link href="#top-rated" onClick={() => getTopRatedMovies()}>Top Rated</Nav.Link>
                    </Nav>
                    <Form inline onSubmit={(event) => {
                        event.preventDefault();
                        searchByKeyword(keyword);
                    }}>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(event) => {
                            keyword = event.target.value;
                            console.log(keyword)
                        }} />
                        <Button type="submit" variant="outline-light">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navigation
