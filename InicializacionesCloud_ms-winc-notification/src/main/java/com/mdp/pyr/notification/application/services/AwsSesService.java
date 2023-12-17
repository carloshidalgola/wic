package com.mdp.pyr.notification.application.services;

import javax.mail.MessagingException;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.UnsupportedEncodingException;

public interface AwsSesService {
	void sendEmail(String email,String subject, String html) throws MessagingException, UnsupportedEncodingException;
	void sendEmail(String email, String subject, String html,ByteArrayOutputStream outputStream) throws MessagingException, UnsupportedEncodingException, IOException;

}
