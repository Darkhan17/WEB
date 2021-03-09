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
  constructor(private albumService: AlbumsService) { }

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

}
