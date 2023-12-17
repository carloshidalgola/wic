package com.mdp.pyr.notification.application.services;

import freemarker.template.Template;
import freemarker.template.TemplateException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.StringWriter;
import java.io.Writer;


@Service
public class EmailBuilderServiceImpl implements EmailBuilderService {

	@Value("${email.crear_usuario.template.name}")
	private String emailCrearUsuario;
	

	@Autowired
	private freemarker.template.Configuration getFreeMarkerConfigurationBean;
	

	@Override
	public String buildHtmlEmailCreacionUsuario(String correo) throws IOException, TemplateException{
		Template template = getFreeMarkerConfigurationBean.getTemplate(emailCrearUsuario);

		Writer out = new StringWriter();
		template.process(null, out);
		return out.toString();
	}

}
