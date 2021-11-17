import { SearchComponent } from './search/search.component';
import { CardModule } from './../../shared/components/card/card.module';
import { CommonModule } from '@angular/common';
import { FilterByDescription } from './filter-by-description.pipe';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotosComponent } from './photos/photos.component';
import { PhotoListComponent } from './photo-list.component';
import { NgModule } from '@angular/core';
import { PhotoModule } from '../photo/photo.module';
import { DarkenOnHoverModule } from 'src/app/shared/directves/darken-on-hover/darken-on-hover.module';

@NgModule({
  declarations: [
    PhotoListComponent,
    PhotosComponent,
    LoadButtonComponent,
    FilterByDescription,
    SearchComponent
  ],
  imports: [
    CommonModule,
    PhotoModule,
    CardModule,
    DarkenOnHoverModule
   ]
})
export class PhotoListModule {}
