import { Input, Button, Divider, Space } from 'antd';
import { useFormik } from 'formik';
import * as yup from 'yup';

interface Address {
    street: string;
    city: string;
    state: string;
    zipcode: string;
}

const initAddress = {
    street: '',
    city: '',
    state: '',
    zipcode: ''
}

const validationAddress = yup.object({
    street: yup.string().required('Please input your Street Address!'),
    city: yup.string().required('Please input your City Name!'),
    state: yup.string().required('Please input your State Name!'),
    zipcode: yup.string()
        .min(5, 'Invalid zip code format!')
        .max(5, 'Invalid zip code format!')
        .required('Please input your Zip Code!')
        .matches(/^[0-9\b]+$/, 'Must using number!')
})

const FormAddress = () => {

    const submitAddress = (values: Address) => {
        console.log(values)
    }

    const formMik = useFormik({
        initialValues: initAddress,
        onSubmit: submitAddress,
        validationSchema: validationAddress
    })

    return (
        <form onSubmit={formMik.handleSubmit}>
            <div>
                <p>Street Address : </p>
                <Input name={'street'}
                    value={formMik.values.street}
                    onChange={formMik.handleChange('street')}
                    status={formMik.errors.street && 'error'}
                />
                {formMik.errors.street && (
                    <p className={'error-message'}>{formMik.errors.street}</p>
                )}
            </div>
            <div>
                <p>City : </p>
                <Input name={'city'}
                    value={formMik.values.city}
                    onChange={formMik.handleChange('city')}
                    status={formMik.errors.city && 'error'}
                />
                {formMik.errors.city && (
                    <p className={'error-message'}>{formMik.errors.city}</p>
                )}
            </div>
            <div>
                <p>State : </p>
                <Input name={'state'}
                    value={formMik.values.state}
                    onChange={formMik.handleChange('state')}
                    status={formMik.errors.state && 'error'}
                />
                {formMik.errors.state && (
                    <p className={'error-message'}>{formMik.errors.state}</p>
                )}
            </div>
            <div>
                <p>Zip Code : </p>
                <Input name={'zipcode'}
                    value={formMik.values.zipcode}
                    onChange={formMik.handleChange('zipcode')}
                    status={formMik.errors.zipcode && 'error'}
                />
                {formMik.errors.zipcode && (
                    <p className={'error-message'}>{formMik.errors.zipcode}</p>
                )}
            </div>
            <Divider />
            <div className={'button'}>
                <Button type={'primary'} htmlType={"submit"}>Save</Button>
            </div>
        </form>
    )
}

export default FormAddress