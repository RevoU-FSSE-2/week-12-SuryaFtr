import { Input, Button, Divider, Space } from 'antd';
//import { handlePrev } from '../../containers/Main'
//import { useFormik } from 'formik';
//import * as yup from 'yup';

const FormAccount = () => {
    return (
        <>
            <div>
                <p>Username : </p>
                <Input name={'username'}
                // value={formMik.values.name} 
                // onChange={formMik.handleChange('name')}
                // status={formMik.errors.name && 'error'}
                />
                {/* {formMik.errors.name && (
                    <Text>{formMik.errors.name}</Text>
                )} */}
            </div>
            <div>
                <p>Password : </p>
                <Input name={'password'}
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
                    <Button type={'primary'} htmlType={"submit"}>Save</Button>
                </Space>
            </div> */}
        </>
    )
}

export default FormAccount