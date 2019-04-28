import { Component } from '@angular/core';
import {Post} from './model/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  postList: Post[] = [
    new Post('First post',
      'Veternensi imperasset praefecturae Tuscos imperatoris' +
              ' Galla quadriennio in aetatis anno fratre sui aetatis Galla in Galla ipse atque nono Tuscos.'),
    new Post('Second post',
      'Veternensi imperasset praefecturae Tuscos imperatoris' +
      ' Galla quadriennio in aetatis anno fratre sui aetatis Galla in Galla ipse atque nono Tuscos.'),
    new Post('Three post',
      'Veternensi imperasset praefecturae Tuscos imperatoris' +
      ' Galla quadriennio in aetatis anno fratre sui aetatis Galla in Galla ipse atque nono Tuscos.'),
  ];
}
