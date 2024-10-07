import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './mock/mock.js';
import { Form, Input, Button, Checkbox,message ,Col, Row } from 'antd';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
    {/* <Row>
    <Col xs={24} sm={12} md={8} lg={6}> */}
      <App />
      {/* </Col>
      </Row> */}
    </BrowserRouter>
 
);

