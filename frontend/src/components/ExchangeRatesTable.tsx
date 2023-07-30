import { Table } from 'antd';
import { ExchangeRate } from '../models/ExchangeRate';

interface PropType {
  exchangeRates: ExchangeRate[] | null
}

const ExchangeRatesTable = ({ exchangeRates }: PropType) => {
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
      dataIndex: 'rate',
      render: (rate: number) => parseFloat(rate.toFixed(6)),
    },
  ];

  return (
    <Table
      style={{ marginTop: 16 }}
      rowKey="code"
      columns={columns}
      dataSource={exchangeRates || []}
      bordered
    />
  )
}
export default ExchangeRatesTable;