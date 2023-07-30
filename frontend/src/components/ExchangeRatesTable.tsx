import { Table } from 'antd';
import { ExchangeRate } from '../models/ExchangeRate';

interface PropType {
  exchangeRates: ExchangeRate[] | null,
  code: string
}

const ExchangeRatesTable = ({ exchangeRates, code }: PropType) => {
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

  const dataSource = exchangeRates?.filter(({ code: curCode }) => curCode !== code)

  return (
    <Table
      style={{ marginTop: 16 }}
      rowKey="code"
      columns={columns}
      dataSource={dataSource || []}
      bordered
    />
  )
}
export default ExchangeRatesTable;