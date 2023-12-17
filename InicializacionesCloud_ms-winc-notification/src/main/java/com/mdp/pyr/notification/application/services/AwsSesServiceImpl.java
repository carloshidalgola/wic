package com.mdp.pyr.notification.application.services;

import com.mdp.pyr.notification.application.utils.AccessSecretKey;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import javax.activation.DataHandler;
import javax.activation.DataSource;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import javax.mail.util.ByteArrayDataSource;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.Properties;

@Service
public class AwsSesServiceImpl implements AwsSesService {
	private static final  Logger logger = LoggerFactory.getLogger(AwsSesServiceImpl.class);

	


	@Value("${aws.email.sender}")
	private String fromEmail;

	@Value("${aws.email.smtp.host}")
	private String smtpHost;
	
	@Value("${aws.email.sender.name}")
	private String sendeName;
	
	
	@Autowired
	private AccessSecretKey accessSecretKey;
	
	// Replace recipient@example.com with a "To" address. If your account
	// is still in the sandbox, this address must be verified.

	// Replace smtp_username with your Amazon SES SMTP user name.
	static final String SMTP_USERNAME = "AKIA4FWWTKX5MRNYYIXE";

	// Replace smtp_password with your Amazon SES SMTP password.
	static final String SMTP_PASSWORD = "BL0qSe9DP10vGvEZW0igs3fFL0yRZFpvdQQKgElSNjo0";

	// The name of the Configuration Set to use for this message.
	// If you comment out or remove this variable, you will also need to
	// comment out or remove the header below.
	// static final String CONFIGSET = "ConfigSet";

	// Amazon SES SMTP host name. This example uses the US West (Oregon) region.
	// See
	// https://docs.aws.amazon.com/ses/latest/DeveloperGuide/regions.html#region-endpoints
	// for more information.
	static final String HOST = "email-smtp.sa-east-1.amazonaws.com";

	// The port you will connect to on the Amazon SES SMTP endpoint.
	static final int PORT = 587;

	// static final String SUBJECT = "Amazon SES test (SMTP interface accessed using
	// Java)";
	
	
	  @Override
	  public void sendEmail(String email,String subject, String html) throws MessagingException, UnsupportedEncodingException {
		  // TODO Auto-generated method stub
		  // Create a Properties object to contain connection configuration information. 
	  Properties props = System.getProperties();
	  props.put("mail.transport.protocol", "smtp"); props.put("mail.smtp.port",
	  PORT); props.put("mail.smtp.starttls.enable", "true");
	  props.put("mail.smtp.auth", "true");
	  
	  // Create a Session object to represent a mail session with the specified //properties. 
	  Session session = Session.getDefaultInstance(props);
	  // Create a message with the specified information. 
	  MimeMessage msg = new MimeMessage(session); msg.setFrom(new InternetAddress(fromEmail, sendeName));
	  msg.setRecipient(Message.RecipientType.TO, new InternetAddress(email));
	  msg.setSubject(subject); msg.setContent(html, "text/html");
	  
	  // Add a configuration set header. Comment or delete the 
	  // next line if you are not using a configuration set 

	  // Create a transport. 
	  Transport transport = session.getTransport();
	  
	  // Send the message. 
		  try { 
			  logger.info("Sending...");
			  // Connect to Amazon SES using the SMTP username and password you specified above. 
			  logger.info("SMTP ACCES KEY:"+ accessSecretKey.getSecretValue().get("SMTPAccessKey"));
			  transport.connect(smtpHost,
					  accessSecretKey.getSecretValue().get("SMTPAccessKey"),
						accessSecretKey.getSecretValue().get("SMTPSecretKey"));
			  // Send the email.
			  transport.sendMessage(msg, msg.getAllRecipients());
			  logger.info("Email sent!"); 
		  } catch (Exception ex) {
			  logger.info("The email was not sent."); 
			  logger.info("Error message: " +ex.getMessage()); 
			  throw new MessagingException(ex.getMessage());
		  } finally { // Close and terminate the connection.
			  transport.close(); 
		  } 
	  }

	@Override
	public void sendEmail(String email,String subject, String html, ByteArrayOutputStream outputStream) throws MessagingException, IOException {
		
		Properties props = System.getProperties();
		props.put("mail.transport.protocol", "smtp"); 
		props.put("mail.smtp.port",PORT); 
		props.put("mail.smtp.starttls.enable", "true");
		props.put("mail.smtp.auth", "true");
		 
		Session session = Session.getDefaultInstance(props);
		

		// construct the html body part
		MimeBodyPart htmlBodyPart = new MimeBodyPart();
		// textBodyPart.setText(content);
		htmlBodyPart.setContent(html, "text/html");

		// now write the PDF content to the output stream
		
		byte[] bytes = outputStream.toByteArray();

		// construct the pdf body part
		DataSource dataSource = new ByteArrayDataSource(bytes, "application/pdf");
		MimeBodyPart pdfBodyPart = new MimeBodyPart();
		pdfBodyPart.setDataHandler(new DataHandler(dataSource));
		pdfBodyPart.setFileName("Voucher.pdf");

		// construct the mime multi part
		MimeMultipart mimeMultipart = new MimeMultipart();
		mimeMultipart.addBodyPart(htmlBodyPart);
		mimeMultipart.addBodyPart(pdfBodyPart);

		// create the sender/recipient addresses
		InternetAddress iaFrom =new InternetAddress(fromEmail, sendeName);
		InternetAddress iaRecipient = new InternetAddress(email);

		// construct the mime message
		MimeMessage mimeMessage = new MimeMessage(session);
		mimeMessage.setFrom(iaFrom);
		mimeMessage.setSubject(subject);
		mimeMessage.setRecipient(Message.RecipientType.TO, iaRecipient);
		mimeMessage.setContent(mimeMultipart);

		Transport transport = session.getTransport();
		
		//transport.send(mimeMessage);
		
		
			  // Connect to Amazon SES using the SMTP username and password you specified above. 
		transport.connect(smtpHost,  accessSecretKey.getSecretValue().get("SMTPAccessKey"),
				accessSecretKey.getSecretValue().get("SMTPSecretKey"));
			  // Send the email.
		transport.sendMessage(mimeMessage, mimeMessage.getAllRecipients());
			  
		transport.close();   

			  
	
		if (null != outputStream) {
			outputStream.close();
			outputStream = null;

		}

	
	}


}
