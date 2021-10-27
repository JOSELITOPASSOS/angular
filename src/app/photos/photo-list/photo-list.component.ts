import { PhotoService } from './../photo/photo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filter: string = '';

  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';

  constructor(
    private actvatedRoute: ActivatedRoute,
    private service: PhotoService){}

  ngOnInit(): void {
    this.userName = this.actvatedRoute.snapshot.params.userName;
    this.photos = this.actvatedRoute.snapshot.data['photos'];
    // this.debounce.pipe(debounceTime(300))
    //       .subscribe(filter => this.filter = filter.length === 1 ? this.filter+filter : '');
  }

  pesquisar(event: KeyboardEvent){
    this.filter += event.key ? event.key.length === 0 : '';
  }

  load(){
    this.service.listFromUserPaginated(this.userName, ++this.currentPage)
            .subscribe(photos => {
              this.filter = '';
              this.photos = this.photos.concat(photos);
                if (!photos.length) {
                  this.hasMore = false;
                }
            });
  }

  // ngOnDestroy(): void {
  //   this.debounce.unsubscribe();
  // }

}
