package com.mdp.pyr.security;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {"com.mdp.pyr.*"})
public class ApplicationSecurity {

    public static void main(String[] args) {
        SpringApplication.run(ApplicationSecurity.class, args);
    }

}
