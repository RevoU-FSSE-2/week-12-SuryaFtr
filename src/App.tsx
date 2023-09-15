import './app.css'
import React from 'react';
import { Layout, Space } from 'antd';
import { Header, Main, Footer } from './containers';

const App: React.FC = () => {
  return (
    <>
      <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
        <Layout>
          <Header />
          <Main />
          <Footer />
        </Layout>
      </Space>
    </>
  )
}

export default App
