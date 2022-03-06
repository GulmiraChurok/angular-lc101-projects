import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photos';
  image1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmZgywS7kBZLgz98cUMyFKSBLadef2gJxl9jNRXjI2pTguXCOHnVV9SIUgwp108plhtvQ&usqp=CAU'
  image2 = 'https://asset.bloomnation.com/f_auto,q_auto/v1/vendor/4327/footer/0d864147c8067a041322410bbbbb2c30.jpg'
  image3 = 'https://i0.wp.com/www.gardeningchannel.com/wp-content/uploads/2012/06/3392097178_e4830b7dba.jpg?fit=333%2C500&ssl=1';

  constructor() { }

  ngOnInit() {
  }

}