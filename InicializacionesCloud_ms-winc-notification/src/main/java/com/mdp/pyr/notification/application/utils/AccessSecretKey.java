package com.mdp.pyr.notification.application.utils;

import com.amazonaws.auth.AWSCredentialsProvider;
import com.amazonaws.auth.DefaultAWSCredentialsProviderChain;
import com.amazonaws.client.builder.AwsClientBuilder;
import com.amazonaws.services.secretsmanager.AWSSecretsManager;
import com.amazonaws.services.secretsmanager.AWSSecretsManagerClientBuilder;
import com.amazonaws.services.secretsmanager.model.GetSecretValueRequest;
import com.amazonaws.services.secretsmanager.model.GetSecretValueResult;
import com.amazonaws.services.secretsmanager.model.InvalidParameterException;
import com.amazonaws.services.secretsmanager.model.InvalidRequestException;
import com.amazonaws.services.secretsmanager.model.ResourceNotFoundException;
import com.google.gson.Gson;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.nio.ByteBuffer;
import java.util.Map;


public class AccessSecretKey {
	private static final  Logger logger = LoggerFactory.getLogger(AccessSecretKey.class);
	
	private  Map<String, String> secretValue;
	
	private String secretName;
	private String region;
	private String endpoint = "secretsmanager.us-west-2.amazonaws.com";
					
	public AccessSecretKey(String secretNameKeyMan, String secretRegionKeyMan) {
		logger.info("INYECTANDO ACCESS KEY");
		logger.info("name secret:{}",secretNameKeyMan);
		logger.info("name region:{}",secretRegionKeyMan);
		this.secretName= secretNameKeyMan;
		this.region = secretRegionKeyMan;
		this.endpoint= new StringBuilder().append("secretsmanager.").append(secretRegionKeyMan).append(".amazonaws.com").toString();
		logger.info("endpoint region:{}",endpoint);
		getSecret();
	}
	public Map<String, String> getSecretValue() {
		return secretValue;
	}

	public void setSecretValue(Map<String, String> secretValue) {
		this.secretValue = secretValue;
	}

	
  public static void main(String[] args) {
    //getSecret();
  }

  public  void getSecret() {


      AWSCredentialsProvider credentialProvider = new DefaultAWSCredentialsProviderChain();
      
      AwsClientBuilder.EndpointConfiguration config = new AwsClientBuilder.EndpointConfiguration(endpoint, region);
      AWSSecretsManagerClientBuilder clientBuilder = AWSSecretsManagerClientBuilder.standard();
      clientBuilder.setEndpointConfiguration(config);
      clientBuilder.setCredentials(credentialProvider);
      AWSSecretsManager client = clientBuilder.build();

      String secret;
      ByteBuffer binarySecretData = null;
      GetSecretValueRequest getSecretValueRequest = new GetSecretValueRequest()
              .withSecretId(secretName).withVersionStage("AWSCURRENT");
      GetSecretValueResult getSecretValueResult = null;
      try {
          getSecretValueResult = client.getSecretValue(getSecretValueRequest);

      }  catch(ResourceNotFoundException ex) {
          logger.error("The requested secret  {}  was not found",secretName);
       } catch (InvalidRequestException ex) {
     	  logger.error("The request was invalid due to: {}",ex.getMessage());
       } catch (InvalidParameterException ex) {
     	  logger.error("The request had invalid params: {}",ex.getMessage());
       }


      if(getSecretValueResult == null) {
          return;
      }

      // Depending on whether the secret was a string or binary, one of these fields will be populated
      if(getSecretValueResult.getSecretString() != null) {
          secret = getSecretValueResult.getSecretString();
         
          Gson gson = new Gson();
          Map<String,String> mapa =  gson.fromJson(secret,Map.class);
          
          this.secretValue = mapa;
         
      }
      else {
          binarySecretData = getSecretValueResult.getSecretBinary();
         
      }
    logger.info(binarySecretData.toString());
  }

}
