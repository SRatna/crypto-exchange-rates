export interface CurrencyCode {
  code: string;
  description: string;
}

export interface ExchangeRateResponse {
  code: string;
  rate: number;
}

export interface ExchangeRate {
  code: string;
  description: string;
  rate: number;
}