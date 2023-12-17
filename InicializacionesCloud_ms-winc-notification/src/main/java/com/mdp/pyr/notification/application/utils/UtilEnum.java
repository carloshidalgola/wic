package com.mdp.pyr.notification.application.utils;

public final class  UtilEnum {
	private UtilEnum() {
		
	}

	public  enum ASUNTOCORREO{
		CREACION_PAGO(1,"¡Bienvenido a la familia Redeban!");

		 private final int codigo;
		 private final String texto;
		 ASUNTOCORREO(int estado,String texto){
			this.codigo = estado;
			this.texto = texto;
		}
		public int getCodigo() {
			return codigo;
		}
		
		public String getTexto() {
			return texto;
		}
	}
}
