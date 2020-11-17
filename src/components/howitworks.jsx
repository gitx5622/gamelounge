import React from 'react';
import {Row, Col } from 'antd';
import joystick from '../assets/joystick.png';
import play from '../assets/play.png';
import customer from '../assets/customer.png';
import trophy from '../assets/trophy.png'

const HowItWorks = () => {
    return ( 
        <div className="howitworks pt-3">
            <center><h3>How It Works</h3></center>
            <div className="underline"></div>
            <div className="container">
            <Row>
                <Col sm={6} xs={24}>
                <center>
                <img src={customer} alt="win-img" className="win-img"/>
                <p>User creates an account</p>
                </center>
                </Col>
                <Col sm={6} xs={24}>
                <center>
                <img src={play} alt="win-img" className="win-img"/>
                <p>User can create or join a tournament</p>
                </center>
                </Col>
                <Col sm={6} xs={24}>
                <center>
                <img src={joystick} alt="win-img" className="win-img"/>
                <p>The opponents get to play the game using their playstation</p>
                </center>
                </Col>
                <Col sm={6} xs={24}>
                <center>
                <img src={trophy} alt="win-img" className="win-img"/>
                <p>Win prizes for winning the game</p>
                </center>
                </Col>
            </Row>
            </div>
        </div>
     );
}
 
export default HowItWorks;