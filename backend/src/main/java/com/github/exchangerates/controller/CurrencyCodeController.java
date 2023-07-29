package com.github.exchangerates.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.github.exchangerates.model.CurrencyCode;
import com.github.exchangerates.model.LatestRateData;

@RestController
@RequestMapping("/api")
public class CurrencyCodeController {

  private final LatestRateData latestRateData;

  public CurrencyCodeController(LatestRateData latestRateData) {
    this.latestRateData = latestRateData;
  }

  @GetMapping("/codes")
  public List<CurrencyCode> getCurrencies() {
    return latestRateData.getExchangeRates().stream()
        .map(rate -> new CurrencyCode(rate.getCode(), rate.getDescription()))
        .collect(Collectors.toList());
  }
}
