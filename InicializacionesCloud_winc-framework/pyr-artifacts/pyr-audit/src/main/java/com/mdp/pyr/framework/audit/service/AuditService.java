package com.mdp.pyr.framework.audit.service;


import com.mdp.pyr.framework.audit.domain.AuditAction;
import com.mdp.pyr.framework.audit.domain.User;
import com.mdp.pyr.framework.shared.SaveSharedData;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.mdp.pyr.framework.audit.domain.Operation;


import lombok.AllArgsConstructor;
import net.logstash.logback.argument.StructuredArguments;
import static com.mdp.pyr.framework.shared.GetSharedData.getSharedData;

@AllArgsConstructor
public class AuditService {
	private static final Logger LOGGER = LoggerFactory.getLogger(AuditService.class);

	public static void log(Operation operation) {
		log(operation, null);
	}

	public static void log(Operation operation, Object extraFields) {
		// Create void audit action
		AuditAction auditAction = new AuditAction();

		// Set user parameters
		auditAction.setUser(
				new User(getSharedData("userUsername"), getSharedData("userSession"), getSharedData("userId")));

		// Set operation parameters
		auditAction.setOperation(operation);

		// Set extraFields
		if (extraFields == null) {
			auditAction.setExtraFields(SaveSharedData.getInstance().getRequestedExtraFields());
		} else {
			auditAction.setExtraFields(extraFields);
		}

		// Log the info
		LOGGER.info("Auditable action{}", StructuredArguments.value("action", auditAction));
	}

	public static void setExtraFields(Object extraFields) {
		SaveSharedData.getInstance().storeRequestExtraFields(extraFields);
	}
}
