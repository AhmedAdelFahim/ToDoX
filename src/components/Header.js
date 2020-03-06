import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav"
import AddTask from "./AddTask";


const Header = (props) => {

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand >ToDoX</Navbar.Brand>
                <Nav className="mr-auto">
                </Nav>
                <AddTask addNewTask={props.addNewTask}/>
            </Navbar>
        </>
    )
}

export default Header
