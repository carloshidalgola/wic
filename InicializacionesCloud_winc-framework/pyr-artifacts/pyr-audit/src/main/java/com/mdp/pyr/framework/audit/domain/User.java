package com.mdp.pyr.framework.audit.domain;

import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class User {
	/** The username. */
	@NotBlank
	@JsonProperty("username")
	private String username;

	/** The user session. */
	@NotBlank
	@JsonProperty("session")
	private String session;

	/** The Employee user. */
	@NotBlank
	@JsonProperty("id")
	private String id;
}
