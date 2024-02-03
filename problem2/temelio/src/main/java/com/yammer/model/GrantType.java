package com.yammer.model;

public enum GrantType {
  OPERATING_GRANT("OPERATING_GRANT"),
  PROJECT_GRANT("PROJECT_GRANT"),
  OTHER("OTHER");

  private String value;

  GrantType(String strValue) {
    this.value = strValue;
  }

  public String getValue() {
    return value;
  }
}
