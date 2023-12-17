package com.mdp.pyr.notification;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {"com.mdp.pyr.*"})
public class ApplicationNotification {

    public static void main(String[] args) {
        SpringApplication.run(ApplicationNotification.class, args);
    }

}
