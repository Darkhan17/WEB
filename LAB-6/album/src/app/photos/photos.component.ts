import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AlbumsService} from '../albums.service';
import {Photo} from '../models';
import {Location} from '@angular/common';


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos: Photo[] = [];
  id = 1;
  constructor(private route: ActivatedRoute,
              private location: Location,
              private albumService: AlbumsService) {  }

  ngOnInit(): void {
    this.getPhotos();
  }

  returnBack(): void{
    this.location.back();
  }

  getPhotos(): void{
    this.route.paramMap.subscribe((params) => {
      // @ts-ignore
      const id = +params.get('id');
      if (id != null){
        this.albumService.getAlbumPhotos(id).subscribe((photo) => {
          this.photos = photo;
        });
      }
    });
  }
}
