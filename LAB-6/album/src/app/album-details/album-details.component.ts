import { Component, OnInit } from '@angular/core';
import {Album} from '../models';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {AlbumsService} from '../albums.service';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {
  album!: Album;
  loaded!: boolean;
  constructor(private route: ActivatedRoute,
              private location: Location,
              private albumService: AlbumsService) { }

  ngOnInit(): void {
    this.getAlbum();
  }

  // tslint:disable-next-line:typedef
  getAlbum(){
    this.route.paramMap.subscribe((params) => {
      // @ts-ignore
      const id = +params.get('id');
      this.loaded = false;
      // @ts-ignore
      this.albumService.getAlbum(id).subscribe((album) => {
        this.album = album;
        this.loaded = true;
      });
    });

  }
  // tslint:disable-next-line:typedef
  goBack(){
    this.location.back();
  }
  // tslint:disable-next-line:typedef
  updateAlbum(){
    this.albumService.updateAlbum(this.album).subscribe((album) => {
      console.log(album);
      this.loaded = true;
    });
  }

}
