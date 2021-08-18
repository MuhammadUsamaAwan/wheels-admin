import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleAdvertisement } from "../../redux/actions/advertisement";
import { getAllManufacturers } from "../../redux/actions/manufacturer";
import LoadingIcon from "../UI/LoadingIcon";
import { useParams } from "react-router-dom";
import {
  Typography,
  Carousel,
  Row,
  Col,
  Button,
  Form,
  Input,
  Cascader,
  Checkbox,
} from "antd";
import { editAdvertisement } from "../../services/service";

const EditAdvertisement = () => {
  const dispatch = useDispatch();
  const advertisement = useSelector(state => state.advertisement);
  const manufacturer = useSelector(state => state.manufacturers);
  let options = [];
  const token = useSelector(state => state.auth.token);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getSingleAdvertisement(token, id));
    dispatch(getAllManufacturers(token));
  }, [dispatch, token, id]);
  if (advertisement.isLoading || manufacturer.isLoading) return <LoadingIcon />;
  if (!manufacturer.isLoading) {
    options = manufacturer.result.map(make => ({
      value: make.title,
      label: make.title,
      children: make.model.map(model => ({
        value: model._id,
        label: model.title,
      })),
    }));
  }
  const otherFeatures = [
    "ABS",
    "Air Bags",
    "Air Conditioning",
    "Alloy Rims",
    "AM/FM Radio",
    "CD Player",
    "Cassette Player",
    "Cool Box",
    "Cruise Control",
    "Climate Control",
    "DVD Player",
    "Front Speakers",
    "Front Camera",
    "Heated Seats",
    "Immobilizer Key",
    "Keyless Entry",
    "Navigation System",
    "Power Locks",
    "Power Mirrors",
    "Power Steering",
    "Power Windows",
    "Rear Seat Entertainment",
    "Rear AC Vents",
    "Rear Speakers",
    "Rear Camera",
    "Sun Roof",
    "Steering Switches",
    "USB and Auxillary Cable",
  ];
  const editAdvertisement = values => {
    editAdvertisement(token, values);
  };
  return (
    <section>
      <Typography.Title level={2}>
        {advertisement.result.title}
      </Typography.Title>
      <Carousel>
        {advertisement.result.images.map(image => (
          <div className="img--box">
            <img src={image} alt="Ad pic" key={image} />
          </div>
        ))}
      </Carousel>
      <div>
        <Typography.Title level={3} style={{ marginTop: "20px" }}>
          Edit Details
        </Typography.Title>
        <Form
          labelCol={{ span: 2 }}
          wrapperCol={{ span: 22 }}
          onFinish={editAdvertisement}
        >
          <Form.Item label="Car Info" name="modelId">
            <Cascader options={options} />
          </Form.Item>
          <Form.Item name="title" label="Title">
            <Input defaultValue={advertisement.result.title} />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea defaultValue={advertisement.result.description} />
          </Form.Item>
          <Form.Item name="price" label="Price">
            <Input defaultValue={advertisement.result.price} />
          </Form.Item>
          <Form.Item name="contact" label="Contact">
            <Input defaultValue={advertisement.result.contact} />
          </Form.Item>
          <Form.Item name="modelYear" label="Model Year">
            <Input defaultValue={advertisement.result.modelYear} />
          </Form.Item>
          <Form.Item name="registrationCity" label="Registration City">
            <Input defaultValue={advertisement.result.registrationCity} />
          </Form.Item>
          <Form.Item label="Features" name="other">
            <Checkbox.Group options={otherFeatures} />
          </Form.Item>
          <Form.Item name="engineType" label="Engine Type">
            <Input defaultValue={advertisement.result.engineType} />
          </Form.Item>
          <Form.Item name="local" label="Local">
            <Input defaultValue={advertisement.result.local} />
          </Form.Item>
          <Form.Item name="city" label="City">
            <Input defaultValue={advertisement.result.city} />
          </Form.Item>
          <Form.Item name="state" label="State">
            <Input defaultValue={advertisement.result.state} />
          </Form.Item>
          <Form.Item name="color" label="Color">
            <Input defaultValue={advertisement.result.color} />
          </Form.Item>
          <Form.Item name="milage" label="Milage">
            <Input defaultValue={advertisement.result.milage} />
          </Form.Item>
          <Form.Item name="brandNew" label="Brand New">
            <Input defaultValue={advertisement.result.brandNew} />
          </Form.Item>
          <Form.Item name="vehicleType" label="Vehicle Type">
            <Input defaultValue={advertisement.result.vehicleType} />
          </Form.Item>
          <Form.Item name="featured" label="Featured">
            <Input defaultValue={advertisement.result.featured} />
          </Form.Item>
          <Form.Item name="power" label="Power">
            <Input defaultValue={advertisement.result.power} />
          </Form.Item>
          <Form.Item name="transmission" label="Transmission">
            <Input defaultValue={advertisement.result.transmission} />
          </Form.Item>
          <Form.Item name="bodyType" label="BodyType">
            <Input defaultValue={advertisement.result.bodyType} />
          </Form.Item>
          <Form.Item name="bodyType" label="BodyType">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default EditAdvertisement;
