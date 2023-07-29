package com.github.exchangerates.model;

import java.util.List;

public class LatestRateData {
  private List<ExchangeRate> exchangeRates;

  public List<ExchangeRate> getExchangeRates() {
    return exchangeRates;
  }

  public void setExchangeRates(List<ExchangeRate> exchangeRates) {
    this.exchangeRates = exchangeRates;
  }
}