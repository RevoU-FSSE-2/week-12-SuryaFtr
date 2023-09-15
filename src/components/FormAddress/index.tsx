import { Input, Button, Divider, Space } from 'antd';
//import { handleNext, handlePrev } from '../../containers/Main'
//import { useFormik } from 'formik';
//import * as yup from 'yup';

const FormAddress = () => {
    return (
        <>
            <div>
                <p>Street Address : </p>
                <Input name={'street'}
                // value={formMik.values.name} 
                // onChange={formMik.handleChange('name')}
                // status={formMik.errors.name && 'error'}
                />
                {/* {formMik.errors.name && (
                    <Text>{formMik.errors.name}</Text>
                )} */}
            </div>
            <div>
                <p>City : </p>
                <Input name={'city'}
                // value={formMik.values.price}
                // onChange={formMik.handleChange('price')}
                // status={formMik.errors.price && 'error'}
                />
                {/* {formMik.errors.price && (
                    <Text>{formMik.errors.price}</Text>
                )} */}
            </div>
            <div>
                <p>State : </p>
                <Input name={'state'}
                // value={formMik.values.price}
                // onChange={formMik.handleChange('price')}
                // status={formMik.errors.price && 'error'}
                />
                {/* {formMik.errors.price && (
                    <Text>{formMik.errors.price}</Text>
                )} */}
            </div>
            <div>
                <p>Zip Code : </p>
                <Input name={'zipcode'}
                // value={formMik.values.price}
                // onChange={formMik.handleChange('price')}
                // status={formMik.errors.price && 'error'}
                />
                {/* {formMik.errors.price && (
                    <Text>{formMik.errors.price}</Text>
                )} */}
            </div>
            {/* <Divider />
            <div className={'button'}>
                <Space>
                    <Button onClick={handlePrev}>Previous</Button>
                    <Button onClick={handleNext} type={'primary'} htmlType={"submit"}>Next</Button>
                </Space>
            </div> */}
        </>
    )
}

export default FormAddress