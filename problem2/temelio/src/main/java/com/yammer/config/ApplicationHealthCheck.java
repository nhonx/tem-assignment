package com.yammer.config;

import com.codahale.metrics.health.HealthCheck;
import com.yammer.model.Nonprofit;
import jakarta.ws.rs.client.Client;
import jakarta.ws.rs.client.Invocation;
import jakarta.ws.rs.client.WebTarget;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import java.util.ArrayList;

public class ApplicationHealthCheck extends HealthCheck {

  private final Client client;

  public ApplicationHealthCheck(Client client) {
    super();
    this.client = client;
  }

  @Override
  protected Result check() throws Exception {

    WebTarget webTarget = client.target("http://localhost:8080/nonprofits");

    Invocation.Builder invocationBuilder = webTarget.request(MediaType.APPLICATION_JSON);

    Response response = invocationBuilder.get();
    ArrayList<Nonprofit> nps = response.readEntity(ArrayList.class);
    if (nps != null && !nps.isEmpty()) {
      return Result.healthy();
    }
    return Result.unhealthy("API Failed");
  }
}
