import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { Layout, Menu, Typography } from "antd";
import Login from "../components/auth/Login";
import "react-toastify/dist/ReactToastify.css";
import "antd/dist/antd.css";
import Advertisements from "../components/pages/Advertisements";
import Advertisement from "../components/pages/Advertisement";

const { Sider, Content } = Layout;
const { SubMenu } = Menu;
const Routes = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <>
      <ToastContainer autoClose={5000} />
      <Router>
        {isLoggedIn ? (
          <Layout style={{ minHeight: "100vh" }}>
            <Sider breakpoint="md" collapsedWidth="0">
              <Typography.Title
                level={4}
                style={{ textAlign: "center", marginBottom: "20px" }}
              >
                Welcome Admin!
              </Typography.Title>
              <Menu defaultSelectedKeys={["1"]} mode="inline">
                <Menu.Item key="1">Dashboard</Menu.Item>
                <Menu.Item key="3"><Link to="/advertisements">Advertisements</Link></Menu.Item>
                <SubMenu key="sub1" title="Manufacturers">
                  <Menu.Item key="4">All Manufacturers</Menu.Item>
                  <Menu.Item key="5">Create New Make</Menu.Item>
                  <Menu.Item key="6">Create New Model</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title="Blogs">
                  <Menu.Item key="7">View Blogs</Menu.Item>
                  <Menu.Item key="8">Create New Blog</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout>
              <Content>
                <Switch>
                  <Route exact path="/advertisements" component={Advertisements} />
                  <Route exact path="/advertisements/:id" component={Advertisement} />
                </Switch>
              </Content>
            </Layout>
          </Layout>
        ) : (
          <Route path="/" component={Login} />
        )}
      </Router>
    </>
  );
};

export default Routes;
