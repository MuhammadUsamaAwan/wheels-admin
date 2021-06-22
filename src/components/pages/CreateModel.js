import { Form, Input, Typography, Button } from "antd"
import { createManufacturerModel } from "../../services/service";
import { useSelector } from "react-redux";

const CreateModel = () => {
    const token = useSelector(state => state.auth.token)
    const createModel = (values) => console.log(values, token);
    return (
        <Form onFinish={createModel}>
            <Typography.Title level={3}>Create New Model</Typography.Title>
            <Form.Item name="title" rules={[{ required: true, message: "Please enter model's title!" }]}>
                <Input placeholder="Model's title"/>
            </Form.Item>
            <Form.Item name="description" rules={[{ required: true, message: "Please enter Model's description!" }]}>
                <Input placeholder="Model's description"/>
            </Form.Item>
            <Form.Item name="manufacturerId" rules={[{ required: true, message: "Please enter Model's id!" }]}>
                <Input placeholder="Model's id"/>
            </Form.Item>
            <Form.Item name="startYear">
                <Input placeholder="Model's start year" type="number" />
            </Form.Item>
            <Form.Item name="endyear">
                <Input placeholder="Model's end year" type="number" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
        </Form>
    )
}

export default CreateModel
