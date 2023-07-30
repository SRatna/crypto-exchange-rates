package com.github.exchangerates.model;

public class LatestRateResponse {
  private String code;
  private double rate;

  public LatestRateResponse(String code, double rate) {
    this.code = code;
    this.rate = rate;
  }

  public String getCode() {
    return code;
  }

  public double getRate() {
    return rate;
  }
}