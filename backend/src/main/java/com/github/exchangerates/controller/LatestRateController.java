package com.github.exchangerates.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.github.exchangerates.model.ExchangeRate;
import com.github.exchangerates.model.LatestRateData;
import com.github.exchangerates.model.LatestRateResponse;

@RestController
@RequestMapping("/api")
public class LatestRateController {
  private final LatestRateData latestRateData;

  public LatestRateController(LatestRateData latestRateData) {
    this.latestRateData = latestRateData;
  }

  @GetMapping("/latest/{base}")
  public ResponseEntity<?> getExchangeRates(@PathVariable String base) {
    Optional<ExchangeRate> baseRate = latestRateData.getExchangeRates()
        .stream()
        .filter(rate -> rate.getCode().equals(base))
        .findFirst();

    if (baseRate.isPresent()) {
      double baseRateInUSD = baseRate.get().getRateInUSD();

      List<LatestRateResponse> exchangeRatesInResponse = latestRateData.getExchangeRates()
          .stream()
          .map(rate -> new LatestRateResponse(rate.getCode(), rate.getRateInUSD() / baseRateInUSD))
          .collect(Collectors.toList());

      return ResponseEntity.ok(exchangeRatesInResponse);
    } else {
      String errorMessage = "Base currency code not found: " + base;
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorMessage);
    }
  }
}
