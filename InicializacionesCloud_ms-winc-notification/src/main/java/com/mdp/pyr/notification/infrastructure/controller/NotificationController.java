package com.mdp.pyr.notification.infrastructure.controller;


import com.mdp.pyr.notification.application.services.NotificationService;
import com.mdp.pyr.notification.application.utils.UtilConstants;
import com.mdp.pyr.notification.model.WrapperResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
@RequestMapping("/notification/v1/")
@CrossOrigin
public class NotificationController {
    private static final  Logger logger = LoggerFactory.getLogger(NotificationController.class);

    private NotificationService notificationService;
    @PostMapping("/sendEmail/notificacionCreacionUsuario/{correo}")
    public ResponseEntity<WrapperResponse<String>> sendCreacionUsuario(@PathVariable String correo){
        logger.info("START  [POST] /send-email-notification creacion usuario: {}",correo);
        WrapperResponse<String> rs = null;
        try {
            notificationService.sendCreacionUsuario(correo);
            rs = new WrapperResponse<String>(UtilConstants.SUCESS_CODE, UtilConstants.SUCESS_EMAIL_SENDING_MESSAGE,"OK");
            logger.info("END [POST]/send-email-notification  creacion usuario");
        }catch(Exception ex) {
            logger.error("Exception end-email-notification  creacion usuario", ex);
            rs = new WrapperResponse<String>(UtilConstants.ERROR_CODE, ex.getMessage());
        }
        return ResponseEntity.status(HttpStatus.OK).body(rs);
    }


}
