package com.yammer.model;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class GrantDuration {

  private Date grantStart;
  private Date grantEnd;

  public GrantDuration(String gStart, String gEnd) {
    try {
      SimpleDateFormat formatter = new SimpleDateFormat("MM/dd/yyyy");
      Date dateStart = formatter.parse(gStart);
      Date dateEnd = formatter.parse(gEnd);
      if (dateStart.getTime() > dateEnd.getTime()) {
        throw new Exception("invalid date");
      }
      this.grantStart = dateStart;
      this.grantEnd = dateEnd;
    } catch (ParseException e) {
      System.out.println("error date format");
    } catch (Exception e) {
      System.out.println(e.getMessage());
    }
  }
}
