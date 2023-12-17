package com.mdp.pyr.notification.application.config;


import com.mdp.pyr.notification.application.utils.AccessSecretKey;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.client.WebClient;

@Configuration
public class BeansConfiguration {
	@Value("${keymanager.secret.name}")
	private String secretNameKeyMan;
	
	@Value("${keymanager.secret.region}")
	private String secretRegionKeyMan;
	
	@Bean
	public WebClient.Builder webClientBuilder() {
		return WebClient.builder();
	}
	
	
	@Bean
	public AccessSecretKey accessSecretKey() {
		return new AccessSecretKey(secretNameKeyMan,secretRegionKeyMan);
	}



}
