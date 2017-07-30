import { Component } from '@angular/core';

@Component({
  templateUrl: 'contact.html'
})
export class ContactPage {
  structure: any = { lower: 18, upper: 99 };
  myDate: any = 22;
  openGallery (): void {
    let options = {
      maximumImagesCount: 1,
      quality: 75
    };
  }
  images: any = [
    {
      id: 1,
      image: ""
    }
  ]
}
