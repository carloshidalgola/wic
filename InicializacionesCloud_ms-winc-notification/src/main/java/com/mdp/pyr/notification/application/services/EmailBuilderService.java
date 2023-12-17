package com.mdp.pyr.notification.application.services;

import freemarker.template.TemplateException;

import java.io.IOException;

public interface EmailBuilderService {

	String buildHtmlEmailCreacionUsuario(String correo) throws IOException, TemplateException;

}
