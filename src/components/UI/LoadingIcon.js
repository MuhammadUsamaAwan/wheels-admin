import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 40 }} spin />;

const LoadingIcon = () => {
    return (
        <Spin indicator={antIcon} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}} />
    )
}

export default LoadingIcon