package com.mdp.pyr.framework.shared;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class SaveSharedData {
    private static SaveSharedData saveSharedDataInstance;
    private ThreadLocal<Map<String, Object>> threadLocal = ThreadLocal.withInitial(HashMap::new);
    private Accessor<String> userTokenIssuerAccessor = nullSupplier();
    private Accessor<Set<String>> userTokenConsentAuthorizationsAccessor = nullSupplier();
    private Accessor<String> transactionIdAccessor = nullSupplier();

    public SaveSharedData() {
    }

    private static final <T> Accessor<T> nullSupplier() {
        return () -> {
            return null;
        };
    }

    public <T> T getContextData(String key) {
        return (T) (this.threadLocal.get()).get(key);
    }

    private void saveContextData(String key, Object data) {
        ((Map)this.threadLocal.get()).put(key, data);
    }

    public static SaveSharedData getInstance() {
        if (saveSharedDataInstance == null) {
            Class var0 = SaveSharedData.class;
            synchronized(SaveSharedData.class) {
                if (saveSharedDataInstance == null) {
                    saveSharedDataInstance = new SaveSharedData();
                }
            }
        }

        return saveSharedDataInstance;
    }

    public static void clear() {
        Class var0 = SaveSharedData.class;
        synchronized(SaveSharedData.class) {
            if (saveSharedDataInstance != null && saveSharedDataInstance.threadLocal != null && saveSharedDataInstance.threadLocal.get() != null) {
                ((Map)saveSharedDataInstance.threadLocal.get()).clear();
            }

        }
    }

    public static void storeSharedData(String key, String value) {
        getInstance().saveContextData(key, value);
    }

    public <T> T getTransactionalContext() {
        return this.getContextData("tx-context");
    }

    public void storeTransactionalContext(Object txContext) {
        this.saveContextData("tx-context", txContext);
    }

    public boolean getTransactionInitializer() {
        return this.getContextData("tx-initializer") == Boolean.TRUE;
    }

    public void storeTransactionInitializer(boolean txInitializer) {
        this.saveContextData("tx-initializer", txInitializer);
    }

    public Long getRequestTimestamp() {
        return (Long)this.getContextData("req-timestamp");
    }

    public void storeRequestTimestamp(Long reqTimestamp) {
        this.saveContextData("req-timestamp", reqTimestamp);
    }

    public <T> T getTransactionalContextStateKey() {
        return this.getContextData("tx-state-key");
    }

    public void storeTransactionalContextStateKey(Object stateKey) {
        this.saveContextData("tx-state-key", stateKey);
    }

    public void defineTransactionIdAccessor(Accessor<String> transactionIdAccessor) {
        this.transactionIdAccessor = transactionIdAccessor;
    }

    public String getTransactionId() {
        return (String)this.transactionIdAccessor.get();
    }

    public String getCaller() {
        return (String)this.getContextData("Origin-Ms");
    }

    public void storeCaller(String caller) {
        this.saveContextData("Origin-Ms", caller);
    }

    public String getUserToken() {
        return (String)this.getContextData("Authorization");
    }

    public void storeUserToken(String userToken) {
        this.saveContextData("Authorization", userToken);
    }

    public <T> void storeUserTokenContent(T tokenContent) {
        this.saveContextData("PARSED_USER_TOKEN", tokenContent);
    }

    public void defineUserTokenIssuerAccessor(Accessor<String> userTokenIssuerAccessor) {
        this.userTokenIssuerAccessor = userTokenIssuerAccessor;
    }

    public String getUserTokenIssuerId() {
        return (String)this.userTokenIssuerAccessor.get();
    }

    public void defineUserTokenConsentAuthorizationsAccessor(Accessor<Set<String>> userTokenConsentAuthorizationsAccessor) {
        this.userTokenConsentAuthorizationsAccessor = userTokenConsentAuthorizationsAccessor;
    }

    public Set<String> getUserTokenConsentAuthorizations() {
        return (Set)this.userTokenConsentAuthorizationsAccessor.get();
    }

    public String getRequestedLanguage() {
        return (String)this.getContextData("Lang");
    }

    public void storeRequestLanguage(String reqLanguage) {
        this.saveContextData("Lang", reqLanguage);
    }

    public Object getRequestedExtraFields() {
        return this.getContextData("extraFields");
    }

    public void storeRequestExtraFields(Object extraFields) {
        this.saveContextData("extraFields", extraFields);
    }

    public boolean getAsynchronousOperation() {
        return (Boolean)this.getContextData("Asynchronous-Operation");
    }

    public void storeAsynchronousOperation(boolean asynchronousOperation) {
        this.saveContextData("Asynchronous-Operation", asynchronousOperation);
    }

    public void storeTraceId(String traceID) {
        this.saveContextData("trace-id", traceID);
    }

    public String getTraceId() {
        return (String)this.getContextData("trace-id");
    }
}
