import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import CasesPH from "./components/Views/CasesPH";

import CasesState from "./context/cases/CasesState";

import { Layout, Typography } from 'antd';
const { Title } = Typography;
const { Header, Content, Footer } = Layout;


const App = () => {
  return(
    <CasesState>
      <Layout style={{ minHeight: '100vh' }}>
        <Router>
          <Sidebar />
          <Layout className="site-layout">
            <Content className="site-content">
              <div className="site-layout-background" style={{ padding: 24 }}>
                  <Switch>
                    <Route 
                      path={["/", "/cases-ph"]} 
                      component={ CasesPH }
                    />
                  </Switch>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}></Footer>
          </Layout>
        </Router>
      </Layout>
    </CasesState>
  )
}

export default App;
