import { Component, OnInit } from '@angular/core';
import {Album} from '../models';
import {AlbumsService} from '../albums.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})

export class AlbumListComponent implements OnInit {
  albums: Album[] = [];
  loaded!: boolean;
  newAlbum!: string;
  constructor(private albumService: AlbumsService) {
    this.newAlbum = '';
  }
  ngOnInit(): void {
    this.getAlbums();
  }

  // tslint:disable-next-line:typedef
  getAlbums(){
    this.loaded = false;
    this.albumService.getAlbums().subscribe(albums => {
      this.albums = albums;
      this.loaded = true;
    });
  }

  // tslint:disable-next-line:typedef
  deleteAlbum(id: number){
    this.albums = this.albums.filter((x) => x.id !== id);
    this.albumService.delete(id).subscribe(() => {
      console.log( id , 'deleted');
    });
  }

  addAlbum(): void{
    const album = {
      title : this.newAlbum
    };
    this.loaded = false;
    this.albumService.addAlbum(album as Album).subscribe((album) => {
      console.log(album);
      this.albums.push(album);
      this.newAlbum = '';
      this.loaded = true;
    });
  }

}
