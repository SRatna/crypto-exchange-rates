package com.github.exchangerates.config;

import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.github.exchangerates.model.ExchangeRate;
import com.github.exchangerates.model.LatestRateData;

@Configuration
public class LatestRateDataConfig {
  
  @Bean
  public LatestRateData latestRateData() {
    LatestRateData latestRateData = new LatestRateData();

    List<ExchangeRate> exchangeRates = List.of(
        new ExchangeRate("USD", "United States Dollar", 1),
        new ExchangeRate("EUR", "Euro", 1.1),
        new ExchangeRate("BTC", "Bitcoin", 29307.37));

    latestRateData.setExchangeRates(exchangeRates);
    return latestRateData;
  }
}
