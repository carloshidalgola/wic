package com.mdp.pyr.notification;

import com.mdp.pyr.notification.application.config.LoaderTemplate;
import freemarker.template.TemplateExceptionHandler;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.Locale;

@Configuration
public class TemplateFreeMarkerConfiguration {
	private static final  Logger logger = LoggerFactory.getLogger(TemplateFreeMarkerConfiguration.class);
	
	@Value("${url.template.email}")
	private  String urlTemplateEmail;
	
	@Bean
	public  freemarker.template.Configuration getFreeMarkerConfigurationBean() {
		freemarker.template.Configuration configuration = new freemarker.template.Configuration(freemarker.template.Configuration.VERSION_2_3_31);
		configuration.setDefaultEncoding("UTF-8");
		configuration.setTemplateExceptionHandler(TemplateExceptionHandler.RETHROW_HANDLER);
		configuration.setLogTemplateExceptions(false);
       
		/*activar solo para probar en localhost sin llamar al s3
		 * configuration.setClassForTemplateLoading(TemplateFreeMarkerConfiguration.class, "/templates");
		*/
		
		configuration.setLocale(Locale.ROOT);
		configuration.setLocalizedLookup(false);
		LoaderTemplate lt = null;
		try {
			lt = new LoaderTemplate(new URL(urlTemplateEmail));
		} catch (MalformedURLException ex) {
			logger.error("Exception ex TemplateFree", ex);
		}
		
       configuration.setTemplateLoader(lt);
       
        
		return  configuration;
	}
	
	

}
