import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Coolest Photos of ALL Time';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'http://blog.timesunion.com/bark/files/2012/02/Dachshund.jpg';
  image3 = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pumpkins-1529604270.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=980:*';

  constructor() { }

  ngOnInit() {
  }

}
