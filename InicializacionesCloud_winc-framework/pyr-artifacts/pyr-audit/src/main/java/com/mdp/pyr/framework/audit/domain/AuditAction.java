package com.mdp.pyr.framework.audit.domain;

import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class AuditAction {
	@JsonProperty("user")
	private User user;

	@JsonProperty("extraFields")
	private Object extraFields;

	@NotNull
	@JsonProperty("operation")
	private Operation operation;

	@Override
	public String toString() {
		return "";
	}

}