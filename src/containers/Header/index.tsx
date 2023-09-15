import React from 'react';
import { Layout } from 'antd';
import styles from './Header.module.css';

const BaseHeader = Layout;

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#000',
    height: 100,
    paddingInline: 100,
    lineHeight: '100px',
    backgroundColor: '#fff',
};

const Header: React.FC = () => {
    return (
        <BaseHeader style={headerStyle}>
            <h1 className={styles.headerTitle}>Multi-Step Registration</h1>
        </BaseHeader>
    )
}

export default Header



