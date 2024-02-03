package com.yammer.model;

import com.yammer.model.GrantDuration;
import com.yammer.model.GrantType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.NotBlank;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Submission {

  public Integer id;
  private Integer nonProfitId;
  private String grantName;
  private Integer requestedAmount;
  private Integer awardedAmount;
  private GrantType grantType;
  private String[] tags;
  private GrantDuration grantDuration;

  public void setId(Integer _id) {
    this.id = _id;
  }

  public void setNonprofitId(Integer _npId) {
    this.nonProfitId = _npId;
  }

  public Integer getNonprofitId() {
    return this.nonProfitId;
  }
}
