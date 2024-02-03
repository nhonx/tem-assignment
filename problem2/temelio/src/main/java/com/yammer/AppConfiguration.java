package com.yammer;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.dropwizard.core.Configuration;
import io.federecio.dropwizard.swagger.SwaggerBundleConfiguration;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import org.hibernate.validator.constraints.NotEmpty;

public class AppConfiguration extends Configuration {

  @Valid
  @NotNull
  private final SwaggerBundleConfiguration swagger = new SwaggerBundleConfiguration();

  @JsonProperty("swagger")
  public SwaggerBundleConfiguration getSwagger() {
    return swagger;
  }
}
