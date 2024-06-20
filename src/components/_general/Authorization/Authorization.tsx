import { Form, Input } from 'antd'
import { useFormik } from 'formik'

export const Authorization = () => {

  const formik = useFormik({
    initialValues: {
      nickname: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values)
    },
  });

  return (
    <Form onFinish={formik.handleSubmit}>
      <Input placeholder='Введите свой никнейм'/>
      <Input type='password' placeholder='Введите свой пароль'/>
    </Form>
  )
};
