import { Input, DatePicker, Divider, Button } from 'antd';
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
    fullname: yup.string()
        .min(2, 'Too Short!')
        .max(100, 'Too Long!')
        .required('Please input your Full Name!'),
    email: yup.string()
        .email('Invalid email format')
        .required('Please input your Email!'),
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

    return (
        <form onSubmit={formMik.handleSubmit}>
            <div>
                <p>Full Name : </p>
                <Input name={'fullname'}
                    value={formMik.values.fullname}
                    onChange={formMik.handleChange('fullname')}
                    status={formMik.errors.fullname && 'error'}
                />
                {formMik.errors.fullname && (
                    <p className={'error-message'}>{formMik.errors.fullname}</p>
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
                    <p className={'error-message'}>{formMik.errors.email}</p>
                )}
            </div>
            <div>
                <p>Date of Birth : </p>
                <DatePicker name={'birthdate'}
                    onBlur={formMik.handleChange('birthdate')}
                    status={formMik.errors.birthdate && 'error'}
                />
                {formMik.errors.birthdate && (
                    <p className={'error-message'}>{formMik.errors.birthdate}</p>
                )}
            </div>
            <Divider />
            <div className={'button'}>
                <Button type={'primary'} htmlType={"submit"}>Save</Button>
            </div>
        </form>
    )
}

export default FormPersonal