import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { Layout, Menu, Typography } from "antd";
import Login from "../components/auth/Login";
import "react-toastify/dist/ReactToastify.css";
import "antd/dist/antd.css";
import Advertisements from "../components/pages/Advertisements";
import Advertisement from "../components/pages/Advertisement";
import Manufacturers from "../components/pages/Manufacturers";
import CreateMake from "../components/pages/CreateMake";
import CreateModel from "../components/pages/CreateModel";
import Blogs from "../components/pages/Blogs";
import CreateBlog from "../components/pages/CreateBlog";
import EditAdvertisement from "../components/pages/EditAdvertisement";
import Users from "../components/pages/Users";
import EditManufacturer from "../components/pages/EditManufacturer";
import EditUser from "../components/pages/EditUser";
import Packages from "../components/pages/Packages";
import CreatePackage from "../components/pages/CreatePackage";

const { Sider, Content } = Layout;
const { SubMenu } = Menu;
const Routes = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
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
                <Menu.Item key="2">
                  <Link to="/advertisements">Advertisements</Link>
                </Menu.Item>
                <SubMenu key="sub1" title="Manufacturers">
                  <Menu.Item key="3">
                    <Link to="/manufacturers">All Manufacturers</Link>
                  </Menu.Item>
                  <Menu.Item key="4">
                    <Link to="/create-make">Create New Make</Link>
                  </Menu.Item>
                  <Menu.Item key="5">
                    <Link to="/create-model">Create New Model</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title="Blogs">
                  <Menu.Item key="6">
                    <Link to="/blogs">View Blogs</Link>
                  </Menu.Item>
                  <Menu.Item key="7">
                    <Link to="/create-blog">Create New Blog</Link>
                  </Menu.Item>
                </SubMenu>
                <Menu.Item key="8">
                  <Link to="/users">Users</Link>
                </Menu.Item>
                <SubMenu key="sub3" title="Packages">
                  <Menu.Item key="9">
                    <Link to="/packages">View Packages</Link>
                  </Menu.Item>
                  <Menu.Item key="10">
                    <Link to="/create-package">Create New Package</Link>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout>
              <Content>
                <Switch>
                  <Route
                    exact
                    path="/advertisements"
                    component={Advertisements}
                  />
                  <Route
                    exact
                    path="/advertisements/:id"
                    component={Advertisement}
                  />
                  <Route
                    exact
                    path="/edit-advertisement/:id"
                    component={EditAdvertisement}
                  />
                  <Route
                    exact
                    path="/manufacturers"
                    component={Manufacturers}
                  />
                  <Route
                    exact
                    path="/edit-manufacturer/:id"
                    component={EditManufacturer}
                  />
                  <Route exact path="/create-make" component={CreateMake} />
                  <Route exact path="/create-model" component={CreateModel} />
                  <Route exact path="/blogs" component={Blogs} />
                  <Route exact path="/create-blog" component={CreateBlog} />
                  <Route exact path="/users" component={Users} />
                  <Route exact path="/edit-user/:id" component={EditUser} />
                  <Route exact path="/packages" component={Packages} />
                  <Route
                    exact
                    path="/create-package"
                    component={CreatePackage}
                  />
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
