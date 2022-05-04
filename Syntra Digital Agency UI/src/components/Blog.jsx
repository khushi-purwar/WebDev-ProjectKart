import React from 'react';
import { Row, Col,Button } from 'antd';
import { Card } from 'antd';
import img3 from './img3.png';
import img4 from './img4.png';
import img5 from './img5.png';

const { Meta } = Card;

export const Blog = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center', color: '#002766' }}>Latest Blog</h1>
            <p style={{ textAlign: 'center', color: '#002766' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis incidunt debitis officia<br></br> pariatur odio? Doloremque dicta repudiandae corporis facilis ullam.</p>

            <Row style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                <Col>
                    <Card
                        style={{ width: 340, padding: 20,marginTop:30 }}
                        cover={
                            <img
                                alt="example"
                                src={img3}
                            />

                        }>
                        <div >
                            
                            <br />
                            <Meta
                                title={<h3 style={{color: '#002766'}}>Why Digital Marketing is <br></br>Important?</h3>}
                                description={<p style={{color: '#002766'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, enim possimus! Accusantium quia dicta consequuntur qui, minus totam beatae commodi?</p>}

                            />
                            <Button style={{backgroundColor:'#fa8c16',color:'white'}} shape="round" >Read More</Button>
                        </div>
                    </Card>
                </Col>
                <Col>
                    <Card
                        style={{ width: 340, padding: 20 ,marginTop:30}}
                        cover={
                            <img
                                alt="example"
                                src={img4}
                            />

                        }>
                        <div >
                            
                            <br />
                            <Meta
                                title={<h3 style={{color: '#002766'}}>What is SEO and How it <br></br>Works?</h3>}
                                description={<p style={{color: '#002766'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, enim possimus! Accusantium quia dicta consequuntur qui, minus totam beatae commodi?</p>}

                            />
                            <Button style={{backgroundColor:'#fa8c16',color:'white'}} shape="round" >Read More</Button>
                        </div>
                    </Card>
                </Col>
                <Col>
                    <Card
                        style={{ width: 340, padding: 20 ,marginTop:30}}
                        cover={
                            <img
                                alt="example"
                                src={img5}
                            />

                        }>
                        <div >
                            
                            <br />
                            <Meta
                                title={<h3 style={{color: '#002766'}}>Top Ten Tools for Social<br></br>Media Management</h3>}
                                description={<p style={{color: '#002766'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, enim possimus! Accusantium quia dicta consequuntur qui, minus totam beatae commodi?</p>}

                            />
                            <Button style={{backgroundColor:'#fa8c16',color:'white'}} shape="round" >Read More</Button>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
