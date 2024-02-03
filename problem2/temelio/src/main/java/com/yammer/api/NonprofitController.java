package com.yammer.api;

import com.yammer.model.Nonprofit;
import com.yammer.model.Submission;
import com.yammer.repository.NonprofitRepository;
import com.yammer.repository.SubmissionRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
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
import java.util.List;
import java.util.Set;

@Path("/nonprofits")
@Produces(MediaType.APPLICATION_JSON)
public class NonprofitController {

  private Validator validator;
  private NonprofitRepository repository;
  private SubmissionRepository submissionRepository;

  public NonprofitController(
    Validator validator,
    NonprofitRepository repository,
    SubmissionRepository subRepository
  ) {
    this.validator = validator;
    this.repository = repository;
    this.submissionRepository = subRepository;
  }

  @GET
  @Operation(
    summary = "Hello",
    description = "Returns hello",
    responses = { @ApiResponse(responseCode = "200", description = "hello") }
  )
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
    return Response.created(new URI("/nonprofit/" + newId.toString())).build();
  }

  @PUT
  @Path("/{id}")
  public Response updateNonprofitById(
    @PathParam("id") Integer id,
    Nonprofit np
  ) {
    Nonprofit existedNp = repository.getNonprofit(np.getId());
    if (existedNp != null) {
      np.setId(id);
      repository.updateNonprofit(id, np);
      return Response.ok(np).build();
    } else {
      return Response.status(Status.NOT_FOUND).build();
    }
  }

  @GET
  @Path("/submissions")
  public Response getAllSubmissions() {
    List<Submission> subList = submissionRepository.getSubmissions();
    return Response.ok(subList).build();
  }

  @GET
  @Path("/{id}/submissions")
  public Response getSubmissionsByNonprofitId(@PathParam("id") Integer id) {
    var result = submissionRepository.getSubmissionsByIds(id, -1);
    if (result.size() > 0) {
      return Response.ok(result).build();
    } else {
      return Response.status(Status.NOT_FOUND).build();
    }
  }

  @POST
  @Path("/{id}/submissions")
  public Response createSubmission(@PathParam("id") Integer id, Submission sm)
    throws URISyntaxException {
    Integer newId = submissionRepository.getSubmissions().size() + 1;
    sm.setId(newId);
    sm.setNonprofitId(id);
    submissionRepository.updateSubmission(newId, sm);
    return Response.created(new URI("/submission/" + newId.toString())).build();
  }

  @PUT
  @Path("/{id}/submissions/{subId}")
  public Response updateSubmissionById(
    @PathParam("id") Integer id,
    @PathParam("subId") Integer subId,
    Submission sm
  ) {
    List<Submission> subList = submissionRepository.getSubmissionsByIds(
      id,
      subId
    );
    if (subList.size() > 0) {
      sm.setId(subId);
      sm.setNonprofitId(id);
      submissionRepository.updateSubmission(subId, sm);
      return Response.ok(sm).build();
    } else {
      return Response.status(Status.NOT_FOUND).build();
    }
  }

  @GET
  @Path("/{id}/submissions/{subId}")
  public Response getSubmissionByNonprofitId(
    @PathParam("id") Integer id,
    @PathParam("subId") Integer subId
  ) {
    List<Submission> subList = submissionRepository.getSubmissionsByIds(
      id,
      subId
    );
    if (subList.size() > 0) {
      return Response.ok(subList.get(0)).build();
    } else {
      return Response.status(Status.NOT_FOUND).build();
    }
  }
}
