import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Typography, Form, Input, Button } from "antd";
import { editUser } from "../../services/service";

const EditUser = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const token = useSelector(state => state.auth.token);
  const user = users.result.filter(user => user._id === id)[0];
  const onFinish = values => {
    editUser(token, values);
  };
  return (
    <>
      <Typography.Title level={2}>Edit User Details</Typography.Title>
      <Form
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 22 }}
        onFinish={onFinish}
      >
        <Form.Item name="name" label="Name">
          <Input defaultValue={user.name} />
        </Form.Item>
        <Form.Item name="password" label="Password">
          <Input />
        </Form.Item>
        <Form.Item name="mobile" label="Contact">
          <Input />
        </Form.Item>
        <Form.Item name="gender" label="Gender">
          <Input />
        </Form.Item>
        <Form.Item name="country" label="Country">
          <Input />
        </Form.Item>
        <Form.Item name="city" label="City">
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

export default EditUser;
