import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPackages } from "../../redux/actions/package";
import LoadingIcon from "../UI/LoadingIcon";
import { Table, Typography, Input, Button, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Highlighter from "react-highlight-words";

const Packages = () => {
  const [state, setState] = useState({
    searchText: "",
    searchedColumn: "",
  });
  const dispatch = useDispatch();
  const packages = useSelector(state => state.packages);
  const token = useSelector(state => state.auth.token);
  useEffect(() => {
    dispatch(getAllPackages(token));
  }, [dispatch, token]);
  if (packages.isLoading) return <LoadingIcon />;

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

  const dataSource = packages.result.map(pkg => ({
    key: pkg._id,
    title: pkg.title,
    description: pkg.description,
    price: pkg.price,
    adverts: pkg.adverts,
    validity: pkg.validity,
  }));
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      sorter: {
        compare: (a, b) => a.title.localeCompare(b.title),
        multiple: 1,
      },
      ...getColumnSearchProps("title"),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      sorter: {
        compare: (a, b) => a.description - b.description,
        multiple: 2,
      },
      ...getColumnSearchProps("description"),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      sorter: {
        compare: (a, b) => a.price.localeCompare(b.price),
        multiple: 3,
      },
      ...getColumnSearchProps("price"),
    },
    {
      title: "Adverts",
      dataIndex: "adverts",
      key: "adverts",
      sorter: {
        compare: (a, b) => a.adverts.localeCompare(b.adverts),
        multiple: 4,
      },
      ...getColumnSearchProps("adverts"),
    },
    {
      title: "Validity",
      dataIndex: "validity",
      key: "validity",
      sorter: {
        compare: (a, b) => a.validity.localeCompare(b.validity),
        multiple: 5,
      },
      ...getColumnSearchProps("validity"),
    },
  ];
  return (
    <>
      <Typography.Title level={2}>Packages</Typography.Title>
      <Table dataSource={dataSource} columns={columns} />
    </>
  );
};

export default Packages;
