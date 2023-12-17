package com.mdp.pyr.framework.constants;


public final class ArchConstants {
    public static final String EVENT_VERSION_HEADER_NAME = "Event-Version";
    public static final String LANGUAGE_HEADER_NAME = "Lang";
    public static final String MAX_TIME_TO_PROCESS_HEADER_NAME = "Max-Process";
    public static final String MESSAGE_TYPE_HEADER_NAME = "__TypeId__";
    public static final String MICROSERVICE_NAME_HEADER_NAME = "Ms-Name";
    public static final String ORIGIN_MICROSERVICE_HEADER_NAME = "Origin-Ms";
    public static final String ORIGIN_MICROSERVICE_VERSION_HEADER_NAME = "Version-Ms";
    public static final String TOKEN_HEADER_NAME = "Authorization";
    public static final String PARSED_USER_TOKEN = "PARSED_USER_TOKEN";
    public static final String TRANSACTION_MANAGER_HEADER_NAME = "Tx-Context";
    public static final String ASYNCHRONOUS_OPERATION = "Asynchronous-Operation";
    public static final String MS_NAME = "ms-name";
    public static final String MS_VERSION = "ms-version";
    public static final String REQUEST_TIMESTAMP = "req-timestamp";
    public static final String TRANSACTIONAL_CONTEXT = "tx-context";
    public static final String TRANSACTIONAL_CONTEXT_STATE_KEY = "tx-state-key";
    public static final String TRANSACTION_INITIALIZER = "tx-initializer";
    public static final String TRACE_ID_DATA_KEY = "trace-id";
    public static final String EXTRA_FIELDS = "extraFields";
    public static final String KAFKA_CORRELATIONID_HEADER = "kafka_correlationId";
    public static final String KAFKA_REQUEST_TOPIC_SUFFIX = "_request";
    public static final String KAFKA_RESPONSE_TOPIC_SUFFIX = "_response";
    public static final String KAFKA_COREOGRAPHY_TOPICS_SUFFIX = "_choreography";


    public ArchConstants() {
    }
}