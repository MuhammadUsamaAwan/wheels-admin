import { Form, Input, Typography, Button } from "antd"
import {createManufacturer} from "../../services/service";
import { useSelector } from "react-redux";

const CreateMake = () => {
    const token = useSelector(state => state.auth.token)
    const createMake = (values) => createManufacturer(token, values.title, values.description);
    return (
        <Form onFinish={createMake}>
            <Typography.Title level={3}>Create New Make</Typography.Title>
            <Form.Item name="title" rules={[{ required: true, message: "Please enter make's title!" }]}>
                <Input placeholder="Make's title"/>
            </Form.Item>
            <Form.Item name="description" rules={[{ required: true, message: "Please enter make's description!" }]}>
                <Input placeholder="Make's description"/>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
        </Form>
    )
}

export default CreateMake
