import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleAdvertisement } from "../../redux/actions/advertisement";
import LoadingIcon from "../UI/LoadingIcon";
import { useParams } from "react-router-dom";
import { Typography, Carousel, Row, Col, Button, Form, Input } from "antd";
import {blockAdvertisement, unblockAdvertisement} from "../../services/service";

const Advertisement = () => {
    const dispatch = useDispatch();
    const advertisement = useSelector(state => state.advertisement);
    const token = useSelector(state => state.auth.token);
    const { id } = useParams();
    useEffect(() => {
        dispatch(getSingleAdvertisement(token, id));
    }, [dispatch, token, id])
    if(advertisement.isLoading) return <LoadingIcon />
    const unblockAd = async() => {
        await unblockAdvertisement(token, id);
        window.location.reload();
    }
    const blockAd = async(values) => {
        await blockAdvertisement(token, id, values.reason);
        window.location.reload();
    }
    return (
        <>
            <Typography.Title level={2}>{advertisement.result.title}</Typography.Title>
            <Carousel>
                { advertisement.result.images.map(image => 
                    <div className="img--box">
                        <img src={image} alt="Ad pic" key={image}/>
                    </div>
                )}
            </Carousel>
            <div>
                <Typography.Title level={3}>Details</Typography.Title>
                <Row>
                    <Col span={6}>Vehicle Type</Col>
                    <Col span={6}>{advertisement.result.vehicleType}</Col>
                </Row>
                <Row>
                    <Col span={6}>City</Col>
                    <Col span={6}>{advertisement.result.city}</Col>
                </Row>
                <Row>
                    <Col span={6}>Price</Col>
                    <Col span={6}>{advertisement.result.price}</Col>
                </Row>
                <Row>
                    <Col span={6}>Make</Col>
                    <Col span={6}>{advertisement.result.model.description}</Col>
                </Row>
                <Row>
                    <Col span={6}>Model</Col>
                    <Col span={6}>{advertisement.result.model.title}</Col>
                </Row>
                <Row>
                    <Col span={6}>Model Year</Col>
                    <Col span={6}>{advertisement.result.modelYear}</Col>
                </Row>
                <Row>
                    <Col span={6}>Mileage</Col>
                    <Col span={6}>{advertisement.result.milage}</Col>
                </Row>
                <Row>
                    <Col span={6}>Engine Type</Col>
                    <Col span={6}>{advertisement.result.engineType}</Col>
                </Row>
                <Row>
                    <Col span={6}>transmission</Col>
                    <Col span={6}>{advertisement.result.transmission}</Col>
                </Row>
                <Row>
                    <Col span={6}>Engine Capacity</Col>
                    <Col span={6}>{advertisement.result.power}</Col>
                </Row>
                <Row>
                    <Col span={6}>Body Type</Col>
                    <Col span={6}>{advertisement.result.bodyType}</Col>
                </Row>
                <Row>
                    <Col span={6}>Brand New</Col>
                    <Col span={6}>{advertisement.result.brandNew ? "Yes" : "No"}</Col>
                </Row>
                <Row>
                    <Col span={6}>Blocked</Col>
                    <Col span={6}>{advertisement.result.blocked ? "Yes" : "No"}</Col>
                </Row>
                <Row>
                    <Col span={6}>Featured</Col>
                    <Col span={6}>{advertisement.result.featured ? "Yes" : "No"}</Col>
                </Row>
                <Row>
                    <Col span={6}>Visible</Col>
                    <Col span={6}>{advertisement.result.visible ? "Yes" : "No"}</Col>
                </Row>
                <Row>
                    <Col span={6}>Sold</Col>
                    <Col span={6}>{advertisement.result.sold ? "Yes" : "No"}</Col>
                </Row>
                <Row>
                    <Col span={6}>Registration City</Col>
                    <Col span={6}>{advertisement.result.registrationCity}</Col>
                </Row>
                <Row>
                    <Col span={6}>Description</Col>
                    <Col span={6}>{advertisement.result.description}</Col>
                </Row>
                <Row>
                    <Col span={6}>Features</Col>
                    <Col span={6}>{advertisement.result.other}</Col>
                </Row>
            </div>
            <div>
                <Typography.Title level={3}>Actions</Typography.Title>
                {advertisement.result.blocked ?
                    <div>
                        <Typography.Title level={4}>Unblock this Ad</Typography.Title>
                        <Button type="primary" onClick={unblockAd}>Unblock This Ad</Button>
                    </div>
                    :
                    <Form onFinish={blockAd}>
                        <Typography.Title level={4}>Block this Ad</Typography.Title>
                        <Form.Item label="Reason" name="reason" rules={[{ required: true, message: 'Please enter reason for block' }]}>
                            <Input.TextArea rows={2} style={{width:"500px"}} />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">Block This Ad</Button>
                        </Form.Item>
                    </Form>
                }
            </div>
        </>
    )
}

export default Advertisement
