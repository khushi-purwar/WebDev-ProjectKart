import React from 'react';
import { Row, Col ,Button,Input, Divider} from 'antd';
import logos from './logo.PNG';
import wave1 from './wave1.png';
import {FacebookFilled,TwitterCircleFilled,YoutubeFilled,InstagramFilled,PhoneFilled,MailFilled,EnvironmentFilled } from '@ant-design/icons';


export const Footer = () => {

    return (
        <div>
            <img
           src={wave1} alt="" style={{display:'block'}} />
            <div style={{backgroundColor:'#2B40B5'}}>
                <Row style={{marginLeft:30,marginRight:30,padding:20}}>
                    <Col md={6} lg={6}>
                    <img src={logos} alt="" />
                    <p style={{color:'white'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br />
                     Quia, quis.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Quaerat, necessitatibus.
                        orem ipsum dolor sit amet consectetur<br /> adipisicing elit. Ducimus, aut!
                    </p>
                    <div>
                    <Button style={{backgroundColor:'orange',color:'white'}} shape="circle" icon={<TwitterCircleFilled />}  />&nbsp;&nbsp;
                    <Button style={{backgroundColor:'orange',color:'white'}} shape="circle" icon={<FacebookFilled />}  />&nbsp;&nbsp;
                    <Button style={{backgroundColor:'orange',color:'white'}} shape="circle" icon={<YoutubeFilled />}  />&nbsp;&nbsp;
                    <Button style={{backgroundColor:'orange',color:'white'}} shape="circle" icon={<InstagramFilled />}  />&nbsp;&nbsp;
                    
                    </div>
                    </Col>
                    <Col md={6} lg={6}>
                    <h2 style={{color:'orange'}}>Information</h2>
                    
                        <p style={{color:'white'}}>About Us</p>
                        <p style={{color:'white'}}>Services</p>
                        <p style={{color:'white'}}>Our Team</p>
                        <p style={{color:'white'}}>Our Price</p>
                        <p style={{color:'white'}}>Contact</p>
                    
                    </Col>
                        
                    <Col md={6} lg={6}>
                    <h2 style={{color:'orange'}}>Contact Us</h2>
                    
                        <p style={{color:'orange'}}>{<EnvironmentFilled />}<p style={{color:'white',display:'inline-flex',marginLeft:10}} >280 Jefferson Street Port,Charlotte,<br />FL 33952</p></p>
                        <p style={{color:'orange'}}>{<PhoneFilled />}<p style={{color:'white',display:'inline-flex',marginLeft:10}} >+012 3456 564</p></p>
                        <p style={{color:'orange'}}>{<MailFilled />}<p style={{color:'white',display:'inline-flex',marginLeft:10}} >Syntra@support.com</p></p>
                    
                    </Col>
                    <Col md={6} lg={6}>
                    <h2 style={{color:'orange'}}>Newsletter</h2>
                    <p style={{color:'white'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br />
                     Quia, quis.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Quaerat, necessitatibus.
                        orem ipsum dolor sit amet consectetur<br /> adipisicing elit. Ducimus, aut!
                    </p><br/>
                    <Input size='large' addonAfter={<p style={{color:'orange'}}><MailFilled /></p>} placeholder="Your Email Address" />
                    
                    </Col>
                </Row>
                <div style={{backgroundColor:'#2B40B5',paddingRight:50,paddingLeft:50}}>
                <Divider style={{backgroundColor:'white'}}></Divider>
                <Row style={{display:'flex',justifyContent:'space-between',color:'white'}}>
                    <Col>
                        Copyright &copy; 2020 SANTRA.All rights reserved.
                    </Col>
                    <Col>
                        <div>
                            Terms of Service &nbsp; Privacy Policy &nbsp; Legal
                        </div>
                        
                    </Col>
                    
                </Row>
                </div>
                <br /><br />
            </div>
            
        </div>
    )
}
