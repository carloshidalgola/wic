import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StoreService {
    
    public _files = new BehaviorSubject<File[]>([]);
    public _otherNovelty = new BehaviorSubject<any[]>([]);

    /*obtiene el bl actual     */
    get files(): File[] {
        return this._files.value
    }

    /*se suscibe a los cambios de cliente  */
    get files$(): Observable<File[]> {
        return this._files.asObservable();
    }

    /*emite un nuevo bl  */
    setFiles(file: File[]) {
        this._files.next(file);
    }

    get otherNovelty(): any[] {
        return this._otherNovelty.value
    }

    /*se suscibe a los cambios de cliente  */
    get otherNovelty$(): Observable<any[]> {
        return this._otherNovelty.asObservable();
    }

    /*emite un nuevo bl  */
    setOtherNovelty(file: any[]) {
        this._otherNovelty.next(file);
    }

}