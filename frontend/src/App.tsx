import { Layout, theme } from 'antd';
const { Header, Content, Footer } = Layout;
import './App.css';
import ExchangeRates from './components/ExchangeRates';

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <Header>
        <div className="logo">
          Crypto Currency Exchange Rates
        </div>
      </Header>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
          <ExchangeRates />
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Crypto Currency Exchange Rates App ©2023 Created by SRatna
      </Footer>
    </Layout>
  );
};
export default App;