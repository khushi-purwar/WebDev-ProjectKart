import React from 'react';
import { Row, Col,Card } from 'antd';
import img2 from './img2.png';
import wave1 from './wave1.png';
import { Image } from 'antd';
import { Avatar } from 'antd';
import { CheckCircleOutlined ,FieldTimeOutlined,EditOutlined,TeamOutlined   } from '@ant-design/icons';

export const ChooseUs = () => {
    return (
        <div>
           <img
           src={wave1} alt="" style={{display:'block'}} />
            <div style={{ backgroundColor: '#2B40B5',padding:50}}>

                <h1 style={{ textAlign: 'center', color: '#fa8c16' }}>Why Choose Us</h1>
                <p style={{ textAlign: 'center', color: 'white' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis incidunt debitis officia<br></br> pariatur odio? Doloremque dicta repudiandae corporis facilis ullam.</p>
                <br /><br />
                <Row >
                    
                    <Col  md={8} lg={8} >
                        <div>
                        <div style={{ display: 'inline-flex' }}>
                            <div>
                            <Avatar style={{backgroundColor:'white',color:'blue'}}
                                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                                icon={<CheckCircleOutlined />}
                            />
                            </div>
                            
                            <div style={{marginLeft:10}}>

                                <h2 style={{ color: '#fa8c16' }}>High Quality Services</h2>
                                <p style={{ color: 'white' }}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia exercitationem neque eos aspernatur molestiae fugit, doloribus eum beatae porro nisi vel dignissimos perferendis quo. Natus ex officiis labore dicta asperiores?</p>
                            </div>
                        </div>
                        
                        <div style={{ display: 'inline-flex', justifyContent: 'space-between' }}>
                            <div>
                            <Avatar style={{backgroundColor:'white',color:'blue'}}
                                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                                icon={<FieldTimeOutlined />}
                            />
                            </div>
                            
                            <div style={{marginLeft:10}}>

                                <h2 style={{ color: '#fa8c16' }}>Project On Time</h2>
                                <p style={{ color: 'white' }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias corrupti aliquam porro, atque, molestiae soluta et repellendus officia laborum ratione eos? Eaque natus qui unde maiores omnis quae debitis atque!</p>
                            </div>
                        </div>
                        </div>
                    </Col>

                    <Col  md={8} lg={8}>
                        <div>
                        <Image
                        
                        src={img2}
                    /></div></Col>
                    <Col md={8} lg={8}  >
                        <div style={{ display: 'inline-flex',justifyContent:'' }}>
                            <div >
                            <Avatar style={{backgroundColor:'white',color:'blue'}}
                                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                                icon={<EditOutlined />}
                            />
                            </div>
                        
                            <div style={{marginLeft:10}}>

                                <h2 style={{ color: '#fa8c16' }}>Innovative Solutions</h2>
                                <p style={{ color: 'white' }}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, eius optio architecto maxime temporibus ea recusandae quisquam nisi nostrum provident iure alias voluptatibus laudantium aliquam voluptate neque. Repellendus, architecto voluptatum.</p>
                            </div>
                        </div>
                        
                        <div style={{ display: 'inline-flex' }}>
                            <div><Avatar style={{backgroundColor:'white',color:'blue'}}
                                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                                icon={<TeamOutlined />}
                            /></div>
                            
                            <div style={{marginLeft:10}}>

                                <h2 style={{ color: '#fa8c16' }}>Dedicated Support</h2>
                                <p style={{ color: 'white' }}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa a quasi vero amet ducimus, voluptate quos rerum necessitatibus quidem sed voluptates dolor labore repellat hic vel id consectetur repudiandae. Minus.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="wave2">
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        </div>
    )
}
