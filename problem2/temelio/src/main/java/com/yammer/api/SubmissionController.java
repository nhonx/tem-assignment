package com.yammer.api;

import com.yammer.model.Submission;
import com.yammer.repository.SubmissionRepository;
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

@Path("/submissions")
@Produces(MediaType.APPLICATION_JSON)
public class SubmissionController {

  private Validator validator;
  private SubmissionRepository repository;

  public SubmissionController(
    Validator validator,
    SubmissionRepository repository
  ) {
    this.validator = validator;
    this.repository = repository;
  }

  @GET
  public Response getSubmissions() {
    return Response.ok(repository.getSubmissions()).build();
  }

  @GET
  @Path("/{id}")
  public Response getSubmissionById(@PathParam("id") Integer id) {
    Submission s = repository.getSubmission(id);
    if (s != null) {
      return Response.ok(s).build();
    } else {
      return Response.status(Status.NOT_FOUND).build();
    }
  }

  @POST
  public Response createSubmission(Submission s) throws URISyntaxException {
    Integer newId = repository.getSubmissions().size() + 1;
    s.setId(newId);
    repository.updateSubmission(newId, s);
    return Response.created(new URI("/submission/" + newId.toString())).build();
  }

  @PUT
  @Path("/{id}")
  public Response updateSubmissionById(
    @PathParam("id") Integer id,
    Submission s
  ) {
    Submission existedSub = repository.getSubmission(s.getId());
    if (existedSub != null) {
      s.setId(id);
      repository.updateSubmission(id, s);
      return Response.ok(s).build();
    } else {
      return Response.status(Status.NOT_FOUND).build();
    }
  }
}
