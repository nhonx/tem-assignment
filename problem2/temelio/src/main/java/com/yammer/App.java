package com.yammer;

import com.yammer.api.NonprofitController;
import com.yammer.config.ApplicationHealthCheck;
import com.yammer.repository.NonprofitRepository;
import com.yammer.repository.SubmissionRepository;
import io.dropwizard.core.Application;
import io.dropwizard.core.Configuration;
import io.dropwizard.core.setup.Bootstrap;
import io.dropwizard.core.setup.Environment;
import io.federecio.dropwizard.swagger.SwaggerBundle;
import io.federecio.dropwizard.swagger.SwaggerBundleConfiguration;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class App extends Application<AppConfiguration> {

  private static final Logger LOGGER = LoggerFactory.getLogger(App.class);

  @Override
  public void initialize(Bootstrap<AppConfiguration> b) {
    b.addBundle(
      new SwaggerBundle<AppConfiguration>() {
        @Override
        protected SwaggerBundleConfiguration getSwaggerBundleConfiguration(
          AppConfiguration configuration
        ) {
          return configuration.getSwagger();
        }
      }
    );
  }

  @Override
  public String getName() {
    return "swagger-sample";
  }

  @Override
  public void run(AppConfiguration c, Environment e) throws Exception {
    LOGGER.info("Registering REST resources" + App.class);
    e
      .jersey()
      .register(
        new NonprofitController(
          e.getValidator(),
          new NonprofitRepository(),
          new SubmissionRepository()
        )
      );

    LOGGER.info("Registering Application Health Check");
    // e.healthChecks().register("application", new ApplicationHealthCheck());
  }

  public static void main(String[] args) throws Exception {
    new App().run(args);
  }
}
