package com.yammer.api;
import com.yammer.model.Nonprofit;
import com.yammer.repository.NonprofitRepository;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.Validator;
import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.PUT;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.core.Response.Status;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.Set;
@Path("/nonprofits")
@Produces(MediaType.APPLICATION_JSON)
public class NonprofitController {
  private Validator validator;
  private NonprofitRepository repository;
  public NonprofitController(Validator validator, NonprofitRepository repository) {
    this.validator = validator;
    this.repository = repository;
  }
  @GET
  public Response getNonprofits() {
    return Response.ok(repository.getNonprofits()).build();
  }
  @GET
  @Path("/{id}")
  public Response getNonprofitById(@PathParam("id") Integer id) {
    Nonprofit np = repository.getNonprofit(id);
    if (np != null) {
      return Response.ok(np).build();
    } else {
      return Response.status(Status.NOT_FOUND).build();
    }
  }
  @POST
  public Response createNonprofit(Nonprofit np) throws URISyntaxException {
    Integer newId = repository.getNonprofits().size() + 1;
    np.setId(newId);
    repository.updateNonprofit(newId, np);
    return Response.created(new URI("/nonprofit/" + newId.toString()))
        .build();
    
  }
  @PUT
  @Path("/{id}")
  public Response updateNonprofitById(@PathParam("id") Integer id, Nonprofit np) {
    Nonprofit existedNp = repository.getNonprofit(np.getId());
    if (existedNp != null) {
      np.setId(id);
      repository.updateNonprofit(id, np);
      return Response.ok(np).build();
    } else {
      return Response.status(Status.NOT_FOUND).build();
    }
  }
}