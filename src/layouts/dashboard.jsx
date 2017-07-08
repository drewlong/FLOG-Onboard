import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import { Layout } from 'reactjs-admin-lte';
import Header from '../components/global/header.jsx'
import SideBar from '../components/index/sidebar.jsx'
import Main from '../components/index/main.jsx'

class Dashboard extends Component {
  render(){

    return(
      <Layout skin="purple" type="fixed">
        <Header />
        <SideBar />
        <Main />
      </Layout>
    )
  }
}

export default Dashboard;
