import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Const {

  public static API_PARAMETERS: string;
  public static API_FILES: string;
  public static PARAMETERS_FORMAT: string = 'FORMATOS_IMAGEN_TICKET';
  public static PARAMETERS_LINK_PLANTILLA: string = 'URL_PLANTILLA';
  public static PARAMETERS_CANT_IMG: string = 'CANTIDAD_IMAGEN_TICKET';
  public static PARAMETERS_FORMAT_OTRAS_NOVEDADES: string = 'FORMATOS_IMAGEN_OTRAS_NOVEDADES';
  public static PARAMETERS_CANT_IMG_OTRAS_NOVEDADES: string = 'CANTIDAD_IMAGEN_OTRAS_NOVEDADES';

  public static API_NOVELTIES: string;
  public static API_COMMERCE: string;
  public static CARGA_MASIVA_FORMAT: string = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel';
  public static CARGA_MASIVA_FORMAT_DOWNLOAD: string = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
  public static CARGA_MASIVA_FORMAT_TEXTO: string = 'xls y xlsx';
  
  public static CARGA_MASIVA_SIZE: number = 819200;
  public static CARGA_MASIVA_CANT_IMAGEN: number = 1;
  

  constructor() {}

  public loadCommonConfig() {
    Const.API_PARAMETERS = environment.url_microservice_parameters;
    Const.API_FILES = environment.url_microservice_files;
    Const.API_COMMERCE = environment.url_miroservice_commerce;
    Const.API_NOVELTIES = environment.url_microservice_novelties;

  }


}
