import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../redux/actions/users";
import LoadingIcon from "../UI/LoadingIcon";
import { Table, Typography, Input, Button, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Highlighter from "react-highlight-words";

const Users = () => {
  const [state, setState] = useState({
    searchText: "",
    searchedColumn: "",
  });
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const token = useSelector(state => state.auth.token);
  useEffect(() => {
    dispatch(getAllUsers(token));
  }, [dispatch, token]);
  if (users.isLoading) return <LoadingIcon />;

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
  const dataSource = users.result.map(user => ({
    key: user._id,
    name: user.name,
    email: user.email,
    accountState: user.accountState,
    accountStatus: user.accountStatus,
    accountType: user.accountType,
    adCount: user.adCount,
    blocked: user.blocked ? "true" : "false",
    createdAt: user.createdAt,
    isAdmin: user.isAdmin ? "true" : "false",
    isDeleted: user.isDeleted ? "true" : "false",
  }));
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: {
        compare: (a, b) => a.name.localeCompare(b.name),
        multiple: 1,
      },
      ...getColumnSearchProps("name"),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      sorter: {
        compare: (a, b) => a.email - b.email,
        multiple: 2,
      },
      ...getColumnSearchProps("email"),
    },
    {
      title: "Account State",
      dataIndex: "accountState",
      key: "accountState",
      sorter: {
        compare: (a, b) => a.accountState.localeCompare(b.accountState),
        multiple: 3,
      },
      ...getColumnSearchProps("accountState"),
    },
    {
      title: "Account Status",
      dataIndex: "accountStatus",
      key: "accountStatus",
      sorter: {
        compare: (a, b) => a.accountStatus.localeCompare(b.accountStatus),
        multiple: 4,
      },
      ...getColumnSearchProps("accountStatus"),
    },
    {
      title: "Account Type",
      dataIndex: "accountType",
      key: "accountType",
      sorter: {
        compare: (a, b) => a.accountType.localeCompare(b.accountType),
        multiple: 5,
      },
      ...getColumnSearchProps("accountType"),
    },
    {
      title: "Ad Count",
      dataIndex: "adCount",
      key: "adCount",
      sorter: {
        compare: (a, b) => a.adCount.localeCompare(b.adCount),
        multiple: 5,
      },
      ...getColumnSearchProps("adCount"),
    },
    {
      title: "Blocked",
      dataIndex: "blocked",
      key: "blocked",
      sorter: {
        compare: (a, b) => a.blocked.localeCompare(b.blocked),
        multiple: 6,
      },
      ...getColumnSearchProps("blocked"),
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      sorter: {
        compare: (a, b) => a.createdAt.localeCompare(b.createdAt),
        multiple: 7,
      },
      ...getColumnSearchProps("createdAt"),
    },
    {
      title: "Admin",
      dataIndex: "isAdmin",
      key: "isAdmin",
      sorter: {
        compare: (a, b) => a.isAdmin.localeCompare(b.isAdmin),
        multiple: 8,
      },
      ...getColumnSearchProps("isAdmin"),
    },
    {
      title: "Deleted",
      dataIndex: "isDeleted",
      key: "isDeleted",
      sorter: {
        compare: (a, b) => a.isDeleted.localeCompare(b.isDeleted),
        multiple: 9,
      },
      ...getColumnSearchProps("isDeleted"),
    },
    {
      title: "Actions",
      key: "action",
      render: record => <Link to={`/edit-user/${record.key}`}>Edit</Link>,
    },
  ];
  return (
    <div>
      <Typography.Title level={2}>Users</Typography.Title>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default Users;
