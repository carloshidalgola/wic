package com.mdp.pyr.framework.audit.domain;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Operation {
	/** The type */
	@NotNull
	@JsonProperty("type")
	private Type type;

	/** The traffic */
	@NotNull
	@JsonProperty("traffic")
	private Traffic traffic;

	/** The method */
	@NotNull
	@JsonProperty("method")
	private Method method;

	/** The destination */
	@NotBlank
	@JsonProperty("destination")
	private String destination;

	@JsonInclude(JsonInclude.Include.NON_NULL)
	private Request request;

	/** The response */
	@JsonInclude(JsonInclude.Include.NON_NULL)
	private Response response;

	public Operation(Type auditType, Traffic auditTraffic, Method auditMethod, String destination, Request request) {
		super();
		this.type = auditType;
		this.traffic = auditTraffic;
		this.method = auditMethod;
		this.destination = destination;
		this.request = request;
	}

	public Operation(Type auditType, Method auditMethod, String destination, Request request) {
		super();
		this.type = auditType;
		this.traffic = Traffic.OUTBOUND;
		this.method = auditMethod;
		this.destination = destination;
		this.request = request;
	}

	public Operation(Type auditType, Traffic auditTraffic, Method auditMethod, String destination, Response response) {
		super();
		this.type = auditType;
		this.traffic = auditTraffic;
		this.method = auditMethod;
		this.destination = destination;
		this.response = response;
	}

	public Operation(Type auditType, Method auditMethod, String destination, Response response) {
		super();
		this.type = auditType;
		this.traffic = Traffic.OUTBOUND;
		this.method = auditMethod;
		this.destination = destination;
		this.response = response;
	}

}
