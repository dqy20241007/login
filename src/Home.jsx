import React from 'react'
import { Layout, Menu } from 'antd';
import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
const { Header, Content, Sider } = Layout;
// const items1 = ['1', '2', '3'].map((key) => ({
//   key,
//   label: `nav ${key}`,
// }));
export default () => (
  <div>
  <Layout style={{ height: '100vh', width: '100vw'}}>
    {/* <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
    </Header> */}
    <Layout style={{minHeight:+document.documentE}}>
      <Sider width={200} className="site-layout-background">
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['2']}
          items={[
           
            {
              key: '2',
              icon: <UserOutlined/>,
              label: <NavLink to="/Home">单位贷款</NavLink>,
            },
            // {
            //   key: '3',
            //   icon: <UploadOutlined />,
            //   label: <NavLink to="/home/GoodsList">贷款列表</NavLink>,
            // },
            // {
            //   key: '4',
            //   icon: <UploadOutlined />,
            //   label: <NavLink to="/home/BackSuccess">缴纳授信费用</NavLink>,
            // }, 
            {
              key: '1',
              icon: <VideoCameraOutlined />,
              /* NavLink就类似于vue-router中的router-link
              实现点击跳转功能 */
              label: <NavLink to="/Home">利息登记簿</NavLink>,
            },
          ]}
        />
      </Sider>
      <Layout
        style={{
          padding: '0 24px 24px',
        }}
      >
        <Content
          className="site-layout-background"
          style={{
            padding: 10,
            margin: 0,
            minHeight: 280,
          }}
        >
          <div style={{'text-align': 'center',margin:'50vh 0',fontWeight:'bold'}}>欢迎光临!!!

          </div>
                  </Content>
      </Layout>
    </Layout>
  </Layout>
  </div>
);