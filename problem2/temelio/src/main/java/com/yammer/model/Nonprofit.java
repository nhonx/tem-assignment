package com.yammer.model;

import com.yammer.model.Address;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.NotBlank;


@AllArgsConstructor
@NoArgsConstructor
@Data
public class Nonprofit {
  private Integer id;
  private String legalName;
  private String EIN;
  private String Mission;
  private Address address;

  public void setId(Integer _id) {
    this.id = _id;
  }
}
