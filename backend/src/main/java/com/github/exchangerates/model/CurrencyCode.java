package com.github.exchangerates.model;

public class CurrencyCode {
  private String code;
  private String description;

  public CurrencyCode(String code, String description) {
    this.code = code;
    this.description = description;
  }

  public String getCode() {
    return code;
  }

  public String getDescription() {
    return description;
  }
}