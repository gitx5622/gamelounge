import React from 'react';
import { Row, Col } from 'antd';

const NavBar = () => {
    return ( 
        <div className="main-navbar fixed-top">
            <div className="container">
            <Row>
                <Col sm={12} xs={12}>
                <h3>Game<strong style={{color:"#ff8065"}}>Lounge</strong></h3>
                </Col>
                <Col sm={12} xs={12}>
                <ul className="auth-links">
                    <li>Login</li>
                    <li>Sign Up</li>
                </ul>
                </Col>
            </Row>
            </div>
        </div>
     );
}
 
export default NavBar;