package com.github.exchangerates.model;

public class ExchangeRate {
  private String code;
  private String description;
  private double rateInUSD;

  public ExchangeRate(String code, String description, double rateInUSD) {
    this.code = code;
    this.description = description;
    this.rateInUSD = rateInUSD;
  }

  public String getCode() {
    return code;
  }

  public String getDescription() {
    return description;
  }

  public double getRateInUSD() {
    return rateInUSD;
  }
}
