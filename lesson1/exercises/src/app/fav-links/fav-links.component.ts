import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {

  constructor() { }
  favLinks: [string, string] = ['https://launchcode.instructure.com/courses/33/assignments/1315', 'https://www.google.com/search?q=flowers&rlz=1C1VDKB_enUS970US970&sxsrf=APq-WBuERSiGd7s9KcFx1nHTD0kZ9e_Z5Q:1646536664882&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiy55OIw7D2AhWwlGoFHSz-AcwQ_AUoAXoECAEQAw&biw=1920&bih=969&dpr=1#imgrc=ba6vqtfpvsWqKM']
  ngOnInit() {
  }

}
