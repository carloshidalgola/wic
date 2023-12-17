package com.mdp.pyr.framework.properties;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "pyr.api.timeout", ignoreInvalidFields = false, ignoreUnknownFields = false)
@NoArgsConstructor
@Getter
@Setter
public class ApiTimeout {

	private String read;

	private String write;

	private String call;

	private String connect;

}
