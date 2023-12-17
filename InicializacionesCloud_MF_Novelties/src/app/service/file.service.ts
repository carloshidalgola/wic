import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError, map, timeout } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { FileRepository } from '../domain/repository/file.repository';
import { FileResponseDTO } from '../model/fileResponseDTO';
import { micros_uri } from '../util/contantes.micros';
import { Const } from './const';
@Injectable({
    providedIn: 'root'
  })
  export class FileService  implements FileRepository{

    constructor( private _http: HttpClient) {

    }

     unificarImagen(codeNovelty:string){
      let  url_unificar_img =  environment.url_microservice_files + micros_uri.uri_file_unificar_img;

      url_unificar_img = url_unificar_img.replace('{codeNovelty}', codeNovelty);
      console.log("URI REQ:", url_unificar_img);
      return this._http.get<any>(url_unificar_img).
        pipe(map(res => res))
    }

    downloadTemplate(nameFile:string): Observable<any> {

      // const url =
      // Const.API_FILES +
      // `/downloadTemplate?nameFile=${nameFile}`;

      const url =environment.url_microservice_files + '/downloadTemplate?nameFile='+`${nameFile}`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get<FileResponseDTO>(url, { headers }).pipe(
      map((response: any) => {
        console.log("response:",response)
        return response; // CE de ApiPersona o DNI de Reniec
      }),
      timeout(5000),
      catchError((e) => {
        throw new Error(
          'Hubo un error al traer plantilla: ' + e.message
        ).message;
      })
    );
    }
    public cargarArchivoTelecarga(user: string,archivo: any){
      let  url_upload_file=  environment.url_microservice_files + micros_uri.uri_telecargue_upload;

      const paramFD: FormData = new FormData();
      paramFD.append('file', archivo);
      paramFD.append('user', user);
  
      
  
      const req = new HttpRequest('POST', url_upload_file, paramFD, {
        reportProgress: true,
        responseType: 'json',
      });
      //url_unificar_img = url_unificar_img.replace('{codeNovelty}', codeNovelty);
      console.log("URI REQ:", url_upload_file);

      return this._http.request(req);
    }


    public validarCantidad(codeFile: string){
      let  url_validar_q =  environment.url_microservice_files + micros_uri.uri_telecargue_validar_cantidad;

      url_validar_q = url_validar_q.replace('{codeFile}', codeFile);
      console.log("URI REQ:", url_validar_q);
      return this._http.get<any>(url_validar_q).
        pipe(map(res => res))
    }

    public downloadFileError(codeFile: string){
      console.log("codeFile >", codeFile)
      let  url_dowload=  environment.url_microservice_files + micros_uri.uri_telecargue_download_error;
      url_dowload = url_dowload.replace('{codeFile}', codeFile);
      window.location.href = url_dowload;
    }
    
    public validarDataEstructura(codeFile: string){
      let  url_validar_data =  environment.url_microservice_files + micros_uri.uri_validation_data;

      url_validar_data = url_validar_data.replace('{codeFile}', codeFile);
      console.log("URI REQ:", url_validar_data);
      return this._http.get<any>(url_validar_data).
        pipe(map(res => res))
    }

  }
