package com.mdp.pyr.notification.application.services;

import com.mdp.pyr.notification.application.utils.UtilEnum;
import freemarker.template.TemplateException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import java.io.IOException;

@Service
public class NotificacionServiceImpl implements NotificationService {
    private static final Logger logger = LoggerFactory.getLogger(NotificationService.class);
    @Autowired
    private EmailBuilderService emailBuilderService;
    @Autowired
    private AwsSesService awsSesService;
    public void sendCreacionUsuario(String correo) {
        try {
            String htmlTextTemplate = emailBuilderService.buildHtmlEmailCreacionUsuario(correo);
            logger.info("Sending...{}",htmlTextTemplate);
            awsSesService.sendEmail(correo, UtilEnum.ASUNTOCORREO.CREACION_PAGO.getTexto(), htmlTextTemplate);

        } catch (IOException | TemplateException ex) {
            logger.error("Exception template enviar mail aprobacion", ex);
        } catch (MessagingException ex) {
            logger.error("Exception enviar mail aprobacion", ex);
        }
    }
}
