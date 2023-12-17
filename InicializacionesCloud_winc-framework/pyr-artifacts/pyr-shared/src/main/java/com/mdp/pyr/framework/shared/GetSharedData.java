package com.mdp.pyr.framework.shared;

public class GetSharedData {
    private static GetSharedData getSharedDataInstance;
    private SaveSharedData savedDataInstance = SaveSharedData.getInstance();

    private GetSharedData() {
    }

    private static GetSharedData getInstance() {
        if (getSharedDataInstance == null) {
            getSharedDataInstance = new GetSharedData();
        }

        return getSharedDataInstance;
    }

    public static String getSharedData(String key) {
        Object value = getInstance().savedDataInstance.getContextData(key);
        return value != null ? value.toString() : "";
    }

    public static <T> T getTransactionalContext() {
        return getInstance().savedDataInstance.getTransactionalContext();
    }

    public static boolean getTransactionInitializer() {
        return getInstance().savedDataInstance.getTransactionInitializer();
    }

    public static String getTransactionId() {
        return getInstance().savedDataInstance.getTransactionId();
    }

    public static String getCaller() {
        return getInstance().savedDataInstance.getCaller();
    }

    public static String getUserToken() {
        return getInstance().savedDataInstance.getUserToken();
    }

    public static String getUserTokenIssuerId() {
        return getInstance().savedDataInstance.getUserTokenIssuerId();
    }

    public static Iterable<String> getUserTokenConsentAuthorizations() {
        return getInstance().savedDataInstance.getUserTokenConsentAuthorizations();
    }

    public static String getRequestedLanguage() {
        return getInstance().savedDataInstance.getRequestedLanguage();
    }

    public static Object getRequestedExtraFields() {
        return getInstance().savedDataInstance.getRequestedExtraFields();
    }

    public static Long getRequestTimestamp() {
        return getInstance().savedDataInstance.getRequestTimestamp();
    }

    public static Object getTransactionalContextStateKey() {
        return getInstance().savedDataInstance.getTransactionalContextStateKey();
    }

    public static boolean getAsynchronousOperation() {
        return getInstance().savedDataInstance.getAsynchronousOperation();
    }

    public static String getTraceId() {
        return getInstance().savedDataInstance.getTraceId();
    }
}