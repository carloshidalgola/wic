export class FileResponseDTO {

    file:Blob;
    type:string;
    
    constructor(file: Blob, type: string) {
        this.file = file;
        this.type = type;
       }
    } 