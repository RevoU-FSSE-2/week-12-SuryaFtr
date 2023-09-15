import React from 'react';
import { Layout, Steps, Button, Divider, Space } from 'antd';
import { useState } from 'react';
import { useFormik } from 'formik';
import {
    Card,
    FormPersonal,
    FormAddress,
    FormAccount
} from '../../components';

const { Sider, Content } = Layout;

const siderStyle: React.CSSProperties = {
    lineHeight: '120px',
    color: '#000',
    backgroundColor: '#fff',
};

const contentStyle: React.CSSProperties = {
    minHeight: 120,
    lineHeight: '120px',
    color: '#000',
    backgroundColor: '#fff',
};

const Main: React.FC = () => {

    const [step, setStep] = useState<number>(0);

    const handleNext = () => {
        if (step === 0 || 1) {
            setStep((prevStep) => prevStep + 1);
        }

        return
    }

    const handlePrev = () => {
        if (step === 1 || 2) {
            setStep((prevStep) => prevStep - 1);
        }

        return
    }

    const description = 'Enter Your Information.';
    return (
        <Layout hasSider>
            <Sider style={siderStyle}>
                <Divider>
                    Your Progress
                </Divider>
                <Steps
                    direction="vertical"
                    current={step}
                    items={[
                        {
                            title: 'Personal',
                            description,
                        },
                        {
                            title: 'Address',
                            description,
                        },
                        {
                            title: 'Account',
                            description,
                        },
                    ]}
                />
            </Sider>
            <Content style={contentStyle}>
                {step === 0 && (
                    <Card title={'Personal Information'}>
                        <FormPersonal />
                        <div className={'button'}>
                            <Button onClick={handleNext}>Next</Button>
                        </div>
                    </Card>
                )}
                {step === 1 && (
                    <Card title={'Address Information'}>
                        <FormAddress />
                        <div className={'button'}>
                            <Space>
                                <Button onClick={handlePrev}>Previous</Button>
                                <Button onClick={handleNext}>Next</Button>
                            </Space>
                        </div>
                    </Card>
                )}
                {step === 2 && (
                    <Card title={'Account Information'}>
                        <FormAccount />
                        <div className={'button'}>
                            <Space>
                                <Button onClick={handlePrev}>Previous</Button>
                            </Space>
                        </div>
                    </Card>
                )}
            </Content>
        </Layout>
    )
}


export default Main 