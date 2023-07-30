import { Typography, Select } from 'antd';

const { Title } = Typography;

const ExchangeRates = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Title style={{ marginTop: 0 }} level={4}>Exchange Rates</Title>
        <Select
          placeholder="Select Currency"
          style={{ width: 180 }}
          options={[
            { value: 'USD', label: 'USD' },
            { value: 'EUR', label: 'EUR' }
          ]}
        />
      </div>
    </>
  )
}
export default ExchangeRates;