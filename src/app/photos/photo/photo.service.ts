import { Photo } from './photo';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PhotoService {

  private readonly API = 'http://localhost:3000';
  constructor(private http: HttpClient){}

  listFromUser(userName: string): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.API}/${userName}/photos`);
  }

  listFromUserPaginated(userName: string, page: number){
    const params = new HttpParams().append('page', page.toString());
    return this.http.get<Photo[]>(`${this.API}/${userName}/photos`, {params: params});
  }

  upload(description: string, allowComments: boolean, file: File){
    const formData = new FormData();
    formData.append('description', description);
    formData.append('allowComments', allowComments ? 'true' : 'false');
    formData.append('imageFile', file);

    return this.http.post(`${this.API}/photos/upload`, formData);
  }
}
