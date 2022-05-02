import React from 'react';
import { Row, Col} from 'antd';
import { Avatar} from 'antd';
import wave3 from './wave3.png';
import {FileTextTwoTone,SmileTwoTone,TrophyTwoTone ,ContactsTwoTone } from '@ant-design/icons';

export const Analytics = () => {
    return (
        <div>
            <img
           src={wave3} alt="" style={{display:'block'}} />
            <div style={{ backgroundColor: '#2C5BFF' }}>
                <Row style={{display:'flex',justifyContent:'space-around',alignItems:'center'}}>
                    <Col >
                        <div style={{textAlign:'center'}} >
                        <Avatar style={{backgroundColor:'white',color:'blue'}}
                        size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                        icon={<FileTextTwoTone />} />
                        <br />
                        <h2 style={{color:"#fa8c16"}}>100%</h2>
                        <h3 style={{color:'white'}}>Projects Completed</h3>
                        </div>

                    </Col>
                    <Col >
                    <div style={{textAlign:'center'}} >
                        <Avatar style={{backgroundColor:'white',color:'blue'}}
                        size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                        icon={<SmileTwoTone />} />
                        <br />
                        <h2 style={{color:"#fa8c16"}}>100+</h2>
                        <h3 style={{color:'white'}}>Trusted Client</h3>
                        </div>
                    </Col>
                    <Col >
                    <div style={{textAlign:'center'}} >
                        <Avatar style={{backgroundColor:'white',color:'blue'}}
                        size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                        icon={<TrophyTwoTone />} />
                        <br />
                        <h2 style={{color:"#fa8c16"}}>100+</h2>
                        <h3 style={{color:'white'}}>Awards and Recognition</h3>
                        </div>
                    </Col>
                    <Col >
                    <div style={{textAlign:'center'}} >
                        <Avatar style={{backgroundColor:'white',color:'blue'}}
                        size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                        icon={<ContactsTwoTone />} />
                        <br />
                        <h2 style={{color:"#fa8c16"}}>50+</h2>
                        <h3 style={{color:'white'}}>Professional Team</h3>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="wave4">
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        </div>
    )
}
