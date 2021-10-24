import { HttpClientModule } from '@angular/common/http';
import { PhotoComponet } from './photo/photo.component';
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [PhotoComponet],
  imports: [HttpClientModule],
  exports: [PhotoComponet]
})
export class PhotoModule {

}
