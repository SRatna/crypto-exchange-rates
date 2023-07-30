import { Typography, Select } from 'antd';
import ExchangeRatesTable from './ExchangeRatesTable';
import { useEffect, useState } from 'react';
import { CurrencyCode, ExchangeRate, ExchangeRateResponse } from '../models/ExchangeRate';

const { Title } = Typography;

const ExchangeRates = () => {
  const [currencyCodes, setCurrencyCodes] = useState<CurrencyCode[] | null>(null);
  const [exchangeRates, setExchangeRates] = useState<ExchangeRate[] | null>(null);

  const fetchCurrencyCodes = async () => {
    const response = await fetch('/api/codes');
    const currencyCodesResponse: CurrencyCode[] = await response.json();
    setCurrencyCodes(currencyCodesResponse);
  }

  const fetchLatestExchangeRates = async (code: string) => {
    const response = await fetch('/api/latest/' + code);
    const latestRates: ExchangeRateResponse[] = await response.json();
    const exchangeRatesData: ExchangeRate[] = latestRates.map(({ code, rate }) => {
      const currency = currencyCodes?.find(({ code: curCode }) => curCode === code);
      return {
        code,
        rate,
        description: currency?.description || ''
      }
    })
    setExchangeRates(exchangeRatesData);
  }

  useEffect(() => {
    fetchCurrencyCodes();
  }, []);

  const handleCurrencySelection = (code: string) => {
    fetchLatestExchangeRates(code);
  }

  const selectCurrencyOptions = currencyCodes?.map(({ code }) => ({ value: code, label: code }));

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Title style={{ marginTop: 0 }} level={4}>Exchange Rates</Title>
        <Select
          onChange={handleCurrencySelection}
          placeholder="Select Currency"
          style={{ width: 180 }}
          options={selectCurrencyOptions || []}
        />
      </div>
      <ExchangeRatesTable exchangeRates={exchangeRates} />
    </>
  )
}
export default ExchangeRates;