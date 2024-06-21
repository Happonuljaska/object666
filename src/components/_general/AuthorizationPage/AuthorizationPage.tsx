import { Button, Flex, Form, Input } from "antd";
import { Formik, useFormik } from "formik";

type FieldType = {
  username: string;
  password: string;
};

export const AuthorizationPage = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Flex justify="center" align="start">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form onFinish={formik.submitForm}>
          <Form.Item<FieldType>
            label="Логин"
            name="username"
            rules={[{ required: true, message: "Введите логин!" }]}
          >
            <Input onChange={(e) => formik.setFieldValue("username", e.target.value)}/>
          </Form.Item>

          <Form.Item<FieldType>
            label="Пароль"
            name="password"
            rules={[{ required: true, message: "Введите пароль!" }]}
          >
            <Input onChange={(e) => formik.setFieldValue("password", e.target.value)}/>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Зарегистрироваться
            </Button>
          </Form.Item>
        </Form>
      </Formik>
    </Flex>
  );
};
