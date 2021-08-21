import { Typography, Form, Input, Button } from "antd";
import { useSelector } from "react-redux";
import { createPackage } from "../../services/service";

const CreatePackage = () => {
  const token = useSelector(state => state.auth.token);
  const onFinish = values => createPackage(token, values);
  return (
    <>
      <Typography.Title level={2}>Create Package</Typography.Title>
      <Form
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 22 }}
        onFinish={onFinish}
      >
        <Form.Item name="title" label="Title">
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input />
        </Form.Item>
        <Form.Item name="price" label="Price">
          <Input addonAfter="PKR" />
        </Form.Item>
        <Form.Item name="validity" label="Validity">
          <Input />
        </Form.Item>
        <Form.Item name="adverts" label="Adverts">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CreatePackage;
