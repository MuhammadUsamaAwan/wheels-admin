import { useEffect } from "react";
import { Form, Input, Typography, Button, Select } from "antd"
import { createManufacturerModel } from "../../services/service";
import { useDispatch, useSelector } from "react-redux";
import { getAllManufacturers } from "../../redux/actions/manufacturer";
import LoadingIcon from "../UI/LoadingIcon";

const CreateModel = () => {
    const dispatch = useDispatch()
    const token = useSelector(state => state.auth.token)
    const manufacturers = useSelector((state) => state.manufacturers);
    useEffect(() => {
        dispatch(getAllManufacturers(token));
    }, [dispatch, token])
    if (manufacturers.isLoading)
    return (
        <LoadingIcon />
    )
    const createModel = (values) =>
    createManufacturerModel(token, values.title, values.description, values.manufacturerId, values.startYear, values.endyear);
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
                <Select placeholder="Select Make">
                    {manufacturers.result.map(manufacturer => 
                        <Select.Option value={manufacturer._id}>{manufacturer.title}</Select.Option>
                    )}
                </Select>
            </Form.Item>
            <Form.Item name="startYear"  rules={[{ required: true, message: "Please enter Model's start year!" }]}>
                <Input placeholder="Model's start year" type="number" />
            </Form.Item>
            <Form.Item name="endyear"  rules={[{ required: true, message: "Please enter Model's end year!" }]}>
                <Input placeholder="Model's end year" type="number" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
        </Form>
    )
}

export default CreateModel
