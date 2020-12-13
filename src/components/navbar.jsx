import React from 'react';
import { Row, Col } from 'antd';
import { Button } from 'shards-react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { SignOut } from '../store/auth/actions/authActions';

const NavBar = () => {
    const currentState = useSelector((state) => state);
    
    const { isAuthenticated } = currentState.Auth;
  
    const dispatch = useDispatch();
  
    const logoutUser  = () => dispatch(SignOut());
  
    const logout = (e) => {
        e.preventDefault();
        logoutUser()
    };
      
    const signInLinks = (
        <>
            <li><a href="/login"><Button size="sm" outline theme="info">Login</Button></a></li>
            <li><a href="/register"><Button size="sm" theme="info">Sign Up</Button></a></li>
        </>
      )
      const signOutLinks = (
            <li><a href="/login"><Button size="sm" onClick={logout} outline theme="info">Logout</Button></a></li>
      )
    return ( 
        <div className="main-navbar fixed-top">
            <div className="container">
            <Row>
                <Col sm={12} xs={12}>
                <h3><Link to="/">Game<strong style={{color:"#ff8065"}}>Lounge</strong></Link></h3>
                </Col>
                <Col sm={12} xs={12}>
                <ul className="auth-links">
                { isAuthenticated ? signOutLinks: signInLinks }
                </ul>
                </Col>
            </Row>
            </div>
        </div>
     );
}
 
export default NavBar;