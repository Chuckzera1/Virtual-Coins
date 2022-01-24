import React from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  Homepage,
  Exchanges,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from "./components";
import "./App.css";
import "antd/dist/antd.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route exact path="/exchanges">
                <Exchanges />
              </Route>
              <Route exact path="/cryptocurrencies">
                <Cryptocurrencies />
              </Route>
              <Route exact path="/crypto/:coinId">
                <CryptoDetails />
              </Route>
              <Route exact path="/news">
                <News />
              </Route>
              <Redirect path="*" to="/"></Redirect>
            </Switch>
          </div>
        </Layout>
        <div
          className="footer">
          <Typography.Title level={5}
          style={{ color: "white", textAlign: "center" }}>
            Cryptoverse <br />
            All Rights Reserved
          </Typography.Title>
          <Space>
              <Link to="/">Home</Link>
              <Link to="/exchanges">exchanges</Link>
              <Link to="/news">News</Link>
            </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
