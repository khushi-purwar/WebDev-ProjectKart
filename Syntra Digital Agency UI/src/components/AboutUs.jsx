import React from 'react';
import { Image } from 'antd';
import wave from './wave.png';

export const AboutUs = () => {
    return (
        <div>
            <div style={{ backgroundColor: '#0067DE' }}>
                <br /><br /><br /> <br /><br />
                <h1 style={{ color: "#fa8c16", textAlign: 'center' }}>About Us</h1>
                <p style={{ color: "white", textAlign: 'center' }} >Home {">"} About Us</p>
                <br />
            </div>
            <Image
     src={wave}
    />
        </div>
    )
}
