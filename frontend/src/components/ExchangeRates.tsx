import { Typography, Select } from 'antd';
import ExchangeRatesTable from './ExchangeRatesTable';
import { useEffect, useState } from 'react';
import { CurrencyCode } from '../models/ExchangeRate';

const { Title } = Typography;

const ExchangeRates = () => {
  const [currencyCodes, setCurrencyCodes] = useState<CurrencyCode[] | null>(null);

  const fetchCurrencyCodes = async () => {
    const currencyCodesResponse = await fetch('/api/codes');
    const currencyCodesData: CurrencyCode[] = await currencyCodesResponse.json();
    setCurrencyCodes(currencyCodesData);
  }

  useEffect(() => {
    fetchCurrencyCodes()
  }, [])

  const selectCurrencyOptions = currencyCodes?.map(({ code }) => ({ value: code, label: code }));

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Title style={{ marginTop: 0 }} level={4}>Exchange Rates</Title>
        <Select
          placeholder="Select Currency"
          style={{ width: 180 }}
          options={selectCurrencyOptions || []}
        />
      </div>
      <ExchangeRatesTable />
    </>
  )
}
export default ExchangeRates;