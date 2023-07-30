import { Table } from 'antd';

const ExchangeRatesTable = () => {

  const columns = [
    {
      title: 'Symbol',
      dataIndex: 'code'
    },
    {
      title: 'Asset',
      dataIndex: 'description'
    },
    {
      title: 'Exchange Rate',
      dataIndex: 'rate'
    },
  ];

  const dataSource = [
    {
      code: 'USD',
      description: 'United States Dollar',
      rate: 1.0,
    },
    {
      code: 'EUR',
      description: 'Euro',
      rate: 1.1,
    },
  ];

  return (
    <>
      <Table style={{ marginTop: 16 }} rowKey="code" columns={columns} dataSource={dataSource} bordered />
    </>
  )
}
export default ExchangeRatesTable;