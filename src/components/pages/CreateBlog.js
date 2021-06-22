import { createBlog } from "../../services/service";
import { Form, Input, Button, Typography } from "antd";
import UploadPics from "../UI/UploadPics";

const CreateBlog = () => {
    const layout = {
        labelCol: { span: 2 },
        wrapperCol: { span: 22 },
      };
    return (
        <Form {...layout}>
            <Typography.Title level={2}>Create a Blog</Typography.Title>
            <Form.Item
                label="Title"
                name="title"
                rules={[{ required: true, message: "Please input blog's title!" }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Description"
                name="description"
                rules={[{ required: true, message: "Please input blog's description!" }]}
            >
                <Input.TextArea rows={3} />
            </Form.Item>
            <Form.Item
                label="Header"
                name="header"
                rules={[{ required: true, message: "Please input blog's header!" }]}
            >
                <Input.TextArea rows={3} />
            </Form.Item>
            <Form.Item
                label="Footer"
                name="footer"
                rules={[{ required: true, message: "Please input blog's footer!" }]}
            >
                <Input.TextArea rows={3} />
            </Form.Item>
            <Form.Item
                label="Paragraph"
                name="paragraph"
                rules={[{ required: true, message: "Please input blog's paragraph!" }]}
            >
                <Input.TextArea rows={3} />
            </Form.Item>
            <Typography.Title level={3}>Cover Image</Typography.Title>
            <UploadPics />
            <Form.Item>
                <Button type="primary" htmlType="submit" style={{marginTop: "20px"}}>Submit</Button>
            </Form.Item>
        </Form>
    )
}

export default CreateBlog
