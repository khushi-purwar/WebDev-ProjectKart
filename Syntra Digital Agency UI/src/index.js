import React from 'react';
import { render } from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Heading } from './components/Heading';
import { AboutUs } from './components/AboutUs';
import { SDA } from './components/SDA';
import { ChooseUs } from './components/ChooseUs';
import { Client } from './components/Client';
import { Analytics } from './components/Analytics';
import { Blog } from './components/Blog';
import { Footer } from './components/Footer';

const App = () => {

  return (
    <div>

      <Heading />
      <AboutUs />
      <SDA />
      <ChooseUs />
      <Client />
      <Analytics />
      <Blog />
      <Footer />
    </div>

  );
};

render(<App />, document.getElementById('root'));
