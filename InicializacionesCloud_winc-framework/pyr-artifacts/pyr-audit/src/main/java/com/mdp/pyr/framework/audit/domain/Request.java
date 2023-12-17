package com.mdp.pyr.framework.audit.domain;

import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Request {
	/** The request headers. */
	@NotNull
	@JsonProperty("headers")
	private Object headers;

	/** The request body. */
	@JsonProperty("body")
	private Object body;
}
