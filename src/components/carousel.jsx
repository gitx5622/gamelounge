import React from 'react';
import { Button } from 'shards-react';
import { Row, Col } from 'antd';
import hero from '../assets/hero.png';
import check from '../assets/check.png';

const Carousel = () => {
    return ( 
        <div className="carousel">
            <div className="container">
             <Row>
                <Col sm={12} xs={12}>
                <h1>Enjoy a good game with friends</h1><br/>
                <img src={check} alt="check" width="25px"/>&nbsp;&nbsp;&nbsp;Enjoy their leisure time online with friends<br/>
                <img src={check} alt="check" width="25px"/>&nbsp;&nbsp;&nbsp;Make money playing your favorite game<br/>
                <br/>
                <h3>Platforms</h3>
                <p>PlayStation 4, Xbox One, and PC</p>
                <br/>
                <Button className="btn-solid">Get Started</Button>
                </Col>
                <Col sm={12} xs={12}>
                <img src={hero} alt="nav-img" className="hero-img"/>
                </Col>
            </Row>
            </div>
        </div>
     );
}
 
export default Carousel;