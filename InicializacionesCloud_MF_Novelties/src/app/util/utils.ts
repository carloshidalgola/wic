export class Utils {

  static convertBytestoMegaBytes(bytes: number, decimals = 2): string {

    if (!+bytes) return '0 Bytes'

    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
  }

  static b64toBlob(b64Data: any, contentType: string, sliceSize: any) {
    contentType = contentType || '';
    sliceSize = sliceSize || 1000;

    var byteCharacters = atob(b64Data); // window.atob(b64Data)
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      var slice = byteCharacters.slice(offset, offset + sliceSize);

      var byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      var byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }

  static renameFile(originalFile: any, id_asesor: string) {

    console.log(originalFile.lastModified)
    var formato = originalFile.name.substring(originalFile.name.lastIndexOf('.'));

    var newName =  this.numeroAFecha() + "_" + id_asesor+ formato;

    console.log(this.numeroAFecha())

    return new File([originalFile], newName, {
      type: originalFile.type,
      lastModified: originalFile.lastModified,
    });
  }

  static numeroAFecha() {
    var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
    
    var fechaCompleto: any = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1);
    console.log("fechaCompleto:",fechaCompleto)
    fechaCompleto = fechaCompleto.replaceAll("-", "");
    fechaCompleto = fechaCompleto.replaceAll("T", "");
    fechaCompleto = fechaCompleto.replaceAll(":", "");
    fechaCompleto = fechaCompleto.replaceAll("Z", "");
    fechaCompleto = fechaCompleto.replaceAll(".", "");
    return fechaCompleto;
  }

  static base64toBlob(base64Data: any, contentType: any): Blob {
    contentType = contentType || '';
    const sliceSize = 1024;
    const byteCharacters = atob(base64Data);
    const bytesLength = byteCharacters.length;
    const slicesCount = Math.ceil(bytesLength / sliceSize);
    const byteArrays = new Array(slicesCount);

    for (let sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
      const begin = sliceIndex * sliceSize;
      const end = Math.min(begin + sliceSize, bytesLength);

      const bytes = new Array(end - begin);
      for (let offset = begin, i = 0; offset < end; ++i, ++offset) {
        bytes[i] = byteCharacters[offset].charCodeAt(0);
      }
      byteArrays[sliceIndex] = new Uint8Array(bytes);
    }
    return new Blob(byteArrays, { type: contentType });
  }

  static linkSourceDowloadFileOfBase64(base64Data: string, contentType: string) {
    const linkSource =
    'data:' + contentType + ';base64,' + base64Data
    return linkSource;
  }

}