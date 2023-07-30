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
        new ExchangeRate("BTC", "Bitcoin", 29307.37),
        new ExchangeRate("ETH", "Ethereum", 1875),
        new ExchangeRate("DOGE", "Dogecoin", 0.08),
        new ExchangeRate("XPR", "Ripple", 0.7217),
        new ExchangeRate("SOL", "Solana", 24.97));

    latestRateData.setExchangeRates(exchangeRates);
    return latestRateData;
  }
}
