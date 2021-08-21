import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Typography, Form, Input, Button } from "antd";
import UploadPics from "../UI/UploadPics";
import { editManufacturer, editModel } from "../../services/service";

const EditManufacturer = () => {
  const { id } = useParams();
  const manufacturers = useSelector(state => state.manufacturers);
  const token = useSelector(state => state.auth.token);
  const img = useSelector(state => state.img);
  const manufacturer = manufacturers.result.filter(
    manufacturer => manufacturer._id === id
  )[0];
  const updateModel = values => {
    console.log(values);
    // editModel(token, values);
  };
  const updateManufacturer = values => {
    console.log(values);
    values = { ...values, logo: img };
    // editManufacturer(token, values)
  };
  return (
    <>
      <Typography.Title level={2}>Edit Manufacturer</Typography.Title>
      <Form labelCol={{ span: 3 }} wrapperCol={{ span: 21 }}>
        <Form.Item name="title" label="Title" onFinish={updateManufacturer}>
          <Input defaultValue={manufacturer.title} />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input defaultValue={manufacturer.description} />
        </Form.Item>
        <Form.Item name="logo" label="Logo">
          {manufacturer.logo ? (
            <img src={manufacturer.logo} />
          ) : (
            <div>No Image available</div>
          )}
        </Form.Item>
        <Form.Item name="logo" label="Upload new logo">
          <UploadPics />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 3, span: 21 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Typography.Title level={2}>Edit Manufacturer Models</Typography.Title>
      {manufacturer.model.map(model => (
        <Form
          labelCol={{ span: 3 }}
          wrapperCol={{ span: 21 }}
          key={model._id}
          onFinish={updateModel}
        >
          <Form.Item name="title" label="Title">
            <Input defaultValue={model.title} />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input defaultValue={model.description} />
          </Form.Item>
          <Form.Item name="startYear" label="Start Year">
            <Input defaultValue={model.startYear} />
          </Form.Item>
          <Form.Item name="endYear" label="End Year">
            <Input defaultValue={model.endYear} />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 3, span: 21 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      ))}
    </>
  );
};

export default EditManufacturer;
