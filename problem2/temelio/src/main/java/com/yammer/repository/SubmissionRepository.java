package com.yammer.repository;

import com.yammer.model.GrantDuration;
import com.yammer.model.GrantType;
import com.yammer.model.Submission;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class SubmissionRepository {

  public static HashMap<Integer, Submission> submissions = new HashMap<>();

  static {
    submissions.put(
      1,
      new Submission(
        1,
        1,
        "Grant 1",
        1000,
        2000,
        GrantType.OTHER,
        new String[] { "a", "b", "c" },
        new GrantDuration("1/1/2024", "2/1/2024")
      )
    );
    submissions.put(
      2,
      new Submission(
        2,
        1,
        "Grant 2",
        1000,
        2000,
        GrantType.OTHER,
        new String[] { "a", "b", "c" },
        new GrantDuration("3/1/2024", "2/1/2024")
      )
    );
  }

  public static List<Submission> getSubmissions() {
    return new ArrayList<Submission>(submissions.values());
  }

  public static Submission getSubmission(Integer id) {
    return submissions.get(id);
  }

  public static void updateSubmission(Integer id, Submission s) {
    submissions.put(id, s);
  }

  public static void removeSubmission(Integer id) {
    submissions.remove(id);
  }
}
