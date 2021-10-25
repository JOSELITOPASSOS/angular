import { HttpClientModule } from '@angular/common/http';
import { PhotoComponet } from './photo/photo.component';
import { NgModule } from '@angular/core';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { CommonModule } from '@angular/common';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosComponent } from './photo-list/photos/photos.component';

@NgModule({
  declarations: [PhotoComponet, PhotoListComponent, PhotoFormComponent, PhotosComponent],
  imports: [HttpClientModule, CommonModule],
  // exports: [PhotoComponet],
})
export class PhotoModule {}
