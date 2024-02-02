package com.yammer.repository;

import com.yammer.model.Nonprofit;
import com.yammer.model.Address;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class NonprofitRepository {

  public static HashMap<Integer, Nonprofit> nonprofits = new HashMap<>();

  static {
    nonprofits.put(1, new Nonprofit(1, "ABC", "EIN-111", "xvzxvzxv", new Address("zz","vv","cc","xx")));
    nonprofits.put(2, new Nonprofit(2, "XYZ", "EIN-112", "USzxvzxvzxvA", new Address("zz","vv","cc","xx")));
  }

  public static List<Nonprofit> getNonprofits() {
    return new ArrayList<Nonprofit>(nonprofits.values());
  }

  public static Nonprofit getNonprofit(Integer id) {
    return nonprofits.get(id);
  }

  public static void updateNonprofit(Integer id, Nonprofit np) {
    nonprofits.put(id, np);
  }

  public static void removeNonprofit(Integer id) {
    nonprofits.remove(id);
  }
}