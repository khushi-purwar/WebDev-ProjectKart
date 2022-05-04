import React from 'react';
import logo from './logo.PNG';
import { PageHeader, Button } from 'antd';
import { Image } from 'antd';

export const Heading = () => {
    return (
        
            <PageHeader style={{backgroundColor:"#0067DE"}}
                ghost={false}

                title={<Image
                    width={100}
                    src={logo}
                  />}
                extra={[
                    <Button key="5" type="text" style={{color:"white"}}>Home</Button>,
                    <Button  key="4"type="text" style={{color:"#fa8c16"}}>Pages</Button>,
                    <Button  key="3"type="text" style={{color:"white"}}>Services</Button>,
                    <Button key="2" type="text" style={{color:"white"}}>Blog</Button>,
                    <Button  key="1"type="text" style={{color:"white"}}>Contact</Button>,
                ]}
            ></PageHeader>
        
    )
}
