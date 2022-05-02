
import React from 'react';
import { Row, Col } from 'antd';
import {SDAright} from './SDAright';
import {SDAleft} from './SDAleft';

export const SDA = () => {
    return (
        <Row style={{margin:10}}  >
        <Col  md={12} lg={12}><SDAleft/></Col>
        <Col md={12} lg={12}><SDAright/></Col>
      </Row>
    );
}
