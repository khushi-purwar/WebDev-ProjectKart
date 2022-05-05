import React from 'react';
import { Row, Col } from 'antd';
import { Card, Avatar } from 'antd';

const { Meta } = Card;

export const Client = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center', color: '#002766' }}>What Client Say</h1>
            <p style={{ textAlign: 'center', color: '#002766' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis incidunt debitis officia<br></br> pariatur odio? Doloremque dicta repudiandae corporis facilis ullam.</p>
            <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Col>
                    <Card
                        style={{ width: 320 ,padding:20,boxShadow:'2px 2px 2px 2px grey'}}
                        cover={
                            <p style={{ textAlign: 'center',color: '#002766' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nihil magnam voluptate officia, possimus earum ullam officiis repudiandae iste assumenda!</p>

                        }>
                        <div style={{ textAlign: 'center' }}>
                            {<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            <br /><br />
                            <Meta
                                title={<h4 style={{color: '#002766'}}>John Doe</h4>}
                                description={<h5 style={{color: '#002766'}}>Marketing</h5>}

                            />
                        </div>
                    </Card>
                </Col>
                <Col style={{margin:30}} >
                    <Card
                        style={{  width: 320 ,padding:20 ,boxShadow:'2px 2px 2px 2px grey'}}
                        cover={
                            <p style={{ textAlign: 'center',color: '#002766' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nihil magnam voluptate officia, possimus earum ullam officiis repudiandae iste assumenda!</p>

                        }>
                        <div style={{ textAlign: 'center' }}>
                            {<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            <br /><br />
                            <Meta 
                                title={<h4 style={{color: '#002766'}}>Jeniffer Doe</h4>}
                                description={<h5 style={{color: '#002766'}}>Designer</h5>}

                            />
                        </div>
                    </Card>
                </Col>
                <Col >
                    <Card
                        style={{  width: 320 ,padding:20 ,boxShadow:'2px 2px 2px 2px grey'}}
                        cover={
                            <p style={{ textAlign: 'center',color: '#002766' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nihil magnam voluptate officia, possimus earum ullam officiis repudiandae iste assumenda!</p>

                        }>
                        <div style={{ textAlign: 'center' }}>
                            {<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            <br /><br />
                            <Meta
                                title={<h4 style={{color: '#002766'}}>Claudia Jane</h4>}
                                description={<h5 style={{color: '#002766'}}>Consultant</h5>}

                            />
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
