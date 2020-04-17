import React from "react";
import {Button, Navbar} from "react-bootstrap";

type Props = {
    getResult: ()=>void
}

const Header = ({getResult}:Props) => {
    return (
        <Navbar className="justify-content-md-around" variant="dark" bg='dark' expand="xl">
            <Navbar.Brand href="/">JSON & JS EDITOR</Navbar.Brand>
            <Button onClick={getResult} variant="success">Run the code</Button>
        </Navbar>
    )
};

export default Header;
