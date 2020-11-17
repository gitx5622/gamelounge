import React from 'react';
import {Row, Col, Button } from 'shards-react';
import { Card } from 'antd';

const { Meta } = Card;

const ChooseTournament = () => {
    return ( 
        <div className="choosetourna pt-5">
            <center><h3>Choose Tournament</h3></center>
            <div className="underline"></div>
            <div className="container-fluid">
            <Row>
                <Col>
                <center>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://www.windowscentral.com/sites/wpcentral.com/files/topic_images/2017/topic-call-of-duty-ww2.png" />}
                >
                    <Meta title="Call of Duty" description="www.instagram.com" />
                    <Button className="btn-solid" block >
                            Join Game
                        </Button>
                </Card><br/>
                </center>
                </Col>
                <Col>
                <center>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://nintendad.co.uk/wp-content/uploads/2019/10/SQ_NSwitch_EaSportsFifa20NintendoSwitchLegacyEdition_image500w.jpg" />}
                >
                    <Meta title="FIFA 20" description="www.instagram.com" />
                    <Button className="btn-solid" block >
                            Join Game
                        </Button>
                </Card><br/>
                </center>
                </Col>
                <Col>
                <center>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://www.pngkey.com/png/full/308-3085890_fortnite-battle-royale-skins-png-fortnite.png" />}
                >
                    <Meta title="Fornite" description="www.instagram.com" />
                    <Button className="btn-solid" block >
                            Join Game
                        </Button>
                </Card><br/>
                </center>
                </Col>
                <Col>
                <center>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://www.nicepng.com/png/full/341-3414651_madden-nfl-13.png" />}
                >
                    <Meta title="Madden 13" description="www.instagram.com" />
                    <Button className="btn-solid" block >
                            Join Game
                        </Button>
                </Card><br/>
                </center>
                </Col>
                <Col>
                <center>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://www.pngkey.com/png/full/86-866653_basketball-transparent-nba-2k-sports-png.png" />}
                >
                    <Meta title="NBA 2K" description="www.instagram.com" />
                    <Button className="btn-solid" block >
                            Join Game
                        </Button>
                </Card><br/>
                </center>
                </Col>
            </Row>
            </div>
        </div>
     );
}
 
export default ChooseTournament;