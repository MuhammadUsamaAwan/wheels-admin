import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAdvertisements } from "../../redux/actions/advertisement";
import LoadingIcon from "../UI/LoadingIcon";
import { Table, Typography, Input, Button, Space  } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import Highlighter from 'react-highlight-words';

const Advertisements = () => {
    const [state, setState] = useState({
        searchText: '',
        searchedColumn: '',
      })
    const dispatch = useDispatch()
    const advertisements = useSelector(state => state.advertisements);
    const token = useSelector(state => state.auth.token);
    useEffect(() => {
        dispatch(getAllAdvertisements(token));
    }, [dispatch, token])
    if (advertisements.isLoading)
    return (
        <LoadingIcon />
    )
    
    const getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
          <div style={{ padding: 8 }}>
            <Input
              placeholder={`Search ${dataIndex}`}
              value={selectedKeys[0]}
              onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
              style={{ marginBottom: 8, display: 'block' }}
            />
            <Space>
              <Button
                type="primary"
                onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                icon={<SearchOutlined />}
                size="small"
                style={{ width: 90 }}
              >
                Search
              </Button>
              <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                Reset
              </Button>
              <Button
                type="link"
                size="small"
                onClick={() => {
                  confirm({ closeDropdown: false });
                  setState({
                    searchText: selectedKeys[0],
                    searchedColumn: dataIndex,
                  });
                }}
              >
                Filter
              </Button>
            </Space>
          </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
          record[dataIndex]
            ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
            : '',
        render: text =>
          state.searchedColumn === dataIndex ? (
            <Highlighter
              highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
              searchWords={[state.searchText]}
              autoEscape
              textToHighlight={text ? text.toString() : ''}
            />
          ) : (
            text
          ),
      });
    
      const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setState({
          searchText: selectedKeys[0],
          searchedColumn: dataIndex,
        });
      };
    
      const handleReset = clearFilters => {
        clearFilters();
        setState({ searchText: '' });
      };

    const dataSource = advertisements.result.map(advertisement => ({
        key: advertisement._id,
        title: advertisement.title,
        model: advertisement.modelYear,
        city: advertisement.city,
        vehicleType: advertisement.vehicleType,
        price: `${advertisement.price/100000} lacs`,
        contact: advertisement.contact,
    }))
    const columns = [
        {
            title: "Title",
            dataIndex: 'title',
            key: 'title',
            sorter: {
                compare: (a, b) => a.title.localeCompare(b.title),
                multiple: 1
            },
            ...getColumnSearchProps('title'),
        },
        {
            title: "Model",
            dataIndex: 'model',
            key: 'model',
            sorter: {
                compare: (a, b) => a.model - b.model,
                multiple: 2
            },
            ...getColumnSearchProps('model'),
        },
        {
            title: "City",
            dataIndex: 'city',
            key: 'city',
            sorter: {
                compare: (a, b) => a.city.localeCompare(b.city),
                multiple: 3
            },
            ...getColumnSearchProps('city'),
        },
        {
            title: "Vehicle Type",
            dataIndex: 'vehicleType',
            key: 'vehicleType',
            sorter: {
                compare: (a, b) => a.vehicleType.localeCompare(b.vehicleType),
                multiple: 4
            },
            ...getColumnSearchProps('vehicleType'),
        },
        {
            title: "Price",
            dataIndex: 'price',
            key: 'price',
            sorter: {
                compare: (a, b) => a.price.localeCompare(b.price),
                multiple: 4
            },
        },
        {
            title: "Contact",
            dataIndex: 'contact',
            key: 'contact',
        },
        {
            title: "Actions",
            key: 'action',
            render: (record) => (
                <Link to={`/advertisements/${record.key}`}>View</Link>
            ),
        }
    ]
    return (
        <div>
            <Typography.Title level={2}>Advertisements</Typography.Title>
            <Table dataSource={dataSource} columns={columns} />
        </div>
    )
}

export default Advertisements
