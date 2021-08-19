import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllManufacturers } from "../../redux/actions/manufacturer";
import LoadingIcon from "../UI/LoadingIcon";
import { Table, Typography, Input, Button, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import { Link } from "react-router-dom";

const Manufacturers = () => {
  const [state, setState] = useState({
    searchText: "",
    searchedColumn: "",
  });
  const dispatch = useDispatch();
  const manufacturers = useSelector(state => state.manufacturers);
  const token = useSelector(state => state.auth.token);
  useEffect(() => {
    dispatch(getAllManufacturers(token));
  }, [dispatch, token]);
  if (manufacturers.isLoading) return <LoadingIcon />;
  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: "block" }}
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
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
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
    filterIcon: filtered => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    render: text =>
      state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
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
    setState({ searchText: "" });
  };

  const dataSource = manufacturers.result.map(manufacturer => ({
    key: manufacturer._id,
    make: manufacturer.title,
    models: manufacturer.model.map(model => model.title),
  }));

  const columns = [
    {
      title: "Make",
      dataIndex: "make",
      key: "make",
      sorter: {
        compare: (a, b) => a.make.localeCompare(b.make),
        multiple: 1,
      },
      ...getColumnSearchProps("make"),
    },
    {
      title: "Model(s)",
      dataIndex: "models",
      key: "models",
      sorter: {
        compare: (a, b) => a.models.localeCompare(b.models),
        multiple: 1,
      },
      ...getColumnSearchProps("models"),
    },
    {
      title: "Actions",
      key: "action",
      render: record => (
        <Link to={`/edit-manufacturer/${record.key}`}>Edit</Link>
      ),
    },
  ];
  return (
    <div>
      <Typography.Title level={2}>Makes & Models</Typography.Title>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default Manufacturers;
