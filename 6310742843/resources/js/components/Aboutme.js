import React from 'react';
import ReactDOM from 'react-dom';
import {Accordion} from "react-bootstrap";


function Aboutme() {
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>About Me</Accordion.Header>
                <Accordion.Body color={"#999999"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>My Experience</Accordion.Header>
                <Accordion.Body color={"#999999"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default Aboutme;

if (document.getElementById('aboutme')) {
    ReactDOM.render(<Aboutme />, document.getElementById('aboutme'));
}
