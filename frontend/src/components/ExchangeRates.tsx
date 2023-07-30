import { Typography, Select } from 'antd';
import ExchangeRatesTable from './ExchangeRatesTable';
import { useEffect, useState, useCallback } from 'react';
import { CurrencyCode, ExchangeRate, ExchangeRateResponse } from '../models/ExchangeRate';

const { Title } = Typography;

const ExchangeRates = () => {
  const [currencyCodes, setCurrencyCodes] = useState<CurrencyCode[] | null>(null);
  const [exchangeRates, setExchangeRates] = useState<ExchangeRate[] | null>(null);
  const [code, setCode] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const fetchCurrencyCodes = async () => {
    setLoading(true);
    const response = await fetch('/api/codes');
    const currencyCodesResponse: CurrencyCode[] = await response.json();
    setCurrencyCodes(currencyCodesResponse);
    if (currencyCodesResponse.length) {
      setCode(currencyCodesResponse[0].code);
    }
    setLoading(false);
  }

  const fetchLatestExchangeRates = useCallback(async () => {
    setLoading(true);
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
    setLoading(false);
  }, [code, currencyCodes])

  useEffect(() => {
    fetchCurrencyCodes();
  }, []);

  useEffect(() => {
    if (code) {
      fetchLatestExchangeRates();
    }
  }, [code, fetchLatestExchangeRates]);

  const handleCurrencySelection = (code: string) => {
    setCode(code);
  }

  const selectCurrencyOptions = currencyCodes?.map(({ code }) => ({ value: code, label: code }));

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Title style={{ marginTop: 0 }} level={4}>Latest Exchange Rates</Title>
        <Select
          value={code}
          loading={loading}
          onChange={handleCurrencySelection}
          placeholder="Select Currency"
          style={{ width: 180 }}
          options={selectCurrencyOptions || []}
        />
      </div>
      <ExchangeRatesTable
        exchangeRates={exchangeRates}
        code={code}
        loading={loading}
      />
    </>
  )
}
export default ExchangeRates;