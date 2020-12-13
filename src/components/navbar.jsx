import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return ( 
        <div className="main-navbar fixed-top">
            <div className="container">
            <Row>
                <Col sm={12} xs={12}>
                <h3><Link to="/">Game<strong style={{color:"#ff8065"}}>Lounge</strong></Link></h3>
                </Col>
                <Col sm={12} xs={12}>
                <ul className="auth-links">
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Sign Up</Link></li>
                </ul>
                </Col>
            </Row>
            </div>
        </div>
     );
}
 
export default NavBar;