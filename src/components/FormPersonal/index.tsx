import { Input, DatePicker, Divider, Space, Button } from 'antd';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

interface Personal {
    fullname: string;
    email: string;
    birthdate: string;
}

const initPersonal = {
    fullname: '',
    email: '',
    birthdate: ''
}

const validationPersonal = yup.object({
    fullname: yup.string().required('Please input your Full Name!'),
    email: yup.string().required('Please input your Email!'),
    birthdate: yup.string().required('Please input your Date of Birth!')
})


const FormPersonal = () => {
    const submitPersonal = (values: Personal) => {
        console.log(values)
    }

    const formMik = useFormik({
        initialValues: initPersonal,
        onSubmit: submitPersonal,
        validationSchema: validationPersonal
    })

    const [step, setStep] = useState<number>(0);

    const handleNext = () => {
        if (step === 0 || 1) {
            setStep((prevStep) => prevStep + 1);
        }

        return
    }

    return (
        <>
            <form onSubmit={formMik.handleSubmit}>
                <div>
                    <p>Full Name : </p>
                    <Input name={'fullname'}
                        value={formMik.values.fullname}
                        onChange={formMik.handleChange('fullname')}
                        status={formMik.errors.fullname && 'error'}
                    />
                    {formMik.errors.fullname && (
                        <p>{formMik.errors.fullname}</p>
                    )}
                </div>
                <div>
                    <p>Email Address : </p>
                    <Input name={'email'}
                        value={formMik.values.email}
                        onChange={formMik.handleChange('email')}
                        status={formMik.errors.email && 'error'}
                    />
                    {formMik.errors.email && (
                        <p>{formMik.errors.email}</p>
                    )}
                </div>
                <div>
                    <p>Date of Birth : </p>
                    <DatePicker name={'birthdate'}
                        onBlur={formMik.handleChange('birthdate')}
                        status={formMik.errors.birthdate && 'error'}
                    />
                    {formMik.errors.birthdate && (
                        <p>{formMik.errors.birthdate}</p>
                    )}
                </div>
                <Divider />
                <div className={'button'}>
                    <Button type={'primary'} htmlType={"submit"}>Save</Button>
                </div>
            </form>

        </>
    )
}

export default FormPersonal