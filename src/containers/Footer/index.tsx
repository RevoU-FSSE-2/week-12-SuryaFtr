import React from 'react';
import { Layout } from 'antd';

const BaseFooter = Layout;

const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#000',
    height: 50,
    paddingInline: 50,
    lineHeight: '50px',
    backgroundColor: '#FFF',
};

const Footer: React.FC = () => {
    return (
        <BaseFooter style={footerStyle}>Copyright © 2023, Developed By Surya Faturohman.</BaseFooter>
    )
}

export default Footer