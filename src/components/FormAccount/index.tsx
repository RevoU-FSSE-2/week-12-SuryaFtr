import { Input, Button, Divider, Space } from 'antd';
import { useFormik } from 'formik';
import * as yup from 'yup';

interface Account {
    username: string;
    password: string;
}

const initAccount = {
    username: '',
    password: ''
}

const validationAccount = yup.object({
    username: yup.string()
        .min(5, 'Username is too short, must have at least 5 characters!')
        .required('Please input your Username!'),
    password: yup.string()
        .min(8, 'Password is too short, must have at least 8 characters!')
        .required('Please input your Password!')
        .matches(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/, 'Must have at least 1 numbers or letter')
})

const FormAccount = () => {
    const submitAccount = (values: Account) => {
        console.log(values)
    }

    const formMik = useFormik({
        initialValues: initAccount,
        onSubmit: submitAccount,
        validationSchema: validationAccount
    })

    return (
        <form onSubmit={formMik.handleSubmit}>
            <div>
                <p>Username : </p>
                <Input name={'username'}
                    value={formMik.values.username}
                    onChange={formMik.handleChange('username')}
                    status={formMik.errors.username && 'error'}
                />
                {formMik.errors.username && (
                    <p className={'error-message'}>{formMik.errors.username}</p>
                )}
            </div>
            <div>
                <p>Password : </p>
                <Input.Password name={'password'}
                    value={formMik.values.password}
                    onChange={formMik.handleChange('password')}
                    status={formMik.errors.password && 'error'}
                />
                {formMik.errors.password && (
                    <p className={'error-message'}>{formMik.errors.password}</p>
                )}
            </div>
            <Divider />
            <div className={'button'}>
                <Button type={'primary'} htmlType={"submit"}>Save</Button>
            </div>
        </form>
    )
}

export default FormAccount