import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Album, Photo} from './models';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor( private client: HttpClient) { }
  BASE_URL = 'https://jsonplaceholder.typicode.com';
  getAlbums(): Observable<Album[]> {
    return this.client.get<Album[]>(`${this.BASE_URL}/albums`);
  }

  // tslint:disable-next-line:typedef
  getAlbum(id: number): Observable<Album>{
    // @ts-ignore
    return this.client.get<Post>(`${this.BASE_URL}/albums/${id}`);
  }
  addAlbum(album: Album): Observable<Album>{
    // @ts-ignore
    return this.client.post(`${this.BASE_URL}/albums`, album);
  }
  updateAlbum(album: Album): Observable<Album>{
      return this.client.put<Album>(`${this.BASE_URL}/albums/${album.id}`, album);
  }
  getAlbumPhotos(id: number): Observable<Photo[]>{
      // @ts-ignore
    return this.client.get<Photo[]>(`${this.BASE_URL}/albums/${id}/photos`);
  }
  delete(id: number): Observable<any>{
    return this.client.delete(`${this.BASE_URL}/albums/${id}`);
  }



}
